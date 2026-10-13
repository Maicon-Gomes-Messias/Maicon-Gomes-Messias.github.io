/**
 * Campo de sinal.
 *
 * Ilustração do mapa de intensidade de Wi-Fi — a leitura que sustenta o TCC.
 * É um SVG renderizado no servidor: nenhum JavaScript, nenhum trabalho de
 * thread principal, nenhum deslocamento de layout. Cada marca é um ponto de
 * acesso virtual e as manchas mostram onde o sinal chega mais forte.
 */
export function SignalField({ className }: { className?: string }) {
  const accessPoints = [
    { x: 150, y: 118 },
    { x: 628, y: 82 },
    { x: 1044, y: 302 },
    { x: 524, y: 356 },
    { x: 62, y: 330 },
    { x: 866, y: 152 },
  ];

  return (
    <svg
      viewBox="0 0 1200 420"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      <defs>
        <filter id="signal-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="58" />
        </filter>
        <pattern id="signal-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M60 0H0V60" fill="none" stroke="#d6dace" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="1200" height="420" fill="#fbfbf7" />
      <rect width="1200" height="420" fill="url(#signal-grid)" />

      <g filter="url(#signal-blur)">
        <ellipse cx="150" cy="118" rx="185" ry="150" fill="#12a08a" opacity="0.92" />
        <ellipse cx="628" cy="82" rx="160" ry="132" fill="#12a08a" opacity="0.68" />
        <ellipse cx="1044" cy="302" rx="200" ry="168" fill="#e8873a" opacity="0.8" />
        <ellipse cx="524" cy="356" rx="175" ry="146" fill="#12a08a" opacity="0.6" />
        <ellipse cx="62" cy="330" rx="150" ry="128" fill="#12a08a" opacity="0.52" />
        <ellipse cx="866" cy="152" rx="150" ry="126" fill="#e8873a" opacity="0.42" />
      </g>

      {accessPoints.map((point) => (
        <g
          key={`${point.x}-${point.y}`}
          stroke="#101b19"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        >
          <line x1={point.x - 5} y1={point.y} x2={point.x + 5} y2={point.y} />
          <line x1={point.x} y1={point.y - 5} x2={point.x} y2={point.y + 5} />
          <circle cx={point.x} cy={point.y} r="10" fill="none" strokeOpacity="0.3" />
        </g>
      ))}
    </svg>
  );
}
