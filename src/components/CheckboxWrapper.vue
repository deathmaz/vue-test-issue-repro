<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <div>
    <input type="checkbox" data-test="checkbox" v-model="model" />
  </div>
</template>
