import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`text-center`}
`

export const Icon = styled.i`
  ${tw`relative overflow-hidden inline-block w-[30px] h-[50px] border-2 border-orange-500 rounded-3xl`}
  ${tw`before:content-empty before:bg-orange-500 before:absolute before:left-1/2 before:top-[11%] before:-translate-x-1/2 before:h-[33%] before:w-[23%] before:rounded-3xl`}
  ${tw`after:content-empty after:bg-orange-500 after:absolute after:left-1/2 after:top-[44%] after:-translate-x-1/2 after:pb-[26%] after:w-[26%] after:rounded-3xl after:animate-scrollDown after:will-change-[top, opacity]`}
`
