import React from 'react'
import useColorScheme from '@/app/hooks/useColorScheme'
import * as S from './styled'
import LightIcon from '@/public/light.svg'
import DarkIcon from '@/public/dark.svg'
import { variants } from '@/app/components/Button'
import Button from '@/app/components/Button'

export default function ColorSchemeSwitch({
  isInitialDark = true,
  isRaw = false,
}) {
  const { isDark, toggleColorScheme } = useColorScheme(isInitialDark)

  return (
    <S.SwitcherWrapper>
      <Button
        $variant={isRaw ? variants.raw : variants.primary}
        onClick={() => toggleColorScheme()}
      >
        <S.IconWrapper>{isDark ? <DarkIcon /> : <LightIcon />}</S.IconWrapper>
      </Button>
    </S.SwitcherWrapper>
  )
}
