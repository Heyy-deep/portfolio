# Creative Developer Portfolio ✦

A high-end "Scrollytelling" personal portfolio built for performance and premium aesthetics. 

**🌍 Live Domain:** [portfoliodeepgrr.vercel.app](https://portfoliodeepgrr.vercel.app)

## Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Animation:** Framer Motion
* **Rendering:** Core HTML5 Canvas (for 60fps frame scrubbing)
* **Styling:** Tailwind CSS (Glassmorphism, fluid typography)

## Features
1. **Canvas Sequence Scrubbing:** Uses an optimized `requestAnimationFrame` + `useMotionValueEvent` architecture to smoothly scrub through a compressed WebP sequence based directly on user scroll progress, ensuring zero jank.
2. **Parallax Text Mechanics:** Floating typography elements map layout properties `[opacity, y-translation]` directly against scroll progression thresholds to create depth and narrative pacing.
3. **Advanced Optimization:** Image frames are heavily compressed using `sharp`, loaded in parallel, and drawn instantaneously on mount to bypass Next.js initial render waterfalls.
4. **Responsive Native Grid:** Project grids use elegant backdrop filters and CSS transitions built to gracefully scale padding and type sizes down for mobile viewports without sacrificing the premium feel.

## Running Locally

1. Install Dependencies
```bash
npm install
```

2. Start the Development Server
```bash
npm run dev
```

3. Open `http://localhost:3000` in your browser.
