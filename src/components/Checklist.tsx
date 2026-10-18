import { useState } from 'react';
import { motion } from 'framer-motion';
import { checklists } from '@/data/content';

type Which = keyof typeof checklists;

function Tick({ delay }: { delay: number }) {
  return (
    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-aqua/15">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#0057FF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <motion.path
          d="M5 12.5l4.5 4.5L19 7"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay, ease: 'easeOut' }}
        />
      </svg>
    </span>
  );
}

/** The room-by-room checklist. Every tick draws itself in as the card scrolls into view. */
export default function Checklist({ initial = 'home', locked = false }: { initial?: Which; locked?: boolean }) {
  const [which, setWhich] = useState<Which>(initial);
  return (
    <div>
      {!locked && (
        <div role="tablist" aria-label="Choose a checklist" className="mx-auto mb-8 flex w-fit rounded-full bg-foam p-1.5">
          {(['home', 'office'] as const).map((k) => (
            <button
              key={k}
              role="tab"
              aria-selected={which === k}
              onClick={() => setWhich(k)}
              className={`rounded-full px-6 py-2.5 font-display text-sm font-semibold transition-colors ${which === k ? 'bg-white text-teal shadow-soft' : 'text-ink/60 hover:text-ink'}`}
            >
              {k === 'home' ? 'Home' : 'Office'}
            </button>
          ))}
        </div>
      )}
      <div key={which} className="grid gap-5 sm:grid-cols-2">
        {checklists[which].map((c, ci) => (
          <motion.div
            key={c.room}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className="rounded-3xl border border-sky/60 bg-white p-6 shadow-soft"
          >
            <h3 className="font-display text-xl font-bold text-teal">{c.room}</h3>
            <ul className="mt-4 grid gap-3">
              {c.tasks.map((t, ti) => (
                <li key={t} className="flex items-start gap-3 text-ink/85">
                  <Tick delay={ci * 0.08 + ti * 0.12 + 0.2} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
