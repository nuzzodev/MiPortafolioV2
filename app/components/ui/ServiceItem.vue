<!-- components/ui/ServiceItem.vue -->
<script setup lang="ts">
defineProps<{
  index: number;
  name: string;
}>();
</script>

<template>
  <div class="flex items-baseline gap-6 border-b border-border pb-5">
    <span class="text-[11px] tracking-[0.3em] text-muted tabular-nums">
      {{ String(index).padStart(2, "0") }}
    </span>
    <span
      class="text-lg md:text-2xl font-medium uppercase tracking-tight text-ink"
    >
      {{ name }}
    </span>
  </div>
</template>
