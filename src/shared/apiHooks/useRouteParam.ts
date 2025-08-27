import { useRoute, useRouter } from 'vue-router'

export function useRouteParam() {
  const route = useRoute()
  const router = useRouter()

  const getParam = (param: string) => {
    return route.query[param]?.toString()
  }

  const removeParam = (key: string) => {
    const { [key]: _, ...rest } = route.query
    router.replace({ query: rest })
  }

  const removeParams = (keys: string[]) => {
    const newQuery = { ...route.query }
    keys.forEach((key) => {
      delete newQuery[key]
    })
    router.replace({ query: newQuery })
  }

  const updateParam = (key: string, value: string | number) => {
    router.replace({
      query: {
        ...route.query,
        [key]: value.toString(),
      },
    })
  }

  const updateParams = (params: Record<string, string | number>) => {
    const newQuery = { ...route.query }

    Object.entries(params).forEach(([key, value]) => {
      if (key.includes(':')) {
        // Handle array values for keys containing ":"
        const baseKey = key.split(':')[0]
        const currentValue = newQuery[baseKey]
        const currentArray = Array.isArray(currentValue)
          ? currentValue
          : currentValue ? [currentValue.toString()] : []

        newQuery[baseKey] = [...currentArray, value.toString()]
      }
      else {
        // Handle normal key-value pairs
        newQuery[key] = value.toString()
      }
    })

    router.replace({ query: newQuery })
  }

  return {
    route,
    router,
    updateParam,
    getParam,
    updateParams,
    removeParam,
    removeParams,
  }
}
