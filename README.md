# Mohan Sri Raghuram — Premium 3D AI Engineer Portfolio

A production-ready personal portfolio inspired by the bold storytelling, expressive typography, immersive motion, and unconventional layout of creative agency websites like [withhoney.com](https://www.withhoney.com/?ref=killerportfolio).

Engineered specifically for **Mohan Sri Raghuram** — AI Engineer | Applied AI Developer | Software Engineer.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Launch development server with hot-reload
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build locally
npm run preview
```

Your live development server runs at:
👉 **[http://localhost:5173/](http://localhost:5173/)**

---

## 🎨 Visual Identity & Architecture

- **Color Palette**: Charcoal & obsidian backgrounds (`#070709`, `#0a0a0d`, `#141419`), warm white editorial typography (`#f5f2eb`), electric orange accent (`#ff5500`), subtle film grain overlay.
- **Real-Time 3D**: Interactive WebGL neural core rendered in **Three.js** and **React Three Fiber** (`@react-three/fiber`) with mouse-responsive rotation, dynamic point lighting, and procedural materials.
- **Performance Optimized**: Capped pixel ratio (`dpr={[1, 1.8]}`), lightweight procedural geometry (zero heavy 3D asset downloads), and an automated CSS/SVG fallback if WebGL is unavailable or the user has enabled `prefers-reduced-motion`.
- **Kinetic Motion & Smooth Scroll**: Inertia momentum scrolling powered by **Lenis**, spring-physics cursor tracking with magnetic pull (`Magnetic.tsx`), and synthetic Web Audio micro-interactions (`sound.ts`).

---

## 🏛️ Sections Overview

1. **Header & Navigation (`Navbar.tsx`)**:
   - Technical branding `raghuram.` with real-time status: `● AVAILABLE FOR WORK · BASED IN INDIA`
   - One-click official resume download button (`/Mohan_Sri_Raghuram_resume.pdf`)
   - Section anchors: `[ 01 ] STORY`, `[ 02 ] ARSENAL`, `[ 03 ] SKILLS`, `[ 04 ] EXPERIENCE`, `[ 05 ] CONTACT`

2. **[ 01 ] Full-Screen Hero Experience (`Hero.tsx`)**:
   - Massive editorial headline: *"I build intelligence into software."*
   - Real-time interactive 3D sculpture (`HeroScene.tsx`) with cursor parallax
   - Interactive terminal snippet: `pip install codegraph-mcp` with one-click copy feedback

3. **[ 02 ] Creative Storytelling (`Story.tsx`)**:
   - Headline: *"NOT JUST MODELS. SYSTEMS THAT WORK."*
   - Explains the philosophy of deterministic ground truth, local-first performance, and production resilience
   - Horizontal looping animated ticker

4. **[ 03 ] Featured Projects & Case Studies (`Projects.tsx`)**:
   - **CodeGraph MCP**: Local-first MCP server with interactive terminal simulator for AST query demonstration
   - **DUNDOO**: Hyperlocal commerce backend with Flask, PostgreSQL, and multilingual voice search
   - **AI App Compiler Platform**: Deterministic multi-stage architecture generation with Pydantic cross-layer validation
   - **RealMockAI**: Real-time simulated interview system with adaptive questioning

5. **[ 04 ] Technical Matrix (`Skills.tsx`)**:
   - Categorized across AI & MCP, Backend & AsyncIO, Databases, and Infrastructure
   - No fake percentages or arbitrary skill bars

6. **[ 05 ] Experience & Pedigree (`Experience.tsx`)**:
   - Professional track record: AI Engineer Intern at The AI Signal / One Atlas, and Founding Member at Frontier Atlas
   - Parul University B.Tech in CSE (AI) with verified 8.21 CGPA
   - Dedicated prominent resume download card

7. **[ 06 ] Contact & Dispatch (`Contact.tsx`)**:
   - Headline: *"BUILD SOMETHING INTELLIGENT."*
   - Direct coordinates: Email, LinkedIn, GitHub, Phone
   - Celebratory confetti trigger + interactive transmission compose form

---

## 🛠️ Where to Customize Your Information

All personal details, case study descriptions, dates, and links live in:
👉 [`src/data/portfolioData.ts`](file:///Users/raghuram/Desktop/Portfolio/src/data/portfolioData.ts)

To change resume file:
Place your PDF at `public/Mohan_Sri_Raghuram_resume.pdf`.

---

## 🚀 Cloudflare Pages Deployment

This project includes SPA routing support via `public/_redirects`:

```bash
/*    /index.html   200
```

### Steps to deploy:
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete premium 3D AI engineer portfolio"
   git remote add origin https://github.com/raghurammrsd/<repo-name>.git
   git push -u origin main
   ```
2. In the **Cloudflare Dashboard**:
   - Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Select your repository
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - Click **Save and Deploy**
