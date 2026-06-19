// The converging-curves graphic beneath the hero, echoing LangChain's
// Build/Test/Deploy/Monitor lifecycle. Pure SVG so it scales crisply and
// animates without JS (SMIL travels a pulse down each curve).

const NODE = { x: 600, y: 372 };
const STAGES = [
  { label: 'Scope', x: 180 },
  { label: 'Build', x: 470 },
  { label: 'Ship', x: 730 },
  { label: 'Support', x: 1020 },
];

function curve(px: number) {
  // Drop straight from the pill, then sweep into the central node.
  return `M ${px} 96 C ${px} 220, ${NODE.x} 280, ${NODE.x} ${NODE.y}`;
}

export default function LifecycleDiagram() {
  return (
    <div className="pointer-events-none mx-auto w-full max-w-6xl">
      <svg
        viewBox="0 0 1200 420"
        className="w-full"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="lc-line" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f8cff" stopOpacity="0.15" />
            <stop offset="55%" stopColor="#6aa0ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8fb6ff" stopOpacity="0.95" />
          </linearGradient>
          <filter id="lc-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="lc-node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cfe0ff" />
            <stop offset="100%" stopColor="#3f7bff" />
          </radialGradient>
        </defs>

        {/* Curves */}
        <g filter="url(#lc-glow)">
          {STAGES.map((s, i) => (
            <path
              key={s.label}
              id={`lc-path-${i}`}
              d={curve(s.x)}
              stroke="url(#lc-line)"
              strokeWidth="1.6"
            />
          ))}
          {/* tail dropping below the node */}
          <path
            d={`M ${NODE.x} ${NODE.y} L ${NODE.x} 418`}
            stroke="url(#lc-line)"
            strokeWidth="1.6"
          />
        </g>

        {/* Traveling pulses */}
        {STAGES.map((_, i) => (
          <circle key={`p-${i}`} r="3.2" fill="#dcebff">
            <animateMotion
              dur={`${2.6 + i * 0.35}s`}
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#lc-path-${i}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.15;0.85;1"
              dur={`${2.6 + i * 0.35}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Central node */}
        <circle cx={NODE.x} cy={NODE.y} r="7" fill="url(#lc-node)" filter="url(#lc-glow)" />

        {/* Stage pills */}
        {STAGES.map((s) => (
          <g key={`pill-${s.label}`}>
            <rect
              x={s.x - 66}
              y={54}
              width={132}
              height={42}
              rx={21}
              fill="#070b16"
              stroke="rgba(120,160,255,0.28)"
              strokeWidth="1"
            />
            <text
              x={s.x}
              y={80}
              textAnchor="middle"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="15"
              fontWeight="500"
              fill="#a9c6ff"
            >
              {s.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
