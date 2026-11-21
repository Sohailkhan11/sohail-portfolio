'use client';
import { useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { Heading } from './ui';

/** Live screenshot of the site via WordPress mShots (free third-party service). Your own file in public/projects wins. */
const shot = (domain: string, image?: string) => image ?? `https://s0.wp.com/mshots/v1/${encodeURIComponent(`https://${domain}`)}?w=800&h=500`;

export default function Projects() {
  const [hover, setHover] = useState<number | null>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 26 });
  const active = hover !== null ? projects[hover] : null;
  return (
    <section id="projects" className="bg-lemon px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Heading n="04" kicker="Featured projects" title="Selected *websites.*" accent="text-coral" />
        <ul onMouseMove={(e) => { x.set(e.clientX + 28); y.set(e.clientY - 120); }} onMouseLeave={() => setHover(null)}>
          {projects.map((p, i) => (
            <li key={p.domain} data-reveal className="border-t-2 border-ink last:border-b-2">
              <a href={`https://${p.domain}/`} target="_blank" rel="noopener noreferrer" aria-label={`Client Website ${String(i + 1).padStart(2, '0')}: ${p.domain} (opens in a new tab)`}
                onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}
                className="group relative flex items-center gap-4 overflow-hidden py-5 sm:gap-8 sm:py-6">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-blue transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100" aria-hidden />
                <span className="relative w-24 shrink-0 font-mono text-[11px] uppercase tracking-widest text-ink/60 transition-colors group-hover:text-white sm:w-44 sm:text-xs">Client Website {String(i + 1).padStart(2, '0')}</span>
                <span className="relative min-w-0 flex-1 break-words font-display text-xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-3 group-hover:text-white sm:text-3xl md:text-5xl">{p.domain}</span>
                <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-coral sm:h-12 sm:w-12"><ArrowUpRight size={20} /></span>
              </a>
            </li>
          ))}
        </ul>
        <p data-reveal className="mt-8 text-sm text-ink/70">Websites listed are from my CV. Visit each link to see the live site.</p>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div key={active.domain} style={{ x, y }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.2 }}
            className="pointer-events-none fixed left-0 top-0 z-[60] hidden w-72 overflow-hidden rounded-xl border-2 border-ink bg-white shadow-[8px_8px_0_#14110f] lg:block" aria-hidden>
            <div className="flex items-center gap-1.5 border-b-2 border-ink bg-cream px-3 py-2"><i className="h-2 w-2 rounded-full bg-coral" /><i className="h-2 w-2 rounded-full bg-lemon" /><i className="h-2 w-2 rounded-full bg-mint" /><span className="ml-2 truncate font-mono text-[10px]">{active.domain}</span></div>
            <div className="aspect-[16/10] bg-sky">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot(active.domain, active.image)} alt="" className="h-full w-full object-cover object-top" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
