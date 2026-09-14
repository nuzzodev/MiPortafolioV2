// composables/usePortfolioData.ts
export const usePortfolioData = () => {
  const nav = [
    { label: "PROYECTOS", href: "#work" },
    { label: "ACERCA DE MÍ", href: "#about" },
    { label: "SERVICIOS", href: "#services" },
    { label: "CONTACTO", href: "#contact" },
  ];

  const marqueeWords = [
    "ENFOQUE BACKEND",
    "RUBY · GO · JAVA · PYTHON",
    "SIMPLE POR DISEÑO",
    "HECHO PARA DURAR",
  ];

  const projects = [
    { id: "001", title: "Monolith", category: "DIGITAL EXPERIENCE", year: "2025" },
    { id: "002", title: "Nocturne", category: "E-COMMERCE", year: "2024" },
    { id: "003", title: "Reverie", category: "BRAND SYSTEM", year: "2024" },
    { id: "004", title: "Gospel", category: "WEB APPLICATION", year: "2023" },
    { id: "005", title: "Afterlife", category: "EDITORIAL", year: "2023" },
  ];

  const services = [
  "Arquitectura de Software",
  "Desarrollo Backend",
  "Diseño de Bases de Datos",
  "Refactorización de Sistemas",
  "Integración de Servicios",
  "Frontend con Nuxt & Vue",
];

  return { nav, marqueeWords, projects, services };
};