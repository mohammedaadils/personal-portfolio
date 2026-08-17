/**
 * Projects live here, keyed by slug. Each renders a row in the Projects
 * accordion and a full case-study page at /projects/[slug].
 *
 * `links.live` is left as "" for projects not yet deployed — the "live ↗"
 * link only appears once a real URL is filled in.
 */

export type Project = {
  slug: string;
  title: string;
  company?: string;
  category: string;
  tagline: string;
  year: string;
  stack: string[];
  summary: string;
  overview: string;
  highlights: string[];
  links: {
    github?: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "webhook-delivery-engine",
    title: "Webhook Delivery Engine",
    category: "Backend engine",
    tagline: "Async, event-driven webhook fan-out with retries.",
    year: "2025",
    stack: ["Java", "Spring Boot", "JPA", "MySQL", "Docker", "AWS EC2"],
    summary:
      "An async, event-driven engine that delivers HTTP POST webhooks to subscribers with per-attempt tracking and SQL-persisted audit logs.",
    overview:
      "A fan-out delivery engine that reliably pushes webhook events to many subscribers. Every delivery attempt is recorded across a 4-table schema, with retries and audit logging persisted to SQL.",
    highlights: [
      "Delivers HTTP POST webhooks to subscribers with per-attempt tracking across a 4-table schema.",
      "Exponential-backoff retries (3 attempts, 30/60/120s) via Spring Scheduler with SQL-persisted audit logs.",
      "Containerized with Docker Compose and deployed on AWS EC2.",
    ],
    links: {
      github: "https://github.com/mohammedaadils/webhook-engine",
      live: "",
    },
  },
  {
    slug: "automatic-testcase-generator",
    title: "Automatic Testcase Generator",
    category: "AI tool",
    tagline: "Generate Postman API test cases from natural language.",
    year: "2024",
    stack: ["Python", "Flask", "GPT-2", "Transformers", "PyTorch", "REST API"],
    summary:
      "An AI-powered tool that generates Postman-compatible API test cases from natural-language prompts — the basis for the arXiv 2024 publication.",
    overview:
      "Built during the Tactii internship and the foundation for the arXiv research paper. It uses GPT-2 with prompt engineering to turn plain-English descriptions into Postman-compatible REST API test cases.",
    highlights: [
      "Generates Postman-compatible API test cases from natural-language prompts.",
      "Reduced manual test authoring time by ~65% in internal trials.",
      "Basis for the arXiv 2024 research on LLM-based REST API automation.",
    ],
    links: {
      github: "https://github.com/kactlabs/test-case-generation",
      live: "",
    },
  },
  {
    slug: "deepmorph-dna-mutation-prediction",
    title: "DeepMorph — AI DNA Mutation Prediction",
    category: "ML research",
    tagline: "Hybrid CNN–LSTM for DNA mutation prediction.",
    year: "2025",
    stack: ["Python", "PyTorch", "CNN-LSTM", "FastAPI", "NumPy"],
    summary:
      "A hybrid CNN–LSTM multi-task system for DNA sequence analysis — predicting mutation status, gene classification, and clinical significance.",
    overview:
      "An end-to-end deep-learning pipeline for DNA sequence analysis. A hybrid CNN–LSTM model performs multi-task learning across three outputs, served through a FastAPI inference API and deployed live on Render.",
    highlights: [
      "Hybrid CNN–LSTM multi-task model predicting mutation status, gene classification, and clinical significance (3 tasks).",
      "End-to-end inference pipeline served with FastAPI, reducing manual classification effort by ~50%.",
      "Deployed live on Render.",
    ],
    links: {
      github:
        "https://github.com/mohammedaadils/DeepMorph--AI-DNA-Mutation-Prediction",
      live: "https://deepmorph-ai-dna-mutation-prediction.onrender.com/",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
