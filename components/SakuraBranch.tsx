// Stylized sakura branch silhouette, anchored to one corner, as the
// "tree" the storm of petals reads as blowing off of. Pure geometric
// line-art in the muted plum-rose palette — no raster asset needed.
export default function SakuraBranch({ className = '' }: { className?: string }) {
  const blossom = (cx: number, cy: number, r: number, opacity: number) => (
    <g opacity={opacity}>
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx={cx}
          cy={cy - r}
          rx={r * 0.55}
          ry={r}
          fill="#d97791"
          transform={`rotate(${deg} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.3} fill="#9d3b56" />
    </g>
  )

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
    >
      {/* gnarled branch */}
      <path
        d="M400 60 C320 50, 260 90, 220 150 C190 195, 150 190, 110 230 C80 260, 60 300, 40 360"
        fill="none"
        stroke="#4b5563"
        strokeWidth={5}
        strokeLinecap="round"
        opacity={0.55}
      />
      <path
        d="M260 100 C240 130, 230 150, 210 170"
        fill="none"
        stroke="#4b5563"
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M150 210 C140 230, 120 245, 95 255"
        fill="none"
        stroke="#4b5563"
        strokeWidth={3}
        strokeLinecap="round"
        opacity={0.5}
      />

      {blossom(380, 50, 16, 0.85)}
      {blossom(330, 75, 12, 0.7)}
      {blossom(255, 95, 14, 0.8)}
      {blossom(205, 165, 11, 0.6)}
      {blossom(145, 205, 15, 0.75)}
      {blossom(95, 250, 12, 0.65)}
      {blossom(55, 345, 13, 0.5)}
    </svg>
  )
}
