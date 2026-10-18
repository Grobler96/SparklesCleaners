import { useEffect, useRef } from 'react';
import { star } from '@/lib/star';

/** A trail of little stars behind the mouse. Only on devices with a real pointer, and never with reduced motion. */
export default function SparkleCursor() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ok = window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!ok || !host.current) return;
    const el = host.current;
    let lx = 0;
    let ly = 0;
    const onMove = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - lx, e.clientY - ly) < 26) return;
      lx = e.clientX;
      ly = e.clientY;
      const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const size = 10 + Math.random() * 12;
      s.setAttribute('viewBox', '-1 -1 2 2');
      s.setAttribute('class', 'cursor-star absolute');
      s.setAttribute('style', `left:${lx}px;top:${ly}px;width:${size}px;height:${size}px`);
      s.innerHTML = `<path d="${star}" fill="${Math.random() > 0.5 ? '#fff' : '#FFD60A'}"/>`;
      s.addEventListener('animationend', () => s.remove());
      el.appendChild(s);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return <div ref={host} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" />;
}
