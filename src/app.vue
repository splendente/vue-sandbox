<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/watchers">Watchers</RouterLink>
    <RouterLink to="/template-refs">Template Refs</RouterLink>
  </nav>
  <RouterView />
</template>
