# 📋 Project Brief — Sanatan Shiv Shakti Official Website

> Preserved record of the original requirements that this website was built to meet.

## Overview
A modern, professional, responsive, SEO-/AEO-/GEO-friendly website built with Next.js
(App Router) for **Sanatan Shiv Shakti** — a **non-political spiritual and charitable
organization** founded and managed by the youth of **Ward No. 35, Howrah City, West Bengal,
India**.

### Purpose of the organization
- Promote Sanatan Dharma values
- Encourage spiritual growth among youth
- Organize religious and cultural activities
- Conduct public welfare and charitable programs
- Help people in need through food distribution and social service
- Support Gau Seva (cow welfare) and animal welfare
- Develop leadership, confidence, communication and social responsibility in youth
- Build a positive community through spirituality, service and cultural awareness

## Technology
- Next.js (latest, App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion ·
  Lucide icons · mobile-first responsive design
- **No database.** All content is editable from a centralized content source
  (implemented as `frontend/content/`).
- Multi-language: **English, Hindi, Bengali** (next-intl).

## Brand
- **Name:** Sanatan Shiv Shakti
- **Tagline:** *Seva · Sanskar · Sanskriti*
- **Palette:** Saffron / Bhagwa (primary), Deep Maroon (secondary), Gold (accent),
  White / light cream (background), dark gray (text)
- **Feel:** premium, trustworthy, modern, spiritual, community-focused (not an
  old-fashioned temple website).

## Pages
Home, About, Activities, Events, Gallery, Certificates, Members, Join Us, Contact.

### Key fixed details
- **Office address:** 10, Bagdi Para Lane, Shibpur, Howrah, West Bengal – PIN 711102
- **Weekly activity:** Every **Tuesday** — Hanuman Ji Puja & Archana and Bhajan Kirtan at
  **Ram Janki Mandir, R.N.R.C Ghar Road, Shibpur, Howrah** — **6:00 PM onwards**
- **Activities:** Bhajan Kirtan · Hanuman Ji Sundar Kand Path · Ramayan Path · Geeta Path ·
  Gau Seva · Food Distribution · Charity Programs · Youth Development · Social Service
- **Maps:** https://maps.google.com/?q=10+Bagdi+Para+Lane+Shibpur+Howrah+711102

## Requirements recap
- **Header:** sticky navbar, mobile menu, smooth scrolling, language toggle.
- **Footer:** description, quick links, contact, socials, maps link, copyright, and all
  member names.
- **SEO:** Metadata API, Open Graph, Twitter cards, structured data, sitemap, robots,
  canonical URLs; local-SEO schema (Organization, Address, Event, FAQ, Contact).
- **AEO/GEO:** FAQ blocks, clear headings, structured & semantic content for AI search.
- **Accessibility:** WCAG-friendly, keyboard nav, alt text, contrast.
- **Performance:** fast, optimized images, lazy loading, code splitting (95+ Lighthouse target).
- **Future-ready** for: database, admin panel, auth, donations, event registration, member
  portal, volunteer management, blog/news, announcements, payment gateway, WhatsApp.

## Forms
Join Us (volunteer registration) and Contact — **UI only** for now, designed for easy
future backend integration (no data is stored yet).

---

### Follow-up changes (post-launch feedback)
1. Project reorganized into a **`frontend/`** folder with a top-level **`docs/`** folder.
2. The single content file was split into **per-topic files** under `frontend/content/`.
3. Added this `docs/` folder and an **AI image-prompt kit** (`docs/ai-image-prompts/`).
4. Added realistic **stock images** (`frontend/public/images/`, see `CREDITS.md`).
5. Added the **16 June 2026 Sundar Kand Path** event.
6. Reduced the navbar to **grouped dropdowns** (Home · About▾ · Activities▾ · Contact).
