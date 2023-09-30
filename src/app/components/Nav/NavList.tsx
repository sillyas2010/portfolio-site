'use client'
import React, { ElementType, MouseEventHandler, Fragment } from 'react'
import Link from 'next/link'
import { NavListItem } from './styled'
import { NavItem } from '@/app/types'

type Props = {
  items: NavItem[]
  Wrapper?: StyledComponentType
  wrapperProps?: Record<string, unknown>
  List: StyledComponentType
  ListItem?: StyledComponentType
  ListItemLink: StyledComponentType<
    ElementType,
    {
      $isActive: boolean
      onClick: MouseEventHandler<HTMLElement>
    }
  >
  setActiveLink: (val: string) => void
  activeLink: string
}

export default function NavList({
  items,
  Wrapper = Fragment,
  wrapperProps,
  List = Fragment,
  ListItem = NavListItem,
  ListItemLink,
  setActiveLink = () => {},
  activeLink = '',
}: Props) {
  return (
    <Wrapper {...(wrapperProps || {})}>
      <List>
        {items.map(({ title, link }) => (
          <ListItem key={`${title}_${link}`}>
            <Link href={link} passHref legacyBehavior>
              <ListItemLink
                onClick={() => setActiveLink(link)}
                $isActive={activeLink === link}
              >
                {title}
              </ListItemLink>
            </Link>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}
