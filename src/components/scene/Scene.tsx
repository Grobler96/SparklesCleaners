// Hand-drawn SVG rooms for the scroll story. Each room is drawn once in its "clean" colours; the dirty version is the
// same drawing run through a CSS filter (see .dirty-filter) with <Grime/> layered on top.
export type SceneKind = 'home' | 'office';

import { star } from '@/lib/star';

function Defs({ uid, kind }: { uid: string; kind: SceneKind }) {
  const floor = kind === 'home' ? ['#E6C99D', '#B98E5C'] : ['#C4D3D9', '#8DA3AC'];
  return (
    <defs>
      <linearGradient id={`${uid}wall`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#F4FCFE" />
        <stop offset="1" stopColor="#CDEEF5" />
      </linearGradient>
      <linearGradient id={`${uid}floor`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={floor[0]} />
        <stop offset="1" stopColor={floor[1]} />
      </linearGradient>
      <linearGradient id={`${uid}sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#8FD8F5" />
        <stop offset="1" stopColor="#EAFAFF" />
      </linearGradient>
      <radialGradient id={`${uid}glow`}>
        <stop offset="0" stopColor="#FFF6C9" stopOpacity="0.95" />
        <stop offset="1" stopColor="#FFF6C9" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${uid}ray`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

function Shell({ uid, kind }: { uid: string; kind: SceneKind }) {
  return (
    <>
      <rect width="1000" height="470" fill={`url(#${uid}wall)`} />
      <rect y="470" width="1000" height="230" fill={`url(#${uid}floor)`} />
      <rect y="462" width="1000" height="14" fill="#fff" />
      {kind === 'home'
        ? [505, 545, 590, 640].map((y) => <line key={y} x1="0" x2="1000" y1={y} y2={y} stroke="#000" strokeOpacity=".08" strokeWidth="2" />)
        : [510, 560, 620].map((y) => <line key={y} x1="0" x2="1000" y1={y} y2={y} stroke="#fff" strokeOpacity=".18" strokeWidth="2" />)}
      {kind === 'office' &&
        [100, 260, 420, 580, 740, 900].map((x) => <line key={x} x1={500 + (x - 500) * 0.55} x2={x + (x - 500) * 0.6} y1="470" y2="700" stroke="#fff" strokeOpacity=".16" strokeWidth="2" />)}
    </>
  );
}

function Home({ uid }: { uid: string }) {
  return (
    <>
      {/* window, curtains and light */}
      <rect x="378" y="58" width="244" height="264" rx="10" fill="#fff" />
      <rect x="390" y="70" width="220" height="240" fill={`url(#${uid}sky)`} />
      <circle cx="560" cy="120" r="80" fill={`url(#${uid}glow)`} />
      <ellipse cx="450" cy="132" rx="40" ry="13" fill="#fff" />
      <ellipse cx="480" cy="122" rx="26" ry="12" fill="#fff" />
      <rect x="497" y="70" width="6" height="240" fill="#fff" />
      <rect x="390" y="187" width="220" height="6" fill="#fff" />
      <rect x="366" y="316" width="268" height="14" rx="4" fill="#fff" />
      <path d="M330 52h72v268c-34-8-62-40-72-96z" fill="#3CC3DD" />
      <path d="M670 52h-72v268c34-8 62-40 72-96z" fill="#3CC3DD" />
      <rect x="318" y="42" width="364" height="9" rx="4" fill="#8A6B45" />
      <polygon points="400,322 610,322 780,700 260,700" fill={`url(#${uid}ray)`} opacity=".55" />
      {/* picture */}
      <rect x="190" y="140" width="130" height="100" rx="4" fill="#fff" stroke="#8A6B45" strokeWidth="6" />
      <path d="M196 214c24-30 44-6 66-22s40-14 52 4v28h-118z" fill="#29B6D3" />
      <circle cx="282" cy="170" r="14" fill="#FFC93C" />
      {/* shelf */}
      <rect x="760" y="250" width="190" height="10" rx="3" fill="#8A6B45" />
      <rect x="772" y="206" width="16" height="44" fill="#FF8A65" />
      <rect x="790" y="214" width="14" height="36" fill="#29B6D3" />
      <rect x="806" y="200" width="18" height="50" fill="#FFC93C" />
      <rect x="880" y="214" width="46" height="36" rx="4" fill="#fff" stroke="#0E7C8F" strokeWidth="3" />
      {/* rug, coffee table */}
      <ellipse cx="390" cy="590" rx="300" ry="62" fill="#F7EBD2" />
      <ellipse cx="390" cy="590" rx="250" ry="46" fill="none" stroke="#29B6D3" strokeWidth="4" strokeDasharray="14 10" />
      {/* sofa */}
      <rect x="170" y="300" width="380" height="110" rx="26" fill="#2A9DB5" />
      <rect x="135" y="350" width="50" height="120" rx="22" fill="#2A9DB5" />
      <rect x="535" y="350" width="50" height="120" rx="22" fill="#2A9DB5" />
      <rect x="150" y="380" width="420" height="90" rx="22" fill="#33B2CB" />
      <rect x="195" y="335" width="165" height="70" rx="18" fill="#6FD3E6" />
      <rect x="362" y="335" width="165" height="70" rx="18" fill="#6FD3E6" />
      <rect x="210" y="345" width="46" height="46" rx="10" fill="#FFC93C" transform="rotate(-12 233 368)" />
      <rect x="170" y="470" width="14" height="16" fill="#6B4E2E" />
      <rect x="536" y="470" width="14" height="16" fill="#6B4E2E" />
      <rect x="290" y="530" width="200" height="18" rx="6" fill="#fff" />
      <rect x="305" y="548" width="10" height="42" fill="#fff" />
      <rect x="465" y="548" width="10" height="42" fill="#fff" />
      <rect x="380" y="506" width="26" height="25" rx="5" fill="#fff" stroke="#0E7C8F" strokeWidth="3" />
      <path d="M406 513h8a6 6 0 010 14h-8" fill="none" stroke="#0E7C8F" strokeWidth="3" />
      <rect x="425" y="522" width="56" height="8" fill="#FFC93C" />
      {/* side table, lamp */}
      <rect x="640" y="410" width="90" height="14" rx="4" fill="#fff" />
      <rect x="676" y="424" width="8" height="52" fill="#fff" />
      <rect x="658" y="474" width="44" height="8" rx="3" fill="#fff" />
      <rect x="676" y="352" width="8" height="58" fill="#C9A56A" />
      <polygon points="650,352 710,352 700,310 660,310" fill="#FFE9A8" />
      <circle cx="680" cy="334" r="84" fill={`url(#${uid}glow)`} />
      {/* plant */}
      <path d="M790 420h56l-8 58h-40z" fill="#E37B5B" />
      <ellipse cx="818" cy="376" rx="14" ry="44" fill="#35A66B" />
      <ellipse cx="796" cy="392" rx="12" ry="36" fill="#2E9460" transform="rotate(-32 796 392)" />
      <ellipse cx="842" cy="392" rx="12" ry="36" fill="#2E9460" transform="rotate(32 842 392)" />
    </>
  );
}

function Office({ uid }: { uid: string }) {
  const towers: [number, number, number][] = [[270, 190, 54], [326, 140, 44], [372, 210, 60], [434, 120, 38], [474, 170, 52], [528, 100, 40], [570, 200, 58], [630, 150, 46], [678, 215, 50]];
  const monitor = (x: number) => (
    <>
      <rect x={x} y="326" width="150" height="88" rx="6" fill="#20323A" />
      <rect x={x + 8} y="334" width="134" height="68" rx="3" fill="#7ADDF0" />
      <rect x={x + 18} y="346" width="60" height="6" rx="3" fill="#fff" opacity=".8" />
      <rect x={x + 18} y="360" width="96" height="6" rx="3" fill="#fff" opacity=".6" />
      <rect x={x + 18} y="374" width="76" height="6" rx="3" fill="#fff" opacity=".6" />
      <rect x={x + 66} y="414" width="18" height="10" fill="#20323A" />
    </>
  );
  return (
    <>
      {/* ceiling lights */}
      <rect x="150" y="0" width="170" height="16" rx="4" fill="#fff" />
      <rect x="680" y="0" width="170" height="16" rx="4" fill="#fff" />
      <ellipse cx="235" cy="40" rx="150" ry="60" fill={`url(#${uid}glow)`} opacity=".6" />
      <ellipse cx="765" cy="40" rx="150" ry="60" fill={`url(#${uid}glow)`} opacity=".6" />
      {/* big window with skyline */}
      <rect x="248" y="58" width="504" height="262" rx="10" fill="#fff" />
      <rect x="260" y="70" width="480" height="240" fill={`url(#${uid}sky)`} />
      <circle cx="660" cy="118" r="90" fill={`url(#${uid}glow)`} />
      {towers.map(([x, h, w], i) => (
        <g key={x}>
          <rect x={x} y={310 - h} width={w} height={h} fill={i % 2 ? '#8CC8DD' : '#6DB4CE'} />
          {[0, 1, 2, 3].map((r) => <rect key={r} x={x + 8} y={310 - h + 14 + r * 26} width={w - 16} height="8" fill="#fff" opacity=".55" />)}
        </g>
      ))}
      {[420, 580].map((x) => <rect key={x} x={x - 3} y="70" width="6" height="240" fill="#fff" />)}
      <rect x="236" y="316" width="528" height="14" rx="4" fill="#fff" />
      <polygon points="270,322 740,322 900,700 120,700" fill={`url(#${uid}ray)`} opacity=".5" />
      {/* whiteboard */}
      <rect x="40" y="110" width="176" height="112" rx="6" fill="#fff" stroke="#B9C7CC" strokeWidth="5" />
      <path d="M58 140h90M58 162h130M58 184h70" stroke="#29B6D3" strokeWidth="6" strokeLinecap="round" />
      <circle cx="176" cy="190" r="14" fill="none" stroke="#FFC93C" strokeWidth="5" />
      <rect x="70" y="222" width="110" height="8" rx="3" fill="#B9C7CC" />
      {/* filing cabinet, cooler */}
      <rect x="900" y="338" width="72" height="132" rx="4" fill="#CFE3E8" />
      {[352, 396, 440].map((y) => <g key={y}><rect x="906" y={y - 8} width="60" height="34" rx="3" fill="#E4F1F4" /><rect x="926" y={y + 6} width="20" height="5" rx="2" fill="#7F959C" /></g>)}
      <rect x="455" y="394" width="54" height="76" rx="6" fill="#fff" />
      <rect x="462" y="338" width="40" height="58" rx="18" fill="#BEE8F5" />
      <rect x="474" y="420" width="16" height="8" rx="2" fill="#29B6D3" />
      {/* desks */}
      <rect x="100" y="422" width="340" height="16" rx="4" fill="#E8C9A0" />
      <rect x="116" y="438" width="12" height="40" fill="#CFE3E8" />
      <rect x="412" y="438" width="12" height="40" fill="#CFE3E8" />
      {monitor(195)}
      <rect x="200" y="410" width="80" height="8" rx="3" fill="#fff" />
      <rect x="550" y="422" width="340" height="16" rx="4" fill="#E8C9A0" />
      <rect x="566" y="438" width="12" height="40" fill="#CFE3E8" />
      <rect x="862" y="438" width="12" height="40" fill="#CFE3E8" />
      {monitor(645)}
      <rect x="650" y="410" width="80" height="8" rx="3" fill="#fff" />
      {/* chairs */}
      <rect x="222" y="452" width="96" height="72" rx="22" fill="#1C8CA4" />
      <rect x="236" y="520" width="68" height="14" rx="6" fill="#2A9DB5" />
      <rect x="672" y="452" width="96" height="72" rx="22" fill="#1C8CA4" />
      <rect x="686" y="520" width="68" height="14" rx="6" fill="#2A9DB5" />
      {/* plant, bin, mug */}
      <path d="M64 420h46l-7 52H71z" fill="#E37B5B" />
      <ellipse cx="87" cy="380" rx="12" ry="40" fill="#35A66B" />
      <ellipse cx="68" cy="394" rx="10" ry="32" fill="#2E9460" transform="rotate(-30 68 394)" />
      <ellipse cx="106" cy="394" rx="10" ry="32" fill="#2E9460" transform="rotate(30 106 394)" />
      <path d="M520 446h36l-4 36h-28z" fill="#9AAEB5" />
      <rect x="360" y="400" width="24" height="22" rx="5" fill="#fff" stroke="#0E7C8F" strokeWidth="3" />
    </>
  );
}

export function Room({ kind, uid }: { kind: SceneKind; uid: string }) {
  return (
    <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
      <Defs uid={uid} kind={kind} />
      <Shell uid={uid} kind={kind} />
      {kind === 'home' ? <Home uid={uid} /> : <Office uid={uid} />}
    </svg>
  );
}

/** Dust, stains, cobwebs and clutter: drawn over the dimmed room. */
export function Grime({ kind }: { kind: SceneKind }) {
  const web = (flip: boolean) => (
    <g transform={flip ? 'translate(1000 0) scale(-1 1)' : undefined} stroke="#e8e4d6" strokeOpacity=".55" strokeWidth="1.6" fill="none">
      <path d="M0 0L170 0M0 0L150 90M0 0L100 150M0 0L30 190M0 0L0 200" />
      <path d="M40 0Q46 40 0 46M90 0Q92 62 0 92M140 0Q140 90 0 140M180 0Q168 110 0 180" />
    </g>
  );
  const dust: [number, number][] = [[230, 520], [310, 590], [500, 600], [610, 540], [700, 610], [140, 600], [850, 540], [420, 650], [900, 640], [60, 520]];
  const motes: [number, number][] = [[280, 200], [480, 260], [620, 180], [720, 300], [180, 320], [820, 200], [540, 400], [360, 420], [900, 380], [120, 200], [660, 440], [440, 120]];
  return (
    <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <filter id={`grunge-${kind}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".011 .02" numOctaves="3" seed={kind === 'home' ? 4 : 9} />
          <feColorMatrix values="0 0 0 0 .3  0 0 0 0 .25  0 0 0 0 .1  1.7 0 0 0 -.6" />
        </filter>
        <radialGradient id={`vig-${kind}`} cx=".5" cy=".5" r=".75">
          <stop offset=".45" stopColor="#1c1608" stopOpacity="0" />
          <stop offset="1" stopColor="#1c1608" stopOpacity=".7" />
        </radialGradient>
      </defs>
      <rect width="1000" height="700" filter={`url(#grunge-${kind})`} opacity=".6" />
      {web(false)}
      {web(true)}
      {/* smudged window */}
      {kind === 'home' ? (
        <g fill="#6f6a48" opacity=".38">
          <ellipse cx="450" cy="150" rx="60" ry="40" />
          <ellipse cx="560" cy="250" rx="46" ry="30" />
          <path d="M410 90q10 80-4 190" stroke="#6f6a48" strokeWidth="9" fill="none" />
        </g>
      ) : (
        <g fill="#6f6a48" opacity=".36">
          <ellipse cx="330" cy="150" rx="70" ry="40" />
          <ellipse cx="520" cy="240" rx="80" ry="34" />
          <ellipse cx="680" cy="120" rx="50" ry="30" />
          <path d="M470 80q12 90-6 210" stroke="#6f6a48" strokeWidth="9" fill="none" />
        </g>
      )}
      {/* stains, scuffs, mess on the floor */}
      <g fill="#4a3f26" opacity=".55">
        {dust.map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={12 + (i % 3) * 5} ry={5 + (i % 2) * 2} />)}
        <path d="M120 640q80-14 190 4M560 660q90-16 220 0" stroke="#3a301c" strokeWidth="7" strokeLinecap="round" fill="none" opacity=".6" />
        <ellipse cx="260" cy="620" rx="9" ry="16" transform="rotate(20 260 620)" />
        <ellipse cx="290" cy="632" rx="9" ry="16" transform="rotate(14 290 632)" />
        <ellipse cx="320" cy="660" rx="9" ry="16" transform="rotate(20 320 660)" />
      </g>
      <g fill="#9a9482" opacity=".9">
        <circle cx="580" cy="680" r="12" />
        <circle cx="610" cy="668" r="9" />
        <circle cx="880" cy="600" r="10" />
      </g>
      {kind === 'home' ? (
        <>
          <circle cx="440" cy="540" r="16" fill="none" stroke="#6a4a1f" strokeWidth="4" opacity=".75" />
          <circle cx="368" cy="538" r="12" fill="none" stroke="#6a4a1f" strokeWidth="3" opacity=".6" />
          <rect x="204" y="348" width="140" height="48" rx="18" fill="#3b3626" opacity=".35" />
          <polygon points="650,352 710,352 700,310 660,310" fill="#3b3626" opacity=".45" />
          <ellipse cx="818" cy="378" rx="26" ry="52" fill="#7a5c25" opacity=".5" />
          <path d="M200 410l90 4M420 440l80 6" stroke="#3a301c" strokeWidth="6" opacity=".4" />
        </>
      ) : (
        <>
          <circle cx="372" cy="437" r="14" fill="none" stroke="#6a4a1f" strokeWidth="4" opacity=".75" />
          <circle cx="760" cy="436" r="12" fill="none" stroke="#6a4a1f" strokeWidth="3" opacity=".7" />
          <rect x="195" y="326" width="150" height="88" rx="6" fill="#3b3626" opacity=".42" />
          <rect x="645" y="326" width="150" height="88" rx="6" fill="#3b3626" opacity=".42" />
          <ellipse cx="87" cy="384" rx="30" ry="48" fill="#7a5c25" opacity=".5" />
          <path d="M518 446l-2-34 10 10 10-16 8 18 10-8 4 30z" fill="#bfb89a" opacity=".85" />
          <circle cx="540" cy="520" r="14" fill="#cfc8aa" opacity=".9" />
          <circle cx="480" cy="560" r="11" fill="#cfc8aa" opacity=".9" />
        </>
      )}
      {motes.map(([x, y], i) => (
        <circle key={i} className="mote" cx={x} cy={y} r={2 + (i % 3)} fill="#f3eccb" style={{ animationDelay: `${i * 0.55}s` }} />
      ))}
      <rect width="1000" height="700" fill={`url(#vig-${kind})`} />
    </svg>
  );
}

const SPARKS: Record<SceneKind, [number, number, number][]> = {
  home: [[430, 150, 18], [540, 100, 12], [250, 330, 16], [470, 370, 13], [690, 300, 18], [830, 360, 13], [600, 520, 15], [350, 545, 11], [890, 225, 13], [160, 420, 11], [560, 262, 20], [300, 160, 12]],
  office: [[330, 150, 18], [520, 110, 13], [700, 140, 20], [200, 350, 14], [420, 360, 13], [660, 355, 15], [850, 330, 15], [90, 330, 12], [560, 520, 15], [300, 560, 11], [760, 560, 13], [480, 290, 18]],
};

/** Glints on the clean room. They sit inside the revealed layer, so they pop into life as the wipe passes. */
export function Twinkles({ kind }: { kind: SceneKind }) {
  return (
    <svg viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
      {SPARKS[kind].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          <path className="twinkle" d={star} fill="#fff" stroke="#FFC93C" strokeWidth=".08" style={{ animationDelay: `${(i * 0.37) % 2.6}s` }} />
        </g>
      ))}
    </svg>
  );
}

export function SprayBottle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 320" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bt-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#bdf0f7" />
          <stop offset=".55" stopColor="#4fc3d9" />
          <stop offset="1" stopColor="#0d7d8c" />
        </linearGradient>
        <linearGradient id="bt-metal" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#eef3f4" />
          <stop offset=".5" stopColor="#aebcc0" />
          <stop offset="1" stopColor="#7a8a90" />
        </linearGradient>
      </defs>
      <path d="M55 130h90l15 170q0 15-15 15H55q-15 0-15-15z" fill="url(#bt-glass)" opacity=".95" />
      <rect x="70" y="90" width="60" height="45" rx="8" fill="url(#bt-metal)" />
      <rect x="78" y="40" width="44" height="55" rx="10" fill="url(#bt-metal)" />
      <path d="M60 45Q10 55 20 90Q35 78 60 80z" fill="url(#bt-metal)" />
    </svg>
  );
}
