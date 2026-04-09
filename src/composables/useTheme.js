import { ref, watch } from 'vue'

const isDark = ref(localStorage.getItem('theme') !== 'light')

watch(isDark, (dark) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}, { immediate: true })

export function useTheme() {
  return {
    isDark,
    toggleTheme: () => { isDark.value = !isDark.value }
  }
}
