import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { site } from '@/config/site';

/** Phone-only bar pinned to the bottom of the screen so "call" and "get a quote" are always one tap away. */
export default function StickyCTA() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/contact') || pathname.startsWith('/thank-you')) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-sky/50 bg-white px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] md:hidden">
      <a href={site.phoneHref} className="btn btn-outline flex-1 !py-3 text-sm"><Phone size={16} /> Call us</a>
      <Link to="/contact" className="btn btn-primary flex-[1.4] !py-3 text-sm">Get a quote <ArrowRight size={16} /></Link>
    </div>
  );
}
