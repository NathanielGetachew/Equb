---
name: equb-landing
description: Builds a polished, culturally grounded, frontend-only landing page for "I store by deb equb", a digital equb with a Suzuki Dzire car reward. Use when asked to design, build, or refine this demo site.
---

# Equb Landing Page Skill

## Goal
Build a single-page, frontend-only DEMO landing page that convinces a client
to hire us for the full product. It must look premium, trustworthy, and
unmistakably Ethiopian. No backend, no auth, no real payments.

## Brand facts (do not change)
- Equb name: **"I store by deb equb"** (use this exact spelling and casing)
- Reward: **Suzuki Dzire** (car)
- Members: **25 friends** who know each other well
- Contribution: **12,000 ETB per member per day**
- Lottery (draw): **every 9th day**
- Duration: **3 months** (about 90 days, so about 10 draws)
- Derived numbers (compute in code, never hardcode inconsistently):
  - Daily pool = 25 x 12,000 = 300,000 ETB
  - Pool per 9-day round = 2,700,000 ETB
  - Total draws = floor(90 / 9) = 10

## Tech stack
- Vite + React + TypeScript + Tailwind CSS
- Framer Motion for animation, lucide-react for icons
- No backend. All data lives in a `src/data/equb.ts` config file.
- Fully responsive, mobile-first (most Ethiopian users are on phones).
- Lighthouse performance 90+, semantic HTML, WCAG AA contrast.

## Design direction
- Mood: trustworthy, celebratory, premium, warm.
- Palette: deep green, gold, and warm red accents (Ethiopian flag-inspired but
  refined, not garish), on off-white and dark-green surfaces.
- Typography: a bold display font for headings, a clean sans for body.
  Include a font that renders Amharic (Ge'ez script) well, e.g. Noto Sans Ethiopic.
- Subtle Ethiopian-inspired patterns (e.g., Tibeb / woven geometric borders)
  as section dividers, used sparingly.
- Avoid generic template look: no default purple gradients, no stock-icon walls.

## Required sections (in order)
1. **Sticky navbar**: logo/wordmark, anchor links, "Join the Equb" CTA, EN/አማ language toggle.
2. **Hero**: the star of the page.
   - Large Suzuki Dzire visual (see Assets), with a soft glow/spotlight and gentle float or parallax.
   - Headline built around "I store by deb equb" and the car prize.
   - Subline: 25 friends, 3 months, a draw every 9 days.
   - Primary CTA "Join the Equb", secondary CTA "How it works".
   - Live-style countdown to the next draw (demo data).
3. **Key numbers strip**: 25 members, 12,000 ETB/day, draw every 9 days, 3 months (animated count-up).
4. **What is an Equb?** Short, respectful explanation of the tradition and how
   this digital version keeps its trust-based spirit.
5. **How it works**: 4 steps (Join the circle, Save daily, Draw every 9 days, Win and celebrate).
6. **Draw timeline**: visual 90-day timeline with 10 draw markers; mark past, next, and upcoming (demo state).
7. **The Prize**: Suzuki Dzire spotlight with spec highlights (keep specs generic and clearly marked "demo").
8. **Members circle**: 25 avatar placeholders arranged in a ring or grid
   (initials only, fake names), reinforcing "friends who know each other".
9. **Savings calculator**: interactive; shows total contribution per member
   over the period, daily pool, and per-round pool (computed from config).
10. **Trust and transparency**: transparent draws, daily contribution tracker,
    member-verified payouts (demo copy).
11. **FAQ**: accordion, 6 to 8 questions.
12. **Final CTA + footer**: join section, contact placeholders, social icons.

## Content rules
- Provide English and Amharic copy via a simple i18n dictionary (`src/i18n/`).
  Amharic should be natural, not literal machine output; mark it
  `// TODO: native review` so a native speaker can polish it.
- Currency format: `12,000 ETB`. Dates in a way that can later support the
  Ethiopian calendar; add a TODO for this.
- Footer disclaimer: "Demo concept for presentation purposes only. Not a live
  financial product." Add a TODO note that lottery/equb operations require
  review against Ethiopian regulations before launch.

## Assets
- Generate or source a high-quality Suzuki Dzire hero image. If no licensed
  image is available, use a clearly labeled placeholder in `public/images/`
  and tell the user exactly which file to replace. Never hotlink random images.
- Use optimized, lazy-loaded images with proper alt text.

## Quality checklist (verify before finishing)
- [ ] Hero shows the car and the exact name "I store by deb equb"
- [ ] All numbers derive from `equb.ts` and are consistent everywhere
- [ ] Looks great at 360px, 768px, 1280px+
- [ ] Language toggle works for all visible text
- [ ] No console errors, build passes (`npm run build`)
- [ ] Open the page in the browser and screenshot hero + one mobile view

## Workflow
1. Plan first: write a short plan (sections, components, file tree) and wait for no one; proceed.
2. Scaffold, build the config and i18n, then components, then polish animations.
3. Run, test in the browser, fix visual issues.
4. Finish with a summary and a "what to replace/confirm" list (images, copy, Amharic review).