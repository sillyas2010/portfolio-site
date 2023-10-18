import Button, { variants } from '@/app/components/Button'
import Field, { ValidationError } from '@/app/components/Field'
import Link from '@/app/components/Link'
import SectionTitle from '@/app/components/SectionTitle'
import { email } from '@/app/constants/texting'
import useForm from '@/app/hooks/useForm'
import { NavKeys } from '@/app/types'
import getNavAnchor from '@/app/utils/getNavAnchor'
import React, { FormEvent, useRef } from 'react'
import * as S from './styled'

const constructContactFormAction = ({
  name,
  subject,
  social,
  message,
}: Record<string, string>) => {
  const nameString = name ? `${name} ` : ''
  const contactInfoString = social ? ` (${social}) ` : ''
  const messageString = message ? ` ${message}` : ''
  const bodyString = nameString + contactInfoString + messageString
  const params = new URLSearchParams([
    ...(subject ? [['subject', subject]] : []),
    ...(bodyString ? [['body', bodyString]] : []),
  ]).toString()

  return `mailto:${email}?${params}`
}

function Contact() {
  const fields = {
    name: useRef<HTMLInputElement>(null),
    social: useRef<HTMLInputElement>(null),
    subject: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  } as const
  const { values, touched, errors, isTouched, isValid, onSubmit } = useForm({
    fields,
  })
  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()

    if (isValid) {
      const action = constructContactFormAction(values)

      // window.open(action)
      console.log(action)
    }
  }

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
          <S.Form onSubmit={handleContactSubmit} autoComplete="off" noValidate>
            <Field
              label="Name"
              validation={
                !!errors.name &&
                !!touched.name && (
                  <ValidationError>{errors.name}</ValidationError>
                )
              }
              $touched={touched.name}
              minLength={8}
              ref={fields.name}
              type="name"
              id="name"
              name="name"
              required
            />

            <Field
              label="Email / Social"
              validation={
                !!errors.social &&
                !!touched.social && (
                  <ValidationError>{errors.social}</ValidationError>
                )
              }
              $touched={touched.social}
              ref={fields.social}
              type="text"
              id="email-or-social"
              name="email-or-social"
              required
            />

            <Field
              label="Subject"
              validation={
                !!errors.subject &&
                !!touched.subject && (
                  <ValidationError>{errors.subject}</ValidationError>
                )
              }
              $touched={touched.subject}
              ref={fields.subject}
              type="text"
              id="subject"
              name="subject"
              required
            />

            <Field
              label="Message"
              validation={
                !!errors.message &&
                !!touched.message && (
                  <ValidationError>{errors.message}</ValidationError>
                )
              }
              $touched={touched.message}
              ref={fields.message}
              type="textarea"
              id="message"
              name="message"
              required
            />

            <S.ButtonWrapper>
              <Button
                type="submit"
                title="Contact"
                disabled={isTouched && !isValid}
                $isFull
                $variant={variants.primary}
              >
                Contact
              </Button>
            </S.ButtonWrapper>
          </S.Form>
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
