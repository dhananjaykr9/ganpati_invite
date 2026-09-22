/**
 * WarkariDindi.jsx
 * SVG silhouette strip of Warkari devotees walking in a dindi procession.
 * Contains: taal players, mridang players, veena player, flag bearers.
 * Pure SVG — zero images needed, fully lightweight.
 */
export default function WarkariDindi() {
  return (
    <svg
      viewBox="0 0 1080 90"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', display: 'block' }}
      aria-label="वारकरी दिंडी"
    >
      {/* Cream background strip */}
      <rect width="1080" height="90" fill="#FF6B00" />

      {/* Ground line */}
      <line x1="0" y1="78" x2="1080" y2="78" stroke="#B85520" strokeWidth="2" />

      {/* === FIGURES repeating pattern === */}
      {/* We define 6 figure types and repeat them across the strip */}

      {/* Figure group 1 — Flag bearer */}
      <g transform="translate(40, 20)">
        {/* Pole */}
        <rect x="8" y="-10" width="3" height="55" fill="#3D1F0A" rx="1" />
        {/* Bhagwa flag */}
        <polygon points="11,-10 40,0 11,18" fill="#FFF8E7" opacity="0.9" />
        {/* Body */}
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        {/* Head */}
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        {/* Legs */}
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        {/* Pheta (turban) */}
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#C89B3C" />
      </g>

      {/* Figure 2 — Taal player */}
      <g transform="translate(100, 20)">
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#FFF8E7" opacity="0.8"/>
        {/* Taal (cymbals) */}
        <circle cx="-4" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <circle cx="24" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <line x1="3" y1="44" x2="17" y2="44" stroke="#C89B3C" strokeWidth="1.5" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Figure 3 — Mridang player */}
      <g transform="translate(165, 18)">
        <ellipse cx="10" cy="52" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="35" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="31" rx="9" ry="5" fill="#D96B27" />
        {/* Mridang */}
        <ellipse cx="10" cy="52" rx="18" ry="7" fill="#6B4226" stroke="#C89B3C" strokeWidth="1.5" />
        <ellipse cx="-4" cy="52" rx="5" ry="5" fill="#3D1F0A" stroke="#C89B3C" strokeWidth="1" />
        <ellipse cx="24" cy="52" rx="5" ry="5" fill="#3D1F0A" stroke="#C89B3C" strokeWidth="1" />
        <line x1="5" y1="64" x2="3" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="64" x2="17" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Figure 4 — Devotee hands folded */}
      <g transform="translate(230, 20)">
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#C89B3C" />
        {/* Folded hands */}
        <ellipse cx="10" cy="47" rx="6" ry="4" fill="#FFF8E7" opacity="0.7" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Figure 5 — Veena player */}
      <g transform="translate(285, 18)">
        <ellipse cx="10" cy="52" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="35" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="31" rx="9" ry="5" fill="#FFF8E7" opacity="0.8" />
        {/* Veena */}
        <line x1="10" y1="44" x2="35" y2="60" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="35" cy="60" r="5" fill="#6B4226" stroke="#C89B3C" strokeWidth="1.5" />
        <circle cx="10" cy="44" r="4" fill="#6B4226" stroke="#C89B3C" strokeWidth="1" />
        <line x1="5" y1="64" x2="3" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="64" x2="17" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Figure 6 — Flag bearer 2 */}
      <g transform="translate(345, 20)">
        <rect x="8" y="-10" width="3" height="55" fill="#3D1F0A" rx="1" />
        <polygon points="11,-10 40,0 11,18" fill="#FFF8E7" opacity="0.9" />
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#D96B27" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* === REPEAT pattern offset 370px === */}
      <g transform="translate(410, 20)">
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#C89B3C" />
        <circle cx="-4" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <circle cx="24" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <line x1="3" y1="44" x2="17" y2="44" stroke="#C89B3C" strokeWidth="1.5" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(475, 18)">
        <rect x="8" y="-8" width="3" height="50" fill="#3D1F0A" rx="1" />
        <polygon points="11,-8 38,2 11,16" fill="#FFF8E7" opacity="0.85" />
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#FFF8E7" opacity="0.7" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(535, 18)">
        <ellipse cx="10" cy="52" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="35" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="31" rx="9" ry="5" fill="#D96B27" />
        <ellipse cx="10" cy="52" rx="18" ry="7" fill="#6B4226" stroke="#C89B3C" strokeWidth="1.5" />
        <ellipse cx="-4" cy="52" rx="5" ry="5" fill="#3D1F0A" stroke="#C89B3C" strokeWidth="1" />
        <ellipse cx="24" cy="52" rx="5" ry="5" fill="#3D1F0A" stroke="#C89B3C" strokeWidth="1" />
        <line x1="5" y1="64" x2="3" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="64" x2="17" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(595, 20)">
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#C89B3C" />
        <ellipse cx="10" cy="47" rx="6" ry="4" fill="#FFF8E7" opacity="0.7" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(650, 18)">
        <ellipse cx="10" cy="52" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="35" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="31" rx="9" ry="5" fill="#FFF8E7" opacity="0.8" />
        <line x1="10" y1="44" x2="35" y2="60" stroke="#C89B3C" strokeWidth="3" strokeLinecap="round" />
        <circle cx="35" cy="60" r="5" fill="#6B4226" stroke="#C89B3C" strokeWidth="1.5" />
        <circle cx="10" cy="44" r="4" fill="#6B4226" stroke="#C89B3C" strokeWidth="1" />
        <line x1="5" y1="64" x2="3" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="64" x2="17" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(710, 20)">
        <rect x="8" y="-10" width="3" height="55" fill="#3D1F0A" rx="1" />
        <polygon points="11,-10 40,0 11,18" fill="#FFF8E7" opacity="0.9" />
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#D96B27" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(770, 20)">
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#C89B3C" />
        <circle cx="-4" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <circle cx="24" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <line x1="3" y1="44" x2="17" y2="44" stroke="#C89B3C" strokeWidth="1.5" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(835, 18)">
        <ellipse cx="10" cy="52" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="35" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="31" rx="9" ry="5" fill="#D96B27" />
        <ellipse cx="10" cy="52" rx="18" ry="7" fill="#6B4226" stroke="#C89B3C" strokeWidth="1.5" />
        <ellipse cx="-4" cy="52" rx="5" ry="5" fill="#3D1F0A" stroke="#C89B3C" strokeWidth="1" />
        <ellipse cx="24" cy="52" rx="5" ry="5" fill="#3D1F0A" stroke="#C89B3C" strokeWidth="1" />
        <line x1="5" y1="64" x2="3" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="64" x2="17" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(900, 20)">
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#FFF8E7" opacity="0.8" />
        <ellipse cx="10" cy="47" rx="6" ry="4" fill="#FFF8E7" opacity="0.7" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(958, 20)">
        <rect x="8" y="-10" width="3" height="55" fill="#3D1F0A" rx="1" />
        <polygon points="11,-10 40,0 11,18" fill="#FFF8E7" opacity="0.9" />
        <ellipse cx="10" cy="50" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="33" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="29" rx="9" ry="5" fill="#C89B3C" />
        <line x1="5" y1="62" x2="3" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="62" x2="17" y2="75" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g transform="translate(1022, 18)">
        <ellipse cx="10" cy="52" rx="8" ry="14" fill="#3D1F0A" />
        <circle cx="10" cy="35" r="7" fill="#3D1F0A" />
        <ellipse cx="10" cy="31" rx="9" ry="5" fill="#C89B3C" />
        <circle cx="-4" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <circle cx="24" cy="44" r="7" fill="none" stroke="#C89B3C" strokeWidth="2.5" />
        <line x1="3" y1="44" x2="17" y2="44" stroke="#C89B3C" strokeWidth="1.5" />
        <line x1="5" y1="64" x2="3" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="64" x2="17" y2="77" stroke="#3D1F0A" strokeWidth="4" strokeLinecap="round" />
      </g>

    </svg>
  );
}
