# ✏️ Content Editing Guide

You can update the **entire website without a database or any coding knowledge** — just
edit the text files in **`frontend/content/`**. Each topic has its own file.

## Which file do I edit?

| To change… | Edit this file |
|------------|----------------|
| Organization name, tagline, description, website domain | `frontend/content/site.ts` |
| Address, phone, WhatsApp, email, map, social links | `frontend/content/contact.ts` |
| Home page hero (headline, mission, buttons) | `frontend/content/hero.ts` |
| About story, vision, mission, values, objectives, stats | `frontend/content/about.ts` |
| The nine activities (Bhajan Kirtan, Gau Seva, …) | `frontend/content/activities.ts` |
| Tuesday temple satsang details | `frontend/content/weekly-activity.ts` |
| **Events (add / edit / mark past)** | `frontend/content/events.ts` |
| Gallery photos & videos, categories | `frontend/content/gallery.ts` |
| Certificates / registrations | `frontend/content/certificates.ts` |
| Members / committee | `frontend/content/members.ts` |
| Testimonials | `frontend/content/testimonials.ts` |
| Top announcement banner | `frontend/content/announcements.ts` |
| Donation details | `frontend/content/donation.ts` |
| FAQs (also feeds Google/AI search) | `frontend/content/faqs.ts` |
| "Area of Interest" options on the Join form | `frontend/content/interest-areas.ts` |

> `frontend/content/site-content.ts` just stitches these together — you rarely touch it.

## The two rules of editing

**1. Text** can be written two ways:
```ts
title: "Bhajan Kirtan"                                    // shown in every language
title: { en: "Bhajan Kirtan", hi: "भजन कीर्तन", bn: "ভজন কীর্তন" }   // per language
```

**2. Images** can be either:
```ts
src: "/images/bhajan-kirtan.jpg"   // a real photo in frontend/public/images
src: "ph:lotus"                    // a branded saffron placeholder tile
```
To use your own photo: drop the file into `frontend/public/images/` and point `src` to
`/images/your-file.jpg`.

## Common tasks

### Add an event
Open `frontend/content/events.ts` and copy an existing block. Set a unique `id` and `slug`,
the `date` (`"YYYY-MM-DD"`), `time`, `location`, `description`, and `status: "upcoming"`.
Upcoming events automatically sort soonest-first and appear on the home page.
After an event passes, change its `status` to `"past"`.

### Show/hide a section
- **Certificates:** set a certificate's `active: true`.
- **Announcement banner:** set an announcement's `active: true`.
- **Donations:** in `donation.ts`, set `enabled: true` and fill the bank/UPI details.
- **Members / Testimonials / Events:** emptying the array hides that section gracefully.

### Add a language
Add the language code in `frontend/i18n/routing.ts` and create
`frontend/messages/<code>.json` (copy `en.json` and translate). The navbar switcher and
routes update automatically.

## ⚠️ Before going live — replace placeholders
Search the content files for `⚠️`:
- `contact.ts` → real phone, WhatsApp, email, social URLs
- `site.ts` → your real domain in `url`
- `members.ts` → real member names (and photos)
- any remaining `ph:` images → real photos
