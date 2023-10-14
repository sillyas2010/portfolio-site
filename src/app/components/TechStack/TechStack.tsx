import IconsSlider, { directions } from '@/app/components/IconsSlider'
import SectionTitle from '@/app/components/SectionTitle'
import { general, libraries, tools } from '@/app/constants/techStack'
import React from 'react'
import * as S from './styled'

export default function TechStack() {
  return (
    <S.TechStack>
      <SectionTitle title="Why me?" description="Pros which make special" />
      <S.Content>
        <IconsSlider title="General" items={general} />
        <IconsSlider
          title="Frameworks / Libraries"
          direction={directions.reverse}
          items={libraries}
        />
        <IconsSlider title="Tools" items={tools} />
      </S.Content>
    </S.TechStack>
  )
}
