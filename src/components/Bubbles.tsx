const BUBBLES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 10 + ((i * 13) % 34),
  delay: -((i * 1.7) % 12),
  duration: 9 + ((i * 5) % 9),
}));

/** Soap bubbles drifting up through whatever section they are placed in. */
export default function Bubbles({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute -bottom-10 animate-rise rounded-full border border-white/50 bg-white/10 shadow-[inset_0_0_10px_rgba(255,255,255,.55)]"
          style={{ left: `${b.left}%`, width: b.size, height: b.size, animationDelay: `${b.delay}s`, animationDuration: `${b.duration}s` }}
        />
      ))}
    </div>
  );
}
