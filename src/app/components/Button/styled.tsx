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
  [variants.primary]: tw`bg-orange-500 border-transparent text-white hover:enabled:bg-orange-600 focus:enabled:opacity-90 focus:enabled:ring-orange-600`,
  [variants.raw]: tw`border-transparent text-orange-500 hover:enabled:bg-neutral-800/10 hover:dark:enabled:bg-neutral-800/50 focus:enabled:bg-neutral-800/10 focus:dark:enabled:bg-neutral-800/50 focus:enabled:outline-none`,
  [variants.secondary]: tw`bg-white border-orange-500 text-orange-500 hover:enabled:bg-orange-600 hover:enabled:border-orange-600 hover:enabled:text-white focus:enabled:border-transparent focus:enabled:ring-orange-600`,
  [variants.outline]: tw`bg-transparent border-orange-400 text-orange-500 hover:enabled:bg-orange-600 hover:enabled:text-white hover:enabled:border-transparent dark:focus:enabled:text-white focus:enabled:border-transparent focus:enabled:ring-orange-600`,
}

export type StyledButton = {
  $variant?: OneOfButtonVariants
  $isWide?: boolean
  $isFull?: boolean
}

export const Button = styled.button<StyledButton>(() => [
  tw`relative px-4 py-2 will-change-[transform, colors] transition-[transform, colors] outline-[2px] outline-offset-[2px] border-2 rounded font-semibold duration-200 overflow-hidden max-w-full`,
  tw`active:enabled:scale-95 focus:ring-2 focus:ring-offset-2`,
  tw`disabled:cursor-not-allowed disabled:opacity-60`,
  ({ $variant = variants.secondary }) => variantStyles[$variant],
  ({ $isWide }) => ($isWide ? 'px-8' : null),
  ({ $isFull }) => ($isFull ? 'w-full' : null),
])
