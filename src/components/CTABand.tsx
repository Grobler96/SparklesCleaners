import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import Bubbles from './Bubbles';
import Reveal from './Reveal';
import { site } from '@/config/site';

export default function CTABand({ title = 'Ready for sparkle?', text = 'Tell us about your space and we will reply within one working day with a price and the next available slot.' }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep via-teal to-aqua px-4 py-20 text-center text-white sm:px-6 sm:py-28">
      <Bubbles />
      <Reveal className="relative mx-auto max-w-2xl">
        <h2 className="font-display text-4xl font-extrabold sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn btn-pop">Get your free quote <ArrowRight size={18} /></Link>
          <a href={site.phoneHref} className="btn btn-glass"><Phone size={18} /> {site.phone}</a>
        </div>
      </Reveal>
    </section>
  );
}
