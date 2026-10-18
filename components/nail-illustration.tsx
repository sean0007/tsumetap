export function NailIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 270 240"
      role="img"
      aria-label="指先のジェルネイルに導電キャップをかぶせたイメージ図"
      className={className}
    >
      <defs>
        <linearGradient id="nail" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f3b9c4" />
          <stop offset="1" stopColor="#d97b92" />
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
      {/* conductive cap over the tip */}
      <path
        d="M101 34 C104 22 112 12 120 8 C128 12 136 22 139 34 C128 40 112 40 101 34 Z"
        fill="#4a3a40"
      />
      <circle cx="120" cy="9" r="6" fill="#4a3a40" />
      {/* tab under the nail reaching the skin (dashed = hidden) */}
      <path
        d="M120 38 V112"
        stroke="#4a3a40"
        strokeWidth="5"
        strokeDasharray="7 6"
        strokeLinecap="round"
      />
      <circle cx="120" cy="118" r="7" fill="#c4566e" />
      <circle cx="120" cy="118" r="13" fill="none" stroke="#c4566e" strokeOpacity=".4" strokeWidth="3" />
      {/* labels */}
      <g fontSize="11" fill="#2b2024" fontFamily="inherit">
        <line x1="140" y1="22" x2="182" y2="22" stroke="#7a666c" />
        <text x="185" y="26">導電キャップ</text>
        <line x1="128" y1="118" x2="182" y2="140" stroke="#7a666c" />
        <text x="185" y="144">肌に触れる</text>
        <text x="185" y="158">タブ</text>
      </g>
    </svg>
  );
}
