<script setup lang="ts">
type Props = {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  label: string
  errorMessage?: string
}

defineProps<Props>()

const model = defineModel<string>()
</script>

<template>
  <label>
    <span class="label">{{ label }}</span>
    <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
    <input :type="type" v-model="model" />
  </label>
</template>

<style scoped>
.label {
  display: block;
  margin-bottom: 0.5rem;
}
.error {
  display: block;
  color: red;
  font-size: 14px;
}
</style>
