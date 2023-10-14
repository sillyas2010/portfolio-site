import IconsSlider, { directions } from '@/app/components/IconsSlider'
import SectionTitle from '@/app/components/SectionTitle'
import { general, libraries, tools } from '@/app/constants/techStack'
import React from 'react'
import * as S from './styled'

export default function TechStack() {
  return (
    <S.TechStack>
      <SectionTitle title="Tech stack" description="Technologies I use" />
      <S.Content>
        <S.SliderWrapper>
          <IconsSlider
            title={<S.SliderTitle>General</S.SliderTitle>}
            items={general}
          />
        </S.SliderWrapper>
        <S.SliderWrapper>
          <IconsSlider
            title={<S.SliderTitle>Frameworks / Libraries</S.SliderTitle>}
            direction={directions.reverse}
            items={libraries}
          />
        </S.SliderWrapper>
        <S.SliderWrapper>
          <IconsSlider
            title={<S.SliderTitle>Tools</S.SliderTitle>}
            items={tools}
          />
        </S.SliderWrapper>
      </S.Content>
    </S.TechStack>
  )
}
