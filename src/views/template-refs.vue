<script setup lang="ts">
import { ref, computed } from 'vue'

const list = ref(null)
const listWidth = computed(() => list.value?.clientWidth)
</script>

<template>
  <main>
    <h1>Template Refs</h1>
    <ul ref="list">
      <li v-for="(item, index) in 5" :key="index">
        {{ item }}
      </li>
    </ul>
    <p>
      Size of list is <span>{{ listWidth }}</span> px
    </p>
  </main>
</template>
