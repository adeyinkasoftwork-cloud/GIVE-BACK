# GIVEBACK ($GBACK) — Recovery, GitHub & Deployment Guide

This zip is a complete, self-contained project. Use it to replace the contents
of your local folder, then reconnect to GitHub and (optionally) deploy.

---

## STEP 1 — Replace your local files

1. Unzip this download. You get a folder named `onramper-clone`.
2. Open it and select EVERYTHING inside it (app, components, public,
   package.json, etc.).
3. Copy those into your existing project folder
   (`~/Downloads/onramper-clone`), choosing Replace / Merge when asked.

> The zip does NOT contain `node_modules` or `.next` (those rebuild) and does
> NOT contain a `.git` folder. Whether you still have `.git` decides Step 3.

## STEP 2 — Install & preview

In VS Code's terminal, inside the folder:

```bash
cd ~/Downloads/onramper-clone
npm install
npm run dev
```

Open http://localhost:3000 and confirm the site loads.

## STEP 3 — Reconnect to GitHub

First check whether the hidden `.git` folder survived. In the terminal:

```bash
git status
```

### Case A — it prints branch/file info  → `.git` survived
Your GitHub link is intact. Just commit and push:

```bash
git add .
git commit -m "Restore full GIVEBACK site"
git push
```

### Case B — it says "not a git repository"  → `.git` was deleted
Re-initialize and reconnect to your repo:

```bash
git init
git branch -M main
git remote add origin https://github.com/adeyinkasoftwork-cloud/GIVE-BACK.git
git add .
git commit -m "Restore full GIVEBACK site"
git push -u origin main --force
```

`--force` overwrites the repo with this restored version. That is correct here
because this IS the version you want live. (Use the Personal Access Token as the
password when prompted.)

## STEP 4 (optional) — Deploy to a live URL with Vercel

GitHub stores the code; it does not make a public website. To go live:

1. Go to https://vercel.com and sign in with your GitHub account.
2. Click "Add New Project" → import the `GIVE-BACK` repo.
3. Vercel auto-detects Next.js. Leave defaults. Click Deploy.
4. You get a live URL (e.g. `give-back.vercel.app`). Every future `git push`
   to `main` redeploys automatically.

No environment variables are required for the static frontend.

---

## Notes / things still to wire up (frontends only)
- DexScreener chart: real embed; shows live data once deployed (may be blank on
  localhost because third-party iframes are often blocked there).
- Swap tile & PayPal button: styled frontends. Real swap (Jupiter/wallet) and
  real PayPal checkout need backend/credentials.
- Globe country list: edit the `PRESENCE` object in `components/Globe.jsx`.
- Image carousel: gradient placeholders until you add real photos in
  `components/ImageCarousel.jsx`.
