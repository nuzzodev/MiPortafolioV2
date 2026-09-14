<!-- components/ui/ProjectRow.vue -->
<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  category: string;
  year: string;
}>();
</script>

<template>
  <li class="border-b border-[#EDE8DC]/15">
    <a
      href="#"
      class="group flex items-center justify-between py-7 md:py-10 transition-colors duration-300 hover:bg-[#EDE8DC] hover:text-[#0B0B0B] px-2 md:px-6"
    >
      <div class="flex items-center gap-5 md:gap-12 flex-1 min-w-0">
        <span
          class="text-[11px] tracking-[0.3em] opacity-50 group-hover:opacity-100 tabular-nums"
        >
          {{ id }}
        </span>
        <h3
          class="text-2xl md:text-5xl font-black uppercase tracking-tight truncate"
        >
          {{ title }}
        </h3>
      </div>

      <div class="hidden md:flex items-center gap-10 shrink-0">
        <span
          class="text-[11px] tracking-[0.3em] opacity-60 group-hover:opacity-100"
        >
          {{ category }}
        </span>
        <span
          class="text-[11px] tracking-[0.3em] opacity-60 group-hover:opacity-100 tabular-nums"
        >
          {{ year }}
        </span>
        <UIcon
          name="i-heroicons-arrow-up-right-20-solid"
          class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </a>
  </li>
</template>
