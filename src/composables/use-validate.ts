import { ref } from 'vue'
import { UserSchema as schema } from '@/libs/zod'

export default function useValidate(fields) {
  const errorMessage = ref({})

  const validateField = (event, fieldName: string) => {
    if (event.target.value !== fields[fieldName].value) {
      fields[fieldName].value = event.target.value
    }

    const fieldSchema = schema.shape[fieldName]
    const result = fieldSchema.safeParse(fields[fieldName].value)

    if (!result.success) {
      errorMessage.value[fieldName] = result.error.errors[0].message
    } else {
      delete errorMessage.value[fieldName]
    }
  }

  const validateForm = (fieldData) => {
    const result = schema.safeParse(fieldData)

    if (result.success) {
      delete errorMessage.value
      return true
    } else {
      const errors = result.error.flatten()
      for (const fieldName in errors.fieldErrors) {
        errorMessage.value[fieldName] = errors.fieldErrors[fieldName][0]
      }
    }
  }

  return {
    errorMessage,
    validateField,
    validateForm
  }
}
