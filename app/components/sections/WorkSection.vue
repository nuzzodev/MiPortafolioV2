<!-- components/sections/WorkSection.vue -->
<script setup lang="ts">
const { projects } = usePortfolioData();
</script>

<template>
  <section id="work" class="px-6 md:px-12 pb-32 md:pb-48">
    <div class="flex items-baseline justify-between mb-12 md:mb-16">
      <UiSectionLabel number="02" text="SELECTED WORK" />
      <p class="text-[11px] tracking-[0.4em] opacity-50 hidden md:block">
        {{ projects.length }} PROJECTS
      </p>
    </div>

    <ul class="border-t border-[#EDE8DC]/15">
      <UiProjectRow
        v-for="p in projects"
        :key="p.id"
        :id="p.id"
        :title="p.title"
        :category="p.category"
        :year="p.year"
      />
    </ul>
  </section>
</template>
