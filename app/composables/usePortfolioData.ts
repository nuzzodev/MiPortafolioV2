// composables/usePortfolioData.ts
export interface TechItem {
  name: string;
  icon?: string;
  featured?: boolean;
}

export interface StackGroup {
  category: string;
  icon?: string;
  items: TechItem[];
}
export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  role: "BACKEND" | "FULLSTACK" | "FRONTEND";
  tags: string[];
  link?: string;
  year: string;
}

export const usePortfolioData = () => {
  const nav = [
    { label: "PROYECTOS", href: "#work" },
    { label: "ACERCA DE MÍ", href: "#about" },
    { label: "STACK", href: "#stack" },
    { label: "SERVICIOS", href: "#services" },
    { label: "CONTACTO", href: "#contact" },
  ];

  const marqueeWords = [
    "ENFOQUE BACKEND",
    "RUBY · GO · JAVA · PYTHON",
    "SIMPLE POR DISEÑO",
    "HECHO PARA DURAR",
  ];

  const projects: ProjectItem[] = [
    {
      id: "001",
      title: "Adaptador Profit",
      category: "LECTOR DE PRECIOS EN BASE A PROFIT 2KDOCE",
      role: "FULLSTACK",
      tags: ["Nuxt 4", "PostgreSQL", "Sql Server"],
      link: "https://github.com/nuzzodev",
      year: "2026",
    },
    {
      id: "002",
      title: "TrackIT",
      category: "GESTIÓN DE INVENTARIO INTERNO",
      role: "FULLSTACK",
      tags: ["Ruby on Rails", "Vue.js", "PostgreSQL"],
      link: "https://github.com/nuzzodev",
      year: "2026",
    },
    {
      id: "003",
      title: "Ajeate",
      category: "SISTEMA DE PEDIDOS Y VENTAS",
      role: "FULLSTACK",
      tags: ["Ruby on Rails", "Vue Js", "PostgreSQL"],
      link: "https://github.com/nuzzodev",
      year: "2025",
    },
    {
      id: "004",
      title: "Monolith Core",
      category: "SYSTEM ARCHITECTURE",
      role: "BACKEND",
      tags: ["Java", "Spring Boot", "SQL Server"],
      link: "https://github.com/nuzzodev",
      year: "2025",
    },
  ];

  const services = [
    "Arquitectura de Software",
    "Desarrollo Backend",
    "Diseño de Bases de Datos",
    "Refactorización de Sistemas",
    "Integración de Servicios",
    "Frontend con Nuxt & Vue",
  ];

  const stackGroups: StackGroup[] = [
    {
      category: "BACKEND & DB",
      icon: "i-heroicons-cpu-chip-20-solid",
      items: [
        { name: "Ruby on Rails", icon: "i-simple-icons-rubyonrails", featured: true },
        { name: "Go", icon: "i-simple-icons-go", featured: true },
        { name: "Java", icon: "i-simple-icons-oracle" },
        { name: "Python", icon: "i-simple-icons-python" },
        { name: "PostgreSQL", icon: "i-simple-icons-postgresql", featured: true },
        { name: "SQL Server", icon: "i-simple-icons-microsoftsqlserver" },
      ],
    },
    {
      category: "FRONTEND & UI",
      icon: "i-heroicons-window-20-solid",
      items: [
        { name: "Nuxt 4", icon: "i-simple-icons-nuxtdotjs", featured: true },
        { name: "Hotwire", icon: "i-simple-icons-hotwire", featured: true },
        
        { name: "TypeScript", icon: "i-simple-icons-typescript" },
        { name: "Tailwind CSS", icon: "i-simple-icons-tailwindcss" },
        { name: "Bootstrap", icon: "i-simple-icons-bootstrap" },
      ],
    },
    {
      category: "HERRAMIENTAS ",
      icon: "i-heroicons-wrench-screwdriver-20-solid",
      items: [
        { name: "Git", icon: "i-simple-icons-git", featured: true },
        { name: "Github", icon: "i-simple-icons-github" },
        { name: "Bitbucket", icon: "i-simple-icons-bitbucket" },
        { name: "Trello", icon: "i-simple-icons-trello" },
        { name: "VS Code", icon: "i-simple-icons-visualstudiocode" },
        { name: "Zed", icon: "i-simple-icons-zedindustries" },
      ],
    },
  ];

  return { nav, marqueeWords, projects, services, stackGroups };
};