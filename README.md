# Vidya P B — AI Engineer Portfolio

A single-page portfolio built with **React + Vite + Tailwind CSS v4 + React Router**.

## Run it in VS Code

1. Unzip this folder and open it in VS Code (`File → Open Folder…`).
2. Open a terminal inside VS Code: **Terminal → New Terminal**.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Ctrl-click the `localhost` link VS Code prints to view it live. Edits hot-reload instantly.

---

## ⚠️ Required one-time setup: the contact form

The "Get in touch" button opens a `/contact` page with a real form. Since this
is a static site (no backend server), it uses **Formspree** — a free service
that forwards form submissions straight to your email.

1. Go to **https://formspree.io** and sign up (free tier is enough).
2. Create a new form. Formspree gives you an endpoint that looks like:
   `https://formspree.io/f/abc1234`
3. Open `src/pages/ContactPage.jsx` and replace this line near the top:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   with your real endpoint.
4. Save, and messages submitted on `/contact` will land in your inbox
   (`vidyapb608@gmail.com`) automatically.

Until you do this, the form will show an error when submitted — it needs
your real endpoint to actually deliver mail.

---

## Getting a public link with your name in it (for your resume)

Right now the site only runs on `localhost` on your machine. To get a link
you can put on your resume and send to anyone, deploy it — free, in a few
minutes — using **Vercel** (recommended) or **Netlify**.

### Option A — Vercel (recommended)
1. Push this project to a GitHub repo (create a new repo, e.g. `vidya-portfolio`).
2. Go to **https://vercel.com**, sign up with your GitHub account.
3. Click **Add New → Project**, select your `vidya-portfolio` repo, click **Deploy**.
4. Vercel auto-detects Vite and builds it — no config needed (the `vercel.json`
   file already included makes the `/contact` page work correctly).
5. After deploy, go to **Settings → Domains** and change the auto-generated
   name to something like `vidya-pb.vercel.app` or `vidyaportfolio.vercel.app`
   — that becomes your permanent public link.

### Option B — Netlify
1. Go to **https://app.netlify.com/drop** and drag-and-drop your `dist/`
   folder (run `npm run build` first to generate it) — instant live link.
2. For a custom name: **Site settings → Change site name** →
   e.g. `vidya-pb` → your link becomes `vidya-pb.netlify.app`.
   (The included `public/_redirects` file makes `/contact` work correctly.)

Either way, put the resulting link (e.g. `https://vidya-pb.vercel.app`)
directly on your resume.

---

## Build for deployment manually

```
npm run build
```

Creates a `dist/` folder with the production-ready static site.

## Editing content

All text content (name, skills, projects, certificates) lives in one file:
`src/data.js`. Your photo is at `src/assets/profile.jpeg` and certificate
images are in `public/certs/`. The browser tab icon is `public/favicon.svg`.
