import Button, { variants } from '@/app/components/Button'
import IconWrapper from '@/app/components/IconWrapper'
import { NavItem } from '@/app/types'
import React from 'react'
import * as S from './styled'

interface SocialsProps extends S.StyledSocials {
  items: NavItem[]
}

const Socials = ({
  items = [],
  $variant = S.variants.horizontal,
}: SocialsProps) => {
  return (
    <S.Socials $variant={$variant}>
      {items.map(({ title, link, icon, faIcon }) =>
        icon || faIcon ? (
          <S.ItemWrapper key={`${title}_${link}`}>
            <Button
              $variant={variants.raw}
              target="_blank"
              title={title}
              href={link}
              icon={<IconWrapper faIcon={faIcon} icon={icon} />}
            />
          </S.ItemWrapper>
        ) : null,
      )}
    </S.Socials>
  )
}

export default Socials
