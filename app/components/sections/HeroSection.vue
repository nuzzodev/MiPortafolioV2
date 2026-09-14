<!-- components/sections/HeroSection.vue -->
<template>
  <section
    id="top"
    class="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-10"
  >
    <div class="flex-1 flex flex-col justify-center">
      <p class="text-[11px] tracking-[0.4em] text-muted mb-10 md:mb-14">
        MI PORTAFOLIO
      </p>

      <h1
        class="text-[20vw] md:text-[13vw] leading-[0.82] font-black tracking-[-0.05em] uppercase text-ink"
      >
        Diego<br />
        <span class="italic font-light">Nuzzo</span>
      </h1>

      <p
        class="mt-10 md:mt-14 max-w-md text-sm md:text-base text-muted leading-relaxed tracking-wide"
      >
        TSU en Informática enfocado en backend, construyo soluciones con Ruby,
        Go, Java y Python, y me apoyo en Nuxt, Vue y TypeScript cuando el
        proyecto lo requiere.
      </p>
    </div>

    <div
      class="hidden md:flex absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex-col gap-6 text-[11px] tracking-[0.35em] z-10"
    >
      <a
        href="https://github.com/nuzzodev"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted hover:text-primary transition-colors duration-300"
        >GITHUB ↗</a
      >
      <a
        href="https://linkedin.com/in/nuzzodev"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted hover:text-primary transition-colors duration-300"
        >LINKEDIN ↗</a
      >
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="text-muted hover:text-primary transition-colors duration-300"
        >CURRICULUM ↗</a
      >
    </div>

    <div
      class="flex items-end justify-between text-[11px] tracking-[0.35em] text-muted pt-10"
    >
      <span>SCROLL ↓</span>
      <span class="hidden md:block">BACKEND DEVELOPER</span>
      <span>EST. 2026</span>
    </div>
  </section>
</template>
