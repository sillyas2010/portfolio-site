import cookies from '@boiseitguru/cookie-cutter'
import { useLayoutEffect, useRef, useState } from 'react'

import { colorScheme, cookieName } from '@/app/constants/colorScheme'

export default function useColorScheme(isInitialDark = true) {
  const [isDark, setIsDark] = useState<boolean>(isInitialDark)
  const isInitialRender = useRef(true)

  useLayoutEffect(() => {
    let isCurrentDark = isDark

    if (isInitialRender.current) {
      isInitialRender.current = false
      isCurrentDark = document.documentElement.classList.contains(
        colorScheme.dark,
      )

      setIsDark(isCurrentDark)
    } else {
      if (isCurrentDark) {
        document.documentElement.classList.add(colorScheme.dark)
        cookies.set(cookieName, colorScheme.dark)
      } else {
        document.documentElement.classList.remove(colorScheme.dark)
        cookies.set(cookieName, colorScheme.light)
      }
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
