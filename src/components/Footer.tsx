import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Bubbles from './Bubbles';
import { site } from '@/config/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <Bubbles className="opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold">Sparkle <span className="shine-text">Cleaners</span></p>
          <p className="mt-3 max-w-sm text-white/70">Domestic and commercial cleaning in Leeds. The same trusted team, every visit, and a clean you can see from the doorway.</p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-sky">Explore</h2>
          <ul className="mt-3 grid gap-2 text-white/80">
            <li><Link to="/domestic" className="hover:text-white">Home cleaning</Link></li>
            <li><Link to="/commercial" className="hover:text-white">Office & commercial</Link></li>
            <li><Link to="/contact" className="hover:text-white">Get a quote</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-sky">Say hello</h2>
          <ul className="mt-3 grid gap-3 text-white/80">
            <li><a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white"><Phone size={16} /> {site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 break-all hover:text-white"><Mail size={16} className="shrink-0" /> {site.email}</a></li>
            <li className="inline-flex items-start gap-2"><MapPin size={16} className="mt-1 shrink-0" /> {site.area}</li>
          </ul>
        </div>
      </div>
      <p className="relative border-t border-white/10 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
