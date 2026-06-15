# 📧 Email Setup — sending form submissions to Gmail

When a visitor submits the **Contact** or **Join Us** form, the website emails a branded
notification to **sanatanshivshakti.howrah@gmail.com**. Delivery is handled by
[**Resend**](https://resend.com) — free, and no custom domain is required to receive mail
at your own Gmail.

You only need to do this **once**: create a free Resend account, copy an API key, and paste
it into your local file and into Vercel.

---

## Step 1 — Create a free Resend account (2 minutes)

1. Go to **https://resend.com** and click **Sign Up**.
2. **Important:** sign up using **`sanatanshivshakti.howrah@gmail.com`**.
   (On the free plan without a verified domain, Resend can deliver to the email address
   you signed up with — which is exactly the inbox you want submissions to land in.)
3. Resend sends a confirmation email to that Gmail — open it and **verify** your account.

> Free plan limits: up to **100 emails/day** (3,000/month). Far more than a community
> site needs.

## Step 2 — Create an API key

1. In the Resend dashboard, open **API Keys** (left sidebar) → **Create API Key**.
2. Name it e.g. `sanatan-shiv-shakti-website`, permission **Sending access**, then
   **Add**.
3. **Copy the key now** (it starts with `re_…`). Resend shows it only once.

## Step 3 — Add the key locally

In the project, create a file at **`frontend/.env.local`** (copy `frontend/.env.example`)
and put your key in it:

```bash
RESEND_API_KEY=re_your_copied_key_here
```

`.env.local` is git-ignored, so your key never gets committed. Restart the dev server
(`npm run dev`) after adding it.

## Step 4 — Add the key on Vercel (for the live site)

1. Vercel dashboard → your project → **Settings → Environment Variables**.
2. Add a variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** your `re_…` key
   - **Environments:** Production, Preview, Development (tick all).
3. Click **Save**, then **redeploy** the project (Deployments → ⋯ → Redeploy) so the new
   variable takes effect.

That's it — submissions now arrive in the Gmail inbox. ✅

---

## Optional settings

Both are optional env vars (locally in `.env.local`, and/or on Vercel):

| Variable | Default | Use it to… |
|----------|---------|------------|
| `CONTACT_TO_EMAIL` | the email in `content/contact.ts` | deliver to a different address |
| `CONTACT_FROM_EMAIL` | `Sanatan Shiv Shakti <onboarding@resend.dev>` | change the "From" once you verify a domain |

### Sending "From" your own domain (later, optional)
The default sender is `onboarding@resend.dev`. If you later own a domain (e.g.
`sanatanshivshakti.org`), you can verify it in Resend → **Domains**, then set
`CONTACT_FROM_EMAIL="Sanatan Shiv Shakti <contact@sanatanshivshakti.org>"`. This also
unlocks sending auto-reply confirmations to the people who fill the form (which the free,
no-domain setup cannot do).

---

## How it works (for developers)

- The forms POST JSON to **`/api/contact`** and **`/api/join`** (route handlers in
  `frontend/app/api/*/route.ts`).
- Each route validates input, drops bots via a hidden honeypot field, builds a themed HTML
  email (`frontend/lib/email/templates.ts`), and sends it with Resend
  (`frontend/lib/email/resend.ts`). `replyTo` is set to the submitter so you can reply
  straight from Gmail.
- If the key is missing or sending fails, the form shows a friendly error state and asks
  the user to try again.

## Troubleshooting

- **Form shows the error panel:** the API key is missing/invalid, or not yet added on
  Vercel. Re-check Steps 3–4 and redeploy.
- **No email arrives but no error:** check the Gmail **Spam** folder; mark as "Not spam".
  Also confirm you signed up to Resend with that same Gmail (Step 1).
- **Want to see delivery logs:** Resend dashboard → **Emails** shows every send + status.
