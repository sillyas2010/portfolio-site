import Button, { variants } from '@/app/components/Button'
import IconWrapper from '@/app/components/IconWrapper'
import SectionTitle from '@/app/components/SectionTitle'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import TextTechStack from './TextTechStack'
import VisualTechStack from './VisualTechStack'
import * as S from './styled'

export default function TechStack() {
  const [isVisual, setIsVisual] = useState(true)
  const toggleTechStackView = () => setIsVisual(currentView => !currentView)

  return (
    <S.TechStack>
      <S.Content>
        <S.SwitcherWrapper>
          <Button
            title={`${isVisual ? 'Visual' : 'Text'} view switcher`}
            $variant={variants.outline}
            onClick={toggleTechStackView}
            icon={<IconWrapper faIcon={isVisual ? faListUl : faImage} />}
          />
        </S.SwitcherWrapper>
      </S.Content>

      <SectionTitle title="Tech stack" description="Technologies I use" />

      {isVisual ? <VisualTechStack /> : <TextTechStack />}
    </S.TechStack>
  )
}
