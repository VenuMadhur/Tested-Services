# Tested Services — Clinical Research Solutions

A premium, enterprise-grade corporate website built for Tested Services, a contract research
organization (CRO), redesigned from the company's corporate presentation into a modern,
international-standard experience comparable to IQVIA, ICON, Parexel, Medpace and Syneos Health.

## Stack

- **React 18 + TypeScript** — strict mode, fully typed components
- **Vite** — fast dev server & production build
- **Tailwind CSS** — custom design tokens (Medical Blue + Emerald Green palette)
- **Framer Motion** — scroll reveals, hover micro-interactions, animated counters
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Production Build

```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

Deploy the `/dist` folder to any static host (Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

## Project Structure

```
src/
  components/
    ui/                 Reusable primitives (Button, Container, SectionHeading, WorkflowStepper)
    sections/            One component per page section (Hero, About, Services, ...)
    Navbar.tsx / Footer.tsx
  hooks/
    useCountUp.ts         Animated statistic counter hook
  lib/
    data.ts               All site content/copy, centralized and typed
  App.tsx                 Composes all sections
  main.tsx                React entry point
  index.css               Tailwind directives, focus states, glass utilities
```

## Design System

| Token            | Value                          |
|-------------------|---------------------------------|
| Brand Blue 700   | `#0E4C89`                       |
| Emerald 500      | `#12B886`                       |
| Gold 500 (accent)| `#F0A93A`                       |
| Display font     | Poppins                          |
| Body font        | Inter                             |

## Accessibility

- Visible keyboard focus states on all interactive elements
- `prefers-reduced-motion` respected globally
- Skip-to-content link
- Semantic landmarks, `aria-expanded` / `aria-controls` on accordions and menus
- Color contrast checked against WCAG AA for body text and CTAs

## Content Source

All copy is derived from and improves upon the "Tested Services — Corporate Presentation 2026,"
rewritten for a web audience of pharmaceutical and biotech sponsors. Edit `src/lib/data.ts` to
update services, industries, workflow steps, FAQs or contact details — the UI updates automatically.
