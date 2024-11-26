<script setup lang="ts">
import TestComponent from './TestComponent.vue'
import {reactive} from 'vue';

const state = reactive({
  foo: false,
})
</script>

<template>
  <TestComponent>
    <template #trigger="{ toggle }">
      <button type="button" @click="toggle" data-test="trigger">
        toggle
      </button>
    </template>
    <template #body>
      <input type="checkbox" data-test="checkbox" v-model="state.foo" />
    </template>
  </TestComponent>
</template>
