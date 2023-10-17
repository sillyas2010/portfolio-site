import tw, { styled } from 'twin.macro'

export const Contact = styled.section`
  ${tw`relative max-w-screen-lg w-full mt-20 scroll-mt-20`}
`

export const Content = styled.div`
  ${tw`mx-auto flex md:flex-nowrap flex-wrap`}
`

export const Left = styled.div`
  ${tw`2xl:w-2/3 md:w-1/2 w-full overflow-hidden pb-10 pr-10 flex items-end justify-start relative`}
`

export const Right = styled.div`
  ${tw`2xl:w-1/3 md:w-1/2 w-full flex flex-col md:ml-auto md:pb-10 mt-8 md:mt-0`}
`

export const Notice = styled.div`
  ${tw`bg-gray-900 relative hidden md:flex flex-wrap py-6 rounded shadow-md`}
`

export const Label = styled.label`
  ${tw`leading-7 text-sm text-gray-400`}
`

const BaseInput = tw`w-full bg-gray-900 rounded border border-gray-700 text-base text-gray-100 py-1 px-3 leading-8 focus:border-orange-500 focus:ring-2 focus:ring-orange-900 outline-none transition-colors duration-200 ease-in-out`

export const Input = styled.input`
  ${BaseInput}
`

export const TextArea = styled.textarea`
  ${BaseInput}
  ${tw`h-32 resize-none leading-6`}
`

export const ButtonWrapper = styled.div`
  & > * {
    ${tw`leading-9`}
  }
`

export const FormInfo = styled.p`
  ${tw`text-xs text-gray-400 text-opacity-90 mt-3`}
`
