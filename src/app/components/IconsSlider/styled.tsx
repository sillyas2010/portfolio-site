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

export const TitleWrapper = styled.div``

export const IconsSlider = styled.article<StyledSocials>(() => [
  tw`mx-8`,
  `& ${TitleWrapper} {
    ${({ $variant = directions.regular }) => variantStyles[$variant]}
  }`,
])

export const SliderWrapper = styled.div`
  ${tw`w-full`}
`

export const SlideWrapper = tw`w-auto`

export const IconWrapper = styled.div`
  svg {
    ${tw`w-14 h-14`}
  }
`

export const ItemWrapper = styled.div`
  ${tw`inline-block`}

  & > button,
  & > a {
    ${tw`rounded-full p-4`}

    &:hover, &:active, &:focus {
      & ${IconWrapper} {
        ${tw`text-inherit!`}
      }

      & svg * {
        ${tw`fill-current!`}
      }
    }
  }
`
