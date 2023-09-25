import tw, { styled } from 'twin.macro'

export const Header = styled.header`
  ${tw`w-full h-20 fixed top-0 left-0 z-30 bg-bgDark/10 backdrop-blur-lg flex items-center px-5`}
`

export const LogoWrapper = styled.div`
  & > svg {
    ${tw`w-48`}
  }
`

export const Content = styled.section`
  ${tw`mx-auto flex justify-between w-full max-w-screen-lg`}
`

export const NavLink = styled.a<{ $isActive?: boolean }>`
  ${tw`flex items-center dark:text-white text-black`}
  ${tw`focus:text-primary hover:text-primary hover:opacity-80`}
`
