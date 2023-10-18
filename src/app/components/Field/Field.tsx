import React, {
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react'
import * as S from './styled'

type StyledInput = S.StyledField &
  JSX.IntrinsicElements['textarea'] &
  JSX.IntrinsicElements['input']

interface FieldProps extends StyledInput {
  type?: JSX.IntrinsicElements['input']['type'] | 'textarea'
  validation?: ReactNode
  required?: boolean
  placeholder?: string
  label?: string
  name?: string
  id?: string
}

type FieldRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

const Field = forwardRef<HTMLInputElement | HTMLTextAreaElement, FieldProps>(
  <C extends React.ElementType>(
    {
      label,
      name,
      id,
      type,
      required,
      placeholder,
      validation,
      $touched,
      ...rest
    }: FieldProps,
    ref: FieldRef<C>,
  ) => {
    const styling: S.StyledField = {
      $touched,
    }
    const commonProps = {
      ...styling,
      placeholder,
      required,
      name,
      id,
    }

    return (
      <S.InputWrapper>
        {type !== 'textarea' ? (
          <S.Input ref={ref} type={type} {...commonProps} {...rest} />
        ) : (
          <S.TextArea ref={ref} {...commonProps} {...rest} />
        )}
        {validation}
        {!!label && (
          <S.Label htmlFor={id}>
            {label} {!!required && <S.Required>*</S.Required>}
          </S.Label>
        )}
      </S.InputWrapper>
    )
  },
)

Field.displayName = 'Field'

export default Field
