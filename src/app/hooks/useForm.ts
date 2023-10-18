import { RefObject, useEffect, useRef, useState } from 'react'

interface useForm<FieldKeys extends string | number | symbol> {
  fields: Record<
    FieldKeys,
    RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>
  >
  onChange?: (field: FieldKeys, value?: string) => void
}

const useForm = <FieldKeys extends string | number | symbol>({
  fields,
  onChange,
}: useForm<FieldKeys>) => {
  type ValuesT = Record<keyof typeof fields, string>
  const [values, setValues] = useState<ValuesT>(() =>
    Object.keys(fields).reduce(
      (accum, field) => ({ ...accum, [field]: '' }),
      {} as ValuesT,
    ),
  )
  type ErrorsT = Record<keyof typeof fields, boolean | string>
  const errors = useRef<ErrorsT>(
    Object.keys(fields).reduce(
      (accum, field) => ({ ...accum, [field]: false }),
      {} as ErrorsT,
    ),
  )
  type TouchedT = Record<keyof typeof fields, boolean>
  const touched = useRef<TouchedT>(
    Object.keys(fields).reduce(
      (accum, field) => ({ ...accum, [field]: false }),
      {} as TouchedT,
    ),
  )

  useEffect(() => {
    const events = Object.keys(fields).map(field => {
      const oneOfFields = field as keyof typeof fields

      return [
        oneOfFields,
        () => {
          const fieldElement = fields[oneOfFields].current
          const newValue = fieldElement?.value
          let newError: string | boolean = !fieldElement?.validity?.valid

          if (!fieldElement?.validity?.valid) {
            newError = fieldElement?.validationMessage || true
          }

          errors.current[oneOfFields] = newError
          touched.current[oneOfFields] = true

          setValues(prev => ({
            ...prev,
            [oneOfFields]: newValue,
          }))

          onChange?.(oneOfFields, newValue)
        },
      ] as const
    })

    events.forEach(([field, onChange]) => {
      if (onChange) {
        fields[field]?.current?.addEventListener('change', onChange)
      }
    })

    return () => {
      events.forEach(([field, onChange]) => {
        if (onChange) {
          fields[field]?.current?.removeEventListener('change', onChange)
        }
      })
    }
  }, [fields, onChange])

  return { values, errors: errors.current, touched: touched.current }
}

export default useForm
