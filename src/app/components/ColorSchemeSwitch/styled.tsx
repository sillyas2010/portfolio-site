import tw, { styled } from 'twin.macro'

export const SwitcherWrapper = styled.div`
  ${tw`md:hidden mx-2`}

  & > button {
    ${tw`rounded-full p-2`}
  }
`
export const IconWrapper = styled.div`
  ${tw`w-6 h-6`}

  & > svg {
    ${tw`w-6 h-6`}
  }
`
