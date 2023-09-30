import Button, { variants } from '@/app/components/Button'
import { NavItem } from '@/app/types'
import React from 'react'
import * as S from './styled'

interface SocialsProps {
  items: NavItem[]
}

const Socials = ({ items }: SocialsProps) => {
  return (
    <S.Socials>
      {items.map(({ title, link, icon, faIcon }) =>
        icon || faIcon ? (
          <S.ItemWrapper key={`${title}_${link}`}>
            <Button $variant={variants.raw} href={link}>
              {faIcon ? (
                <S.FaIconWrapper icon={faIcon} />
              ) : (
                <S.IconWrapper>{icon}</S.IconWrapper>
              )}
            </Button>
          </S.ItemWrapper>
        ) : null,
      )}
    </S.Socials>
  )
}

export default Socials
