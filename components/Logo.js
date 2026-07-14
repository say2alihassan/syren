import { SYREN_VIEWBOX, SYREN_PATH, SYREN_LETTERS } from "./syrenLogoPath";

// The real SYREN speech-bubble mark, traced from public/syren-logo.jpg into a
// clean vector (potrace) so it stays crisp at any size and recolours cleanly.
// Two aligned paths:
//   SYREN_PATH    — the bubble with the wordmark carved out (fill-rule evenodd)
//   SYREN_LETTERS — just the wordmark, dropped back into those holes in pink
// So the logo is a bone speech bubble with pink "SYREN" letters — exactly as
// photographed. `bubble`/`word` props let a caller retint per surface.
const [VBX, VBY, VBW, VBH] = SYREN_VIEWBOX.split(" ").map(Number);
const RATIO = VBW / VBH;

export default function Logo({
  width = 116,
  height,
  variant = "brand",
  bubble = "#F4EEE4",
  word = "#E11469",
  className = "",
}) {
  const h = height ?? Math.round(width / RATIO);
  const plate = variant === "plate";

  return (
    <svg
      viewBox={SYREN_VIEWBOX}
      width={width}
      height={h}
      className={className}
      role="img"
      aria-label="SYREN"
    >
      {plate && (
        <rect x={VBX} y={VBY} width={VBW} height={VBH} rx={VBH * 0.16} fill="#e11469" />
      )}
      {/* bone speech bubble (letters are holes) */}
      <path d={SYREN_PATH} fillRule="evenodd" fill={bubble} />
      {/* pink wordmark filling the holes */}
      <path d={SYREN_LETTERS} fillRule="evenodd" fill={word} />
    </svg>
  );
}
