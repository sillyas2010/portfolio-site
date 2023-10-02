import { colorScheme, cookieName } from '@/app/constants/colorScheme'
import { cookies } from 'next/headers'

export default function getServerColorScheme() {
  const colorSchemeValue = cookies().get(cookieName)?.value

  return colorSchemeValue === colorScheme.light
    ? colorScheme.light
    : colorScheme.dark
}
