/* Corner ornament SVG component */
export default function CornerOrnament({ flip = false }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: flip ? 'scale(-1,-1)' : 'none',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Outer L-bars */}
      <path d="M10 10 L10 80" stroke="#C89B3C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 10 L80 10" stroke="#C89B3C" strokeWidth="2.5" strokeLinecap="round" />
      {/* Corner gem */}
      <circle cx="10" cy="10" r="6" fill="#C89B3C" />
      <circle cx="10" cy="10" r="3" fill="#FFF8E7" />
      {/* Side dots */}
      <circle cx="32" cy="10" r="3" fill="#D96B27" />
      <circle cx="10" cy="32" r="3" fill="#D96B27" />
      <circle cx="54" cy="10" r="2" fill="#C89B3C" opacity="0.6" />
      <circle cx="10" cy="54" r="2" fill="#C89B3C" opacity="0.6" />
      {/* Inner arc */}
      <path d="M18 18 Q42 18 42 42" stroke="#C89B3C" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Lotus petal hint */}
      <path d="M22 10 Q28 20 22 30" stroke="#D96B27" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M10 22 Q20 28 30 22" stroke="#D96B27" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}
