import IconsSlider, { directions } from '@/app/components/IconsSlider'
import { general, libraries, tools } from '@/app/constants/techStack'
import React from 'react'
import * as S from './styled'

export default function VisualTechStack() {
  return (
    <S.Content>
      <S.SliderWrapper>
        <IconsSlider
          title={<S.CategoryTitle>General:</S.CategoryTitle>}
          items={general}
        />
      </S.SliderWrapper>
      <S.SliderWrapper>
        <IconsSlider
          title={<S.CategoryTitle>Additional:</S.CategoryTitle>}
          direction={directions.reverse}
          items={libraries}
        />
      </S.SliderWrapper>
      <S.SliderWrapper>
        <IconsSlider
          title={<S.CategoryTitle>Tools:</S.CategoryTitle>}
          items={tools}
        />
      </S.SliderWrapper>
    </S.Content>
  )
}
