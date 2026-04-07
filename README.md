# Kelvin — AI Developer Kenya | Portfolio

A premium, production-ready portfolio website for an African AI & digital systems developer.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **tsparticles** (hero background)

## Design System

- **Background:** `#050A14`
- **Accent:** Cyan `#00D4FF` · Violet `#7B2FBE`
- **Fonts:** Space Grotesk · Inter · JetBrains Mono
- **Style:** Glassmorphism UI, dark mode, gradient accents

## Features

- ✅ Fullscreen animated hero with particle background
- ✅ Interactive terminal with commands: `help`, `whoami`, `skills`, `clients`, `execute --innovation`, `clear`
- ✅ Horizontal scroll case studies (7 real clients)
- ✅ Services, About/Process sections
- ✅ Framer Motion animations (fade-up, staggered, hover)
- ✅ Full SEO metadata & Open Graph
- ✅ Mobile-first responsive design
- ✅ Call-to-action with WhatsApp integration

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy instantly on [Vercel](https://vercel.com).

```bash
npm run build
```

## Structure

```
app/
  layout.tsx       # Root layout + SEO metadata
  page.tsx         # Main page (composes all sections)
  globals.css      # Global styles + Tailwind utilities
components/
  Navbar.tsx       # Fixed glassmorphism nav
  Hero.tsx         # Fullscreen hero + tsparticles
  About.tsx        # Problem/solution + process steps
  Services.tsx     # 4 service cards
  CaseStudies.tsx  # Horizontal scroll carousel (7 studies)
  Terminal.tsx     # Fully interactive terminal
  CallToAction.tsx # Conversion section
  Footer.tsx       # Links, social, copyright
```
