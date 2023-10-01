import { OneOfValues } from '@/app/types'
import tw, { styled } from 'twin.macro'

export const types = {
  icon: 'ICON',
  text: 'TEXT',
} as const

export const variants = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
  outline: 'OUTLINE',
  raw: 'RAW',
} as const

export type OneOfButtonVariants = OneOfValues<typeof variants>

const typeStyles = {
  [types.icon]: tw`[line-height:0]`,
  [types.text]: ``,
}

export type OneOfButtonTypes = OneOfValues<typeof types>

const variantStyles = {
  [variants.primary]: tw`bg-orange-500 border-transparent text-white hover:[&:not([aria-disabled])]:bg-orange-600 focus:[&:not([aria-disabled])]:opacity-90 focus:[&:not([aria-disabled])]:ring-orange-600`,
  [variants.raw]: tw`border-transparent text-orange-500 hover:[&:not([aria-disabled])]:bg-neutral-800/10 hover:dark:[&:not([aria-disabled])]:bg-neutral-800/50 focus:[&:not([aria-disabled])]:bg-neutral-800/10 focus:dark:[&:not([aria-disabled])]:bg-neutral-800/50 focus:[&:not([aria-disabled])]:outline-none`,
  [variants.secondary]: tw`bg-white border-orange-500 text-orange-500 hover:[&:not([aria-disabled])]:bg-orange-600 hover:[&:not([aria-disabled])]:border-orange-600 hover:[&:not([aria-disabled])]:text-white focus:[&:not([aria-disabled])]:border-transparent focus:[&:not([aria-disabled])]:ring-orange-600`,
  [variants.outline]: tw`bg-transparent border-orange-400 text-orange-500 hover:[&:not([aria-disabled])]:bg-orange-600 hover:[&:not([aria-disabled])]:text-white hover:[&:not([aria-disabled])]:border-transparent dark:focus:[&:not([aria-disabled])]:text-white focus:[&:not([aria-disabled])]:border-transparent focus:[&:not([aria-disabled])]:ring-orange-600`,
}

const wideStyles = tw`px-10`
const fullStyles = tw`w-full flex`

export interface StyledButton {
  $variant?: OneOfButtonVariants
  $type?: OneOfButtonTypes
  $isWide?: boolean
  $isFull?: boolean
}

export const Content = styled.span`
  ${tw`inline-block`}
`

type ButtonStylingT = Parameters<typeof styled.button<StyledButton>>[0]
type LinkStylingT = Parameters<typeof styled.a<StyledButton>>[0]

const buttonStyling: ButtonStylingT = () => [
  tw`relative inline-flex items-center gap-2.5 px-5 py-2 will-change-[transform, colors] transition-[transform, colors] outline-[2px] outline-offset-[2px] border-2 rounded font-semibold duration-200 overflow-hidden max-w-full`,
  tw`active:[&:not([aria-disabled])]:scale-95 focus:[&:not([aria-disabled])]:ring-2 focus:[&:not([aria-disabled])]:ring-offset-2`,
  tw`disabled:cursor-not-allowed disabled:opacity-60 aria-disabled:cursor-not-allowed aria-disabled:opacity-60`,
  ({ $variant = variants.secondary }) => variantStyles[$variant],
  ({ $type = types.text }) => typeStyles[$type],
  ({ $isWide }) => ($isWide ? wideStyles : null),
  ({ $isFull }) => ($isFull ? fullStyles : null),
]

export const Button = styled.button<StyledButton>(buttonStyling)
export const Link = styled.a<StyledButton>(buttonStyling as LinkStylingT)
