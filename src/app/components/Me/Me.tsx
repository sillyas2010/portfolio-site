import Button, { variants } from '@/app/components/Button'
import IconWrapper, { sizes } from '@/app/components/IconWrapper'
import Socials from '@/app/components/Socials'
import Typewriter from '@/app/components/TypeWriter/Typewriter'
import { socials } from '@/app/constants'
import SendIcon from '@/public/icons/send.svg'
import Image from 'next/image'
import React, { Fragment, useRef } from 'react'
import * as S from './styled'
import { getCareerYears } from './utils'

const name = 'Illia Hloza'
const subTitle = 'Frontend Developer (React)'
// from 15.07.2017 till now
const careerYears = getCareerYears(new Date(2017, 7 - 1, 15), new Date())

const description = (
  <blockquote>
    <cite>
      I have over {careerYears} years of commercial experience as a Front End
      React Developer (including Full Stack Node.js knowledge) and 6.5 years of
      academic learning experience at a local technological university. I hold a
      Master&apos;s degree in Software Engineering from ZPS University of
      Ukraine and have an upper intermediate level of proficiency in written and
      spoken English. I am highly motivated, detail-oriented, and a responsible
      employee who is always interested in building mutually-beneficial
      partnerships. Have any questions or offers? Feel free to contact me on
      social networks or by email 24/7.
    </cite>
  </blockquote>
)

interface Props {
  Footer: StyledComponentType
}

export default function Me({ Footer = Fragment }: Props) {
  const wrapperRef = useRef(null)

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Content>
        <S.InfoContainer>
          <S.SocialsContainer>
            <Socials items={socials} />
          </S.SocialsContainer>
          <S.DescriptionContainer>
            <S.Name>
              {name}
              <Image
                className="inline-block -mt-3"
                src="/icons/hello.svg"
                alt="hello"
                width={42}
                height={42}
                priority
              />
            </S.Name>
            <S.SubTitle>
              <Typewriter text={subTitle} />
            </S.SubTitle>
            <S.Description>{description}</S.Description>
            <div className="mt-12">
              <Button
                href="#contact"
                title="Contact Me"
                $variant={variants.primary}
                iconRight={
                  <IconWrapper
                    $size={sizes.lg}
                    icon={<SendIcon viewBox="0 0 24 24" />}
                  />
                }
              >
                Contact Me
              </Button>
            </div>
          </S.DescriptionContainer>
          <S.AvatarContainer>
            <S.AvatarWrapper>
              <Image
                css={S.Avatar}
                src="/avatar_square.png"
                alt="avatar"
                width={180}
                height={180}
                priority
              />
            </S.AvatarWrapper>
          </S.AvatarContainer>
        </S.InfoContainer>
        <div className="mt-12 sm:mt-auto md:mt-20">
          <Footer wrapperRef={wrapperRef} />
        </div>
      </S.Content>
    </S.Wrapper>
  )
}
