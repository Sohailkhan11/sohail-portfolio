'use client';

export const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.54h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4V9.75Z" /></svg>
);

/** Use *word* inside `title` for serif-italic emphasis. `light` = white text for coloured backgrounds. */
export function Heading({ n, kicker, title, light = false, accent = 'text-coral' }: { n?: string; kicker: string; title: string; light?: boolean; accent?: string }) {
  return (
    <div data-reveal className="mb-12 max-w-4xl md:mb-16">
      <div className={`mb-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.28em] ${light ? 'text-white/80' : 'text-ink/60'}`}>
        {n && <span className={light ? 'text-white' : 'text-coral'}>{n}</span>}<span className={`h-px w-10 ${light ? 'bg-white/50' : 'bg-ink/30'}`} />{kicker}
      </div>
      <h2 className={`font-display text-[2.2rem] font-bold leading-[1.02] tracking-tight [text-wrap:balance] sm:text-5xl md:text-7xl ${light ? 'text-white' : 'text-ink'}`}>
        {title.split('*').map((t, i) => i % 2 ? <em key={i} className={`serif-em pr-1 ${light ? 'text-white' : accent}`}>{t}</em> : t)}
      </h2>
    </div>
  );
}
