import Button, { variants } from '@/app/components/Button'
import IconWrapper, { sizes } from '@/app/components/IconWrapper'
import { Tech } from '@/app/constants/techStack'
import React from 'react'
import * as S from './styled'

interface SliderProps {
  items: Tech[]
  title: string
  direction?: S.StyledSocials['$variant']
}

export default function IconsSlider({ items, title, direction }: SliderProps) {
  return (
    <S.IconsSlider $variant={direction}>
      {items.map(({ title, link, icon, faIcon }) =>
        icon || faIcon ? (
          <S.ItemWrapper key={`${title}_${link}`}>
            <Button
              $variant={variants.secondary}
              target="_blank"
              title={title}
              href={link}
              icon={
                <IconWrapper $size={sizes.xl} faIcon={faIcon} icon={icon} />
              }
            />
          </S.ItemWrapper>
        ) : null,
      )}
    </S.IconsSlider>
  )
}
