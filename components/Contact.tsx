'use client';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { profile } from '@/lib/data';
import { LinkedInIcon } from './ui';

const options = [
  { label: 'Email me', value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={34} />, bg: 'bg-lemon' },
  { label: 'Call me', value: profile.phone, href: profile.phoneHref, icon: <Phone size={34} />, bg: 'bg-mint' },
  { label: 'Connect on LinkedIn', value: 'Sohail Ahmed', href: profile.linkedin, icon: <LinkedInIcon size={32} />, bg: 'bg-coral', external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-blue px-5 py-24 text-white sm:px-8 md:px-12 md:py-36">
      <div className="absolute -left-20 bottom-[-8rem] text-[24rem] leading-none text-white/10 animate-[spin_50s_linear_infinite]" aria-hidden>✦</div>
      <div className="relative mx-auto max-w-7xl">
        <div data-reveal className="mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.28em] text-white/80"><span>07</span><span className="h-px w-10 bg-white/50" />Contact</div>
        <h2 data-reveal className="max-w-5xl font-display text-[2.6rem] font-bold leading-[1] tracking-tight [text-wrap:balance] sm:text-6xl md:text-8xl">Let&apos;s Build Something <em className="serif-em text-lemon">Great Together.</em></h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o, i) => (
            <motion.a key={o.label} data-reveal href={o.href} {...(o.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} whileHover="hover" className="group flex min-w-0 items-center gap-5">
              <span className="relative grid h-24 w-24 shrink-0 place-items-center">
                <span className={`ping absolute inset-0 rounded-full ${o.bg} opacity-40`} style={{ animationDelay: `${i * 0.5}s` }} />
                <motion.span variants={{ hover: { scale: 1.12, rotate: -8 } }} className={`relative grid h-24 w-24 place-items-center rounded-full text-ink ${o.bg}`}>{o.icon}</motion.span>
              </span>
              <span className="min-w-0"><span className="block font-mono text-xs uppercase tracking-widest text-white/75">{o.label}</span><span className="mt-1 block break-all font-display text-xl font-bold underline decoration-white/0 decoration-2 underline-offset-4 transition-all group-hover:decoration-white sm:text-2xl">{o.value}</span></span>
            </motion.a>
          ))}
        </div>
        <p data-reveal className="mt-14 flex items-center gap-3 text-white/80"><span className="h-px w-10 bg-white/50" />{profile.location}</p>
      </div>
    </section>
  );
}
