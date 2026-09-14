<!-- components/sections/ManifestoSection.vue -->
<template>
  <section id="about" class="px-6 md:px-12 py-32 md:py-48">
    <div class="grid md:grid-cols-12 gap-12 md:gap-16">
      <div class="md:col-span-3">
        <UiSectionLabel number="01" text="MANIFIESTO" />
      </div>

      <div class="md:col-span-9">
        <h2
          class="text-3xl md:text-5xl leading-[1.05] font-medium tracking-tight"
        >
          No programo para que funcione.
          <span class="opacity-40">Programo para que dure.</span>
          Cada decisión es arquitectura. Cada capa, una intención.
          <span class="italic font-light">
            El objetivo no es que compile — es que escale.
          </span>
        </h2>

        <div
          class="mt-16 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10 text-sm opacity-70 leading-relaxed"
        >
          <p>
            Construyo con Clean Architecture y arquitectura hexagonal.
            Separación de responsabilidades, dominio aislado, dependencias que
            apuntan hacia adentro.
          </p>
          <p>
            Elijo Ruby, Go, Java o Python según el problema, no según la moda.
            El stack sirve al diseño, nunca al revés.
          </p>
          <p>
            Si me toca frontend, lo hago bien: claro, usable, sin ruido. Pero mi
            terreno es el backend, donde las decisiones se pagan a años.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
