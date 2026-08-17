/**
 * ============================================================
 * SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * ============================================================
 */

export const profile = {
  name: "Mohammed Aadil",
  brand: "Mohammed Aadil",
  descriptor: "Full-Stack, Backend, AI",
  location: "Chennai, India",
  // Hero intro (sans). Company is rendered in the accent colour.
  introLead: "Software engineer at ",
  introCompany: "Indus Novateur",
  introTail:
    ". I turn research into production — a published LLM researcher (arXiv), building end-to-end with NestJS, Next.js, TypeScript, CI/CD, and Azure.",
  availability:
    "Always happy to talk backend, AI, or a good engineering problem.",
  email: "thasinaadil@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/mohammed-aadil-48389a25a",
    github: "https://github.com/mohammedaadils",
    medium: "https://medium.com/@thasinaadil_10046",
    resume: "/resume.pdf",
  },
  photo: "/photo.jpg",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  body: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Indus Novateur Softech",
    period: "Jun 2026 — Present",
    body:
      "Building core modules of a cloud-native, microservices-based enterprise platform. Contributing to REST API and relational schema design for distributed data workflows, with CI/CD on Azure DevOps and infrastructure-as-code for service deployment.",
    stack: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Azure App Service",
      "Azure DevOps",
      "CI/CD",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Plasmid",
    period: "Jul 2024 — Sep 2024",
    body:
      "Built responsive UI components across 4+ web modules, reducing reported frontend issues by ~30% and improving cross-device UX.",
    stack: ["HTML", "CSS", "JavaScript", "Flexbox/Grid"],
  },
  {
    role: "SDE Intern",
    company: "Tactii (formerly TalentAccurate)",
    period: "Aug 2023 — Apr 2024",
    body:
      "Built 5+ backend APIs that generate REST API test cases from natural-language prompts, cutting manual QA effort by ~60% per cycle. Integrated GPT-2 with prompt engineering to produce Postman-compatible test cases at ~80% structural accuracy across 200+ prompts.",
    stack: ["Python", "Flask", "FastAPI", "GPT-2", "Hugging Face", "PyTorch"],
  },
];

export type Research = {
  title: string;
  venue: string;
  date: string;
  category: string;
  blurb: string;
  url: string;
};

export const research: Research[] = [
  {
    title: "Automating REST API Postman Test Cases Using LLM",
    venue: "arXiv",
    date: "Apr 2024",
    category: "LLM · Testing",
    blurb:
      "A method to automatically generate REST API test cases using large language models, improving testing efficiency and reducing manual QA effort.",
    url: "https://arxiv.org/abs/2404.10678",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "C/C++"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Responsive UI/UX"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Spring Boot",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices",
      "Distributed Systems",
    ],
  },
  {
    label: "AI / LLM",
    items: [
      "Prompt Engineering",
      "LLM Integration",
      "Hugging Face Transformers",
      "PyTorch",
      "TensorFlow",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "DevOps & Tools",
    items: [
      "CI/CD",
      "Docker",
      "Azure App Service",
      "Azure DevOps",
      "Infrastructure-as-Code",
      "GitHub Actions",
      "AWS",
      "Git",
      "Linux",
      "Postman",
    ],
  },
];

export type Education = {
  degree: string;
  school: string;
  subtitle: string;
  year: string;
  coursework: string[];
  highlights: string[];
};

export const education: Education[] = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
    subtitle: "Vandalur, Chennai",
    year: "2022 — 2026",
    coursework: [],
    highlights: ["CGPA 8.54 / 10.0", "Published research — arXiv, 2024"],
  },
];
