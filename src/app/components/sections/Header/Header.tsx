import { Nav } from '@/app/components/Nav'
import { navItems } from '@/app/constants'
import LogoImage from '@/public/logo.svg'
import React from 'react'
import * as S from './styled'

export default function Header() {
  return (
    <S.Header>
      <S.Content>
        <S.NavLink href="#">
          <S.LogoWrapper>
            <LogoImage />
          </S.LogoWrapper>
        </S.NavLink>
        <Nav items={navItems} />
      </S.Content>
    </S.Header>
  )
}
