import { FetchAllParams, PaginatedResponse, useFetchAllQuery } from '@/api/queries/fetch-all.qeuries';
import { unref, Ref } from 'vue';

// Define Pokemon interface
export interface Pokemon {
  id: number;
  name: string;
  type: string;
  height?: number;
  weight?: number;
  abilities?: string[];
  sprite?: string;
}

interface UseGetAllPokemonsOptions {
  page?: Ref<number> | number;
  perPage?: Ref<number> | number;
  sort?: Ref<string> | string;
  filter?: Ref<any> | any;
  enabled?: Ref<boolean> | boolean;
  onSuccess?: (data: PaginatedResponse<Pokemon>) => void;
  onError?: (error: Error) => void;
}

export function useGetAllPokemons(options?: UseGetAllPokemonsOptions) {
  // Extract params and query options
  const params: FetchAllParams = {
    page: options?.page,
    perPage: options?.perPage,
    sort: options?.sort,
    filter: options?.filter,
  };

  // Use the query hook
  const queryResult = useFetchAllQuery<Pokemon>('pokemons', params, {
    enabled: unref(options?.enabled) ?? true,
    staleTime: 1000 * 60 * 5, // 5 minutes
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });

  // Return the query result with additional helpers
  return {
    data: queryResult.data,
    isLoading: queryResult.isLoading,
    isFetching: queryResult.isFetching,
    isError: queryResult.isError,
    error: queryResult.error,
    refetch: queryResult.refetch,
    isSuccess: queryResult.isSuccess,
  };
}