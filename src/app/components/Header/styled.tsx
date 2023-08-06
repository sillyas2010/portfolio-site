import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header = styled.header`
  ${tw`w-full h-20 fixed top-0 left-0 z-30 bg-bgDark/10 backdrop-blur-lg flex items-center px-5`}
`

export const Content = styled.section`
  ${tw`mx-auto flex justify-between w-full max-w-container`}
`

export const Nav = styled.nav`
  ${tw`flex items-center`}
`

export const NavLogo = styled.img``

export const NavList = styled.ul`
  ${tw`flex justify-between items-center gap-4`}
`
export const NavListItem = styled.li``

export const NavLink = styled.a<{ isActive?: boolean }>(({ isActive }) => [
  tw`flex flex-col items-center dark:text-white text-black `,
  tw`focus:text-primary hover:text-primary`,
  isActive && tw`text-primary`,
])

export const NavItemIcon = styled(FontAwesomeIcon)`
  ${tw`hidden`}
`

export const NavToggle = styled.button<{ isActive?: boolean }>(
  ({ isActive }) => [
    tw`relative cursor-pointer w-6 h-8 bg-transparent dark:text-white text-black`,

    tw`before:[content:''] before:absolute before:transition-all`,
    tw`after:[content:''] after:absolute after:transition-all`,

    tw`before:w-full before:h-0.5 before:top-1/2 before:shadow-navToggle`,

    isActive && tw`before:shadow-navToggleActive rotate-45`,
    isActive && tw`after:shadow-navToggleActive -rotate-45`,
  ],
)
