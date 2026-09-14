<!-- components/layout/SiteHeader.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { nav } = usePortfolioData();
const isScrolled = ref(false);

const handleScroll = () => {
  // Se activa el estado "scrolled" cuando se baja más de 20px
  isScrolled.value = window.scrollY > 20;
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
          ? 'max-w-4xl mx-4 px-6 py-3 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)]'
          : 'max-w-full px-6 md:px-12 py-3 bg-transparent border-transparent',
      ]"
    >
      <a href="#top" class="text-[11px] tracking-[0.35em] font-black">
        NuzzoDev<span class="opacity-50">®</span>
      </a>

      <ul class="hidden md:flex items-center gap-8 lg:gap-12">
        <li v-for="item in nav" :key="item.label">
          <a
            :href="item.href"
            class="text-[11px] tracking-[0.35em] font-medium hover:opacity-40 transition-opacity duration-300"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <a
        href="#contact"
        class="text-[11px] tracking-[0.35em] font-medium flex items-center gap-2"
      >
        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
        DISPONIBLE
      </a>
    </nav>
  </header>
</template>
