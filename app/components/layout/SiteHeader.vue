<!-- components/TheHeader.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { nav } = usePortfolioData();
const isScrolled = ref(false);
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 20;
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 md:pt-6 transition-all duration-500 ease-out"
  >
    <nav
      class="w-full flex items-center justify-between transition-all duration-500 ease-out"
      :class="[
        isScrolled
          ? 'max-w-5xl md:max-w-6xl mx-4 md:mx-8 px-6 md:px-10 py-4 rounded-full bg-bg-soft/75 backdrop-blur-md border border-border shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'
          : 'max-w-full px-6 md:px-12 py-3 bg-transparent border-transparent',
      ]"
    >
      <a
        href="#top"
        class="text-[11px] tracking-[0.35em] font-black text-ink shrink-0"
      >
        NUZZO<span class="text-muted">DEV</span>
      </a>

      <ul class="hidden md:flex items-center gap-6 lg:gap-10">
        <li v-for="item in nav" :key="item.label">
          <a
            :href="item.href"
            class="text-[11px] tracking-[0.3em] font-medium text-ink hover:text-primary transition-colors duration-300"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        class="text-[11px] tracking-[0.35em] font-medium flex items-center gap-2.5 text-ink shrink-0"
      >
        <span
          class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#FF6B1A]"
        />
        DISPONIBLE
      </a>
    </nav>
  </header>
</template>
