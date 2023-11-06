<script setup lang="ts">
import GIconActivity from './components/GIconActivity.vue'
</script>

<template>
  <GIconActivity color="red" size="100" class="foo" :class="{ reserve: true }" />
</template>

<style scoped>
.foo {
  color: yellow !important;
}

.reserve {
  color: blue !important;
}
</style>