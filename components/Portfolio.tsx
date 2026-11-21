'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowDown, Menu, X, Mail, Phone } from 'lucide-react';
import { profile, stack } from '@/lib/data';
import { Heading, LinkedInIcon } from './ui';
import Services from './Services';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const nav = [['About', '#about'], ['Services', '#services'], ['Stack', '#stack'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']];

function Magnetic({ children, className = '', href }: { children: React.ReactNode; className?: string; href: string }) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  return (
    <motion.a href={href} style={{ x, y }} whileTap={{ scale: 0.96 }} className={className}
      onMouseMove={(e) => { if (reduce) return; const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.25); y.set((e.clientY - r.top - r.height / 2) * 0.25); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.a>
  );
}

function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.body.classList.add('has-cursor');
    const xTo = gsap.quickTo(dot.current, 'x', { duration: 0.25, ease: 'power3' });
    const yTo = gsap.quickTo(dot.current, 'y', { duration: 0.25, ease: 'power3' });
    const move = (e: MouseEvent) => { xTo(e.clientX); yTo(e.clientY); gsap.to(dot.current, { opacity: 1, duration: 0.2 }); };
    const over = (e: MouseEvent) => gsap.to(dot.current, { scale: (e.target as HTMLElement).closest('a,button') ? 2.6 : 1, duration: 0.2 });
    window.addEventListener('mousemove', move); window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); document.body.classList.remove('has-cursor'); };
  }, []);
  return <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] -ml-2 -mt-2 h-4 w-4 rounded-full bg-white opacity-0 mix-blend-difference" />;
}

