<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)
watch(count, () => {
  console.log('count is called' + count.value + ' times')
})
count.value++

const count2 = ref(0)
watchEffect(() => {
  console.log('count2 is called' + count2.value + ' times')
})
count2.value++
</script>

<template>
  <main>
    <h1>Watchers</h1>
  </main>
</template>
