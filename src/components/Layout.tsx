import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyCTA from './StickyCTA';
import SparkleCursor from './SparkleCursor';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col pb-[4.5rem] md:pb-0">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
      <SparkleCursor />
    </div>
  );
}
