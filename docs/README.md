# 📚 Sanatan Shiv Shakti — Documentation

Project-level documents for the Sanatan Shiv Shakti website.

## Repository layout

```
Sanatan Shiv Shakti/
├─ frontend/        # the Next.js website (run from here, or via root npm scripts)
├─ docs/            # ← you are here
│  ├─ README.md                 (this index)
│  ├─ PROJECT-BRIEF.md          (original project brief / requirements)
│  ├─ ARCHITECTURE.md           (tech stack, structure, i18n, SEO, scalability)
│  ├─ CONTENT-EDITING-GUIDE.md  (how to edit the website content — no coding)
│  └─ ai-image-prompts/         (prompt kit for banners, posters, cards, deity images)
└─ package.json     # root scripts that delegate to /frontend
```

## Quick links

- 🏃 **Run the site:** from the project root — `npm run dev` (→ http://localhost:3000),
  `npm run build`, `npm run start`. (These delegate into `frontend/`.)
- ✏️ **Edit content (events, gallery, members, contact…):**
  see [CONTENT-EDITING-GUIDE.md](./CONTENT-EDITING-GUIDE.md). All content lives in
  `frontend/content/` — one file per topic.
- 🎨 **Generate banners / posters / invitation & ID cards:**
  see [ai-image-prompts/](./ai-image-prompts/README.md).
- 🏗️ **Understand the codebase:** [ARCHITECTURE.md](./ARCHITECTURE.md).
- 📋 **Original requirements:** [PROJECT-BRIEF.md](./PROJECT-BRIEF.md).
