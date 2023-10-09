import tw, { styled } from 'twin.macro'

export const spinnerSizes = {
  1: tw`scale-100`,
  0.75: tw`scale-75`,
  0.5: tw`scale-50`,
  0.25: tw`scale-[25%]`,
} as const

export type OneOfIconSizes = keyof typeof spinnerSizes

export type StyledLoader = {
  $isLoaded?: boolean
  $spinnerSize?: OneOfIconSizes
  $isContentVisible?: boolean
  $hasBackdrop?: boolean
}

export const Loader = styled.div<Omit<StyledLoader, '$spinnerSize'>>(() => [
  tw`absolute left-0 right-0 top-0 bottom-0 opacity-100 transition-opacity z-10`,
  ({ $hasBackdrop }) => !!$hasBackdrop && tw`bg-bgDark/40 dark:bg-bgLight/40`,
  ({ $isContentVisible }) =>
    !$isContentVisible && tw`dark:bg-bgDark bg-bgLight`,
  ({ $isLoaded }) => !!$isLoaded && tw`opacity-0 pointer-events-none`,
])

export const Spinner = styled.div`
  ${tw`w-full h-full animate-spin [animation-duration:20s]`}
`

export const React = styled.div<Pick<StyledLoader, '$spinnerSize'>>`
  ${({ $spinnerSize = 1 }) => spinnerSizes[$spinnerSize]}
  ${tw`flex justify-center content-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-[50%] [border-width:1.5cqmin] border-react w-[73%] pt-[5%] pb-[5%]`}
  ${tw`before:box-content before:flex before:justify-center before:content-center before:content-empty before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:rotate-[57deg] before:rounded-[50%] before:[border-width:1.5cqmin] before:border-react before:w-[100%] before:pb-[35.5%]`}
  ${tw`after:box-content after:flex after:justify-center after:content-center after:content-empty after:absolute after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:rotate-[-57deg] after:rounded-[50%] after:[border-width:1.5cqmin] after:border-react after:w-[100%] after:pb-[35.5%]`}
`

export const Nucleus = styled.div`
  ${tw`w-[20%] pb-[20%] rounded-full bg-react`}
`
