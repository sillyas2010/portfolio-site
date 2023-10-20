import { OneOfValues } from '@/app/types'

export const formSparkForm = process.env.NEXT_PUBLIC_FORMSPARK_FORM!
export const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY!

export const submitValidationTypes = {
  success: 'SUCCESS',
  error: 'ERROR',
} as const

export type OneOfSubmitValidationTypes = OneOfValues<
  typeof submitValidationTypes
>

export const captchaValidationError =
  'There is some problem with captcha validation, please try again'
export const submitError =
  'Something wrong with your data submission, please try again'
export const submitSuccess =
  'Thanks for your attention, I will reach you out asap!'
