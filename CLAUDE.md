# CLAUDE.md — Easyfin Group Website
> Complete project bible. Read this fully before touching any code.

---

## 👤 Developer
- **Name:** Ananthu™
- **Role:** Freelance Web Designer & Developer
- **This project is:** Internship-level quality commitment — portfolio centerpiece
- **Compensation:** Internship certificate + letter of recommendation + industry connection (no cash)
- **Standard:** Agency-quality output. Every decision must be interview-worthy.

---

## 🏢 Client — Easyfin Group of Companies

### The Group
A parent company with 3 sub-companies operating across finance, agriculture, and business consulting.

### Sub-Companies

| Company | Sector | Accent Color |
|---|---|---|
| **Easyfin Finance** | Lending / Gold Loans | `#B8860B` Dark Gold |
| **Easyfarm Agro Producer Company Limited** | Agriculture / Rural | `#2D6A4F` Forest Green |
| **Easyfin Strategic Management Pvt Ltd** | Consulting / Strategy | `#1E3A5F` Deep Navy |

---

## 🎨 Design System

### Philosophy
**Stripe meets premium Indian brand.** Clean white space, confident typography, subtle warm tones. Each sub-company breathes its own accent color while staying part of one unified family. Light mode only. No dark mode.

### Base Palette (Group-wide)
```
Background:       #F8F7F4   warm off-white
Primary Text:     #111111   near black
Secondary Text:   #6B7280   muted gray
Surface / Card:   #FFFFFF   pure white
Border:           #E5E2DC   subtle warm border
```

### Sub-company Accents
```
Easyfin Finance:      #B8860B   Dark Gold
Easyfarm Agro:        #2D6A4F   Forest Green
Easyfin Strategic:    #1E3A5F   Deep Navy
```

### Typography
```
Display / Headings:   Fraunces (Google Fonts) — editorial, warm, timeless
Body / UI:            Inter (Google Fonts) — clean, readable everywhere
```

### Hero Style
- Light mode hero with strong typographic statement
- Subtle warm gradient or texture — no heavy visuals
- Clean, timeless — not trendy

### UX Rules (NON-NEGOTIABLE)
- Every page has ONE clear primary CTA — no confusion
- Mobile-first — most users on phones
- Grandma test — even a non-tech person navigates easily
- Each company feels distinct but part of the same family
- Contact accessible from every page
- No AI-generated generic aesthetics
- No purple gradients, no glassmorphism overuse
- Smooth, purposeful animations only (Framer Motion)
- Fast load — no bloat

---

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Icons | Lucide React |
| Fonts | Google Fonts (Fraunces + Inter) |
| Deployment | Vercel |
| Domain | Client's custom domain (not our job) |

---

## 🗂️ Sitemap — 10 Pages

### Group Pages
| Page | Route | Content |
|---|---|---|
| Homepage | `/` | Hero, About, Three Pillars (company cards), Leadership, Contact |
| Our Companies | `/companies` | 3 company cards — click to individual page |

### Easyfin Finance
| Page | Route | Content |
|---|---|---|
| Finance Home | `/finance` | Our Story, Services, Why Choose Us, Contact |

### Easyfarm Agro
| Page | Route | Content |
|---|---|---|
| Agro Home | `/agro` | Our Story, Farm Credit, Farm Care, Initiatives, Internship, Collaborate, Contact |

### Easyfin Strategic
| Page | Route | Content |
|---|---|---|
| Strategic Home | `/strategic` | Our Story, Services, Why Choose Us, Internship, Contact |

### Shared Pages
| Page | Route |
|---|---|
| Leadership | `/leadership` |
| Contact | `/contact` |

**Total: 10 pages / routes**

---

## 🧭 Navigation Structure

### Desktop Navbar
```
[Easyfin Group Logo]    Home  |  About  |  Our Companies ▾  |  Leadership  |  Contact
```
- Our Companies dropdown → Easyfin Finance / Easyfarm Agro / Easyfin Strategic
- Sticky navbar, white background, subtle border on scroll

### Mobile Navbar
- Hamburger menu
- Full-screen slide-in menu
- Same links, large touch targets

---

## 📋 Content Map (from client docx)

### Group Homepage Sections
1. About Us
2. Our Vision
3. Our Mission
4. Our Core Values
5. Three Pillars of Easyfin Group
   - Easyfin Finance
   - Easyfarm Agro Producer Company Limited
   - Easyfin Strategic Management Private Limited
6. Our Leadership
7. Get in Touch

### Easyfin Finance
1. Our Story
2. Services
   - Easy Short-term Gold Loan
   - Business Loan
   - Easy Gold Loan
3. Why Choose Us
4. Get in Touch

### Easyfarm Agro Producer Company Limited
1. Our Story
2. Services
   - Farm Credit Services
     - Cultivate Guild Credit
     - Harvest Capital
     - People Guild Credit
     - Crop Fund
     - Agro Credit
   - Farm Care Services
     - Silver Care
     - Golden Care
     - Platinum Care
3. Initiatives
   - Rubber Mitra Project
   - Mushroom Livelihood Mission
   - Sahaya Home Project
4. Internship Opportunity
5. Collaborate with Us
6. Get in Touch

### Easyfin Strategic Management Pvt Ltd
1. Our Story
2. Services
   - Investment Guidance
   - Business Consulting
   - Strategic Planning
   - Financial Structuring
3. Why Choose Us
4. Internship Opportunity
5. Get in Touch

---

## 🗂️ Project Folder Structure

```
easyfin-group/
├── public/
├── src/
│   ├── assets/images/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── shared/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── CompanyCard.jsx
│   │   │   └── ContactSection.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── AboutGroup.jsx
│   │   │   ├── ThreePillars.jsx
│   │   │   └── Leadership.jsx
│   │   ├── finance/
│   │   ├── agro/
│   │   └── strategic/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Companies.jsx
│   │   ├── Finance.jsx
│   │   ├── Agro.jsx
│   │   ├── Strategic.jsx
│   │   ├── Leadership.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── content.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

---

## ⚙️ Vercel Deployment Config
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 📦 Key Dependencies
```
react ^18
react-dom ^18
react-router-dom ^6
framer-motion ^11
lucide-react latest
tailwindcss ^3
autoprefixer
postcss
```

---

## 📄 Documents Created
- `onboarding_editorial.docx` — Client onboarding proposal (editorial style, Ananthu branding)
- `CLAUDE.md` — This file

---

## ✅ Status

### Confirmed
- Client: Easyfin Group of Companies
- 3 sub-companies with full content map received
- Tech stack: React + Vite + Tailwind + Framer Motion
- Deployment: Vercel (client has custom domain — not our responsibility)
- Design: Light mode, warm palette, Fraunces + Inter typography
- Color system: Group base palette + per-company accent colors
- Sitemap: 10 pages / routes
- Navbar: sticky, dropdown for Our Companies, mobile hamburger

### Waiting on from Client
- Logos for group + all 3 sub-companies
- Real copy to replace mock content
- Team/leadership photos and bios

### Build Order
1. Vite + Tailwind + Router scaffold
2. tailwind.config.js with full design token setup
3. Navbar + Footer
4. Homepage
5. Our Companies landing
6. Easyfin Finance page
7. Easyfarm Agro page
8. Easyfin Strategic page
9. Leadership page
10. Contact page
11. Framer Motion animations + responsive QA
12. vercel.json + final deployment check
