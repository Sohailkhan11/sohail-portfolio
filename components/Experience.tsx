'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '@/lib/data';
import { Heading } from './ui';

/*
 * Alignment (same on mobile + desktop): track/fill left 10px + 2px wide -> centre x = 11px; dot left 0 + 22px wide -> centre x = 11px.
 * Date badge is 28px tall at the top of each item (centre y = 14px): track starts at top 14px; dot top 3px (+11px) -> centre y = 14px.
 */
export default function Experience() {
  const wrap = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = wrap.current!;
    const items = Array.from(el.querySelectorAll<HTMLElement>('.tl-item'));
    const fill = el.querySelector<HTMLElement>('[data-fill]')!;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (reduce) { gsap.set(fill, { scaleY: 1 }); items.forEach((i) => i.classList.add('is-active')); return; }
      gsap.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 60%', end: 'bottom 60%', scrub: 0.4 } });
      items.forEach((it) => ScrollTrigger.create({ trigger: it, start: 'top 60%', onEnter: () => it.classList.add('is-active'), onLeaveBack: () => it.classList.remove('is-active') }));
    }, el);
    return () => ctx.revert();
  }, []);
  return (
    <section id="experience" className="px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Heading n="05" kicker="Experience" title="Career *timeline.*" />
        <div ref={wrap} className="relative">
          <div className="absolute bottom-0 left-[10px] top-[14px] w-[2px] rounded-full bg-ink/15" aria-hidden />
          <div data-fill className="absolute bottom-0 left-[10px] top-[14px] w-[2px] origin-top rounded-full bg-gradient-to-b from-coral to-blue" style={{ transform: 'scaleY(0)' }} aria-hidden />
          <ol className="space-y-14">
            {experience.map((e) => (
              <li key={e.company} data-reveal className="tl-item relative pl-12 sm:pl-16">
                <span className="tl-dot absolute left-0 top-[3px] grid h-[22px] w-[22px] place-items-center rounded-full border-2 border-ink/30 bg-cream transition-all duration-500" aria-hidden><i className="h-2 w-2 rounded-full bg-ink/30 transition-colors duration-500" /></span>
                <span className="inline-flex h-7 items-center rounded-full bg-lemon px-3 font-mono text-xs font-medium">{e.period}</span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-4xl">{e.role}</h3>
                <p className="serif-em mt-1 text-xl text-blue sm:text-2xl">{e.company}</p>
                <ul className="mt-5 max-w-2xl space-y-2.5 text-ink/80">
                  {e.points.map((p) => (<li key={p} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />{p}</li>))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
