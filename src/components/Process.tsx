import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { steps } from '@/data/content';

/** Three steps joined by a line that draws itself as you scroll past. */
export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  return (
    <ol ref={ref} className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-8">
      <span aria-hidden="true" className="absolute bottom-6 left-7 top-6 w-1 rounded-full bg-sky/40 md:hidden">
        <motion.span style={{ scaleY: scrollYProgress }} className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-aqua to-pop" />
      </span>
      <span aria-hidden="true" className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-1 rounded-full bg-sky/40 md:block">
        <motion.span style={{ scaleX: scrollYProgress }} className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-aqua to-pop" />
      </span>
      {steps.map((s, i) => (
        <motion.li
          key={s.n}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: i * 0.1 }}
          className="relative flex gap-5 md:flex-col md:items-center md:gap-4 md:text-center"
        >
          <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-aqua to-teal font-display text-lg font-extrabold text-white shadow-glow">{s.n}</span>
          <div>
            <h3 className="font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-1.5 text-ink/70">{s.text}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
