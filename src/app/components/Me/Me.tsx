import React, { Fragment } from 'react'
import Image from 'next/image'
import * as S from './styled'
import Typewriter from '@/app/components/TypeWriter/Typewriter'
import Button, { variants } from '@/app/components/Button'
import IconWrapper, { sizes } from '@/app/components/IconWrapper'
import SendIcon from '@/public/icons/send.svg'

const name = 'Illia Hloza'
const subTitle = 'Frontend Developer (React)'
const description = (
  <blockquote>
    <cite>
      &quot;The way a team plays as a whole determines its success. You may have
      the greatest bunch of individual stars in the world, but if they
      don&apos;t play together, the club won&apos;t be worth a dime.&quot;{' '}
    </cite>
    <footer>- Babe Ruth</footer>
  </blockquote>
)

export default function Me({ Footer = Fragment }) {
  return (
    <S.Wrapper>
      <S.Content>
        <S.InfoContainer>
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
                $variant={variants.primary}
                iconRight={<IconWrapper $size={sizes.lg} icon={<SendIcon />} />}
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
        <Footer />
      </S.Content>
    </S.Wrapper>
  )
}
