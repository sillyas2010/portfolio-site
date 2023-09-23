import tw, { styled } from 'twin.macro'

type OneOfValues<T extends object> = T[keyof T]

export const styles = {
  solid: 'SOLID',
  outline: 'OUTLINE',
} as const

export type OneOfButtonStyles = OneOfValues<typeof styles>

export const variants = {
  primary: 'PRIMARY',
  secondary: 'SECONDARY',
  outline: styles.outline,
} as const

export type OneOfButtonVariants = OneOfValues<typeof variants>

const baseStyles = {
  [styles.solid]: tw`py-2 px-3 font-semibold outline-[2px] outline-offset-[2px]`,
  [styles.outline]: tw`border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] outline-[2px] outline-offset-[2px]`,
}

const variantStyles = {
  [variants.primary]: tw`bg-orange-500 border-transparent text-white hover:enabled:bg-orange-600 focus:enabled:opacity-80 focus:enabled:ring-orange-600`,
  [variants.secondary]: tw`bg-white border-orange-500 text-orange-500 hover:enabled:bg-orange-600 hover:enabled:border-orange-600 hover:enabled:text-white focus:enabled:border-transparent focus:enabled:ring-orange-600`,
  [variants.outline]: tw`bg-transparent border-orange-400 text-orange-500 hover:enabled:bg-orange-600 hover:enabled:text-white hover:enabled:border-transparent focus:enabled:text-white focus:enabled:border-transparent focus:enabled:ring-orange-600`,
}

export type StyledButton = {
  $style?: OneOfButtonStyles
  $variant?: OneOfButtonVariants
  $isWide?: boolean
  $isFull?: boolean
}

export const Button = styled.button<StyledButton>(() => [
  tw`relative px-4 py-2 will-change-[transform, colors] transition-[transform, colors] outline-none border-2 rounded font-medium duration-200 overflow-hidden max-w-full`,
  tw`active:enabled:scale-95 focus:ring-2 focus:ring-offset-2`,
  tw`disabled:cursor-not-allowed disabled:opacity-60`,
  ({ $style = styles.solid }) => baseStyles[$style],
  ({ $variant = variants.secondary }) => variantStyles[$variant],
  ({ $isWide }) => ($isWide ? 'px-8' : null),
  ({ $isFull }) => ($isFull ? 'w-full' : null),
])
