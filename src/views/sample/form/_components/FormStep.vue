<template>
  <div v-if="shouldShow">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';

// ref injected from FormWizard
const currentIdx = (inject('STEP_COUNTER') as { value: number }).value++;
// Grabs the live ref to the current form active step
const formStepIdx = inject<{ value: number }>('CURRENT_STEP_INDEX');

// If this step should be shown
const shouldShow = computed(() => {
  return formStepIdx ? currentIdx === formStepIdx.value : false;
});
</script>
