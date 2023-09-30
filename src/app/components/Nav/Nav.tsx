'use client'
import React, { useEffect, useState } from 'react'
import NavList from './NavList'
import { NavItem } from '@/app/types'

import * as S from './styled'
import ColorSchemeSwitch from '@/app/components/ColorSchemeSwitch/ColorSchemeSwitch'
import Button, { variants } from '@/app/components/Button'

type Props = {
  items: NavItem[]
}

export default function Nav({ items }: Props) {
  const [activeLink, setActiveLink] = useState('#')
  const [isMobileActive, setMobileActive] = useState(false)
  const setActiveLinkMobile = (link: string) => {
    setActiveLink(link)
    setMobileActive(false)
  }

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

      <ColorSchemeSwitch isRaw />

      <S.NavToggleWrapper onClick={() => setMobileActive(prev => !prev)}>
        <Button $variant={variants.raw}>
          <S.NavToggleIcon $isActive={isMobileActive} />
        </Button>
      </S.NavToggleWrapper>

      <NavList
        items={items}
        Wrapper={S.MobileNavWrapper}
        wrapperProps={{ $isActive: isMobileActive }}
        List={S.MobileNavList}
        ListItemLink={S.MobileNavLink}
        setActiveLink={setActiveLinkMobile}
        activeLink={activeLink}
      />
    </S.Nav>
  )
}
