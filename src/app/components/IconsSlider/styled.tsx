import { OneOfValues } from '@/app/types'
import tw, { styled } from 'twin.macro'

export const directions = {
  regular: 'REGULAR',
  reverse: 'REVERSE',
} as const

export type OneOfSocialsTypes = OneOfValues<typeof directions>

const variantStyles = {
  [directions.regular]: tw`sm:text-left`,
  [directions.reverse]: tw`sm:text-right`,
}

export interface StyledIconSlider {
  $variant?: OneOfSocialsTypes
}

export const IconsSlider = styled.article``

export const TitleWrapper = styled.div<StyledIconSlider>(() => [
  ({ $variant = directions.regular }) => variantStyles[$variant],
  tw`text-center`,
])

export const SliderWrapper = styled.div`
  ${tw`relative w-full px-3`}
`

export const IconWrapper = styled.div`
  svg {
    ${tw`w-14 h-14`}
  }
`

export const SlideWrapper = styled.div`
  ${tw`inline-block mx-4`}

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
