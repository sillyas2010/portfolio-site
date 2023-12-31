import Button, { variants } from '@/app/components/Button'
import Field, {
  ValidationError,
  ValidationSuccess,
} from '@/app/components/Field'
import Globe from '@/app/components/Globe'
import Link from '@/app/components/Link'
import SectionTitle from '@/app/components/SectionTitle'
import { email } from '@/app/constants/texting'
import useColorScheme from '@/app/hooks/useColorScheme'
import useForm from '@/app/hooks/useForm'
import { verifyCaptcha } from '@/app/server/recaptcha'
import { NavKeys } from '@/app/types'
import getNavAnchor from '@/app/utils/getNavAnchor'
import { useFormspark } from '@formspark/use-formspark'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  OneOfSubmitValidationTypes,
  captchaValidationError,
  formSparkForm,
  recaptchaSiteKey,
  submitError,
  submitSuccess,
  submitValidationTypes,
} from './constants'
import * as S from './styled'

const constructContactForm = ({
  name,
  subject,
  social,
  message,
}: Record<string, string>) => {
  const nameString = name ? `${name} ` : ''
  const socialInfoString = social ? `(${social})` : ''
  const contact = nameString + socialInfoString

  return {
    contact,
    subject,
    message,
  }
}

function Contact() {
  const fields = {
    name: useRef<HTMLInputElement>(null),
    social: useRef<HTMLInputElement>(null),
    subject: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  } as const
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [validationMessage, setValidationMessage] = useState<{
    type: OneOfSubmitValidationTypes
    text: string
  } | null>(null)
  const [isVerified, setIsVerified] = useState(false)
  const { isDark } = useColorScheme()
  const { touched, errors, isTouched, isValid, onSubmit } = useForm({
    fields,
  })
  const [submit, isLoading] = useFormspark({
    formId: formSparkForm,
  })

  const handleContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { isValid, values, onReset } = onSubmit()
    const formContent = constructContactForm(values)

    if (isValid && isVerified) {
      submit(formContent)
        .then(() => {
          onReset()
          setValidationMessage({
            type: submitValidationTypes.success,
            text: submitSuccess,
          })
        })
        .catch(() =>
          setValidationMessage({
            type: submitValidationTypes.error,
            text: submitError,
          }),
        )
    }
  }

  const handleCaptchaSubmission = (token: string | null) => {
    if (token) {
      verifyCaptcha(token)
        .then(() => {
          setIsVerified(true)
        })
        .catch(() => {
          recaptchaRef.current?.reset?.()
          setIsVerified(false)
          setValidationMessage({
            type: submitValidationTypes.error,
            text: captchaValidationError,
          })
        })
    }
  }

  useEffect(() => {
    if (validationMessage) {
      setTimeout(() => setValidationMessage(null), 5000)
    }
  }, [validationMessage])

  const formValidationContent =
    (validationMessage?.type === submitValidationTypes.error && (
      <ValidationError>{validationMessage.text}</ValidationError>
    )) ||
    (validationMessage?.type === submitValidationTypes.success && (
      <ValidationSuccess>{validationMessage.text}</ValidationSuccess>
    )) ||
    null

  return (
    <S.Contact id={getNavAnchor({ key: NavKeys.contact })}>
      <SectionTitle title="Contact" description="Feel free to share offer" />
      <S.Content>
        <S.Left>
          <S.ContactGlobe>
            <Globe />
          </S.ContactGlobe>
          <S.Notice>
            <S.NoticeContainer>
              <S.NoticeLabel>LOCATION</S.NoticeLabel>
              <S.NoticeText>Ukraine, Kyiv</S.NoticeText>
              <S.NoticeLabel>EMAIL</S.NoticeLabel>
              <Link href={`mailto:${email}`}>sillyas2010@gmail.com</Link>
            </S.NoticeContainer>
          </S.Notice>
        </S.Left>
        <S.Right>
          <S.Form onSubmit={handleContactSubmit} autoComplete="off" noValidate>
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
              label="Name"
              validation={
                !!errors.name &&
                !!touched.name && (
                  <ValidationError>{errors.name}</ValidationError>
                )
              }
              $touched={touched.name}
              ref={fields.name}
              type="name"
              id="name"
              name="name"
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

            <S.CaptchaWrapper>
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                ref={recaptchaRef}
                theme={isDark ? 'dark' : 'light'}
                onChange={handleCaptchaSubmission}
                onErrored={() => setIsVerified(false)}
                onExpired={() => setIsVerified(false)}
              />
            </S.CaptchaWrapper>

            <S.ButtonWrapper>
              <Button
                type="submit"
                title="Contact"
                disabled={(isTouched && !isValid) || !isVerified || isLoading}
                $isFull
                $variant={variants.primary}
              >
                Contact
              </Button>
            </S.ButtonWrapper>
          </S.Form>
          {formValidationContent || (
            <S.FormInfo>
              This will trigger sending me email notify, so that I can reach you
              out.
            </S.FormInfo>
          )}
        </S.Right>
      </S.Content>
    </S.Contact>
  )
}

export default Contact
