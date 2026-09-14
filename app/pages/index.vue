<!-- pages/index.vue -->
<script setup lang="ts">
useHead({
  title: "Diego Nuzzo — Portfolio",
  link: [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap",
    },
  ],
  bodyAttrs: { class: "bg-[#0B0B0B]" },
});
</script>

<template>
  <div
    class="min-h-screen bg-[#0B0B0B] text-[#EDE8DC] antialiased overflow-x-hidden"
    style="font-family: &quot;Inter&quot;, system-ui, sans-serif"
  >
    <LayoutSiteHeader />

    <SectionsHeroSection />
    <SectionsMarqueeSection />
    <SectionsManifestoSection />
    <SectionsWorkSection />
    <SectionsServicesSection />
    <SectionsContactSection />

    <LayoutSiteFooter />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: #0b0b0b;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee {
  animation: marquee 40s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    animation: none;
  }
}
</style>
