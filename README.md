# Sohail Ahmed – Portfolio

Next.js (App Router) · React · TypeScript · Tailwind CSS · GSAP + ScrollTrigger · Framer Motion · Lucide React.

All content comes from your CV and lives in `lib/data.ts`. Your photo is `public/sohail.webp` (cutout of the professional photo from your CV, transparent background).

## 1. Run locally
Requires Node.js 18.18+ (20 or 22 recommended).
```bash
npm install
cp .env.example .env.local     # then fill in, see "Contact form"
npm run dev                    # http://localhost:3000
npm run build && npm start     # test the production build
```

## 2. Contact
There is no form and no server setup. The Contact section has icon buttons for email (`mailto:`), phone (`tel:`) and LinkedIn. Edit them in `lib/data.ts` (`profile`). No environment variables or API keys are needed.

## 3. Upload to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
# create an empty repo on github.com (no README), then:
git remote add origin https://github.com/YOUR_USERNAME/sohail-portfolio.git
git push -u origin main
```

## 4. Deploy on Vercel (Hobby plan)
1. Sign in at vercel.com with GitHub.
2. **Add New → Project** → import `sohail-portfolio`. Framework is auto-detected as Next.js; keep the defaults.
3. No environment variables are required. Optionally add `NEXT_PUBLIC_SITE_URL` (your final URL) for SEO metadata.
4. Click **Deploy**. You get a free `your-project.vercel.app` address; rename it in **Project → Settings → Domains**.
5. Every `git push` to `main` redeploys automatically.

Hobby is for personal, non-commercial use and has usage limits. Review Vercel's current terms and limits if you plan to use the site to win paid client work.

## Customising
- Text, services, skills, projects, experience: `lib/data.ts` (per project: `featured`, `tags`, `note`, `image`)
- Sections: `components/Services.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`; shared effects in `components/ui.tsx`; styles in `app/globals.css`
- Layout and animations: `components/Portfolio.tsx`
- Colours: `tailwind.config.ts`
- Project previews load a live screenshot of each site from WordPress mShots (a free third-party service; the first load of a site can take a few seconds, and if it fails a neutral placeholder is shown). For full control, save your own screenshots in `public/projects/` and set `image: '/projects/name.jpg'` on that project in `lib/data.ts`.
