# Sanatan Shiv Shakti — Official Website

A modern, premium, multilingual website for **Sanatan Shiv Shakti**, a non-political
spiritual & charitable organization run by the youth of Ward 35, Howrah, West Bengal.

Built to be SEO-, AEO- (Answer Engine) and GEO- (Generative Engine) friendly, fully
responsive, accessible, and **editable from a single content file — no database, no CMS.**

---

## ✨ Tech Stack

| Area       | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Framework  | **Next.js 16** (App Router, React 19)                           |
| Language   | **TypeScript** (strict)                                         |
| Styling    | **Tailwind CSS v4** (CSS-first theme)                           |
| Components | Hand-built **shadcn/ui**-style primitives + Radix UI            |
| Animation  | **Framer Motion** (+ CSS animations for above-the-fold)         |
| Icons      | **Lucide** (+ custom SVG brand icons)                           |
| i18n       | **next-intl v4** — English, Hindi (हिन्दी), Bengali (বাংলা)     |
| Fonts      | Marcellus (display), Inter (body), Noto Sans Devanagari/Bengali |

---

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server  → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

`/` redirects to `/en`. Languages live at `/en`, `/hi`, `/bn`.

---

## 📁 Project Structure

```
app/
  [locale]/                 # all pages, one copy per language
    layout.tsx              # root layout: fonts, navbar, footer, JSON-LD
    page.tsx                # Home
    about/ activities/ events/ gallery/
    certificates/ members/ join/ contact/
    opengraph-image.tsx     # auto-generated social share image
    not-found.tsx
  sitemap.ts  robots.ts  manifest.ts  icon.svg   # SEO route files
  globals.css               # design tokens + Tailwind theme

content/
  site-content.ts           # ⭐ THE ONLY FILE YOU EDIT to change the site

messages/                   # UI-chrome translations
  en.json  hi.json  bn.json

i18n/                       # next-intl routing, navigation, request config
lib/                        # utils, content selectors, SEO + structured data
types/                      # content type definitions
components/
  ui/        # button, card, dialog, accordion, input, … (shadcn-style)
  layout/    # navbar, footer, language-switcher, announcement-bar
  home/      # hero, weekly-activity, stats, volunteer-cta
  shared/    # cards, gallery grid, smart-image, sacred SVGs, …
  forms/     # join-form, contact-form (UI-only, backend-ready)
  seo/       # json-ld injector
middleware.ts               # locale detection & routing
```

---

## ✏️ Editing Content (no code knowledge needed)

**Everything** on the site comes from [`content/site-content.ts`](content/site-content.ts).
Update events, gallery, members, certificates, contact info, testimonials, FAQs,
announcements, donation details — all in one place.

### Translated text

Any text field accepts either a plain string **or** a translation object:

```ts
title: "Bhajan Kirtan"                                  // same in all languages
title: { en: "Bhajan Kirtan", hi: "भजन कीर्तन", bn: "ভজন কীর্তন" }
```

### Images — the placeholder system

You don't need any image files to launch. Images use a token:

```ts
src: "ph:bhajan"; // → renders a branded saffron placeholder tile
src: "/images/bhajan.jpg"; // → put a real photo in /public/images and point here
```

Swap `ph:*` tokens for real `/images/...` paths whenever photos are ready.

### Show / hide sections

| Section                         | How to control                                             |
| ------------------------------- | ---------------------------------------------------------- |
| Certificates                    | set `active: true` on a certificate (hidden while `false`) |
| Announcements                   | set `active: true` to show the top banner                  |
| Donation                        | set `donation.enabled: true` and fill the details          |
| Members / Testimonials / Events | add or empty the array (empty = section hides)             |

---

## ⚠️ Placeholders to replace with real data

Search [`content/site-content.ts`](content/site-content.ts) for the `⚠️` markers:

- `contact.phone`, `phoneDisplay`, `whatsapp`, `email`
- `contact.socials[].url` (currently `#`)
- `site.url` — set to your real domain (used for SEO/sitemap/canonicals)
- Member **names** (currently "Member Name")
- All `ph:*` images → real photos

---

## 🌐 Multi-language

- Add a language: add its code in [`i18n/routing.ts`](i18n/routing.ts) **and** create
  `messages/<code>.json`. The switcher and routing update automatically.
- The navbar language switcher preserves the current page when switching.

---

## 🔍 SEO / AEO / GEO

- Per-page localized `<title>` / meta description, Open Graph & Twitter cards
- Canonical URLs + `hreflang` alternates for every language
- **Structured data (JSON-LD):** Organization/NGO, WebSite, FAQPage, Event,
  BreadcrumbList — see [`lib/structured-data.ts`](lib/structured-data.ts)
- Auto `sitemap.xml`, `robots.txt`, web manifest, generated OG images
- FAQ section + FAQ schema and semantic HTML for answer/AI engines
- Local SEO: PostalAddress, ContactPoint, geo area = Howrah

---

## 📝 Forms (UI-only, ready for a backend)

The Join and Contact forms work end-to-end in the UI (validation + success state)
but **store nothing** yet. To connect a backend, edit the `BACKEND HOOK` block in:

- [`components/forms/join-form.tsx`](components/forms/join-form.tsx)
- [`components/forms/contact-form.tsx`](components/forms/contact-form.tsx)

Drop in a `fetch("/api/...")` (or Formspree / Resend / Google Sheet) — no other
changes needed.

---

## 🧱 Future Scalability

The architecture is intentionally ready for growth without major refactoring:

- **Database / CMS** — replace the `content/site-content.ts` imports inside
  `lib/content.ts` with async fetchers; component APIs stay the same.
- **Auth / Member portal / Admin panel** — add route groups under `app/[locale]/`.
- **Donations / Payments** — `donation` data + `enabled` flag already modeled.
- **Event registration** — extend the `OrgEvent` type and reuse `EventCard`.
- **Blog / News / Announcements** — add a `posts` array + a route; pattern matches
  existing pages.
- **WhatsApp / Payment gateway** — contact + WhatsApp links already wired.

---

## 🚢 Deployment

Optimized for **Vercel** (zero-config): push the repo and import it. Any Node host
that runs `npm run build && npm run start` works too. Remember to set
`site.url` to your production domain.

---

_Seva · Sanskar · Sanskriti_ 🙏
