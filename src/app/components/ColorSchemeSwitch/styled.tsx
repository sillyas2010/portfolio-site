import tw, { styled } from 'twin.macro'

export const SwitcherWrapper = styled.div`
  ${tw`md:hidden mx-2`}

  & > button {
    ${tw`rounded-full p-2`}
  }
`
