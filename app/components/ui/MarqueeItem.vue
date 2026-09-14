<!-- components/ui/MarqueeItem.vue -->
<script setup lang="ts">
defineProps<{ word: string }>();
</script>

<template>
  <span
    class="text-5xl md:text-7xl font-black uppercase tracking-tight px-6 md:px-10 flex items-center"
  >
    {{ word }}
    <span class="opacity-30 mx-6 md:mx-10 text-3xl md:text-5xl">✱</span>
  </span>
</template>
