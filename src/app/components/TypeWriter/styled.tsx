import tw, { styled } from 'twin.macro'

export const Typewriter = styled.h4<{ $text?: string }>(({ $text = '' }) => [
  tw`relative inline-block whitespace-nowrap`,
  tw`after:animate-typing after:h-full after:content-empty after:absolute after:right-0 after:dark:bg-bgDark after:bg-bgLight`,
  `&:after {
    animation-timing-function: steps(${$text.length})
  }`,
])
