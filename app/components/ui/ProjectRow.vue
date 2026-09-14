<!-- components/ui/ProjectRow.vue -->
<script setup lang="ts">
export interface ProjectRowProps {
  id: string;
  title: string;
  category: string;
  role: "BACKEND" | "FULLSTACK" | "FRONTEND";
  tags: string[];
  link?: string;
  year: string;
}

defineProps<ProjectRowProps>();
</script>

<template>
  <li class="border-b border-border">
    <component
      :is="link ? 'a' : 'div'"
      :href="link"
      :target="link ? '_blank' : undefined"
      :rel="link ? 'noopener noreferrer' : undefined"
      class="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 px-2 md:px-6 transition-all duration-300 hover:bg-bg-soft"
      :class="{ 'cursor-pointer': link }"
    >
      <!-- Columna Izquierda: ID + Título + Role Badge -->
      <div
        class="flex items-start md:items-center gap-4 md:gap-8 min-w-0 mb-4 md:mb-0"
      >
        <span
          class="text-[11px] tracking-[0.3em] text-muted group-hover:text-ink transition-colors duration-300 tabular-nums pt-1 md:pt-0"
        >
          {{ id }}
        </span>

        <div
          class="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 min-w-0"
        >
          <h3
            class="text-xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight truncate text-ink group-hover:text-primary transition-colors duration-300"
          >
            {{ title }}
          </h3>

          <!-- Role Badge -->
          <span
            class="w-fit text-[9px] tracking-[0.2em] font-bold px-2 py-0.5 border border-primary/30 bg-primary/10 text-primary uppercase"
          >
            {{ role }}
          </span>
        </div>
      </div>

      <!-- Columna Derecha: Tech Tags + Categoría + Año + Icono -->
      <div
        class="flex items-center justify-between md:justify-end gap-6 md:gap-8 shrink-0"
      >
        <!-- Tech Tags -->
        <div class="hidden lg:flex items-center gap-1.5">
          <span
            v-for="tag in tags"
            :key="tag"
            class="text-[10px] tracking-wider font-mono px-2 py-0.5 border border-border/80 bg-bg/60 text-muted group-hover:border-border group-hover:text-ink transition-colors duration-300"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex items-center gap-6">
          <span
            class="hidden sm:inline-block text-[11px] tracking-[0.25em] text-muted group-hover:text-ink transition-colors duration-300 uppercase"
          >
            {{ category }}
          </span>

          <span
            class="text-[11px] tracking-[0.3em] text-muted group-hover:text-ink transition-colors duration-300 tabular-nums"
          >
            {{ year }}
          </span>

          <UIcon
            v-if="link"
            name="i-heroicons-arrow-up-right-20-solid"
            class="w-5 h-5 text-muted group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </component>
  </li>
</template>
