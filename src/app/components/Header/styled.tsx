import tw, { styled } from 'twin.macro'

export const LogoWrapper = styled.div`
  & > svg {
    ${tw`w-48 md:w-40 lg:w-48`}
  }
`

export const Content = styled.section`
  ${tw`mx-auto flex justify-between w-full max-w-screen-lg`}
`

export const NavLink = styled.a`
  ${tw`flex items-center dark:text-white text-black`}
  ${tw`hover:opacity-80`}
`

export const Header = styled.header`
  ${tw`w-full h-20 fixed top-0 left-0 z-30 bg-bgDark/10 flex items-center px-5 backdrop-blur-lg [-webkit-backdrop-filter:var(--tw-backdrop-blur)]`}
`
