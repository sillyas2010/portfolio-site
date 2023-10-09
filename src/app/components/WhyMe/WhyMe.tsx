import Macbook from '@/app/components/3d-models/Macbook'
import Loader from '@/app/components/Loader'
import SectionTitle from '@/app/components/SectionTitle'
import { benefits } from '@/app/constants/whyMe'
import { OrbitControls, Stage, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Tilt from 'react-parallax-tilt'
import colors from 'tailwindcss/colors'
import * as S from './styled'

export default function WhyMe() {
  const { progress } = useProgress()

  return (
    <S.Wrapper>
      <SectionTitle title="Why me?" description="Pros which make special" />
      <S.Grid>
        <S.ModelWrapper>
          <Loader
            $isContentVisible={false}
            $spinnerSize={0.75}
            $isLoaded={progress >= 100}
          />
          <Canvas>
            <Stage
              adjustCamera={1.4}
              preset="rembrandt"
              intensity={1}
              environment="city"
            >
              <Macbook />
            </Stage>
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
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
