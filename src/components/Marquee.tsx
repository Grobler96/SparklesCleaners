import { Sparkles } from 'lucide-react';

export default function Marquee({ items, className = '' }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden py-4 ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-lg font-bold sm:text-2xl">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            {t}
            <Sparkles size={20} className="text-sun" />
          </span>
        ))}
      </div>
    </div>
  );
}
