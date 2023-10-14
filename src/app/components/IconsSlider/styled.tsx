import { OneOfValues } from '@/app/types'
import tw, { styled } from 'twin.macro'

export const directions = {
  regular: 'REGULAR',
  reverse: 'REVERSE',
} as const

export type OneOfSocialsTypes = OneOfValues<typeof directions>

const variantStyles = {
  [directions.regular]: tw`text-left`,
  [directions.reverse]: tw`text-right`,
}

export interface StyledSocials {
  $variant?: OneOfSocialsTypes
}

export const IconsSlider = styled.article<StyledSocials>(() => [
  tw`mx-8`,
  ({ $variant = directions.regular }) => variantStyles[$variant],
])

export const ItemWrapper = styled.div`
  ${tw`inline-block`}

  & > button,
  & > a {
    ${tw`rounded-full p-2`}
    > span {
      ${tw`inline-block w-11 h-11`}
    }
  }
`
