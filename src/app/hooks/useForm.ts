import { RefObject, useCallback, useEffect, useRef, useState } from 'react'

interface useForm<FieldKeys extends string | number | symbol> {
  fields: Record<
    FieldKeys,
    RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>
  >
  onChange?: (
    field: FieldKeys,
    value?: string,
    fieldElement?: HTMLInputElement | HTMLTextAreaElement | null,
  ) => void
}

const useForm = <FieldKeys extends string | number | symbol>({
  fields,
  onChange: onFormChange,
}: useForm<FieldKeys>) => {
  const possibleFields = Object.keys(fields)
  type ValuesT = Record<keyof typeof fields, string>
  const [values, setValues] = useState<ValuesT>(() =>
    possibleFields.reduce(
      (accum, field) => ({ ...accum, [field]: '' }),
      {} as ValuesT,
    ),
  )
  type ErrorsT = Record<keyof typeof fields, boolean | string>
  const errors = useRef<ErrorsT>(
    possibleFields.reduce(
      (accum, field) => ({ ...accum, [field]: false }),
      {} as ErrorsT,
    ),
  )
  const [isValid, setIsValid] = useState(true)
  type TouchedT = Record<keyof typeof fields, boolean>
  const touched = useRef<TouchedT>(
    possibleFields.reduce(
      (accum, field) => ({ ...accum, [field]: false }),
      {} as TouchedT,
    ),
  )
  const [isAllTouched, setIsAllTouched] = useState(false)
  const isTouched = useRef(false)

  const onSubmit = () => {
    let currentIsValid = true

    isTouched.current = true
    possibleFields.forEach(field => {
      const currentField = field as keyof typeof fields
      touched.current[currentField] = true

      if (currentIsValid) {
        currentIsValid = !errors.current[currentField]
      }
    })

    setIsAllTouched(true)
    setIsValid(currentIsValid)
  }
  const onFieldChange = useCallback(
    (field: keyof typeof fields) => () => {
      const fieldElement = fields[field].current
      const newValue = fieldElement?.value
      let newError: string | boolean = !fieldElement?.validity?.valid

      touched.current[field] = true
      isTouched.current = true

      if (!fieldElement?.validity?.valid) {
        newError = fieldElement?.validationMessage || true
        errors.current[field] = newError
        setIsValid(false)
      } else {
        errors.current[field] = false
      }

      setValues(prev => ({
        ...prev,
        [field]: newValue?.trim?.() || '',
      }))

      onFormChange?.(field, newValue, fieldElement)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [possibleFields.join(), onFormChange],
  )

  useEffect(() => {
    let currentIsValid = true
    let currentTouched = 0

    for (let i = 0; i < possibleFields.length; i++) {
      const field = possibleFields[i] as keyof typeof fields
      errors.current[field] = fields[field]?.current?.validationMessage || false

      if (errors.current[field] !== false) {
        if (currentIsValid && touched.current[field] === true) {
          currentIsValid = false
        }
        if (touched.current[field] === true) {
          currentTouched += 1
        }
      }
    }

    setIsValid(currentIsValid)
    if (currentTouched === possibleFields.length) {
      setIsAllTouched(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [possibleFields.join(), values])

  useEffect(() => {
    const events = possibleFields.map(field => {
      const oneOfFields = field as keyof typeof fields

      return [oneOfFields, onFieldChange(oneOfFields)] as const
    })

    events.forEach(([field, onCurrentChange]) => {
      if (onCurrentChange) {
        fields[field]?.current?.addEventListener('change', onCurrentChange)
      }
    })

    return () => {
      events.forEach(([field, onCurrentChange]) => {
        if (onCurrentChange) {
          fields[field]?.current?.removeEventListener('change', onCurrentChange)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [possibleFields.join(), onFormChange])

  return {
    values,
    errors: errors.current,
    touched: touched.current,
    isTouched: isTouched.current,
    isAllTouched,
    isValid,
    onSubmit,
  }
}

export default useForm
