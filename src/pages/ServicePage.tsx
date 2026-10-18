import { Link, Navigate, useLocation } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import BeforeAfter from '@/components/BeforeAfter';
import Checklist from '@/components/Checklist';
import CTABand from '@/components/CTABand';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import Bubbles from '@/components/Bubbles';
import { pages } from '@/data/content';
import { useSEO } from '@/lib/useSEO';

export default function ServicePage() {
  useSEO();
  const { pathname } = useLocation();
  const p = pages[pathname.replace(/\//g, '') as keyof typeof pages];
  if (!p) return <Navigate to="/" replace />;

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-deep to-teal px-4 py-14 text-white sm:px-6 sm:py-20">
        <Bubbles className="opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-sky sm:text-sm">{p.eyebrow}</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">{p.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{p.blurb}</p>
            <Link to="/contact" className="btn btn-sun mt-8">{p.cta} <ArrowRight size={18} /></Link>
            <p className="mt-4 text-sm text-white/60">Drag the room on the right to clean it.</p>
          </div>
          <BeforeAfter kind={p.kind} />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What is included">Choose what suits you.</SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {p.offers.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-3xl border border-sky/60 bg-white p-7 shadow-soft">
                  <h3 className="font-display text-xl font-bold">{o.title}</h3>
                  <p className="mt-2 flex-1 text-ink/70">{o.text}</p>
                  <p className="mt-5 font-display text-lg font-bold text-teal">{o.price}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {p.list.map((t) => (
              <li key={t} className="flex items-start gap-3 font-medium">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sun text-ink"><Check size={14} strokeWidth={3} /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-foam px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="The sparkle checklist">What we do, room by room.</SectionHeading>
          <Checklist initial={p.checklist} locked />
        </div>
      </section>

      <CTABand />
    </>
  );
}
