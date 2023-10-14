import Button, { variants } from '@/app/components/Button'
import IconWrapper from '@/app/components/IconWrapper'
import { Tech } from '@/app/constants/techStack'
import React, { ReactNode } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as S from './styled'

import 'swiper/css'

interface SliderProps {
  items: Tech[]
  title: string | ReactNode
  direction?: S.StyledSocials['$variant']
}

export default function IconsSlider({
  items,
  title: sliderTitle,
  direction,
}: SliderProps) {
  return (
    <S.IconsSlider $variant={direction}>
      <S.TitleWrapper>{sliderTitle}</S.TitleWrapper>
      <S.SliderWrapper>
        <Swiper
          loop
          speed={500}
          spaceBetween={30}
          loopedSlides={3}
          slidesPerView={5}
          centeredSlides
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            reverseDirection: direction === S.directions.reverse,
          }}
        >
          {items.map(({ title, link, icon, color, faIcon }) =>
            icon || faIcon ? (
              <SwiperSlide css={S.SlideWrapper} key={`${title}_${link}`}>
                <S.ItemWrapper>
                  <Button
                    $variant={variants.secondary}
                    target="_blank"
                    title={title}
                    href={link}
                    icon={
                      <S.IconWrapper
                        style={{
                          color: color || undefined,
                        }}
                      >
                        <IconWrapper faIcon={faIcon} icon={icon} />
                      </S.IconWrapper>
                    }
                  />
                </S.ItemWrapper>
              </SwiperSlide>
            ) : null,
          )}
        </Swiper>
      </S.SliderWrapper>
    </S.IconsSlider>
  )
}
