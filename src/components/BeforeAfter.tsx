import { useState } from 'react';
import { Grime, Room, Twinkles, type SceneKind } from '@/components/scene/Scene';

/** Drag (or use the arrow keys) to wipe a room clean. */
export default function BeforeAfter({ kind }: { kind: SceneKind }) {
  const [pos, setPos] = useState(18);
  return (
    <div className="relative aspect-[10/7] select-none overflow-hidden rounded-3xl border-4 border-white shadow-soft">
      <div className="dirty-filter absolute inset-0"><Room kind={kind} uid={`${kind}ba-d`} /></div>
      <Grime kind={kind} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Room kind={kind} uid={`${kind}ba-c`} />
        <Twinkles kind={kind} />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-[0_0_18px_6px_rgba(255,255,255,.8)]" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white font-display text-sm font-bold text-teal shadow-glow">⇆</span>
      </div>
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-sun px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-ink">Clean</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-ink/80 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-white">Before</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to clean the room"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
