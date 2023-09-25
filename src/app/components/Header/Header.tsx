import React from 'react'
import * as S from './styled'
import { Nav, NavItem } from '@/app/components/Nav'
import LogoImage from '@/public/logo.svg'

const nav: NavItem[] = [
  {
    title: 'Me',
    link: '#me',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Experience',
    link: '#exp',
  },
  {
    title: 'Technologies',
    link: '#tech',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
]

export default function Header() {
  return (
    <S.Header>
      <S.Content>
        <S.NavLink href="#">
          <S.LogoWrapper>
            <LogoImage />
          </S.LogoWrapper>
        </S.NavLink>
        <Nav items={nav} />
      </S.Content>
    </S.Header>
  )
}
