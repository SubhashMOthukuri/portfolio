# subhash.mothukuru — Portfolio

Personal portfolio for Subhash Mothukuru, Full-Stack AI Engineer. Built as a single-page React app with real project case studies, a live GitHub activity feed, and a Cmd+K command palette.

**Live:** [portfolio-sand-three-o41pqgcmv7.vercel.app](https://portfolio-sand-three-o41pqgcmv7.vercel.app/)

## Stack

- React 19 + Vite
- React Router (client-side routing, incl. `/projects/:slug` and `/projects/:slug/case-study`)
- Tailwind CSS v4
- Framer Motion
- Vercel Analytics

## Highlights

- Case studies for real projects, grounded in the actual GitHub repos (architecture, decisions, benchmarks) — not marketing copy
- Downloadable PDF version of each case study, generated from the same page
- Live "latest commit" strip pulled from the GitHub public API
- Cmd+K command palette for jumping between sections, projects, and links
- Downloadable vCard on the Contact section

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build     # production build
npm run preview   # preview the production build locally
```

## Deployment

Configured for both:
- **Vercel** — `vercel.json` includes the SPA rewrite rule
- **Netlify** — `public/_redirects` includes the SPA fallback rule

Either platform can deploy directly from this repo with zero additional config. Currently deployed on Vercel, auto-redeploying on every push to `main`.
