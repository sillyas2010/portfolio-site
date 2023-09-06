import React from 'react'
import Image from 'next/image'
import * as S from './styled'
import { Nav, NavItem } from '@/app/components/Nav'

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
          <Image
            className="relative"
            src="/logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </S.NavLink>
        <Nav items={nav} />
      </S.Content>
    </S.Header>
  )
}
