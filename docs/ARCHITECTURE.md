# 🏗️ Architecture

## Stack

- **Next.js 16** (App Router, React 19) · **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first theme in `frontend/app/globals.css`)
- **shadcn/ui**-style primitives + **Radix UI** · **Framer Motion** · **Lucide** icons
- **next-intl v4** — English (default), Hindi, Bengali, with `localePrefix: "always"`
  (`/en`, `/hi`, `/bn`). `/` redirects to `/en`.
- Fonts: Marcellus (display), Inter (body), Noto Sans Devanagari + Bengali (via `next/font`).

## Folder map (inside `frontend/`)

```
app/[locale]/      every page, one render per language (about, activities, events,
                   gallery, certificates, members, join, contact, + home)
app/sitemap.ts · robots.ts · manifest.ts · icon.svg   (SEO route files)
app/[locale]/opengraph-image.tsx                      (generated social image)
content/           the editable data — one file per topic (see CONTENT-EDITING-GUIDE)
messages/          en.json · hi.json · bn.json  (UI-chrome translations)
i18n/              routing, navigation, request config
lib/               utils (cn), content selectors + localize, seo, structured-data, nav
types/             content type definitions
components/ui/     button, card, dialog, accordion, input, …
components/layout/ navbar, nav-dropdown, footer, language-switcher, announcement-bar
components/home/   hero, weekly-activity, stats, volunteer-cta
components/shared/ cards, gallery grid, smart-image, sacred SVGs, contact-info, …
components/forms/  join-form, contact-form (UI-only, backend-ready)
public/images/     stock photos (replaceable) + CREDITS.md
proxy.ts           locale detection & routing (Next 16 renamed "middleware" → "proxy")
```

## Content architecture (no database)

All content is plain TypeScript in `content/*.ts`, assembled by `content/site-content.ts`
into one `siteContent` object. `lib/content.ts` exposes `localize()` plus selectors
(`getUpcomingEvents`, `getActiveCertificates`, `getSortedMembers`, …). Components receive
the active `locale` and call `localize()` — so adding data never requires touching
component code.

Images use a token system: real paths (`/images/x.jpg`) render via `next/image`;
`ph:<seed>` tokens render a branded gradient placeholder (`components/shared/smart-image.tsx`).

## Internationalization

`localePrefix: "always"`. Add a language by editing `i18n/routing.ts` and adding
`messages/<code>.json`. Data text uses `{ en, hi, bn }` objects; UI chrome uses the
message catalogs. The navbar language switcher preserves the current page.

> Note: we use `"always"` (not `"as-needed"`) because the as-needed mode caused a
> rewrite/redirect loop with this Next version.

## Navigation

`lib/nav.ts` exports `NAV_GROUPS` (Home · About▾ · Activities▾ · Contact for the navbar)
and a flat `NAV_LINKS` (footer + sitemap, so every page stays crawlable). Desktop groups
render through `components/layout/nav-dropdown.tsx`; mobile shows grouped sections.

## SEO / AEO / GEO

- Per-page localized `<title>`/description, Open Graph + Twitter cards, canonical +
  `hreflang` alternates (`lib/seo.ts`).
- **JSON-LD** (`lib/structured-data.ts`): Organization/NGO, WebSite, FAQPage, Event,
  BreadcrumbList — injected via `components/seo/json-ld.tsx`.
- Auto `sitemap.xml`, `robots.txt`, web manifest, generated OG image.
- On-page FAQ + FAQ schema and semantic HTML for answer/AI engines.

## Performance & a11y

Static prerendering of all locale pages, `next/image` optimization, CSS-animated hero
(no JS gate, no flash), lazy iframes, WCAG-minded contrast, keyboard nav, alt text,
reduced-motion support.

## Forms → email (Resend)

The **Contact** and **Join** forms (`components/forms/*`) POST JSON to route handlers
`app/api/contact/route.ts` and `app/api/join/route.ts`, which validate input, drop bots via
a hidden honeypot, render a themed HTML email (`lib/email/templates.ts`) and send it to the
org's Gmail via Resend (`lib/email/resend.ts`, `replyTo` = the submitter). Requires
`RESEND_API_KEY` (see `docs/EMAIL-SETUP.md` and `frontend/.env.example`). Forms show
success/error states; missing key → graceful error.

## Future scalability

- **Database / CMS:** swap the imports inside `lib/content.ts` for async fetchers —
  component APIs stay identical.
- **Auth / member portal / admin / blog / donations / event registration:** add route
  groups under `app/[locale]/`; the `donation` model + `enabled` flag are already in place.
- **Deploy:** optimized for **Vercel** (import the repo, root directory = `frontend`).
  Any Node host running `npm run build && npm run start` works too. Set `site.url` to the
  real domain.
