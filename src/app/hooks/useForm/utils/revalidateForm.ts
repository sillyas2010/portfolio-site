import type { revalidateForm, useForm } from '../types'

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

export default revalidateForm
