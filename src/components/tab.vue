<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  tabs: Map
})

const id = ref(1)

const updateId = (newId: number) => {
  id.value = newId
}
</script>

<template>
  <div>
    <div class="tab-header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="updateId(Number(tab[0]))"
        type="button"
      >
        {{ tab[1] }}
      </button>
    </div>
    <div class="tab-body">
      <KeepAlive>
        <slot :name="`tab-${String(id)}`"></slot>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped>
.tab-header {
  display: flex;
  gap: 0 8px;
}

.tab-body {
  padding: 16px 0;
}
</style>
