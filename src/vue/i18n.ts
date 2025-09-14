import { useI18n } from 'vue-i18n'

export { createI18n, type I18n } from 'vue-i18n'

export interface UseLocaleResult {
  t: (key: string, ...args: unknown[]) => string
  locale: import('vue').WritableComputedRef<string>
}

export function useLocale(): UseLocaleResult {
  const { t, locale } = useI18n()
  
  return {
    t,
    locale
  }
}