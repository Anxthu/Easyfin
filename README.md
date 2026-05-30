# Easyfin Group of Companies

A world-class, premium corporate web ecosystem built for the **Easyfin Group**. The platform serves as a unified gateway to the parent company while seamlessly routing users into three highly distinct, bespoke sub-brands.

## 🌟 The Ecosystem

1. **Main Corporate Gateway (`/`)**: A massive, high-trust landing experience featuring Apple-style scroll reveals, minimalist typography, and a unified cinematic loading sequence (The "Three Pillars Merge").
2. **Easyfarm Agro Producer Company (`/agro`)**: An earthy, organic, interactive experience featuring 3D parallax effects, glassmorphism, and dynamic farm-to-table storytelling.
3. **Easyfin Finance (`/finance`)**: Ultra-minimalist, high-trust financial architecture built on deep navy, gold accents, and sharp typography.
4. **Easyfin Strategic Management (`/strategic`)**: A deep, indigo-toned B2B consulting interface featuring high-tech "Typographic Curtain" animations and complex strategic frameworks.

## 🛠 Tech Stack

- **Framework**: React 18 + Vite (Blazing fast HMR and optimized production builds)
- **Styling**: Tailwind CSS (Utility-first, design-system-driven styling)
- **Routing**: React Router DOM (Client-side SPA routing)
- **Animation (UI/Layout)**: Framer Motion (Smooth layout transitions, accordions, and presence animations)
- **Animation (Cinematic/Heavy)**: GSAP + ScrollTrigger (High-performance scroll hijacking, bespoke loading screens, and timeline orchestration)
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running Locally
To start the Vite development server:
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### Production Build
To generate the highly-optimized production bundles:
```bash
npm run build
```
The output will be generated in the `/dist` directory.

## 🌍 Deployment (Vercel)

This application is configured out-of-the-box for zero-configuration deployment on **Vercel**. 

Because this is a Single Page Application (SPA) using React Router, a `vercel.json` file is included in the root directory. This configuration intercepts server requests and rewrites them to `index.html`, ensuring that direct links (e.g., `easyfin.com/agro/internship`) and page refreshes work perfectly without throwing 404 errors.

1. Push your code to a Git repository.
2. Import the project into your Vercel dashboard.
3. Deploy. (Vercel will automatically detect Vite and configure the build settings).

## 🎨 Design System Notes
- **Colors**: Strict, distinct color palettes are maintained for each branch. Do not mix Agro's Emerald/Amber with Finance's Navy/Gold unless explicitly required by brand guidelines.
- **Typography**: The site relies heavily on native font stacks (Inter, system sans-serif) combined with precise tracking (`tracking-tight` for headings, `tracking-widest` for micro-typography) to achieve a premium editorial aesthetic.
- **Performance**: High-resolution assets and heavy GSAP timelines are specifically deferred or placed behind bespoke loading screens to ensure Time-to-Interactive (TTI) remains low.

---
*Built with precision for the Easyfin Group.*
