'use client'
import React, { useEffect, useState } from 'react'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import NavList from './NavList'

import * as S from './styled'

export type NavItem = {
  title: string
  link: string
  icon?: IconDefinition
}

type Props = {
  items: NavItem[]
}

export default function Nav({ items }: Props) {
  const [activeLink, setActiveLink] = useState('#')
  const [isMobileActive, setMobileActive] = useState(false)

  useEffect(() => {
    setActiveLink(window?.location?.hash)
  }, [])

  useEffect(() => {
    if (isMobileActive) {
      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
    }
  }, [isMobileActive])

  return (
    <S.Nav>
      <NavList
        items={items}
        List={S.NavList}
        ListItem={S.NavListItem}
        ListItemLink={S.NavLink}
        setActiveLink={setActiveLink}
        activeLink={activeLink}
      />

      <S.NavToggle
        $isActive={isMobileActive}
        onClick={() => setMobileActive(prev => !prev)}
      />

      <NavList
        items={items}
        Wrapper={S.MobileNavWrapper}
        wrapperProps={{ $isActive: isMobileActive }}
        List={S.MobileNavList}
        ListItemLink={S.MobileNavLink}
        setActiveLink={setActiveLink}
        activeLink={activeLink}
      />
    </S.Nav>
  )
}
