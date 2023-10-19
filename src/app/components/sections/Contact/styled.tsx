import tw, { styled } from 'twin.macro'

export const Contact = styled.section`
  ${tw`relative max-w-screen-lg w-full mt-20 scroll-mt-20`}
`

export const Content = styled.div`
  ${tw`mx-auto flex md:flex-nowrap flex-wrap`}
`

export const Left = styled.div`
  ${tw`xl:w-2/3 md:w-1/2 w-full overflow-hidden pb-10 pr-10 flex items-end justify-start relative`}
`

export const Right = styled.div`
  ${tw`xl:w-1/3 md:w-1/2 w-full flex flex-col md:ml-auto md:pb-10 mt-8 md:mt-0`}
`

export const ContactGlobe = styled.div`
  ${tw`xl:w-full h-full relative mb-12 md:mb-0`}
`

export const Notice = styled.div`
  ${tw`absolute bottom-0 left-0 bg-bgLight/40 dark:bg-gray-900/40 border-2 border-orange-500/40 hidden md:flex flex-wrap pt-5 pb-6 rounded shadow-md`}
`

export const NoticeContainer = styled.div`
  ${tw`w-full px-6`}
`

export const NoticeLabel = styled.h4`
  ${tw`inline-block w-full font-semibold text-gray-400 uppercase tracking-widest text-xs mb-1`}
`

export const NoticeText = styled.p`
  ${tw``}
`

export const Form = styled.form``

export const ButtonWrapper = styled.div`
  & > * {
    ${tw`leading-9`}
  }
`

export const FormInfo = styled.p`
  ${tw`text-xs text-gray-500 dark:text-gray-400 text-opacity-90 mt-3`}
`
