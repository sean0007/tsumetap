export function NailIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 270 240"
      role="img"
      aria-label="ジェルネイルの中に金の導電ラインを封入したイメージ図"
      className={className}
    >
      <defs>
        <linearGradient id="nail" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f3b9c4" />
          <stop offset="1" stopColor="#d97b92" />
        </linearGradient>
        <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f6dd8a" />
          <stop offset=".5" stopColor="#d4a93c" />
          <stop offset="1" stopColor="#a87b1e" />
        </linearGradient>
      </defs>
      {/* finger */}
      <path
        d="M70 240 V120 C70 70 95 46 120 46 C145 46 170 70 170 120 V240 Z"
        fill="#f1d3c3"
      />
      {/* long gel nail */}
      <path
        d="M88 118 C88 70 100 18 120 10 C140 18 152 70 152 118 C140 126 100 126 88 118 Z"
        fill="url(#nail)"
      />
      <path d="M104 40 C108 28 114 20 120 16" stroke="#fff" strokeOpacity=".6" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* gold tip band at the free edge */}
      <path
        d="M106 26 C110 18 115 12 120 9 C125 12 130 18 134 26 C126 30 114 30 106 26 Z"
        fill="url(#gold)"
      />
      {/* gold strip sealed in the gel, running to the skin */}
      <path d="M120 28 V114" stroke="url(#gold)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="120" cy="118" r="6" fill="url(#gold)" />
      <circle cx="120" cy="118" r="13" fill="none" stroke="#d4a93c" strokeOpacity=".45" strokeWidth="3" />
      {/* labels */}
      <g fontSize="11" fill="#2b2024" fontFamily="inherit">
        <line x1="134" y1="20" x2="182" y2="20" stroke="#7a666c" />
        <text x="185" y="24">爪先の金</text>
        <line x1="124" y1="70" x2="182" y2="80" stroke="#7a666c" />
        <text x="185" y="84">ジェルに封入した</text>
        <text x="185" y="98">金のライン</text>
        <line x1="128" y1="118" x2="182" y2="140" stroke="#7a666c" />
        <text x="185" y="144">指の肌に触れる</text>
      </g>
    </svg>
  );
}
