import Loader from '@/app/components/Loader'
import SectionTitle from '@/app/components/SectionTitle'
import { benefits } from '@/app/constants/whyMe'
import { useProgress } from '@react-three/drei'
import dynamic from 'next/dynamic'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import colors from 'tailwindcss/colors'

const LazyMacBookModel = dynamic(() => import('./MacBookModel'), { ssr: false })

import { NavKeys } from '@/app/types'
import getNavAnchor from '@/app/utils/getNavAnchor'
import * as S from './styled'

export default function WhyMe() {
  const { progress } = useProgress()

  return (
    <S.Wrapper id={getNavAnchor({ key: NavKeys.whyMe })}>
      <SectionTitle title="Why me?" description="Pros which make special" />
      <S.Grid>
        <S.ModelWrapper>
          <Loader
            $isContentVisible={false}
            $spinnerSize={0.75}
            $isLoaded={progress >= 100}
          />
          <LazyMacBookModel />
        </S.ModelWrapper>
        <S.BenefitsList>
          {benefits.map(({ icon, faIcon, title, description }) => (
            <S.BenefitWrapper key={`${title}_${description}`}>
              <Tilt
                glareEnable
                glareMaxOpacity={0.25}
                glareColor={colors.orange[500]}
                tiltReverse
                glarePosition="all"
              >
                <S.BenefitItem key={`${title}_${description}`}>
                  <S.IconWrapper icon={icon} faIcon={faIcon} />
                  <S.BenefitTitle>{title}</S.BenefitTitle>
                  <S.BenefitDesc>{description}</S.BenefitDesc>
                </S.BenefitItem>
              </Tilt>
            </S.BenefitWrapper>
          ))}
        </S.BenefitsList>
      </S.Grid>
    </S.Wrapper>
  )
}
