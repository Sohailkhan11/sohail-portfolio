'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, ShoppingBag, Layers, Code2, Database, Gauge, Rocket, BarChart3, Plus, Check } from 'lucide-react';
import { services } from '@/lib/data';
import { Heading } from './ui';

const icons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = { Globe, ShoppingBag, Layers, Code2, Database, Gauge, Rocket, BarChart3 };
const colors = ['bg-coral', 'bg-blue', 'bg-mint', 'bg-lemon', 'bg-lilac', 'bg-sky', 'bg-coral', 'bg-blue'];
const dark = [true, true, false, false, false, false, true, true];

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Heading n="02" kicker="Services" title="What I can *build* for you." />
        <div className="border-b-2 border-ink">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Code2; const isOpen = open === i;
            return (
              <div key={s.title} data-reveal className="border-t-2 border-ink">
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="group flex w-full items-center gap-4 py-5 text-left sm:gap-8 sm:py-7">
                  <span className="w-8 shrink-0 font-mono text-sm text-ink/50 sm:w-12">{String(i + 1).padStart(2, '0')}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`block font-display font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-2 ${i === 0 ? 'text-2xl sm:text-4xl md:text-6xl' : 'text-xl sm:text-3xl md:text-5xl'}`}>{s.title}</span>
                    {i === 0 && <span className="mt-2 inline-block rounded-full bg-lemon px-3 py-1 font-mono text-[11px] uppercase tracking-widest">Core expertise</span>}
                  </span>
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-transform duration-300 sm:h-14 sm:w-14 ${colors[i]} ${dark[i] ? 'text-white' : 'text-ink'} ${isOpen ? 'rotate-45' : 'group-hover:rotate-12'}`}>{isOpen ? <Plus size={22} /> : <Icon size={22} strokeWidth={1.8} />}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <div className="grid gap-6 pb-8 pl-12 sm:pl-20 md:grid-cols-2 md:gap-12">
                        <p className="max-w-md text-lg leading-relaxed text-ink/80">{s.value}</p>
                        <ul className="space-y-2.5">
                          {s.points.map((p, k) => (
                            <motion.li key={p} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + k * 0.07 }} className="flex items-start gap-3 font-medium">
                              <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${colors[i]} ${dark[i] ? 'text-white' : 'text-ink'}`}><Check size={12} strokeWidth={3} /></span>{p}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
