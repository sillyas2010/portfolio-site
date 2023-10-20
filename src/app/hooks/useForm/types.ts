import { Dispatch, RefObject, SetStateAction } from 'react'

export interface useForm<
  FieldKeys extends string | number | symbol = string | number | symbol,
> {
  fields: Record<
    FieldKeys,
    RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>
  >
  onChange?: (
    field: FieldKeys,
    value?: string,
    fieldElement?: HTMLInputElement | HTMLTextAreaElement | null,
  ) => void
  isResetOnSubmit?: boolean
}
export type ValuesT<Fields> = Record<keyof Fields, string>
export type ErrorsT<Fields> = Record<keyof Fields, boolean | string>
export type TouchedT<Fields> = Record<keyof Fields, boolean>
export interface revalidateForm<Fields extends useForm['fields']> {
  fields: Fields
  errors: ErrorsT<Fields>
  touched: TouchedT<Fields>
  setIsValid: Dispatch<SetStateAction<boolean>>
  setIsTouched: Dispatch<SetStateAction<boolean>>
  setIsAllTouched: Dispatch<SetStateAction<boolean>>
}
