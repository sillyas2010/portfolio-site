import cookies from '@boiseitguru/cookie-cutter'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { colorScheme, cookieName } from '@/app/constants/colorScheme'

export default function useColorScheme(
  isSubscribed = false,
  isInitialDark = true,
) {
  const [isDark, setIsDark] = useState<boolean>(isInitialDark)
  const colorSchemeObserver = useRef<MutationObserver | null>(null)
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

  useEffect(() => {
    if (colorSchemeObserver.current) {
      colorSchemeObserver.current.disconnect()
    }

    colorSchemeObserver.current = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains(
            colorScheme.dark,
          )

          setIsDark(isDark)
        }
      })
    })

    if (isSubscribed) {
      colorSchemeObserver.current?.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      })
    } else {
      colorSchemeObserver.current?.disconnect()
    }

    return () => {
      colorSchemeObserver.current?.disconnect()
    }
  }, [isSubscribed])

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
