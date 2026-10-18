import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Building2, Home as HomeIcon, KeyRound, Repeat, ShieldCheck, Sparkles } from 'lucide-react';
import ScrollStory, { type Chapter } from '@/components/ScrollStory';
import Marquee from '@/components/Marquee';
import SectionHeading from '@/components/SectionHeading';
import Checklist from '@/components/Checklist';
import Process from '@/components/Process';
import Reveal from '@/components/Reveal';
import Bubbles from '@/components/Bubbles';
import CTABand from '@/components/CTABand';
import { promises, services } from '@/data/content';
import { useSEO } from '@/lib/useSEO';

const icons = { Home: HomeIcon, Sparkles, KeyRound, Building2, Repeat, ShieldCheck, BadgeCheck };

const homeStory: Chapter[] = [
  {
    from: 0, to: 0.26, h1: true, hint: true,
    eyebrow: 'Home & office cleaning · Leeds',
    title: <>A clean you can <span className="shine-text">see</span> from the doorway.</>,
    body: 'Every space starts somewhere. Ours is a little… lived in.',
    actions: [{ label: 'Get your free quote', to: '/contact', kind: 'sun' }, { label: 'Home cleaning', to: '/domestic', kind: 'glass' }],
  },
  { from: 0.26, to: 0.52, eyebrow: 'Meet your cleaner', title: 'The same trusted face, every single visit.', body: 'Vetted, insured and armed with a checklist that leaves nothing streaky, dusty or half-done.' },
  { from: 0.52, to: 0.8, eyebrow: 'Watch it happen', title: 'Top to bottom. Corner to corner.', body: 'Kitchens, bathrooms, floors and glass: wiped, scrubbed and polished until the room shines.' },
  {
    from: 0.8, to: 1,
    eyebrow: 'The result',
    title: <>Walk into <span className="shine-text">sparkle</span>.</>,
    body: 'Come home to a space that is actually clean. Miss a spot? We will put it right, free.',
    actions: [{ label: 'Get a home quote', to: '/contact', kind: 'sun' }, { label: 'See home cleaning', to: '/domestic', kind: 'glass' }],
  },
];

const officeStory: Chapter[] = [
  { from: 0, to: 0.26, eyebrow: 'Office & commercial', title: <>Monday morning. <span className="shine-text">Minus the mess.</span></>, body: 'Cold coffee rings, dusty screens and a bin that has seen better days. Time to call in the team.' },
  { from: 0.26, to: 0.58, eyebrow: 'We work around you', title: 'Done before you arrive, or after you leave.', body: 'Scheduled cleans for offices, studios and shopfronts, outside your working hours so nobody is in the way.' },
  {
    from: 0.58, to: 1,
    eyebrow: 'Open the doors',
    title: <>Your team walks into <span className="shine-text">sparkle</span>.</>,
    body: 'A fresh, professional space for staff and visitors alike, with the same cleaner who knows your building.',
    actions: [{ label: 'Get a commercial quote', to: '/contact', kind: 'sun' }, { label: 'See commercial cleaning', to: '/commercial', kind: 'glass' }],
  },
];

export default function Home() {
  useSEO();
  return (
    <>
      <ScrollStory kind="home" label="Watch a dirty home get cleaned as you scroll" chapters={homeStory} wipe={[0.12, 0.8]} />

      <Marquee items={['Regular home clean', 'Deep clean', 'End of tenancy', 'Office & commercial', 'Leeds & surrounding areas']} className="bg-gradient-to-r from-aqua via-teal to-aqua text-white" />

      <ScrollStory kind="office" label="Watch a messy office get cleaned as you scroll" chapters={officeStory} wipe={[0.1, 0.78]} />

      <section id="services" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What we clean">Pick a plan, or build your own.</SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = icons[s.icon];
              return (
                <Reveal key={s.title} delay={i * 0.07} className="h-full">
                  <Link to={`/${s.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-sky/60 bg-white p-6 shadow-soft transition-transform duration-300 hover:-translate-y-2">
                    <span aria-hidden="true" className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-aqua/25 to-sun/30 transition-transform duration-500 group-hover:scale-[2.2]" />
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-aqua to-teal text-white shadow-glow"><Icon size={22} /></span>
                    <h3 className="relative mt-5 font-display text-xl font-bold">{s.title}</h3>
                    <p className="relative mt-2 flex-1 text-ink/70">{s.text}</p>
                    <p className="relative mt-5 flex items-center justify-between font-display font-bold text-teal">
                      {s.price}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-foam px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="The sparkle checklist">Room by room, nothing skipped.</SectionHeading>
          <Checklist />
        </div>
      </section>

      <section id="process" className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="How it works">Three steps to a spotless space.</SectionHeading>
          <Process />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-4 py-20 text-white sm:px-6 sm:py-28">
        <Bubbles className="opacity-50" />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our promise" light>Cleaning you can count on.</SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {promises.map((p, i) => {
              const Icon = icons[p.icon as keyof typeof icons];
              return (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="h-full rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun text-ink"><Icon size={22} /></span>
                    <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-white/75">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
