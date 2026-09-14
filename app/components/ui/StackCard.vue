<!-- components/ui/StackCard.vue -->
<script setup lang="ts">
import type { TechItem } from "~/composables/usePortfolioData";

defineProps<{
  category: string;
  categoryIcon?: string;
  items: TechItem[];
}>();
</script>

<template>
  <div
    class="p-6 md:p-8 bg-bg-soft border border-border transition-all duration-300 hover:border-border/80 flex flex-col justify-between group"
  >
    <div>
      <div
        class="flex items-center justify-between pb-6 mb-6 border-b border-border/60"
      >
        <div class="flex items-center gap-3">
          <UIcon
            v-if="categoryIcon"
            :name="categoryIcon"
            class="w-5 h-5 text-primary shrink-0"
          />
          <h3
            class="text-sm md:text-base tracking-[0.25em] font-black uppercase text-ink"
          >
            {{ category }}
          </h3>
        </div>
        <span
          class="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors duration-300"
        />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div
          v-for="tech in items"
          :key="tech.name"
          class="p-3.5 border transition-all duration-300 flex items-center justify-between group/item"
          :class="[
            tech.featured
              ? 'border-primary/40 bg-primary/10 shadow-[0_0_15px_rgba(255,107,26,0.05)]'
              : 'border-border/60 bg-bg/40 hover:border-border hover:bg-bg/80',
          ]"
        >
          <div class="flex items-center gap-2.5 min-w-0">
            <UIcon
              v-if="tech.icon"
              :name="tech.icon"
              class="w-4 h-4 shrink-0 transition-colors duration-300"
              :class="
                tech.featured
                  ? 'text-primary'
                  : 'text-muted group-hover/item:text-primary'
              "
            />
            <span
              class="text-xs md:text-sm truncate"
              :class="
                tech.featured
                  ? 'font-semibold text-ink'
                  : 'font-medium text-ink/80'
              "
            >
              {{ tech.name }}
            </span>
          </div>

          <span
            v-if="tech.featured"
            class="w-1.5 h-1.5 rounded-full bg-primary shrink-0 ml-1 shadow-[0_0_8px_#FF6B1A]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
