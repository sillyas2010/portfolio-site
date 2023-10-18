import tw, { styled } from 'twin.macro'

export interface StyledField {
  $touched?: boolean
}

export const Label = styled.label`
  ${tw`w-full leading-7 text-sm text-gray-600 dark:text-gray-400 -order-1`}
`

export const Required = styled.span`
  ${tw`text-red-500`}
`

const BaseInput = tw`w-full bg-bgLight dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-700 text-base text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:focus:ring-orange-900 outline-none transition-colors duration-200 ease-in-out`
const ValidatedInput = tw`invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 [&:not(:placeholder-shown):not(:focus):invalid~label]:text-red-500`

export const InputWrapper = styled.div`
  ${tw`relative mb-4 flex flex-wrap`}
`
export const Input = styled.input<StyledField>(() => [
  BaseInput,
  ({ $touched }) => ($touched ? ValidatedInput : null),
])

export const TextArea = styled.textarea<StyledField>(() => [
  BaseInput,
  ({ $touched }) => ($touched ? ValidatedInput : null),
  tw`h-32 resize-none leading-6`,
])

export const ValidationError = styled.p`
  ${tw`mt-2 text-xs text-red-500`}
`
