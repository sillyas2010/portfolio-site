'use client'
import { NavItem } from '@/app/types'
import React, { useEffect, useRef, useState } from 'react'
import NavList from './NavList'

import Button, { variants } from '@/app/components/Button'
import ColorSchemeSwitch from '@/app/components/ColorSchemeSwitch'
import * as S from './styled'

interface Props {
  items: NavItem[]
}

export default function Nav({ items }: Props) {
  const [activeLink, setActiveLink] = useState('#')
  const savedScroll = useRef(0)
  const [isMobileActive, setMobileActive] = useState(false)
  const setActiveLinkMobile = (link: string) => {
    setActiveLink(link)
    setMobileActive(false)
  }

  useEffect(() => {
    setActiveLink(window?.location?.hash)
    savedScroll.current = window?.scrollY
  }, [])

  useEffect(() => {
    if (isMobileActive) {
      savedScroll.current = window?.scrollY
      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
      window.scrollTo({
        top: savedScroll.current,
      })
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
        <Button
          $variant={variants.raw}
          title="Navigation Toggle"
          icon={<S.NavToggleIcon $isActive={isMobileActive} />}
        />
      </S.NavToggleWrapper>

      <NavList
        items={items}
        Wrapper={S.MobileNavWrapper}
        wrapperProps={{
          $isActive: isMobileActive,
          'aria-hidden': !isMobileActive,
          tabIndex: -1,
        }}
        List={S.MobileNavList}
        ListItemLink={S.MobileNavLink}
        setActiveLink={setActiveLinkMobile}
        activeLink={activeLink}
      />
    </S.Nav>
  )
}
