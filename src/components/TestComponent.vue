<script setup lang="ts">
import {
  ref,
  useTemplateRef,
} from 'vue';
import {
  useFloating,
} from '@floating-ui/vue';

const trigger = useTemplateRef('triggerRef');
const floating = useTemplateRef('floatingRef');
useFloating(trigger, floating);

const opened = ref(false);
function toggle() {
  opened.value = !opened.value;
}

</script>

<template>
  <div ref="flyoutRef">
    <div ref="triggerRef">
      <slot
        name="trigger"
        :opened="opened"
        :toggle="toggle"
      />
    </div>
    <teleport to="body">
      <div
        v-if="opened"
        ref="floatingRef"
      >
        <slot name="body"/>
      </div>
    </teleport>
  </div>
</template>
