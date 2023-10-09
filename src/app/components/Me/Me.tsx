import Button, { variants } from '@/app/components/Button'
import IconWrapper, { sizes } from '@/app/components/IconWrapper'
import Socials from '@/app/components/Socials'
import Typewriter from '@/app/components/TypeWriter/Typewriter'
import { socials } from '@/app/constants'
import { careerDescriptionText, name, subTitle } from '@/app/constants/texting'
import SendIcon from '@/public/icons/send.svg'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import React, { Fragment, useRef } from 'react'
import * as S from './styled'

interface Props {
  Footer: StyledComponentType
}

export default function Me({ Footer = Fragment }: Props) {
  const wrapperRef = useRef(null)

  return (
    <S.Wrapper id="me" ref={wrapperRef}>
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
            <S.Description>
              <blockquote>
                <cite>{careerDescriptionText}</cite>
              </blockquote>
            </S.Description>
            <div className="mt-12 inline-flex flex-col sm:flex-row gap-4">
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
              <Button
                href="/Illia_Hloza_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download CV"
                $variant={variants.outline}
                iconRight={
                  <IconWrapper $size={sizes.lg} faIcon={faAddressCard} />
                }
              >
                Download CV
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
