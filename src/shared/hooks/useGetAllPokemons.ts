import type { AppError } from '@acb/core-module/errors'
import { ref } from 'vue'
import {
  useIdentifactionByPinQuery,
} from '../../../entities/@entry/api/queries/identification-by-pin.query'

interface UseActivateOptions {
  onSuccess?: (response: any) => void
  onError?: (error: AppError) => void
}

export function useGetAllPokemons(options?: UseActivateOptions) {
  const isLoading = ref(false)

  const {
    mutate: identificationMutateByPin,
  } = useIdentifactionByPinQuery({
    onSuccess: (response) => {
      options?.onSuccess?.(response)
    },
    onError: (err: any) => {
      const updateError = makeUpdateEntryError(err)
      options?.onError?.(updateError)
    },
  })

  return {
    identificationMutateByPin,
    isLoading,
  }
}
