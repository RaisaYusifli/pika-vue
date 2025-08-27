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

// Generic API Response interface
export interface ApiResponse<T> {
  content: T[];
  page: {
    number: number;
    size: number;
    totalPages: number;
    totalElements: number;
  };
}

// Wrapper for consistency with your existing code
export interface PaginatedResponse<T> {
  content: ApiResponse<T>;
}

// Helper function to build query string
function buildQueryString(params: FetchAllParams): string {
  const queryParams = new URLSearchParams();
  
  const page = unref(params?.page);
  const perPage = unref(params?.perPage);
  const sort = unref(params?.sort);
  const filter = unref(params?.filter);
  const meta = unref(params?.meta);
  
  if (page) {
    queryParams.append('page', page.toString());
  }
  
  if (perPage) {
    queryParams.append('limit', perPage.toString());
  }
  
  if (sort) {
    queryParams.append('sort', sort);
  }
  
  if (filter && typeof filter === 'object') {
    Object.entries(filter).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, String(value));
      }
    });
  }
  
  if (meta && typeof meta === 'object') {
    Object.entries(meta).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(`meta_${key}`, String(value));
      }
    });
  }
  
  return queryParams.toString();
}

export function useFetchAllQuery<T = Record<string, unknown>>(
  resource: string,
  params?: FetchAllParams<Record<string, unknown>>,
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
  const queryFn = async (): Promise<PaginatedResponse<T>> => {
    const queryString = params ? buildQueryString(params) : '';
    const url = `${baseUrl}${getPokemons}${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add auth header if needed
        // 'Authorization': `Bearer ${getAuthToken()}`,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("API Response:", data);
    
    // Return the data as-is since it already matches our PaginatedResponse structure
    // The API returns { content: [...], page: {...} }
    return {
      content: data
    };
  };

  return useQuery({
    queryKey,
    queryFn,
    ...options,
  });
}