<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/watchers">Watchers</RouterLink>
    <RouterLink to="/template-refs">Template Refs</RouterLink>
    <RouterLink to="/form-input">Form Input</RouterLink>
  </nav>
  <RouterView />
</template>
