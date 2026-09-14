<!-- components/sections/StackSection.vue -->
<script setup lang="ts">
const { stackGroups } = usePortfolioData();
</script>

<template>
  <section id="stack" class="px-6 md:px-12 pb-32 md:pb-48 bg-bg text-ink">
    <div class="grid md:grid-cols-12 gap-12 md:gap-16">
      <div class="md:col-span-3">
        <UiSectionLabel number="03" text="TECNOLOGÍAS" />
      </div>

      <div class="md:col-span-9">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <UiStackCard
            v-for="group in stackGroups"
            :key="group.category"
            :category="group.category"
            :category-icon="group.icon"
            :items="group.items"
          />
        </div>
      </div>
    </div>
  </section>
</template>
