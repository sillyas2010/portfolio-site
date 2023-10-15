import tw, { styled } from 'twin.macro'

// General
export const TechStack = styled.section`
  ${tw`relative w-full mt-20`}
`

export const SwitcherWrapper = styled.div`
  ${tw`absolute left-3 top-10`}

  & > button {
    ${tw`inline-block rounded-full p-2`}
  }
`

export const CategoryTitle = styled.h4`
  ${tw`text-3xl font-bold mb-8 px-3`}
`

export const Content = styled.div`
  ${tw`relative max-w-screen-lg mx-auto flex flex-wrap flex-col`}
`

// Visual Tech Stack

export const SliderWrapper = styled.div`
  ${tw`w-full mb-12`}
`

// Text Tech Stack

export const CategoriesWrapper = styled.div`
  ${tw`w-full flex`}
`

export const CategoryWrapper = styled.div`
  ${tw`flex-1 `}
`

export const List = styled.ul`
  ${tw`px-3 mb-4`}
`
export const ListItem = styled.li`
  ${tw`mb-4`}
`
