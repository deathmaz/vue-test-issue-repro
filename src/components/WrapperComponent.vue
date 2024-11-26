<script setup lang="ts">
import TestComponent from './TestComponent.vue'
import {reactive} from 'vue';
import CheckboxWrapper from './CheckboxWrapper.vue';

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
      <CheckboxWrapper v-model="state.foo"></CheckboxWrapper>
    </template>
  </TestComponent>
</template>
