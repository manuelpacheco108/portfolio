/**
 * Content model — single source of truth for all portfolio copy.
 * Both `en.ts` and `es.ts` must satisfy `Content`, so a missing
 * translation is a compile error.
 */

export type Locale = "en" | "es";

export interface NavLabels {
  services: string;
  projects: string;
  skills: string;
  experience: string;
  contact: string;
}

export interface Hero {
  greeting: string;
  name: string;
  title: string;
  pitch: string;
  ctaContact: string;
  ctaProjects: string;
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Shown when there is no public link (e.g. private repo, desktop app) */
  availabilityNote?: string;
  image?: string;
  imageAlt: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  role: string;
  description: string;
  tech: string[];
  /** Quantified results — pending from client data */
  impact?: string;
}

export interface ContactSection {
  heading: string;
  blurb: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
  cvLabel: string;
}

export interface SectionHeading {
  heading: string;
  blurb?: string;
}

export interface Content {
  locale: Locale;
  nav: NavLabels;
  hero: Hero;
  services: SectionHeading & { items: Service[] };
  projects: SectionHeading & { items: Project[] };
  skills: SectionHeading & { groups: SkillGroup[] };
  experience: SectionHeading & { items: ExperienceItem[] };
  contact: ContactSection;
  footer: { note: string };
}
