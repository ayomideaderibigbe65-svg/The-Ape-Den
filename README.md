# The Ape Den Website (theapeden.space)

Official showcase and information website for **The Ape Den**, an NFT collection of **2,222 hand-drawn Apes launching on Robinhood Chain** with minting hosted on OpenSea.

---

## 🦍 Project Overview

- **Name:** The Ape Den
- **Official X:** [@ApeonInk](https://x.com/ApeDenRH)
- **Domain:** [theapeden.space](https://theapeden.space)
- **Total Supply:** Exactly 2,222
- **Blockchain:** Robinhood Chain
- **Marketplace:** OpenSea
- **Mint Date:** TBA

---

## 🗺️ Page Architecture & Routes

The site is built as a multi-route application with client-side routing and instant page transitions:

- **`/` (Home)**: Short, compact landing page with the hero, compact stat strip (clamp font sizing, zero overflow), 3 teaser cards linking to child pages, and an infinite marquee ticker.
- **`/collection`**: Full collection showcase featuring the interactive **Anatomy of an Ape** layer diagram (hotspots + mobile bottom sheet), **Sneak Peek Gallery** with interactive full-screen Lightbox (keyboard arrows, swipe, Esc), and the **Trait Gallery** with random layer preview generator.
- **`/mint`**: Mint specifications and the **three mint phases (Team, GTD, FCFS)** with zero spot counts, the disabled OpenSea mint button, and **Holder Perks** at the bottom.
- **`/roadmap`**: Milestone timeline covering launch, mint, post-mint activations, and ecosystem horizon.
- **`/faq`**: Accordion with concise answers to the 7 core questions.
- **`/404`**: Custom 404 page with official logo and return link.

---

## ⚙️ Central Configuration (`src/config/siteData.ts`)

All editable content lives in a single configuration file:
`src/config/siteData.ts`

- **Tagline:** Single placeholder string `"2,222 hand-drawn Apes on Robinhood Chain"`
- **Mint Date & Countdown:** Set `mintDate` to an ISO string to activate live countdown, or `null` for `TBA`
- **Mint Button:** Toggle `isMintActive: true` to turn the disabled button into an active OpenSea link
- **Mint Phases:** Three phases only: Team (Free), GTD (Free), FCFS (Free). Zero spot counts or allocation splits
- **Sneak Peeks:** Complete array of verified hand-drawn sneak peek art
- **Traits & Rarity:** Trait catalog with optional hidden rarity values

---

## 🎨 Official Assets Location

All official artwork files are stored in `public/assets/` and referenced directly as `<img>` elements:
- Official Logo: `public/assets/logo.png`
- Sneak Peeks: `public/assets/ape-sneak-1.jpg` through `ape-sneak-11.jpg`

---

## 🚀 Deployment to Vercel

Configured for immediate deployment on Vercel with clean URLs and custom domain `theapeden.space`:

```bash
npx vercel
```
The included `vercel.json` rewrites all direct routes (`/collection`, `/mint`, `/roadmap`, `/faq`) to `index.html`.

---

## 💻 Local Preview & Development

```bash
cd "C:\Users\user\.gemini\antigravity\scratch\the-ape-den"

# Start preview server
npm run preview

# Or start live development server
npm run dev
```
Preview is currently running at: **http://localhost:5173**
