'use server'

export async function verifyCaptcha(token: string | null) {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITEKEY}&response=${token}`,
    {
      method: 'POST',
    },
  )

  if (res.ok) {
    return 'success!'
  } else {
    throw new Error('Failed Captcha')
  }
}
