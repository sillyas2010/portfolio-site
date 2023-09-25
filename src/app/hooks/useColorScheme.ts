import { useEffect, useState } from 'react'

export const colorScheme = {
  dark: 'DARK',
  light: 'LIGHT',
} as const

export default function useColorScheme(isInitialDark = true) {
  const [isDark, setIsDark] = useState<boolean>(isInitialDark)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return {
    isDark,
    isLight: !isDark,
    current: isDark ? colorScheme.dark : colorScheme.light,
    setColorScheme: (scheme: keyof typeof colorScheme) =>
      setIsDark(scheme === 'dark'),
    setIsDark: (isDark: boolean) => setIsDark(isDark),
    toggleColorScheme: () => setIsDark(isDark => !isDark),
  }
}
