import { ref, watch } from 'vue'

const isDark = ref<boolean>(localStorage.getItem('theme') !== 'light')

watch(isDark, (dark: boolean) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}, { immediate: true })

export function useTheme() {
  return {
    isDark,
    toggleTheme: (): void => { isDark.value = !isDark.value }
  }
}
