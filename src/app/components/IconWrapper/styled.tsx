import tw, { styled } from 'twin.macro'
import { PropsWithChildren, ReactNode } from 'react'

type OneOfValues<T extends object> = T[keyof T]

export const sizes = {
  xs: 'XS',
  sm: 'SM',
  md: 'MD',
  lg: 'LG',
  xl: 'XL',
} as const

export type OneOfIconSizes = OneOfValues<typeof sizes>

const widthStyles = {
  [sizes.xs]: tw`w-4`,
  [sizes.sm]: tw`w-6`,
  [sizes.md]: tw`w-8`,
  [sizes.lg]: tw`w-9`,
  [sizes.xl]: tw`w-11`,
}

const heightStyles = {
  [sizes.xs]: tw`h-4`,
  [sizes.sm]: tw`h-6`,
  [sizes.md]: tw`h-8`,
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
      !!($size || !($width || $height)) && widthStyles[$size || sizes.sm]}
    ${({ $size, $width, $height }) =>
      !!($size || !($width || $height)) && heightStyles[$size || sizes.sm]}
  }
`
