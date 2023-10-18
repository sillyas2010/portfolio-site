import Button, { variants } from '@/app/components/Button'
import SectionTitle from '@/app/components/SectionTitle'
import { email } from '@/app/constants/texting'
import { NavKeys } from '@/app/types'
import getNavAnchor from '@/app/utils/getNavAnchor'
import React from 'react'
import Link from '../Link/Link'
import * as S from './styled'

function Contact() {
  return (
    <S.Contact id={getNavAnchor({ key: NavKeys.contact })}>
      <SectionTitle title="Contact" description="Feel free to share offer" />
      <S.Content>
        <S.Left>
          <S.ContactGlobe>
            <S.Notice>
              <S.NoticeContainer>
                <S.NoticeLabel>LOCATION</S.NoticeLabel>
                <S.NoticeText>Ukraine, Kyiv</S.NoticeText>
                <S.NoticeLabel>EMAIL</S.NoticeLabel>
                <Link href={`mailto:${email}`}>sillyas2010@gmail.com</Link>
              </S.NoticeContainer>
            </S.Notice>
          </S.ContactGlobe>
        </S.Left>
        <S.Right>
          <S.InputWrapper>
            <S.Label htmlFor="name">Name</S.Label>
            <S.Input type="name" id="name" name="name" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="email-or-social">Email / Social</S.Label>
            <S.Input type="text" id="email-or-social" name="email-or-social" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="subject">Subject</S.Label>
            <S.Input type="text" id="subject" name="subject" />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label htmlFor="message">Message</S.Label>
            <S.TextArea id="message" name="message" />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <Button
              $isFull
              $variant={variants.primary}
              href="mailto:test@test.com"
            >
              Contact
            </Button>
          </S.ButtonWrapper>
          <S.FormInfo>
            Form submit will trigger opening your email client with predefined
            values.
          </S.FormInfo>
        </S.Right>
      </S.Content>
    </S.Contact>
  )
}

export default Contact
