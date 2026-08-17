# Personal Portfolio

An editorial, single-page portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4** — modeled on the layout/design of the reference site, with your own content.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where to edit content

Everything is placeholder until you drop in real details. All editable content lives in two files:

| What | File |
| --- | --- |
| Name, tagline, location, intro, email, social links | `app/content.ts` → `profile` |
| Work experience | `app/content.ts` → `experience` |
| Skills (grouped) | `app/content.ts` → `skills` |
| Blog posts | `app/content.ts` → `blogs` |
| Education | `app/content.ts` → `education` |
| Projects + case studies | `app/projects-data.ts` |

Search the codebase for `TODO` to find every spot that needs real data.

## Assets to replace

- **Photo** — drop a square image at `public/photo.jpg` and set `profile.photo` to `/photo.jpg`.
- **Résumé** — replace `public/resume.pdf` with your real PDF.
- **Favicon** — edit `public/favicon.svg`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at https://vercel.com/new.
3. Vercel auto-detects Next.js — no config needed. Deploy.

## Structure

```
app/
  layout.tsx            Root layout, fonts, metadata
  page.tsx              Landing page (composes all sections)
  globals.css           Design tokens + editorial styles
  content.ts            ← main content source of truth
  projects-data.ts      ← projects, keyed by slug
  components/           Nav, Hero, Experience, Projects, Skills, Blogs, Education, Contact, Footer
  projects/[slug]/      Per-project case-study pages (SSG)
  error.tsx / not-found.tsx / global-error.tsx
public/                 photo, favicon, resume
```
