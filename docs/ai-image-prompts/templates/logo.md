# Template — Organization Logo

A foolproof prompt to generate a **logo for Sanatan Shiv Shakti**. A logo must be
**simple, memorable, and legible even at tiny sizes** (favicon, WhatsApp DP), so keep it
clean — far simpler than a poster.

> **Best tools for logos (2026):** **Recraft** and **Ideogram** (they output crisp,
> vector-style marks and handle short text), or **GPT-Image / Midjourney** for concepts.
> Whatever you use, finish by tracing/cleaning it into a true vector (SVG) in **Illustrator,
> Inkscape, or Canva** so it scales perfectly. Always ask for a **plain / transparent
> background**.

---

## Brand anchor (keep this in every logo prompt)

```
Brand: "Sanatan Shiv Shakti" — a spiritual & charitable youth organization, Howrah, India.
Feeling: sacred, premium, modern, trustworthy, timeless. NOT clip-art, NOT busy.
Colors: deep saffron #C2410C, bright saffron #F59324, deep maroon #7A1E27, gold #C8A248.
Possible symbols (choose ONE or TWO, don't combine all): Om (ॐ), trishul (trident),
lotus, lit diya, sun rays, temple arch, a stylized "S".
```

---

## Option A — Emblem / icon (recommended first)

```
Design a clean, modern flat-vector LOGO ICON for "Sanatan Shiv Shakti", a Hindu spiritual
& charitable organization. A single elegant emblem combining a trishul (trident) and a
lit diya (or a lotus) inside a simple circular form, with subtle sun rays. Minimal,
symmetrical, balanced. Deep saffron #C2410C and gold #C8A248 with a deep maroon #7A1E27
accent. Flat vector style, smooth clean lines, no gradients-heavy detail, no text, plain
white or transparent background. Must look crisp and recognizable even at 32×32 pixels.
Provide it centered with generous padding.
AVOID: photorealism, clutter, tiny details, 3D bevels, drop shadows, gibberish text,
extra elements.
```

## Option B — Circular badge / seal (with name)

```
Design a premium circular BADGE LOGO (seal style) for "Sanatan Shiv Shakti". Center: a
simple emblem of Om (ॐ) over a lotus with soft sun rays. Around the ring, the text
"SANATAN SHIV SHAKTI" on top and "SEVA · SANSKAR · SANSKRITI" on the bottom, separated by
small diya or star dividers. Colors: deep saffron #C2410C, gold #C8A248, deep maroon
#7A1E27 on a cream/white background. Flat vector, elegant, symmetrical, highly legible.
Transparent background.
AVOID: distorted or misspelled text (verify the spelling), clutter, 3D effects, photoreal.
```

## Option C — Wordmark + icon lockup

```
Design a horizontal LOGO LOCKUP for "Sanatan Shiv Shakti": a small emblem on the left
(a trishul + diya inside a circle) next to the words "Sanatan Shiv Shakti" in an elegant,
slightly traditional serif, with a thin tagline "Seva · Sanskar · Sanskriti" beneath the
name. Deep saffron and gold with a maroon accent. Clean, balanced, premium, flat vector,
transparent background.
AVOID: heavy detail, distorted/misspelled text, clashing colors.
```

---

## ✅ Suggested go-to prompt

```
Minimal, premium flat-vector emblem logo for "Sanatan Shiv Shakti", a Hindu spiritual &
charitable youth organization. A stylized trishul (trident) rising from a lit diya, framed
by a simple circle with subtle sun rays. Deep saffron #C2410C and temple gold #C8A248 with
a deep maroon #7A1E27 accent. Clean smooth lines, perfectly symmetrical, sacred yet modern,
no text, transparent background, recognizable at very small sizes. Vector logo, crisp,
professional. AVOID: clutter, 3D, shadows, photorealism, text, extra detail.
```

## After you generate it

- Pick the cleanest concept and **redraw it as an SVG** (Illustrator / Inkscape / Canva)
  so it stays sharp at any size and you can recolor it.
- Export: a full-color version, a **white/mono version** (for dark backgrounds), and a
  **square icon** crop for the favicon and social profile pictures.
- To use it on the website, replace the diya mark in `frontend/app/icon.svg` and the
  `OmDisc` in `frontend/components/shared/sacred.tsx`, or drop a `logo.svg` into
  `frontend/public/` and reference it.

## Text-in-logo warning

AI tools often **misspell** text and **cannot render Hindi/Bengali** reliably. For badge/
wordmark logos, generate the **shape** with AI, then set the actual text (including any
Devanagari/Bengali) yourself in a vector/design tool.
