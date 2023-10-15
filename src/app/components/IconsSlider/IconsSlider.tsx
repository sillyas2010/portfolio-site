import Button, { variants } from '@/app/components/Button'
import IconWrapper from '@/app/components/IconWrapper'
import Loader from '@/app/components/Loader'
import { Tech } from '@/app/constants/techStack'
import Slider from '@ant-design/react-slick'
import React, { ReactNode, useState } from 'react'
import defaultSettings, { SettingsFunc } from './settings'
import * as S from './styled'

interface SliderProps {
  items: Tech[]
  title: string | ReactNode
  direction?: S.StyledIconSlider['$variant']
  settings?: SettingsFunc
}

export default function IconsSlider({
  items,
  title: sliderTitle,
  settings = defaultSettings,
  direction = S.directions.regular,
}: SliderProps) {
  const [isLoaded, setLoaded] = useState(false)
  const onInit = () => setLoaded(true)
  const rtl = direction !== S.directions.reverse

  return (
    <S.IconsSlider>
      <S.TitleWrapper $variant={direction}>{sliderTitle}</S.TitleWrapper>
      <S.SliderWrapper>
        <Loader
          $isContentVisible={false}
          $spinnerSize={0.1}
          $isLoaded={isLoaded}
        />
        <Slider {...settings({ rtl, onInit })}>
          {items.map(({ title, link, icon, color, faIcon }) =>
            icon || faIcon ? (
              <S.SlideWrapper key={`${title}_${link}`}>
                <Button
                  $variant={variants.secondary}
                  target="_blank"
                  title={title}
                  href={link}
                  icon={
                    <S.IconWrapper
                      style={{
                        color,
                      }}
                    >
                      <IconWrapper faIcon={faIcon} icon={icon} />
                    </S.IconWrapper>
                  }
                />
              </S.SlideWrapper>
            ) : null,
          )}
        </Slider>
      </S.SliderWrapper>
    </S.IconsSlider>
  )
}
