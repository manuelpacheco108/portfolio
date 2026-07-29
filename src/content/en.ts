import type { Content } from "./types";
import { links } from "./links";

export const en: Content = {
  locale: "en",

  nav: {
    services: "Services",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
  },

  hero: {
    greeting: "Hi, I'm",
    name: "Manuel A. Pacheco Motoa",
    title: "Software Engineer — Generative AI, Automation & Serverless",
    pitch:
      "I integrate generative AI and custom software into business processes, combining local LLMs, workflow automation, and serverless cloud deployments.",
    ctaContact: "Get in touch",
    ctaProjects: "See my work",
  },

  services: {
    heading: "Services",
    blurb: "What I can build for your business.",
    items: [
      {
        title: "Generative AI & Automation Integration",
        description:
          "Local LLMs (Ollama) and automated workflows with Power Automate and Python that remove manual, repetitive work from your operations.",
        tags: ["Ollama", "Power Automate", "Python", "Claude Code"],
      },
      {
        title: "Serverless Web Development",
        description:
          "Fast, modern web applications built with React and TypeScript, deployed on serverless platforms like Firebase — low cost, high performance.",
        tags: ["React", "TypeScript", "Firebase", "Next.js"],
      },
      {
        title: "Local RAG Architecture",
        description:
          "Privacy-first Retrieval-Augmented Generation systems running on local generative models, so sensitive knowledge never leaves your infrastructure.",
        tags: ["RAG", "Local LLMs", "Blueprint Architecture", "Docker"],
      },
    ],
  },

  projects: {
    heading: "Projects",
    blurb: "Selected personal work — from web platforms to desktop tools.",
    items: [
      {
        name: "Go Street 44",
        tagline: "Automotive marketplace & motorsports community",
        description:
          "Spanish-language platform for Latin American car culture: live racing coverage, a parts marketplace, and professional vehicle services — with AI agents assisting users across the platform.",
        features: [
          "Live motorsports news (Formula 1, MotoGP, national circuits)",
          "Parts marketplace with vendor ratings and city-level locations",
          "Vehicle services hub: ECU tuning, maintenance",
          "AI agents assisting data across the platform",
        ],
        tech: ["React", "TypeScript", "Firebase", "Groq"],
        liveUrl: links.projects.goStreet44,
        availabilityNote: "Private repository — live demo available",
        image: "/projects/gostreet44.webp",
        imageAlt: "Go Street 44 web app screenshot",
      },
      {
        name: "G-44",
        tagline: "Automatic video editor for Windows",
        description:
          "Desktop app that automates video editing: it detects silences, tracks beats with a custom FFT analysis, and renders beat-aligned multi-clip edits with hardware-accelerated encoding.",
        features: [
          "Silence detection and beat tracking via custom FFT — no external audio libraries",
          "Multi-clip editing aligned to the music",
          "Hardware-accelerated FFmpeg encoding with graceful fallback",
          "Real-time preview and single-file x64 distribution",
        ],
        tech: ["C#", "WPF", ".NET 8", "FFmpeg", "xUnit"],
        repoUrl: links.projects.g44Repo,
        availabilityNote: "Windows desktop application",
        imageAlt: "G-44 video editor interface screenshot",
      },
      {
        name: "GoSlides44",
        tagline: "Markdown → PowerPoint generator",
        description:
          "Node.js tool that turns Markdown files and images into themed .pptx decks — automatic layouts, YAML-driven themes, and speaker notes, through both a local web UI and a CLI.",
        features: [
          "YAML frontmatter for metadata and hex-color themes",
          "Automatic layouts: text+image, full-bleed, multi-image grids",
          "Speaker notes from HTML comments",
          "Dual interface: local web UI and CLI runner",
        ],
        tech: ["Node.js", "JavaScript"],
        repoUrl: links.projects.goSlides44Repo,
        availabilityNote: "Runs locally — web UI or CLI",
        imageAlt: "GoSlides44 markdown-to-pptx tool screenshot",
      },
    ],
  },

  skills: {
    heading: "Skills",
    blurb: "The toolbox I work with every day.",
    groups: [
      {
        category: "Frontend",
        skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      },
      {
        category: "Backend & Cloud",
        skills: ["Firebase", "Python", "Node.js", "Render", "REST APIs"],
      },
      {
        category: "Automation & Low-Code",
        skills: [
          "Power Automate (Web/Desktop)",
          "Power BI",
          "Power Query",
          "Excel VBA",
          "Office Scripts",
        ],
      },
      {
        category: "AI & Tools",
        skills: ["Ollama", "Claude Code", "Groq", "Docker", "Git / GitHub"],
      },
    ],
  },

  experience: {
    heading: "Enterprise Experience",
    blurb: "Selected work under NDA — described at a safe level of detail.",
    items: [
      {
        title: "Administrative Process & Data Automation",
        role: "Software Engineer — Automation Development",
        description:
          "Replaced manual data processing and fragmented reporting with automated pipelines and AI inference: enterprise workflows built on Power Automate, data models in Power BI and Power Query, and local LLM inference with Ollama.",
        tech: ["Ollama", "Power Automate", "Power BI", "Excel VBA", "Power Query"],
        // impact: pending — quantified metrics to be added
      },
    ],
  },

  contact: {
    heading: "Let's build something",
    blurb:
      "Available for freelance projects and collaborations in AI integration, automation, and web development.",
    emailLabel: "Email me",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Download CV",
  },

  footer: {
    note: "Built with React + Firebase.",
  },
};
