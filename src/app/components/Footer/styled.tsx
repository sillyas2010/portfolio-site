import tw, { styled } from 'twin.macro'

export const Footer = styled.footer`
  ${tw`bg-bgDark/10 dark:bg-bgLight/10 mt-20 z-30`}
`

export const Content = styled.div`
  ${tw`max-w-screen-lg mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row`}
`

export const LeftWrapper = styled.div`
  ${tw`h-full my-auto inline-flex content-center justify-center sm:justify-start`}
`

export const Left = styled.span`
  ${tw`inline-block text-bgDark dark:text-bgLight`}
`

export const Right = styled.span`
  ${tw`inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start`}
`
