import { useRouteParam } from './useRouteParam'
import { ref, watch } from 'vue'

enum QueryParam {
  PAGE = 'page',
}

interface Options {
  defaultPage?: number
  itemsPerPage?: number
}

export function usePagination(options?: Options) {
  const { updateParams, removeParam } = useRouteParam()

  const page = ref(options?.defaultPage || 1)

  const setPage = (newPage: number) => {
    page.value = newPage
  }

  watch(page, (value) => {
    if (!value)
      return removeParam(QueryParam.PAGE)
    updateParams({ [QueryParam.PAGE]: value })
  })

  return {
    setPage,
    page,
    itemsPerPage: options?.itemsPerPage || 5,
  }
}
