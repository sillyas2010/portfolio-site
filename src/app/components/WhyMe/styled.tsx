import BaseIconWrapper from '@/app/components/IconWrapper'
import tw, { styled } from 'twin.macro'

export const Wrapper = styled.div`
  ${tw`w-full max-w-screen-lg`}
`

export const Grid = styled.div`
  ${tw`flex flex-wrap`}
`

export const ModelWrapper = styled.div`
  ${tw`relative w-full [min-height:480px] sm:w-1/2 sm:min-h-0`}
`

export const BenefitsList = styled.div`
  ${tw`w-full sm:w-1/2 inline-flex flex-wrap`}
`

export const BenefitWrapper = styled.div`
  ${tw`w-1/2 flex p-2 cursor-default`}
`

export const BenefitItem = styled.div`
  ${tw`border-2 w-full h-full rounded text-center border-orange-500 py-3 px-2 hover:text-orange-500`}
`

export const BenefitTitle = styled.span`
  ${tw`w-full inline-block text-orange-500`}
`

export const BenefitDesc = styled.span`
  ${tw`w-full inline-block text-balance dark:text-bgLight text-bgDark`}
`

export const IconWrapper = styled(BaseIconWrapper)`
  ${tw`transition-colors duration-[.3s]`}
`
