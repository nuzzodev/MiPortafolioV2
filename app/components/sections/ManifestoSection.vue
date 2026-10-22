<!-- components/sections/ManifestoSection.vue -->
<template>
  <section id="about" class="px-6 md:px-12 py-32 md:py-48 bg-bg text-ink">
    <div class="grid md:grid-cols-12 gap-12 md:gap-16">
      <div class="md:col-span-3">
        <UiSectionLabel number="01" text="MANIFIESTO" />
      </div>

      <div class="md:col-span-9">
        <h2
          class="text-3xl md:text-5xl leading-[1.05] font-medium tracking-tight text-ink"
        >
          No solo programo para que funcione.
          <span class="text-muted">Programo para que dure.</span>
          Cada decisión es arquitectura. Cada capa, una intención.
          <span class="italic font-light">
            El objetivo no es únicamente que compile — es que escale.
          </span>
        </h2>

        <div
          class="mt-16 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10 text-sm text-muted leading-relaxed"
        >
          <p>
            Construyo con MVC y si el caso lo requiere, Clean Architecture o
            arquitectura hexagonal. Separación de responsabilidades, dominio
            aislado, dependencias que apuntan hacia adentro.
          </p>
          <p>
            Al hacer frontend, lo hago bien: claro, sin ruido y con una buena
            UX. Pero mi terreno es el backend, donde las buenas decisiones
            consolidan usuarios.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
