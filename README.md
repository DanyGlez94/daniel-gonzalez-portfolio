# Daniel Gonzalez — Portfolio

Personal portfolio site for a fullstack JavaScript engineer focused on React, accessibility, and compliance-driven product work.

**Live:** [danygonzalez.dev](https://danygonzalez.dev)

https://github.com/user-attachments/assets/47fa6194-c102-4924-8add-299ac590d11e

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19, TypeScript
- Tailwind CSS 4
- Framer Motion 12
- Vercel hosting + Web Analytics + Speed Insights

## Notable bits

- **Dynamic OG image** generated at request time via `next/og` `ImageResponse`. Reads the open-to-work flag so social previews always reflect the current site copy.
- **Open-to-work feature flag** — one boolean in `lib/site-config.ts` swaps availability messaging across hero, contact, CV, and OG image. Lets the site toggle between "neutral" and "actively looking" modes without touching individual components.
- **Print-friendly CV** at `/cv` — designed to print as a clean one-page PDF straight from the browser.
- **Auto-generated sitemap & robots** via Next.js metadata routes (`app/sitemap.ts`, `app/robots.ts`).
- **Accessibility-aware** — semantic landmarks, ARIA labels, keyboard navigation, focus states, and WCAG 2.1 AA color contrast.

## Local development

```bash
npm install
npm run dev
```

## Usage

Code is shared for reference. Please don't redeploy as your own portfolio — feel free to take inspiration for your own work.
