<!-- components/layout/SiteFooter.vue -->
<template>
  <footer
    class="px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] tracking-[0.3em] opacity-50"
  >
    <span>©DIEGO NUZZO</span>

    <div class="flex gap-8">
      <a
        href="https://github.com/nuzzodev"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-100 transition-opacity"
      >
        <UIcon name="i-simple-icons-github" class="w-4 h-4" />
      </a>
      <a
        href="https://linkedin.com/in/nuzzodev"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-100 transition-opacity"
      >
        <UIcon name="i-simple-icons-linkedin" class="w-4 h-4" />
      </a>
      <a
        href="mailto:nuzzodev@gmail.com"
        class="hover:opacity-100 transition-opacity"
      >
        <UIcon name="i-lucide-mail" class="w-4 h-4" />
      </a>
    </div>
  </footer>
</template>
