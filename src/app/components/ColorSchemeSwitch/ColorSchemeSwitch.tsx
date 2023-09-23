import Image from 'next/image'
import React from 'react'
import useColorScheme from '@/app/hooks/useColorScheme'
import * as S from './styled'

export default function ColorSchemeSwitch(isInitialDark = true) {
  const { isDark } = useColorScheme(isInitialDark)

  return (
    <S.Label>
      <S.Input type="checkbox" role="switch" checked={isDark} />
      <Image
        css={S.DarkIcon}
        src="/light.svg"
        alt="light"
        width={12}
        height={12}
        priority
      />
      <Image
        css={S.LightIcon}
        src="/light.svg"
        alt="light"
        width={12}
        height={12}
        priority
      />
      <S.Text>dark mode switch</S.Text>
    </S.Label>
  )
}
