<script setup lang="ts">
import { ref } from 'vue'
import FormInput from '@/components/form-input.vue'
import useValidate from '@/composables/use-validate'

const name = ref<string>('')
const email = ref<string>('')

const { errorMessage, validateField, validateForm } = useValidate({ name, email })

const handleSubmit = () => {
  const fieldData = {
    name: name.value,
    email: email.value
  }
  if (validateForm(fieldData)) {
    alert('Form submitted!')
  } else {
    alert('Form has errors!')
  }
}
</script>

<template>
  <main>
    <h1>Form Input</h1>
    <form @submit.prevent="handleSubmit">
      <FormInput
        type="text"
        label="Name"
        v-model="name"
        :error-message="errorMessage?.name"
        @input="(event) => validateField(event, 'name')"
      />
      <FormInput
        type="email"
        label="Email"
        v-model="email"
        :error-message="errorMessage?.email"
        @input="(event) => validateField(event, 'email')"
      />
      <button>submit</button>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
button {
  width: fit-content;
}
</style>
