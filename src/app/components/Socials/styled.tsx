import { OneOfValues } from '@/app/types'
import tw, { styled } from 'twin.macro'

export const variants = {
  vertical: 'VERTICAL',
  horizontal: 'HORIZONTAL',
} as const

export type OneOfSocialsTypes = OneOfValues<typeof variants>

const variantStyles = {
  [variants.vertical]: tw`flex-col`,
  [variants.horizontal]: tw`flex-row`,
}

export interface StyledSocials {
  $variant?: OneOfSocialsTypes
}

export const Socials = styled.div<StyledSocials>(() => [
  tw`inline-flex gap-1.5`,
  ({ $variant = variants.horizontal }) => variantStyles[$variant],
])

export const ItemWrapper = styled.div`
  & > button,
  & > a {
    ${tw`rounded-full p-2`}
    > span {
      ${tw`inline-block w-6 h-6`}
    }
  }
`
