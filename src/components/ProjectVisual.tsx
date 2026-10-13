/**
 * Ilustração do TCC: um mapa de calor de intensidade de sinal de Wi-Fi
 * desenhado como SVG estático — leve, determinístico e legível por leitores
 * de tela por meio do aria-label.
 */
export function HeatVisual({ className }: { className?: string }) {
  const accessPoints = [
    { x: 120, y: 118 },
    { x: 400, y: 88 },
    { x: 548, y: 252 },
    { x: 268, y: 300 },
    { x: 62, y: 268 },
  ];

  return (
    <svg
      viewBox="0 0 640 380"
      role="img"
      aria-label="Mapa de calor de um ambiente: manchas escuras indicam sinal de Wi-Fi mais forte perto de cinco pontos de acesso."
      className={className}
    >
      <defs>
        <filter id="heat-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="36" />
        </filter>
        <pattern id="heat-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#d6dace" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="640" height="380" fill="#fbfbf7" />
      <rect width="640" height="380" fill="url(#heat-grid)" />

      <g filter="url(#heat-blur)">
        <ellipse cx="120" cy="118" rx="112" ry="96" fill="#12a08a" opacity="0.9" />
        <ellipse cx="400" cy="88" rx="96" ry="82" fill="#12a08a" opacity="0.68" />
        <ellipse cx="548" cy="252" rx="124" ry="106" fill="#e8873a" opacity="0.82" />
        <ellipse cx="268" cy="300" rx="104" ry="88" fill="#12a08a" opacity="0.6" />
        <ellipse cx="62" cy="268" rx="88" ry="78" fill="#12a08a" opacity="0.5" />
      </g>

      {accessPoints.map((point) => (
        <g key={`${point.x}-${point.y}`} stroke="#101b19" strokeOpacity="0.55" strokeWidth="1.4">
          <line x1={point.x - 5} y1={point.y} x2={point.x + 5} y2={point.y} />
          <line x1={point.x} y1={point.y - 5} x2={point.x} y2={point.y + 5} />
          <circle cx={point.x} cy={point.y} r="9" fill="none" strokeOpacity="0.28" />
        </g>
      ))}
    </svg>
  );
}
