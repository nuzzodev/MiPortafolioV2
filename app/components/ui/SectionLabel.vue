<!-- components/ui/SectionLabel.vue -->
<script setup lang="ts">
defineProps<{
  number?: string;
  text: string;
}>();
</script>

<template>
  <p class="text-[11px] tracking-[0.4em] opacity-50">
    <span v-if="number">({{ number }}) </span>{{ text }}
  </p>
</template>
