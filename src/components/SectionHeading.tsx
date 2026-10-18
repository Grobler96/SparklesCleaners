import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, children, center = true, light = false }: { eyebrow: string; children: ReactNode; center?: boolean; light?: boolean }) {
  return (
    <Reveal className={`mb-10 sm:mb-12 ${center ? 'text-center' : ''}`}>
      <p className={`font-display text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm ${light ? 'text-sky' : 'text-teal'}`}>{eyebrow}</p>
      <h2 className={`mx-auto mt-2 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{children}</h2>
    </Reveal>
  );
}
