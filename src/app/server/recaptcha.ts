'use server'

export async function verifyCaptcha(token: string | null) {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    {
      method: 'POST',
    },
  )
  const body = await res.json()

  if (res.ok && body.success) {
    return true
  } else {
    throw new Error('Failed Captcha')
  }
}
