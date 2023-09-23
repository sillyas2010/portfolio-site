import { useState } from 'react'

export const colorScheme = {
  dark: 'DARK',
  light: 'LIGHT',
} as const

export default function useColorScheme(isInitialDark = true) {
  const [isDark, setIsDark] = useState(isInitialDark)

  const setColorScheme = (scheme: keyof typeof colorScheme) => {
    const isDark = scheme === 'dark'

    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    setIsDark(isDark)
  }

  return {
    isDark,
    isLight: !isDark,
    current: isDark ? colorScheme.dark : colorScheme.light,
    setColorScheme,
  }
}
