import React from 'react'
import Image from 'next/image'
import {
  IconDefinition,
  faAddressCard,
  faUser,
  faTimeline,
  faBusinessTime,
  faFileSignature,
} from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import * as S from './styled'
import Link from 'next/link'

type NavItem = {
  title: string
  link: string
  icon?: IconDefinition
}

const nav: NavItem[] = [
  {
    title: 'Me',
    link: '#me',
    icon: faUser,
  },
  {
    title: 'About',
    link: '#about',
    icon: faAddressCard,
  },
  {
    title: 'Experience',
    link: '#exp',
    icon: faTimeline,
  },
  {
    title: 'Technologies',
    link: '#tech',
    icon: faReact,
  },
  {
    title: 'Projects',
    link: '#projects',
    icon: faBusinessTime,
  },
  {
    title: 'Contact',
    link: '#contact',
    icon: faFileSignature,
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
        <S.Nav>
          <S.NavList>
            {nav.map(({ title, link, icon }) => (
              <S.NavListItem key={`${title}_${link}`}>
                <Link href={link} passHref legacyBehavior>
                  <S.NavLink>
                    {!!icon && <S.NavItemIcon icon={icon} />}
                    {title}
                  </S.NavLink>
                </Link>
              </S.NavListItem>
            ))}
          </S.NavList>
        </S.Nav>
      </S.Content>
    </S.Header>
  )
}
