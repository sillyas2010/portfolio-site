import tw, { styled } from 'twin.macro'

export const Wrapper = styled.section`
  ${tw`h-screen w-full py-20`}
`

export const Content = styled.section`
  ${tw`h-full w-full mx-auto flex flex-col justify-between max-w-container`}
`

export const InfoContainer = styled.article`
  ${tw`flex justify-between`}
`

export const DescriptionContainer = styled.div`
  ${tw`w-2/3`}
`

export const AvatarWrapper = styled.picture`
  ${tw`after:[content:''] after:absolute after:top-0 after:w-full after:h-full after:overflow-hidden after:animate-avatar after:shadow-avatar`}
  ${tw`relative animate-avatar overflow-hidden `}
`

export const Avatar = tw``

export const Name = styled.h3`
  ${tw`font-bold text-5xl`}
`

export const SubTitle = styled.h4`
  ${tw``}
`

export const Description = styled.h5`
  ${tw`[text-wrap:balance]`}
`

export const NavLink = styled.a<{ $isActive?: boolean }>`
  ${tw`flex items-center dark:text-white text-black`}
  ${tw`focus:text-primary hover:text-primary hover:opacity-80`}
`
