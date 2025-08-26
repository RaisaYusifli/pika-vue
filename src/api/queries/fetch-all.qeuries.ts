import { Ref, computed, unref } from 'vue';
import { useQuery, UseQueryOptions } from '@tanstack/vue-query';
import { baseUrl } from '@/config/baseUrl';
import { getPokemons } from '@/config/endpointsBaseUrls';

export interface FetchAllParams<T = Record<string, unknown>> {
  page?: Ref<number> | number;
  perPage?: Ref<number> | number;
  sort?: Ref<string> | string;
  filter?: Ref<T> | T;
  meta?: Ref<T> | T;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}

export function useFetchAllQuery<T = Record<string, unknown>>(
  resource: string,
  params?: FetchAllParams<T>,
  options?: Omit<UseQueryOptions<PaginatedResponse<T>>, 'queryKey' | 'queryFn'>,
) {
  // Create reactive query key that updates when params change
  const queryKey = computed(() => {
    const keys: any[] = [resource, 'list'];
    
    const page = unref(params?.page);
    const perPage = unref(params?.perPage);
    const sort = unref(params?.sort);
    const filter = unref(params?.filter);
    const meta = unref(params?.meta);
    
    if (page !== undefined) keys.push({ page });
    if (perPage !== undefined) keys.push({ perPage });
    if (sort !== undefined) keys.push({ sort });
    if (filter !== undefined) keys.push({ filter });
    if (meta !== undefined) keys.push({ meta });
    
    return keys;
  });

  // Create the query function
  const queryFn = async () => {
    // const queryParams = {
    //   page: unref(params?.page) || 1,
    //   perPage: unref(params?.perPage) || 20,
    //   sort: unref(params?.sort),
    //   filter: unref(params?.filter),
    //   meta: unref(params?.meta),
    // };
      const response = await fetch(`${baseUrl}${getPokemons}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("data: " , data)
    
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    ...options,
  });
}