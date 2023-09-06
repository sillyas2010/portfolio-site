import tw, { styled } from 'twin.macro'

export const Nav = styled.nav`
  ${tw`flex items-center`}
`

export const NavList = styled.ul`
  ${tw`hidden md:flex justify-between items-center gap-4`}
`
export const NavListItem = styled.li``

export const MobileNavWrapper = styled.div<{ $isActive?: boolean }>(
  ({ $isActive }) => [
    tw`absolute top-0 left-0 bottom-0 right-0 h-screen w-screen dark:bg-black bg-white flex items-center justify-center`,
    tw`transform -translate-y-full transition-transform duration-300 ease-in-out`,
    $isActive && tw`-translate-y-0`,
  ],
)

export const MobileNavList = styled.ul`
  ${tw`inline-flex flex-col justify-center items-center gap-y-8`}
`

export const NavLink = styled.a<{ $isActive?: boolean }>(({ $isActive }) => [
  tw`flex items-center dark:text-white text-black`,
  tw`focus:text-primary hover:text-primary hover:opacity-80`,
  $isActive && tw`text-primary!`,
])

export const MobileNavLink = styled(NavLink)`
  ${tw`text-5xl`}
`

export const NavToggle = styled.button<{ $isActive?: boolean }>(
  ({ $isActive }) => [
    tw`md:hidden block relative cursor-pointer w-6 h-4 bg-transparent dark:text-white text-black z-30`,

    tw`transition-all [transition-duration:.3s]`,
    tw`before:[content:''] before:absolute before:transition-all before:[transition-duration:.3s]`,
    tw`after:[content:''] after:absolute after:transition-all after:[transition-duration:.3s]`,

    tw`before:w-full before:h-0.5 before:left-0 before:top-1/2`,
    tw`after:w-full after:h-0.5 after:left-0 after:top-1/2 after:shadow-navToggle`,

    $isActive && tw`scale-110 -translate-x-px -rotate-45`,
    $isActive && tw`before:shadow-navToggleActive before:rotate-90`,
    $isActive && tw`after:shadow-navToggleActive`,
  ],
)
