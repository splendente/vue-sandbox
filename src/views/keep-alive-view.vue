<script setup lang="ts">
import { ref } from 'vue'
import Tab from '@/components/tab.vue'

const tabs = new Map([
  [1, 'Tab 1'],
  [2, 'Tab 2']
])

const count = ref(0)
const text = ref('')
</script>

<template>
  <Tab :tabs="tabs">
    <template #tab-1>
      <button type="button" @click="count++">count: {{ count }}</button>
    </template>
    <template #tab-2>
      <label>
        <span>name</span>
        <input type="text" v-model="text" />
      </label>
      <p>your name is {{ text }}</p>
    </template>
  </Tab>
</template>
