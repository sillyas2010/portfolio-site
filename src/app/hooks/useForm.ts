import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface useForm<
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
}
type ValuesT<Fields> = Record<keyof Fields, string>
type ErrorsT<Fields> = Record<keyof Fields, boolean | string>
type TouchedT<Fields> = Record<keyof Fields, boolean>
interface revalidateForm<Fields extends useForm['fields']> {
  fields: Fields
  errors: ErrorsT<Fields>
  touched: TouchedT<Fields>
  setIsValid: Dispatch<SetStateAction<boolean>>
  setIsTouched: Dispatch<SetStateAction<boolean>>
  setIsAllTouched: Dispatch<SetStateAction<boolean>>
}

const revalidateForm = <Fields extends useForm['fields']>({
  fields,
  errors,
  touched,
  setIsValid,
  setIsTouched,
  setIsAllTouched,
}: revalidateForm<Fields>) => {
  const fieldsArr = Object.keys(fields)
  let currentIsValid = true
  let currentTouched = 0

  for (let i = 0; i < fieldsArr.length; i++) {
    const field = fieldsArr[i] as keyof Fields
    errors[field] = fields[field]?.current?.validationMessage || false

    if (errors[field] !== false) {
      if (currentIsValid && touched[field] === true) {
        currentIsValid = false
      }
      if (touched[field] === true) {
        currentTouched += 1
      }
    }
  }

  if (currentTouched) {
    setIsTouched(true)
  }

  setIsValid(currentIsValid)

  if (currentTouched === fieldsArr.length) {
    setIsAllTouched(true)
  }

  return currentIsValid
}

const useForm = <FieldKeys extends string | number | symbol>({
  fields,
  onChange: onFormChange,
}: useForm<FieldKeys>) => {
  type Fields = typeof fields
  const fieldKeys = Object.keys(fields)
  const [values, setValues] = useState<ValuesT<Fields>>(() =>
    fieldKeys.reduce(
      (accum, field) => ({ ...accum, [field]: '' }),
      {} as ValuesT<Fields>,
    ),
  )
  const errors = useRef<ErrorsT<Fields>>(
    fieldKeys.reduce(
      (accum, field) => ({ ...accum, [field]: false }),
      {} as ErrorsT<Fields>,
    ),
  )
  const [isValid, setIsValid] = useState(true)
  const touched = useRef<TouchedT<Fields>>(
    fieldKeys.reduce(
      (accum, field) => ({ ...accum, [field]: false }),
      {} as TouchedT<Fields>,
    ),
  )
  const [isAllTouched, setIsAllTouched] = useState(false)
  // emulate useState interface with useRef
  const [isTouched, setIsTouched] = [
    useRef(false),
    (val: Parameters<Dispatch<SetStateAction<boolean>>>[0]) =>
      (isTouched.current =
        typeof val === 'function' ? val(isTouched.current) : val),
  ]
  // easy to use with revalidateForm function
  const revalidateFormArgs = {
    fields,
    errors: errors.current,
    touched: touched.current,
    setIsValid,
    setIsTouched,
    setIsAllTouched,
  } as const

  const onFieldChange = useCallback(
    (field: keyof typeof fields) => () => {
      const fieldElement = fields[field].current
      const newValue = fieldElement?.value

      touched.current[field] = true

      setValues(prev => ({
        ...prev,
        [field]: newValue?.trim?.() || '',
      }))

      onFormChange?.(field, newValue, fieldElement)
      revalidateForm(revalidateFormArgs)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fieldKeys.join(), onFormChange],
  )
  const onReset = () => {
    const newValues = {} as ValuesT<Fields>

    fieldKeys.forEach(field => {
      const currentField = field as keyof Fields
      const fieldElement = fields[currentField]?.current

      touched.current[currentField] = false
      newValues[currentField] = ''
      if (fieldElement) {
        fieldElement.value = ''
      }
    })

    setValues(newValues)
    revalidateForm(revalidateFormArgs)
  }
  const onSubmit = () => {
    fieldKeys.forEach(field => {
      const currentField = field as keyof Fields
      touched.current[currentField] = true
    })

    const isValid = revalidateForm(revalidateFormArgs)

    if (isValid) {
      onReset()
    }

    return {
      isValid,
    }
  }

  useEffect(() => {
    const events = fieldKeys.map(field => {
      const oneOfFields = field as keyof Fields

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
  }, [fieldKeys.join(), onFormChange])

  return {
    values,
    errors: errors.current,
    touched: touched.current,
    isTouched: isTouched.current,
    isAllTouched,
    isValid,
    onReset,
    onSubmit,
  }
}

export default useForm
