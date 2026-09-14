<!-- components/sections/MarqueeSection.vue -->
<script setup lang="ts">
const { marqueeWords } = usePortfolioData();
</script>

<template>
  <section class="border-y border-border py-8 md:py-12 overflow-hidden">
    <div class="marquee flex whitespace-nowrap will-change-transform">
      <div v-for="n in 2" :key="n" class="flex shrink-0">
        <UiMarqueeItem
          v-for="(word, i) in marqueeWords"
          :key="`${n}-${i}`"
          :word="word"
        />
      </div>
    </div>
  </section>
</template>
