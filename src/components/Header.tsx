import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { nav, site } from '@/config/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  const link = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3.5 py-2 font-display text-[15px] font-semibold transition-colors ${isActive ? 'bg-foam text-teal' : 'text-ink hover:bg-foam'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-sky/50 bg-white">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" aria-label="Sparkle Cleaners home" className="shrink-0">
          <img src={`${import.meta.env.BASE_URL}logo-wide.jpg`} alt="Sparkle Cleaners" width={900} height={492} className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.path} to={n.path} end={n.path === '/'} className={n.path.includes('#') ? () => link({ isActive: false }) : link}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden items-center gap-2 font-display text-sm font-semibold text-teal xl:inline-flex">
            <Phone size={16} /> {site.phone}
          </a>
          <Link to="/contact" className="btn btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">Get a quote</Link>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-sky bg-foam text-teal lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid gap-1 border-t border-sky/50 bg-white px-4 py-4 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <NavLink key={n.path} to={n.path} end={n.path === '/'} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-display text-xl font-semibold text-ink hover:bg-foam">
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary mt-2">Get a quote</Link>
        </nav>
      )}
    </header>
  );
}
