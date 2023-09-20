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
  [variants.primary]: tw`px-4 py-2 bg-canary-500 outline-none border-2 border-transparent rounded text-white font-medium active:scale-95 hover:bg-canary-600 focus:bg-canary-600 focus:ring-2 focus:ring-canary-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:cursor-not-allowed`,
  [variants.secondary]: tw`px-4 py-2 bg-white outline-none border-2 border-canary-500 rounded text-canary-500 font-medium active:scale-95 hover:bg-canary-600 hover:text-white focus:ring-2 focus:ring-canary-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed`,
  [variants.outline]: tw`px-4 py-2 bg-transparent outline-none border-2 border-canary-400 rounded text-canary-500 font-medium active:scale-95 hover:bg-canary-600 hover:text-white hover:border-transparent focus:bg-canary-600 focus:text-white focus:border-transparent focus:ring-2 focus:ring-canary-600 focus:ring-offset-2 disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed`,
}

export type StyledButton = {
  $style?: OneOfButtonStyles
  $variant?: OneOfButtonVariants
  $isWide?: boolean
  $isFull?: boolean
}

export const Button = styled.button<StyledButton>(() => [
  tw`relative will-change-[transform, colors] transition-[transform, colors] duration-200 overflow-hidden max-w-full`,
  ({ $style = styles.solid }) => baseStyles[$style],
  ({ $variant = variants.secondary }) => variantStyles[$variant],
  ({ $isWide }) => ($isWide ? 'px-8' : null),
  ({ $isFull }) => ($isFull ? 'w-full' : null),
])
