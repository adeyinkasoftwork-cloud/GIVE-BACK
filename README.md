# Onramper Clone — Next.js + Tailwind

Static, pixel-faithful clone of onramper.com's homepage layout, built as the
template for redesigning your own site.

## Stack
- Next.js 14 (App Router) + React 18
- Tailwind CSS 3 with Onramper's exact design tokens

## Run
```bash
npm install
npm run dev      # http://localhost:3000
```

## Design tokens
All extracted verbatim from Onramper's Webflow stylesheet `:root` and mapped
into `tailwind.config.js`:
- Colors: cyber-blue 1/2/3/150, vibrant-teal 1/2/3, off-black #151515,
  pearl #efeef3, body-copy #929292, steel #808099, gun-metal #3d444d
- Spacing scale: 20 / 40 / 60 / 80 / 100 / 120 / 180px
- Type: Saans (400/500) via Webflow CDN @font-face; h1 90px/-1.8px,
  h3 70px/-1.4px, button radius 70px, nav radius 123px, container 1340px
- Arbitrary Tailwind values (e.g. text-[90px], tracking-[-1.8px], bg-[#1f00ff])
  used where exact numbers matter.

## Structure (one component per section, in order)
components/
  Header.jsx        butter bar + pill nav
  Hero.jsx          heading + copy + CTA + [3D widget placeholder]
  LogoMarquee.jsx   partner logo strip
  ValueCards.jsx    header row + 2x2 card grid
  GlobeSection.jsx  copy + tabs + search + [Three.js globe placeholder]
  ProductsGrid.jsx  centered header + product cards + CTA
  OnrampRouting.jsx [GSAP scroll-pinned placeholder] — static first frame
  Partners.jsx      3-column testimonials
  Faq.jsx           accordion (useState)
  PreFooter.jsx     blue gradient CTA + logo marquee
  Footer.jsx        5 menu columns + Get in touch
app/page.jsx        composes all sections

## Placeholders to wire up later (marked with data-placeholder)
- Hero 3D widget + floating coins (Three.js)
- Interactive globe (Three.js)
- Onramp Routing pin/scrub animation (GSAP ScrollTrigger)
- Lottie icons / coin blobs

## Notes
- No localStorage/sessionStorage anywhere — all state is React useState.
- Nested section structure preserved (page-wrapper > main-wrapper > sections).
