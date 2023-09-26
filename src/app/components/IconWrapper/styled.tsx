import tw, { styled } from 'twin.macro'
import { PropsWithChildren, ReactNode } from 'react'

type OneOfValues<T extends object> = T[keyof T]

export const sizes = {
  sm: 'SM',
  md: 'MD',
  lg: 'LG',
  xl: 'XL',
} as const

export type OneOfIconSizes = OneOfValues<typeof sizes>

const widthStyles = {
  [sizes.sm]: tw`w-4`,
  [sizes.md]: tw`w-6`,
  [sizes.lg]: tw`w-9`,
  [sizes.xl]: tw`w-11`,
}

const heightStyles = {
  [sizes.sm]: tw`h-4`,
  [sizes.md]: tw`h-6`,
  [sizes.lg]: tw`h-9`,
  [sizes.xl]: tw`h-11`,
}

export type StyledIconWrapper = PropsWithChildren<{
  icon?: ReactNode
  $size?: OneOfIconSizes
  $width?: OneOfIconSizes
  $height?: OneOfIconSizes
}>

export const IconWrapper = styled.span<StyledIconWrapper>`
  ${tw`inline-block`}
  & > * {
    ${({ $width }) => $width && widthStyles[$width]}
    ${({ $height }) => $height && heightStyles[$height]}
    ${({ $size, $width, $height }) =>
      !!($size || !($width || $height)) && widthStyles[$size || sizes.md]}
    ${({ $size, $width, $height }) =>
      !!($size || !($width || $height)) && heightStyles[$size || sizes.md]}
  }
`
