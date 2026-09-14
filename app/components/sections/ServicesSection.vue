<!-- components/sections/ServicesSection.vue -->
<script setup lang="ts">
const { services } = usePortfolioData();
</script>

<template>
  <section id="services" class="px-6 md:px-12 pb-32 md:pb-48 bg-bg text-ink">
    <div class="grid md:grid-cols-12 gap-12 md:gap-16">
      <div class="md:col-span-3">
        <UiSectionLabel number="03" text="QUÉ HAGO" />
      </div>

      <div
        class="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12"
      >
        <UiServiceItem
          v-for="(s, i) in services"
          :key="s"
          :index="i + 1"
          :name="s"
        />
      </div>
    </div>
  </section>
</template>
