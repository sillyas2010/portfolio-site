import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { ErrorsT, TouchedT, ValuesT, useForm } from './types'
import revalidateForm from './utils/revalidateForm'

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