function Counter({ to, suffix = '+' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current!;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = `${to}${suffix}`; return; }
    const o = { v: 0 };
    const t = gsap.to(o, { v: to, duration: 2, ease: 'power2.out', delay: 0.6, onUpdate: () => { el.textContent = `${Math.round(o.v)}${suffix}`; } });
    return () => { t.kill(); };
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

function Marquee({ items, className = '', rev = false }: { items: string[]; className?: string; rev?: boolean }) {
  return (
    <div className="overflow-hidden" aria-hidden>
      <div className={`marquee flex w-max items-center ${rev ? 'rev' : ''}`}>
        {[...items, ...items].map((t, i) => (<span key={i} className={`flex items-center ${className}`}>{t}<span className="mx-6 text-[0.6em]">✦</span></span>))}
      </div>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const words: [string, boolean][] = [['I', false], ['Build', false], ['Digital', true], ['Experiences', true], ['That', false], ['Make', false], ['an', false], ['Impact.', false]];
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 md:px-12 md:pb-28 md:pt-36">
      <div data-parallax="50" className="absolute -left-28 top-32 hidden md:block" aria-hidden><div className="blob h-80 w-80 bg-sky" /></div>
      <div data-parallax="-60" className="absolute -right-24 bottom-10 hidden md:block" aria-hidden><div className="blob h-72 w-72 bg-lilac/70" /></div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div className="min-w-0">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-7 inline-flex items-center gap-3 rounded-full border-2 border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] sm:text-xs">
            <span className="relative flex h-2.5 w-2.5"><span className="ping absolute inline-flex h-full w-full rounded-full bg-coral" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" /></span>{profile.title} · {profile.location}
          </motion.div>
          <h1 className="font-display text-[2.4rem] font-bold leading-[1.03] tracking-tight min-[400px]:text-[2.8rem] sm:text-6xl xl:text-[5.6rem]" aria-label="I Build Digital Experiences That Make an Impact.">
            {words.map(([w, hi], i) => (
              <span key={i} className="mr-[0.2em] inline-block overflow-hidden pb-[0.22em] align-bottom" aria-hidden>
                <motion.span className={`relative inline-block ${hi ? 'marker' : ''}`} initial={reduce ? false : { y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.15 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                  {w}
                  {w === 'Impact.' && (
                    <svg className="absolute -bottom-[0.02em] left-0 h-[0.22em] w-full text-coral" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                      <path className="draw" pathLength={1} d="M2 8 Q 25 0 50 7 T 100 7 T 150 7 T 198 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-7 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            I&apos;m Sohail Ahmed, a Senior Front-End &amp; CMS Developer specializing in modern websites, interactive experiences and high-performance digital solutions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
            <Magnetic href="#projects" className="inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-semibold text-white sm:text-base">Explore My Work <span className="grid h-10 w-10 place-items-center rounded-full bg-coral text-white"><ArrowUpRight size={18} /></span></Magnetic>
            <Magnetic href="#contact" className="inline-flex items-center rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-white sm:text-base">Let&apos;s Work Together</Magnetic>
          </motion.div>
          <div className="mt-12 flex gap-10">
            {[[5, 'Years Experience'], [50, 'Websites Delivered']].map(([n, l]) => (
              <div key={l as string}><div className="font-display text-5xl font-bold text-blue sm:text-6xl"><Counter to={n as number} /></div><div className="mt-1 text-xs font-medium uppercase tracking-widest text-ink/60">{l}</div></div>
            ))}
          </div>
        </div>
        <div data-parallax="-30" className="relative mx-auto w-full max-w-[19rem] min-[400px]:max-w-[22rem] sm:max-w-md">
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.9 }} className="relative aspect-square">
            <div className="blob absolute inset-0 bg-lemon" aria-hidden />
            <div className="absolute inset-[7%] overflow-hidden rounded-full bg-coral">
              <Image src="/sohail.webp" alt="Portrait of Sohail Ahmed" fill priority sizes="(max-width: 640px) 80vw, 440px" className="object-cover object-[50%_90%]" />
            </div>
            <div className="absolute -right-3 -top-3 grid h-24 w-24 place-items-center rounded-full bg-blue text-white sm:-right-6 sm:h-28 sm:w-28" aria-hidden>
              <svg viewBox="0 0 120 120" className="h-full w-full animate-[spin_18s_linear_infinite]"><defs><path id="ring" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs>
                <text fontSize="9.5" fill="#fff" className="font-mono uppercase"><textPath href="#ring" textLength="268" lengthAdjust="spacing">Front-End · CMS · WordPress · </textPath></text></svg>
              <span className="absolute text-xl">✦</span>
            </div>
            <div className="floaty absolute -left-3 bottom-8 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white sm:-left-8" style={{ '--r': '-6deg' } as React.CSSProperties}>50+ websites</div>
            <div className="floaty absolute -right-2 bottom-2 rounded-full bg-mint px-5 py-2.5 text-sm font-semibold sm:-right-6" style={{ '--r': '5deg', animationDelay: '1.4s' } as React.CSSProperties}>5+ years</div>
          </motion.div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60 xl:flex">Scroll <ArrowDown size={14} className="animate-bounce" /></a>
    </section>
  );
}

function About() {
  const facts = [['Education', 'BS Computer Science', 'University of Sindh · 2017–2020'], ['Certification', 'Certified Hybrid Web & Mobile Application', 'Jawan Pakistan'], ['Based in', 'Karachi, Pakistan', 'Working with clients worldwide']];
  return (
    <section id="about" className="relative overflow-hidden bg-coral px-5 py-24 text-white sm:px-8 md:px-12 md:py-36">
      <div className="absolute -right-24 -top-24 text-[22rem] leading-none text-white/10 animate-[spin_40s_linear_infinite]" aria-hidden>✦</div>
      <div className="relative mx-auto max-w-7xl">
        <Heading n="01" kicker="About me" title="Code, CMS and delivery — *end to end.*" light />
        <div data-reveal className="max-w-5xl space-y-8 font-display text-2xl font-medium leading-snug sm:text-3xl md:text-[2.6rem] md:leading-[1.2]">
          <p>I&apos;m a Front-End and CMS Developer with <span className="serif-em underline decoration-white/60 decoration-2 underline-offset-8">5+ years</span> of experience delivering <span className="serif-em underline decoration-white/60 decoration-2 underline-offset-8">50+ websites</span> across WordPress, Shopify, HubSpot, Webflow and Squarespace.</p>
        </div>
        <p data-reveal className="mt-10 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">My strengths are responsive development, UI implementation, CMS customization and SEO-focused development. I take end-to-end ownership of a project — from front-end build to hosting, DNS configuration, website migration and production deployment. I&apos;ve worked directly with clients to turn briefs into production-ready websites, and my career grew from WordPress Internship Trainee in 2021 to Senior WordPress Developer, and today CMS Developer at Codefied.</p>
        <div className="mt-16 grid gap-10 border-t border-white/40 pt-10 md:grid-cols-3">
          {facts.map(([k, v, s]) => (<div key={k} data-reveal><div className="font-mono text-xs uppercase tracking-widest text-white/75">{k}</div><div className="mt-2 font-display text-xl font-semibold sm:text-2xl">{v}</div><div className="mt-1 text-sm text-white/80">{s}</div></div>))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const all = stack.flatMap((g) => g.items); const half = Math.ceil(all.length / 2);
  return (
    <section id="stack" className="overflow-hidden bg-sky py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-12"><Heading n="03" kicker="Tech stack" title="Tools I *work* with." accent="text-blue" /></div>
      <div className="space-y-4 md:space-y-6">
        <Marquee items={all.slice(0, half)} className="font-display text-4xl font-bold text-ink sm:text-6xl md:text-7xl" />
        <Marquee items={all.slice(half)} rev className="font-serif text-4xl italic text-blue sm:text-6xl md:text-7xl" />
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-x-10 gap-y-8 px-5 sm:grid-cols-2 sm:px-8 md:px-12 lg:grid-cols-3">
        {stack.map((g) => (
          <div key={g.group} data-reveal className="border-t-2 border-ink pt-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-ink/70">{g.group}</h3>
            <p className="mt-3 font-display text-lg font-semibold leading-snug">{g.items.join('  ·  ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Why() {
  const items = [['5+ Years Experience', 'From Internship Trainee to Senior Developer.'], ['50+ Websites Delivered', 'Across multiple platforms and industries.'], ['Multi-Platform Expertise', 'WordPress, Shopify, HubSpot, GoHighLevel, Webflow and Squarespace.'], ['Responsive Development', 'Interfaces built to work across desktop, tablet and mobile.'], ['End-to-End Delivery', 'Development, hosting, DNS, migration and deployment.'], ['Tracking Ready', 'GA4, GTM, Meta Pixel, Google Ads conversions and CallRail.']];
  return (
    <section className="bg-mint px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Heading n="06" kicker="Why work with me" title="Built for *results.*" accent="text-ink" />
        <ul>
          {items.map(([t, d], i) => (
            <motion.li key={t} data-reveal whileHover={{ x: 12 }} className="grid items-baseline gap-2 border-t-2 border-ink py-6 md:grid-cols-[5rem_1.1fr_1fr] md:gap-8">
              <span className="font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{t}</h3>
              <p className="text-ink/80">{d}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-10 sm:px-8 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-ink/60">© {new Date().getFullYear()} Sohail Ahmed. All rights reserved.</p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm font-medium">{nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-coral">{l}</a>)}</nav>
        <div className="flex gap-4">
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-coral"><LinkedInIcon /></a>
          <a aria-label="Email" href={`mailto:${profile.email}`} className="transition-colors hover:text-coral"><Mail size={20} /></a>
          <a aria-label="Phone" href={profile.phoneHref} className="transition-colors hover:text-coral"><Phone size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border-2 border-ink bg-cream/90 px-5 py-2.5 backdrop-blur">
        <a href="#top" className="font-display text-lg font-bold">SA<span className="text-coral">.</span></a>
        <nav aria-label="Primary" className="hidden gap-7 text-sm font-medium md:flex">{nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-coral">{l}</a>)}</nav>
        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-coral md:block">Hire me</a>
        <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-3xl border-2 border-ink bg-cream p-3 md:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium hover:bg-lemon">{l}</a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) =>
          gsap.from(el, { opacity: 0, y: 50, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) =>
          gsap.to(el, { y: Number(el.dataset.parallax), ease: 'none', scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true } }));
      });
    }, root);
    return () => { ctx.revert(); mm.revert(); };
  }, []);
  return (
    <div ref={root}>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <div className="-rotate-1 bg-blue py-4 text-white"><Marquee items={['WordPress', 'Elementor', 'Shopify', 'Webflow', 'HubSpot', 'GoHighLevel', 'Squarespace']} className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl" /></div>
        <About /><Services /><Stack /><Projects /><Experience /><Why /><Contact />
      </main>
      <Footer />
    </div>
  );
}
