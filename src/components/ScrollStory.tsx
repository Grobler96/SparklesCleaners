import { useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionStyle, type MotionValue } from 'framer-motion';
import { Grime, Room, SprayBottle, Twinkles, type SceneKind } from '@/components/scene/Scene';

export type Chapter = {
  from: number;
  to: number;
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  h1?: boolean;
  hint?: boolean;
  actions?: { label: string; to: string; kind: 'sun' | 'glass' }[];
};

type Props = { kind: SceneKind; label: string; chapters: Chapter[]; wipe: [number, number] };

function Actions({ actions }: { actions: NonNullable<Chapter['actions']> }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {actions.map((a) => (
        <Link key={a.label} to={a.to} className={`btn !py-3 ${a.kind === 'sun' ? 'btn-sun' : 'btn-glass max-md:hidden'}`}>
          {a.label}
        </Link>
      ))}
    </div>
  );
}

function ChapterText({ c }: { c: Chapter }) {
  const Title = c.h1 ? 'h1' : 'h2';
  return (
    <>
      {c.eyebrow && <p className="font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-sky">{c.eyebrow}</p>}
      <Title className="mt-2 font-display font-extrabold text-[1.9rem] leading-[1.05] sm:text-5xl md:text-[3.2rem] text-white">{c.title}</Title>
      {c.body && <p className="mt-3 text-[0.95rem] sm:text-lg text-white/80 leading-relaxed max-w-md">{c.body}</p>}
      {c.actions && <Actions actions={c.actions} />}
      {c.hint && (
        <p className="mt-5 inline-flex items-center gap-2 text-sm text-sky font-semibold">
          Scroll to clean this room <ChevronDown size={18} className="animate-bounce" />
        </p>
      )}
    </>
  );
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

function ChapterView({ c, progress }: { c: Chapter; progress: MotionValue<number> }) {
  const f = 0.05;
  // the first chapter is already visible at the top and the last stays until the end, so they only fade one way.
  // (Plain functions, not range arrays: range-based transforms can be handed to the browser's scroll timeline, which drops values outside the range.)
  const fadeIn = (p: number) => (c.from <= 0 ? 1 : clamp01((p - c.from) / f));
  const fadeOut = (p: number) => (c.to >= 1 ? 1 : clamp01((c.to - p) / f));
  const opacity = useTransform(progress, (p) => Math.min(fadeIn(p), fadeOut(p)));
  const y = useTransform(progress, (p) => (1 - fadeIn(p)) * 26 - (1 - fadeOut(p)) * 26);
  const pointerEvents = useTransform(opacity, (v) => (v > 0.5 ? 'auto' : 'none'));
  return (
    <motion.div style={{ opacity, y, pointerEvents }} className="[grid-area:1/1] self-center md:self-end px-5 pt-4 md:p-8 md:rounded-3xl md:bg-ink/70 md:backdrop-blur-md md:border md:border-white/15">
      <ChapterText c={c} />
    </motion.div>
  );
}

function AnimatedStory({ kind, label, chapters, wipe }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: progress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  // --w is how far (in % of the stage width) the clean edge has travelled; the CSS clip-paths read it
  const w = useTransform(progress, (p) => -45 + 170 * clamp01((p - wipe[0]) / (wipe[1] - wipe[0])));
  const meter = useTransform(w, (v) => ((v + 45) / 170) * 100);
  const meterText = useTransform(meter, (v) => `${Math.round(v)}%`);
  const meterBar = useTransform(meter, (v) => `${v}%`);
  const bottleOpacity = useTransform(w, (v) => clamp01((v + 45) / 35) * clamp01((125 - v) / 20));
  const bottleRotate = useTransform(progress, (p) => Math.sin(p * 60) * 9 - 12);
  const raysOpacity = useTransform(progress, (p) => 0.55 * clamp01((p - wipe[1] + 0.04) / 0.14));
  const raysTurn = useTransform(progress, (p) => p * 70);

  return (
    <section ref={ref} aria-label={label} className="relative h-[440svh] md:h-[480svh]">
      <div className="story-stage sticky top-[4.5rem] h-[calc(100svh-4.5rem)] overflow-hidden bg-ink">
        <motion.div style={{ '--w': w } as MotionStyle} className="absolute inset-x-0 top-0 h-[56%] md:inset-0 md:h-full">
          <div className="absolute inset-0">
            <div className="dirty-filter absolute inset-0"><Room kind={kind} uid={`${kind}d`} /></div>
            <Grime kind={kind} />
          </div>
          <div className="clip-haze absolute inset-0 bg-sky/40" />
          <div className="clip-foam absolute inset-0 bg-white" />
          <div className="clip-clean absolute inset-0 will-change-[clip-path]">
            <Room kind={kind} uid={`${kind}c`} />
            <Twinkles kind={kind} />
          </div>
          <motion.div
            aria-hidden="true"
            style={{ opacity: raysOpacity, rotate: raysTurn }}
            className="pointer-events-none absolute -inset-[30%] mix-blend-screen [background:repeating-conic-gradient(from_0deg_at_50%_40%,rgba(255,255,255,.5)_0_5deg,transparent_5deg_16deg)] [mask-image:radial-gradient(circle_at_50%_40%,#000,transparent_62%)]"
          />
          <motion.div
            aria-hidden="true"
            style={{ opacity: bottleOpacity, rotate: bottleRotate, left: useTransform(w, (v) => `${v}%`) }}
            className="pointer-events-none absolute top-1/2 h-36 w-24 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_8px_18px_rgba(5,42,51,.5)] md:h-48 md:w-32"
          >
            <SprayBottle className="h-full w-full" />
          </motion.div>
          <div className="pointer-events-none absolute left-3 top-3 w-44 rounded-2xl bg-ink/70 p-3 text-white backdrop-blur md:left-auto md:right-6 md:top-5 md:w-56">
            <div className="flex items-baseline justify-between gap-3 font-display text-xs font-semibold uppercase tracking-widest text-sky">
              <span>Sparkle meter</span>
              <motion.span className="text-base text-white">{meterText}</motion.span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
              <motion.div style={{ width: meterBar }} className="h-full rounded-full bg-gradient-to-r from-aqua to-sun" />
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 grid h-[44%] bg-ink max-md:items-center max-md:pb-[4.25rem] md:inset-auto md:bottom-12 md:left-[6vw] md:h-auto md:w-[500px] md:bg-transparent">
          {chapters.map((c) => <ChapterView key={c.from} c={c} progress={progress} />)}
        </div>
      </div>
    </section>
  );
}

/** Reduced-motion version: the same story, but as a still before and after with the chapter text underneath. */
function StaticStory({ kind, label, chapters }: Props) {
  return (
    <section aria-label={label} className="bg-ink px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
        <div className="relative aspect-[10/7] overflow-hidden rounded-3xl">
          <div className="dirty-filter absolute inset-0"><Room kind={kind} uid={`${kind}sd`} /></div>
          <Grime kind={kind} />
          <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-white">Before</span>
        </div>
        <div className="relative aspect-[10/7] overflow-hidden rounded-3xl">
          <Room kind={kind} uid={`${kind}sc`} />
          <Twinkles kind={kind} />
          <span className="absolute left-3 top-3 rounded-full bg-sun px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-ink">After</span>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl gap-10">
        {chapters.map((c) => <div key={c.from}><ChapterText c={{ ...c, hint: false }} /></div>)}
      </div>
    </section>
  );
}

export default function ScrollStory(props: Props) {
  const reduce = useReducedMotion();
  return reduce ? <StaticStory {...props} /> : <AnimatedStory {...props} />;
}
