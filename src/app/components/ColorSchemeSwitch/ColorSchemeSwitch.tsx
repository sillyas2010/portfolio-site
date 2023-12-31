import Button, { variants } from '@/app/components/Button'
import IconWrapper from '@/app/components/IconWrapper'
import useColorScheme from '@/app/hooks/useColorScheme'
import DarkIcon from '@/public/icons/dark.svg'
import LightIcon from '@/public/icons/light.svg'
import React from 'react'
import * as S from './styled'

export default function ColorSchemeSwitch({ isRaw = false }) {
  const { isDark, toggleColorScheme } = useColorScheme()

  return (
    <S.SwitcherWrapper>
      <Button
        title={`${isDark ? 'Light' : 'Dark'} theme switcher`}
        $variant={isRaw ? variants.raw : variants.primary}
        onClick={() => toggleColorScheme()}
        icon={<IconWrapper icon={isDark ? <DarkIcon /> : <LightIcon />} />}
      />
    </S.SwitcherWrapper>
  )
}
