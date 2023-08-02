import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <div className="relative flex place-items-center">
        <a href="#">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/logo.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </a>
      </div>
      <nav>
        <ul>
          {nav.map(({ title, link, icon }) => (
            <li key={`${title}_${link}`}>
              <a href={link}>
                {!!icon && <FontAwesomeIcon icon={icon} />}
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </S.Header>
  )
}
