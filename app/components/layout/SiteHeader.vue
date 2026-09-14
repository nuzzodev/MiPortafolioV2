<!-- components/TheHeader.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const { nav } = usePortfolioData();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
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

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
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
    <div
      class="w-full transition-all duration-500 ease-out relative"
      :class="[
        isScrolled
          ? 'max-w-5xl md:max-w-6xl mx-4 md:mx-8'
          : 'max-w-full px-6 md:px-12',
      ]"
    >
      <nav
        class="w-full flex items-center justify-between transition-all duration-500 ease-out"
        :class="[
          isScrolled
            ? 'px-6 md:px-10 py-4 rounded-full bg-bg-soft/75 backdrop-blur-md border border-border shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'
            : 'py-3 bg-transparent border-transparent',
        ]"
      >
        <a
          href="#top"
          class="text-[11px] tracking-[0.35em] font-black text-ink shrink-0"
          @click="closeMobileMenu"
        >
          NUZZO<span class="text-muted">DEV</span>
        </a>

        <!-- Navegación Desktop -->
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

        <!-- Acciones a la derecha -->
        <div class="flex items-center gap-4 shrink-0">
          <a
            href="#contact"
            class="hidden sm:flex text-[11px] tracking-[0.35em] font-medium items-center gap-2.5 text-ink"
            @click="closeMobileMenu"
          >
            <span
              class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#FF6B1A]"
            />
            DISPONIBLE
          </a>

          <!-- Botón Hamburguesa / Cierre para móviles -->
          <button
            type="button"
            class="md:hidden flex items-center justify-center p-1.5 text-ink hover:text-primary transition-colors duration-300 focus:outline-none"
            aria-label="Abrir menú"
            @click="toggleMobileMenu"
          >
            <UIcon
              :name="
                isMobileMenuOpen
                  ? 'i-heroicons-x-mark-20-solid'
                  : 'i-heroicons-bars-3-20-solid'
              "
              class="w-5 h-5"
            />
          </button>
        </div>
      </nav>

      <!-- Dropdown desplegable móvil -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-2 scale-95"
      >
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden absolute left-0 right-0 mt-2 p-6 rounded-2xl bg-bg-soft/95 backdrop-blur-xl border border-border shadow-[0_16px_40px_0_rgba(0,0,0,0.6)] flex flex-col gap-5 z-50"
        >
          <ul class="flex flex-col gap-4">
            <li v-for="item in nav" :key="item.label">
              <a
                :href="item.href"
                class="text-xs tracking-[0.3em] font-medium text-ink hover:text-primary transition-colors duration-300 block py-1"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>

          <div
            class="pt-4 border-t border-border/60 flex items-center justify-between"
          >
            <a
              href="#contact"
              class="text-[10px] tracking-[0.3em] font-medium flex items-center gap-2 text-ink"
              @click="closeMobileMenu"
            >
              <span
                class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#FF6B1A]"
              />
              DISPONIBLE
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>
