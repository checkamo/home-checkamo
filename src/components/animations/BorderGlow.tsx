\use client\;
import { useRef, useCallback, useState, useEffect, type ReactNode } from 'react';
\use client\;

\use client\;
interface BorderGlowProps {
\use client\;
  children?: ReactNode;
\use client\;
  className?: string;
\use client\;
  edgeSensitivity?: number;
\use client\;
  glowColor?: string;
\use client\;
  backgroundColor?: string;
\use client\;
  borderRadius?: number;
\use client\;
  glowRadius?: number;
\use client\;
  glowIntensity?: number;
\use client\;
  coneSpread?: number;
\use client\;
  animated?: boolean;
\use client\;
  colors?: string[];
\use client\;
  fillOpacity?: number;
\use client\;
}
\use client\;

\use client\;
function parseHSL(hslStr: string): { h: number; s: number; l: number } {
\use client\;
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
\use client\;
  if (!match) return { h: 40, s: 80, l: 80 };
\use client\;
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
\use client\;
}
\use client\;

\use client\;
function buildBoxShadow(glowColor: string, intensity: number): string {
\use client\;
  const { h, s, l } = parseHSL(glowColor);
\use client\;
  const base = `${h}deg ${s}% ${l}%`;
\use client\;
  const layers: [number, number, number, number, number, boolean][] = [
\use client\;
    [0, 0, 0, 1, 100, true], [0, 0, 1, 0, 60, true], [0, 0, 3, 0, 50, true],
\use client\;
    [0, 0, 6, 0, 40, true], [0, 0, 15, 0, 30, true], [0, 0, 25, 2, 20, true],
\use client\;
    [0, 0, 50, 2, 10, true],
\use client\;
    [0, 0, 1, 0, 60, false], [0, 0, 3, 0, 50, false], [0, 0, 6, 0, 40, false],
\use client\;
    [0, 0, 15, 0, 30, false], [0, 0, 25, 2, 20, false], [0, 0, 50, 2, 10, false],
\use client\;
  ];
\use client\;
  return layers.map(([x, y, blur, spread, alpha, inset]) => {
\use client\;
    const a = Math.min(alpha * intensity, 100);
\use client\;
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`;
\use client\;
  }).join(', ');
\use client\;
}
\use client\;

\use client\;
function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3); }
\use client\;
function easeInCubic(x: number) { return x * x * x; }
\use client\;

\use client\;
interface AnimateOpts {
\use client\;
  start?: number; end?: number; duration?: number; delay?: number;
\use client\;
  ease?: (t: number) => number; onUpdate: (v: number) => void; onEnd?: () => void;
\use client\;
}
\use client\;

\use client\;
function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: AnimateOpts) {
\use client\;
  const t0 = performance.now() + delay;
\use client\;
  function tick() {
\use client\;
    const elapsed = performance.now() - t0;
\use client\;
    const t = Math.min(elapsed / duration, 1);
\use client\;
    onUpdate(start + (end - start) * ease(t));
\use client\;
    if (t < 1) requestAnimationFrame(tick);
\use client\;
    else if (onEnd) onEnd();
\use client\;
  }
\use client\;
  setTimeout(() => requestAnimationFrame(tick), delay);
\use client\;
}
\use client\;

\use client\;
const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
\use client\;
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];
\use client\;

\use client\;
function buildMeshGradients(colors: string[]): string[] {
\use client\;
  const gradients: string[] = [];
\use client\;
  for (let i = 0; i < 7; i++) {
\use client\;
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
\use client\;
    gradients.push(`radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`);
\use client\;
  }
\use client\;
  gradients.push(`linear-gradient(${colors[0]} 0 100%)`);
\use client\;
  return gradients;
\use client\;
}
\use client\;

\use client\;
const BorderGlow: React.FC<BorderGlowProps> = ({
\use client\;
  children,
\use client\;
  className = '',
\use client\;
  edgeSensitivity = 30,
\use client\;
  glowColor = '40 80 80',
\use client\;
  backgroundColor = '#120F17',
\use client\;
  borderRadius = 28,
\use client\;
  glowRadius = 40,
\use client\;
  glowIntensity = 1.0,
\use client\;
  coneSpread = 25,
\use client\;
  animated = false,
\use client\;
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
\use client\;
  fillOpacity = 0.5,
\use client\;
}) => {
\use client\;
  const cardRef = useRef<HTMLDivElement>(null);
\use client\;
  const [isHovered, setIsHovered] = useState(false);
\use client\;
  const [cursorAngle, setCursorAngle] = useState(45);
\use client\;
  const [edgeProximity, setEdgeProximity] = useState(0);
\use client\;
  const [sweepActive, setSweepActive] = useState(false);
\use client\;

\use client\;
  const getCenterOfElement = useCallback((el: HTMLElement) => {
\use client\;
    const { width, height } = el.getBoundingClientRect();
\use client\;
    return [width / 2, height / 2];
\use client\;
  }, []);
\use client\;

\use client\;
  const getEdgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
\use client\;
    const [cx, cy] = getCenterOfElement(el);
\use client\;
    const dx = x - cx;
\use client\;
    const dy = y - cy;
\use client\;
    let kx = Infinity;
\use client\;
    let ky = Infinity;
\use client\;
    if (dx !== 0) kx = cx / Math.abs(dx);
\use client\;
    if (dy !== 0) ky = cy / Math.abs(dy);
\use client\;
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
\use client\;
  }, [getCenterOfElement]);
\use client\;

\use client\;
  const getCursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
\use client\;
    const [cx, cy] = getCenterOfElement(el);
\use client\;
    const dx = x - cx;
\use client\;
    const dy = y - cy;
\use client\;
    if (dx === 0 && dy === 0) return 0;
\use client\;
    const radians = Math.atan2(dy, dx);
\use client\;
    let degrees = radians * (180 / Math.PI) + 90;
\use client\;
    if (degrees < 0) degrees += 360;
\use client\;
    return degrees;
\use client\;
  }, [getCenterOfElement]);
\use client\;

\use client\;
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
\use client\;
    const card = cardRef.current;
\use client\;
    if (!card) return;
\use client\;
    const rect = card.getBoundingClientRect();
\use client\;
    const x = e.clientX - rect.left;
\use client\;
    const y = e.clientY - rect.top;
\use client\;
    setEdgeProximity(getEdgeProximity(card, x, y));
\use client\;
    setCursorAngle(getCursorAngle(card, x, y));
\use client\;
  }, [getEdgeProximity, getCursorAngle]);
\use client\;

\use client\;
  useEffect(() => {
\use client\;
    if (!animated) return;
\use client\;
    const angleStart = 110;
\use client\;
    const angleEnd = 465;
\use client\;
    setSweepActive(true);
\use client\;
    setCursorAngle(angleStart);
\use client\;

\use client\;
    animateValue({ duration: 500, onUpdate: v => setEdgeProximity(v / 100) });
\use client\;
    animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: v => {
\use client\;
      setCursorAngle((angleEnd - angleStart) * (v / 100) + angleStart);
\use client\;
    }});
\use client\;
    animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: v => {
\use client\;
      setCursorAngle((angleEnd - angleStart) * (v / 100) + angleStart);
\use client\;
    }});
\use client\;
    animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0,
\use client\;
      onUpdate: v => setEdgeProximity(v / 100),
\use client\;
      onEnd: () => setSweepActive(false),
\use client\;
    });
\use client\;
  }, [animated]);
\use client\;

\use client\;
  const colorSensitivity = edgeSensitivity + 20;
\use client\;
  const isVisible = isHovered || sweepActive;
\use client\;
  const borderOpacity = isVisible
\use client\;
    ? Math.max(0, (edgeProximity * 100 - colorSensitivity) / (100 - colorSensitivity))
\use client\;
    : 0;
\use client\;
  const glowOpacity = isVisible
\use client\;
    ? Math.max(0, (edgeProximity * 100 - edgeSensitivity) / (100 - edgeSensitivity))
\use client\;
    : 0;
\use client\;

\use client\;
  const meshGradients = buildMeshGradients(colors);
\use client\;
  const borderBg = meshGradients.map(g => `${g} border-box`);
\use client\;
  const fillBg = meshGradients.map(g => `${g} padding-box`);
\use client\;
  const angleDeg = `${cursorAngle.toFixed(3)}deg`;
\use client\;

\use client\;
  return (
\use client\;
    <div
\use client\;
      ref={cardRef}
\use client\;
      onPointerMove={handlePointerMove}
\use client\;
      onPointerEnter={() => setIsHovered(true)}
\use client\;
      onPointerLeave={() => setIsHovered(false)}
\use client\;
      className={`relative grid isolate border border-white/15 ${className}`}
\use client\;
      style={{
\use client\;
        background: backgroundColor,
\use client\;
        borderRadius: `${borderRadius}px`,
\use client\;
        transform: 'translate3d(0, 0, 0.01px)',
\use client\;
        boxShadow: 'rgba(0,0,0,0.1) 0 1px 2px, rgba(0,0,0,0.1) 0 2px 4px, rgba(0,0,0,0.1) 0 4px 8px, rgba(0,0,0,0.1) 0 8px 16px, rgba(0,0,0,0.1) 0 16px 32px, rgba(0,0,0,0.1) 0 32px 64px',
\use client\;
      }}
\use client\;
    >
\use client\;
      {/* mesh gradient border */}
\use client\;
      <div
\use client\;
        className="absolute inset-0 rounded-[inherit] -z-[1]"
\use client\;
        style={{
\use client\;
          border: '1px solid transparent',
\use client\;
          background: [
\use client\;
            `linear-gradient(${backgroundColor} 0 100%) padding-box`,
\use client\;
            'linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box',
\use client\;
            ...borderBg,
\use client\;
          ].join(', '),
\use client\;
          opacity: borderOpacity,
\use client\;
          maskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
\use client\;
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
\use client\;
          transition: isVisible ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out',
\use client\;
        }}
\use client\;
      />
\use client\;

\use client\;
      {/* mesh gradient fill near edges */}
\use client\;
      <div
\use client\;
        className="absolute inset-0 rounded-[inherit] -z-[1]"
\use client\;
        style={{
\use client\;
          border: '1px solid transparent',
\use client\;
          background: fillBg.join(', '),
\use client\;
          maskImage: [
\use client\;
            'linear-gradient(to bottom, black, black)',
\use client\;
            'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
\use client\;
            'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
\use client\;
            'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
\use client\;
            'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
\use client\;
            'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
\use client\;
            `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
\use client\;
          ].join(', '),
\use client\;
          WebkitMaskImage: [
\use client\;
            'linear-gradient(to bottom, black, black)',
\use client\;
            'radial-gradient(ellipse at 50% 50%, black 40%, transparent 65%)',
\use client\;
            'radial-gradient(ellipse at 66% 66%, black 5%, transparent 40%)',
\use client\;
            'radial-gradient(ellipse at 33% 33%, black 5%, transparent 40%)',
\use client\;
            'radial-gradient(ellipse at 66% 33%, black 5%, transparent 40%)',
\use client\;
            'radial-gradient(ellipse at 33% 66%, black 5%, transparent 40%)',
\use client\;
            `conic-gradient(from ${angleDeg} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
\use client\;
          ].join(', '),
\use client\;
          maskComposite: 'subtract, add, add, add, add, add',
\use client\;
          WebkitMaskComposite: 'source-out, source-over, source-over, source-over, source-over, source-over',
\use client\;
          opacity: borderOpacity * fillOpacity,
\use client\;
          mixBlendMode: 'soft-light',
\use client\;
          transition: isVisible ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out',
\use client\;
        } as React.CSSProperties}
\use client\;
      />
\use client\;

\use client\;
      {/* outer glow */}
\use client\;
      <span
\use client\;
        className="absolute pointer-events-none z-[1] rounded-[inherit]"
\use client\;
        style={{
\use client\;
          inset: `${-glowRadius}px`,
\use client\;
          maskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
\use client\;
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
\use client\;
          opacity: glowOpacity,
\use client\;
          mixBlendMode: 'plus-lighter',
\use client\;
          transition: isVisible ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out',
\use client\;
        } as React.CSSProperties}
\use client\;
      >
\use client\;
        <span
\use client\;
          className="absolute rounded-[inherit]"
\use client\;
          style={{
\use client\;
            inset: `${glowRadius}px`,
\use client\;
            boxShadow: buildBoxShadow(glowColor, glowIntensity),
\use client\;
          }}
\use client\;
        />
\use client\;
      </span>
\use client\;

\use client\;
      <div className="flex flex-col relative overflow-auto z-[1]">
\use client\;
        {children}
\use client\;
      </div>
\use client\;
    </div>
\use client\;
  );
\use client\;
};
\use client\;

\use client\;
export default BorderGlow;
