<!-- components/sections/ContactSection.vue -->
<template>
  <section
    id="contact"
    class="px-6 md:px-12 py-32 md:py-48 bg-bg-soft text-ink"
  >
    <UiSectionLabel number="04" text="CONTACTO" class="mb-12 text-muted" />

    <h2
      class="text-[16vw] md:text-[9vw] leading-[0.85] font-black tracking-[-0.05em] uppercase text-ink"
    >
      Hablemos<br />
      <span class="italic font-light">en serio</span><br />
      del código.
    </h2>

    <div
      class="mt-20 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-10"
    >
      <div class="space-y-8">
        <div>
          <p class="text-[11px] tracking-[0.3em] text-muted mb-3">EMAIL</p>
          <a
            href="mailto:nuzzodev@gmail.com"
            class="text-xl md:text-3xl font-medium text-ink hover:text-primary transition-colors duration-300"
          >
            nuzzodev@gmail.com
          </a>
        </div>

        <div>
          <p class="text-[11px] tracking-[0.3em] text-muted mb-3">LINKEDIN</p>
          <a
            href="https://linkedin.com/in/nuzzodev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xl md:text-3xl font-medium text-ink hover:text-primary transition-colors duration-300"
          >
            /in/nuzzodev
          </a>
        </div>
      </div>

      <div class="flex flex-wrap gap-3">
        <UButton
          size="xl"
          class="!rounded-none !bg-primary !text-bg !px-8 !py-4 !text-[11px] !tracking-[0.35em] !font-medium hover:!bg-primary/90 transition-colors duration-300"
          to="mailto:nuzzodev@gmail.com"
        >
          ESCRIBIRME
        </UButton>
        <UButton
          size="xl"
          variant="outline"
          class="!rounded-none !border-border !text-ink !px-8 !py-4 !text-[11px] !tracking-[0.35em] !font-medium hover:!bg-border/40 hover:!text-primary transition-colors duration-300"
          to="/cv.pdf"
          target="_blank"
        >
          DESCARGAR CV
        </UButton>
      </div>
    </div>
  </section>
</template>
