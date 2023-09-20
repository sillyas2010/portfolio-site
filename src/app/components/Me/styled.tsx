import tw, { styled } from 'twin.macro'

export const Wrapper = styled.section`
  ${tw`h-screen w-full py-20`}
`

export const Content = styled.section`
  ${tw`h-full w-full mx-auto flex flex-col justify-between max-w-container`}
`

export const InfoContainer = styled.article`
  ${tw`grid grid-cols-4 md:grid-rows-1 grid-rows-2 gap-3 mx-auto mt-24 max-w-screen-md`}
`

export const DescriptionContainer = styled.div`
  ${tw`md:col-span-3 md:row-start-1 col-span-4 col-start-1 row-start-2`}
`

export const AvatarContainer = styled.div`
  ${tw`md:text-right md:col-start-4 col-start-1 col-span-4 row-start-1`}
`

export const AvatarWrapper = styled.picture`
  ${tw`after:content-empty after:absolute after:top-0 after:w-full after:h-full after:overflow-hidden after:animate-avatar after:shadow-avatar after:opacity-50`}
  ${tw`inline-flex h-full aspect-[1] relative animate-avatar overflow-hidden`}
`

export const Avatar = tw`w-full`

export const Name = styled.h3`
  ${tw`font-bold text-5xl mb-2`}
`

export const SubTitle = styled.div`
  ${tw`relative pl-3 sm:pl-20 mb-2 text-xl`}
  ${tw`before:content-empty before:absolute before:left-0 before:top-1/2 before:w-2 sm:before:w-16 before:h-px before:bg-bgLight`}
`

export const Description = styled.h5`
  ${tw`text-balance leading-7`}
`
