import type { Content } from "./types";
import { links } from "./links";

export const es: Content = {
  locale: "es",

  nav: {
    services: "Servicios",
    projects: "Proyectos",
    skills: "Habilidades",
    experience: "Experiencia",
    contact: "Contacto",
  },

  hero: {
    greeting: "Hola, soy",
    name: "Manuel A. Pacheco Motoa",
    title: "Ingeniero de Software — IA Generativa, Automatización y Serverless",
    pitch:
      "Integro IA generativa y software a la medida en procesos de negocio, combinando LLMs locales, automatización de flujos de trabajo y despliegues serverless en la nube.",
    ctaContact: "Contáctame",
    ctaProjects: "Ver mi trabajo",
  },

  services: {
    heading: "Servicios",
    blurb: "Lo que puedo construir para tu negocio.",
    items: [
      {
        title: "Integración de IA Generativa y Automatización",
        description:
          "LLMs locales (Ollama) y flujos automatizados con Power Automate y Python que eliminan el trabajo manual y repetitivo de tus operaciones.",
        tags: ["Ollama", "Power Automate", "Python", "Claude Code"],
      },
      {
        title: "Desarrollo Web Serverless",
        description:
          "Aplicaciones web modernas y rápidas con React y TypeScript, desplegadas en plataformas serverless como Firebase — bajo costo, alto rendimiento.",
        tags: ["React", "TypeScript", "Firebase", "Next.js"],
      },
      {
        title: "Arquitectura RAG Local",
        description:
          "Sistemas de Generación Aumentada por Recuperación (RAG) enfocados en privacidad, ejecutados sobre modelos generativos locales: tu conocimiento sensible nunca sale de tu infraestructura.",
        tags: ["RAG", "LLMs locales", "Arquitectura Blueprint", "Docker"],
      },
    ],
  },

  projects: {
    heading: "Proyectos",
    blurb: "Trabajo personal seleccionado — de plataformas web a herramientas de escritorio.",
    items: [
      {
        name: "Go Street 44",
        tagline: "Marketplace automotriz y comunidad de motorsports",
        description:
          "Plataforma en español para la cultura automotriz latinoamericana: cobertura de carreras en vivo, marketplace de repuestos y servicios profesionales para vehículos — con agentes de IA asistiendo a los usuarios en toda la plataforma.",
        features: [
          "Noticias de motorsports en vivo (Fórmula 1, MotoGP, circuitos nacionales)",
          "Marketplace de repuestos con calificaciones de vendedores y ubicación por ciudad",
          "Centro de servicios vehiculares: reprogramación de ECU, mantenimiento",
          "Agentes de IA asistiendo los datos de toda la plataforma",
        ],
        tech: ["React", "TypeScript", "Firebase", "Groq"],
        liveUrl: links.projects.goStreet44,
        availabilityNote: "Repositorio privado — demo en vivo disponible",
        image: "/projects/gostreet44.webp",
        imageAlt: "Captura de pantalla de la aplicación web Go Street 44",
      },
      {
        name: "G-44",
        tagline: "Editor de video automático para Windows",
        description:
          "Aplicación de escritorio que automatiza la edición de video: detecta silencios, sigue el ritmo con un análisis FFT propio y renderiza ediciones multi-clip sincronizadas con la música usando codificación acelerada por hardware.",
        features: [
          "Detección de silencios y seguimiento de ritmo con FFT propio — sin librerías de audio externas",
          "Edición multi-clip alineada a la música",
          "Codificación FFmpeg acelerada por hardware con degradación elegante",
          "Vista previa en tiempo real y distribución x64 en un solo archivo",
        ],
        tech: ["C#", "WPF", ".NET 8", "FFmpeg", "xUnit"],
        repoUrl: links.projects.g44Repo,
        availabilityNote: "Aplicación de escritorio para Windows",
        image: "/projects/g44.webp",
        imageAlt: "Captura de pantalla de la interfaz del editor de video G-44",
      },
      {
        name: "GoSlides44",
        tagline: "Generador de Markdown → PowerPoint",
        description:
          "Herramienta en Node.js que convierte archivos Markdown e imágenes en presentaciones .pptx con temas — diseños automáticos, temas definidos en YAML y notas del presentador, mediante una interfaz web local y una CLI.",
        features: [
          "Frontmatter YAML para metadatos y temas con colores hex",
          "Diseños automáticos: texto+imagen, imagen completa, cuadrículas multi-imagen",
          "Notas del presentador desde comentarios HTML",
          "Doble interfaz: web local y CLI",
        ],
        tech: ["Node.js", "JavaScript"],
        repoUrl: links.projects.goSlides44Repo,
        availabilityNote: "Se ejecuta localmente — interfaz web o CLI",
        image: "/projects/goslides44.webp",
        imageAlt: "Captura de pantalla de la herramienta GoSlides44 de markdown a pptx",
      },
    ],
  },

  skills: {
    heading: "Habilidades",
    blurb: "Las herramientas con las que trabajo todos los días.",
    groups: [
      {
        category: "Frontend",
        skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      },
      {
        category: "Backend y Nube",
        skills: ["Firebase", "Python", "Node.js", "Render", "APIs REST"],
      },
      {
        category: "Automatización y Low-Code",
        skills: [
          "Power Automate (Web/Desktop)",
          "Power BI",
          "Power Query",
          "Excel VBA",
          "Office Scripts",
        ],
      },
      {
        category: "IA y Herramientas",
        skills: ["Ollama", "Claude Code", "Groq", "Docker", "Git / GitHub"],
      },
    ],
  },

  experience: {
    heading: "Experiencia Empresarial",
    blurb: "Trabajo seleccionado bajo NDA — descrito a un nivel seguro de detalle.",
    items: [
      {
        title: "Automatización de Procesos Administrativos y Datos",
        role: "Ingeniero de Software — Desarrollo de Automatización",
        description:
          "Reemplacé el procesamiento manual de datos y los reportes fragmentados con pipelines automatizados e inferencia de IA: flujos empresariales sobre Power Automate, modelos de datos en Power BI y Power Query, e inferencia con LLMs locales usando Ollama.",
        tech: ["Ollama", "Power Automate", "Power BI", "Excel VBA", "Power Query"],
        // impact: pendiente — métricas cuantificadas por agregar
      },
    ],
  },

  contact: {
    heading: "Construyamos algo",
    blurb:
      "Disponible para proyectos freelance y colaboraciones en integración de IA, automatización y desarrollo web.",
    emailLabel: "Escríbeme",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Descargar CV",
  },

  footer: {
    note: "Construido con React + Firebase.",
  },
};
