import Button, { variants } from '@/app/components/Button'
import useColorScheme from '@/app/hooks/useColorScheme'
import DarkIcon from '@/public/icons/dark.svg'
import LightIcon from '@/public/icons/light.svg'
import React from 'react'
import * as S from './styled'

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
