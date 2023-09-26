import tw, { styled } from 'twin.macro'

type OneOfValues<T extends object> = T[keyof T]

export const variants = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
  outline: 'OUTLINE',
  raw: 'RAW',
} as const

export type OneOfButtonVariants = OneOfValues<typeof variants>

const variantStyles = {
  [variants.primary]: tw`bg-orange-500 border-transparent text-white hover:[&:not([aria-disabled])]:bg-orange-600 focus:[&:not([aria-disabled])]:opacity-90 focus:[&:not([aria-disabled])]:ring-orange-600`,
  [variants.raw]: tw`border-transparent text-orange-500 hover:[&:not([aria-disabled])]:bg-neutral-800/10 hover:dark:[&:not([aria-disabled])]:bg-neutral-800/50 focus:[&:not([aria-disabled])]:bg-neutral-800/10 focus:dark:[&:not([aria-disabled])]:bg-neutral-800/50 focus:[&:not([aria-disabled])]:outline-none`,
  [variants.secondary]: tw`bg-white border-orange-500 text-orange-500 hover:[&:not([aria-disabled])]:bg-orange-600 hover:[&:not([aria-disabled])]:border-orange-600 hover:[&:not([aria-disabled])]:text-white focus:[&:not([aria-disabled])]:border-transparent focus:[&:not([aria-disabled])]:ring-orange-600`,
  [variants.outline]: tw`bg-transparent border-orange-400 text-orange-500 hover:[&:not([aria-disabled])]:bg-orange-600 hover:[&:not([aria-disabled])]:text-white hover:[&:not([aria-disabled])]:border-transparent dark:focus:[&:not([aria-disabled])]:text-white focus:[&:not([aria-disabled])]:border-transparent focus:[&:not([aria-disabled])]:ring-orange-600`,
}

const wideStyles = tw`px-10`
const fullStyles = tw`w-full flex`

export type StyledButton = {
  $variant?: OneOfButtonVariants
  $isWide?: boolean
  $isFull?: boolean
}

export const Button = styled.button<StyledButton>(() => [
  tw`relative inline-flex items-center gap-2.5 px-5 py-2 will-change-[transform, colors] transition-[transform, colors] outline-[2px] outline-offset-[2px] border-2 rounded font-semibold duration-200 overflow-hidden max-w-full`,
  tw`active:[&:not([aria-disabled])]:scale-95 focus:[&:not([aria-disabled])]:ring-2 focus:[&:not([aria-disabled])]:ring-offset-2`,
  tw`disabled:cursor-not-allowed disabled:opacity-60 aria-disabled:cursor-not-allowed aria-disabled:opacity-60`,
  ({ $variant = variants.secondary }) => variantStyles[$variant],
  ({ $isWide }) => ($isWide ? wideStyles : null),
  ({ $isFull }) => ($isFull ? fullStyles : null),
])
