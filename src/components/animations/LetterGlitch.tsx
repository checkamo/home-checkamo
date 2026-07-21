" use client\;
import { useRef, useEffect } from 'react';
" use client\;

" use client\;
const LetterGlitch = ({
" use client\;
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
" use client\;
  glitchSpeed = 50,
" use client\;
  centerVignette = false,
" use client\;
  outerVignette = true,
" use client\;
  smooth = true,
" use client\;
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789'
" use client\;
}: {
" use client\;
  glitchColors: string[];
" use client\;
  glitchSpeed: number;
" use client\;
  centerVignette: boolean;
" use client\;
  outerVignette: boolean;
" use client\;
  smooth: boolean;
" use client\;
  characters: string;
" use client\;
}) => {
" use client\;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
" use client\;
  const animationRef = useRef<number | null>(null);
" use client\;
  const letters = useRef<
" use client\;
    {
" use client\;
      char: string;
" use client\;
      color: string;
" use client\;
      targetColor: string;
" use client\;
      colorProgress: number;
" use client\;
    }[]
" use client\;
  >([]);
" use client\;
  const grid = useRef({ columns: 0, rows: 0 });
" use client\;
  const context = useRef<CanvasRenderingContext2D | null>(null);
" use client\;
  const lastGlitchTime = useRef(Date.now());
" use client\;

" use client\;
  const lettersAndSymbols = Array.from(characters);
" use client\;

" use client\;
  const fontSize = 16;
" use client\;
  const charWidth = 10;
" use client\;
  const charHeight = 20;
" use client\;

" use client\;
  const getRandomChar = () => {
" use client\;
    return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
" use client\;
  };
" use client\;

" use client\;
  const getRandomColor = () => {
" use client\;
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
" use client\;
  };
" use client\;

" use client\;
  const hexToRgb = (hex: string) => {
" use client\;
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
" use client\;
    hex = hex.replace(shorthandRegex, (_m, r, g, b) => {
" use client\;
      return r + r + g + g + b + b;
" use client\;
    });
" use client\;

" use client\;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
" use client\;
    return result
" use client\;
      ? {
" use client\;
          r: parseInt(result[1], 16),
" use client\;
          g: parseInt(result[2], 16),
" use client\;
          b: parseInt(result[3], 16)
" use client\;
        }
" use client\;
      : null;
" use client\;
  };
" use client\;

" use client\;
  const interpolateColor = (
" use client\;
    start: { r: number; g: number; b: number },
" use client\;
    end: { r: number; g: number; b: number },
" use client\;
    factor: number
" use client\;
  ) => {
" use client\;
    const result = {
" use client\;
      r: Math.round(start.r + (end.r - start.r) * factor),
" use client\;
      g: Math.round(start.g + (end.g - start.g) * factor),
" use client\;
      b: Math.round(start.b + (end.b - start.b) * factor)
" use client\;
    };
" use client\;
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
" use client\;
  };
" use client\;

" use client\;
  const calculateGrid = (width: number, height: number) => {
" use client\;
    const columns = Math.ceil(width / charWidth);
" use client\;
    const rows = Math.ceil(height / charHeight);
" use client\;
    return { columns, rows };
" use client\;
  };
" use client\;

" use client\;
  const initializeLetters = (columns: number, rows: number) => {
" use client\;
    grid.current = { columns, rows };
" use client\;
    const totalLetters = columns * rows;
" use client\;
    letters.current = Array.from({ length: totalLetters }, () => ({
" use client\;
      char: getRandomChar(),
" use client\;
      color: getRandomColor(),
" use client\;
      targetColor: getRandomColor(),
" use client\;
      colorProgress: 1
" use client\;
    }));
" use client\;
  };
" use client\;

" use client\;
  const resizeCanvas = () => {
" use client\;
    const canvas = canvasRef.current;
" use client\;
    if (!canvas) return;
" use client\;
    const parent = canvas.parentElement;
" use client\;
    if (!parent) return;
" use client\;

" use client\;
    const dpr = window.devicePixelRatio || 1;
" use client\;
    const rect = parent.getBoundingClientRect();
" use client\;

" use client\;
    canvas.width = rect.width * dpr;
" use client\;
    canvas.height = rect.height * dpr;
" use client\;

" use client\;
    canvas.style.width = `${rect.width}px`;
" use client\;
    canvas.style.height = `${rect.height}px`;
" use client\;

" use client\;
    if (context.current) {
" use client\;
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
" use client\;
    }
" use client\;

" use client\;
    const { columns, rows } = calculateGrid(rect.width, rect.height);
" use client\;
    initializeLetters(columns, rows);
" use client\;
    drawLetters();
" use client\;
  };
" use client\;

" use client\;
  const drawLetters = () => {
" use client\;
    if (!context.current || letters.current.length === 0) return;
" use client\;
    const ctx = context.current;
" use client\;
    const { width, height } = canvasRef.current!.getBoundingClientRect();
" use client\;
    ctx.clearRect(0, 0, width, height);
" use client\;
    ctx.font = `${fontSize}px monospace`;
" use client\;
    ctx.textBaseline = 'top';
" use client\;

" use client\;
    letters.current.forEach((letter, index) => {
" use client\;
      const x = (index % grid.current.columns) * charWidth;
" use client\;
      const y = Math.floor(index / grid.current.columns) * charHeight;
" use client\;
      ctx.fillStyle = letter.color;
" use client\;
      ctx.fillText(letter.char, x, y);
" use client\;
    });
" use client\;
  };
" use client\;

" use client\;
  const updateLetters = () => {
" use client\;
    if (!letters.current || letters.current.length === 0) return;
" use client\;

" use client\;
    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));
" use client\;

" use client\;
    for (let i = 0; i < updateCount; i++) {
" use client\;
      const index = Math.floor(Math.random() * letters.current.length);
" use client\;
      if (!letters.current[index]) continue;
" use client\;

" use client\;
      letters.current[index].char = getRandomChar();
" use client\;
      letters.current[index].targetColor = getRandomColor();
" use client\;

" use client\;
      if (!smooth) {
" use client\;
        letters.current[index].color = letters.current[index].targetColor;
" use client\;
        letters.current[index].colorProgress = 1;
" use client\;
      } else {
" use client\;
        letters.current[index].colorProgress = 0;
" use client\;
      }
" use client\;
    }
" use client\;
  };
" use client\;

" use client\;
  const handleSmoothTransitions = () => {
" use client\;
    let needsRedraw = false;
" use client\;
    letters.current.forEach(letter => {
" use client\;
      if (letter.colorProgress < 1) {
" use client\;
        letter.colorProgress += 0.05;
" use client\;
        if (letter.colorProgress > 1) letter.colorProgress = 1;
" use client\;

" use client\;
        const startRgb = hexToRgb(letter.color);
" use client\;
        const endRgb = hexToRgb(letter.targetColor);
" use client\;
        if (startRgb && endRgb) {
" use client\;
          letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
" use client\;
          needsRedraw = true;
" use client\;
        }
" use client\;
      }
" use client\;
    });
" use client\;

" use client\;
    if (needsRedraw) {
" use client\;
      drawLetters();
" use client\;
    }
" use client\;
  };
" use client\;

" use client\;
  const animate = () => {
" use client\;
    const now = Date.now();
" use client\;
    if (now - lastGlitchTime.current >= glitchSpeed) {
" use client\;
      updateLetters();
" use client\;
      drawLetters();
" use client\;
      lastGlitchTime.current = now;
" use client\;
    }
" use client\;

" use client\;
    if (smooth) {
" use client\;
      handleSmoothTransitions();
" use client\;
    }
" use client\;

" use client\;
    animationRef.current = requestAnimationFrame(animate);
" use client\;
  };
" use client\;

" use client\;
  useEffect(() => {
" use client\;
    const canvas = canvasRef.current;
" use client\;
    if (!canvas) return;
" use client\;

" use client\;
    context.current = canvas.getContext('2d');
" use client\;
    resizeCanvas();
" use client\;
    animate();
" use client\;

" use client\;
    let resizeTimeout: ReturnType<typeof setTimeout>;
" use client\;

" use client\;
    const handleResize = () => {
" use client\;
      clearTimeout(resizeTimeout);
" use client\;
      resizeTimeout = setTimeout(() => {
" use client\;
        cancelAnimationFrame(animationRef.current as number);
" use client\;
        resizeCanvas();
" use client\;
        animate();
" use client\;
      }, 100);
" use client\;
    };
" use client\;

" use client\;
    window.addEventListener('resize', handleResize);
" use client\;

" use client\;
    return () => {
" use client\;
      cancelAnimationFrame(animationRef.current!);
" use client\;
      window.removeEventListener('resize', handleResize);
" use client\;
    };
" use client\;
    // eslint-disable-next-line react-hooks/exhaustive-deps
" use client\;
  }, [glitchSpeed, smooth]);
" use client\;

" use client\;
  return (
" use client\;
    <div className="relative w-full h-full bg-black overflow-hidden">
" use client\;
      <canvas ref={canvasRef} className="block w-full h-full" />
" use client\;
      {outerVignette && (
" use client\;
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_60%,_rgba(0,0,0,1)_100%)]"></div>
" use client\;
      )}
" use client\;
      {centerVignette && (
" use client\;
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]"></div>
" use client\;
      )}
" use client\;
    </div>
" use client\;
  );
" use client\;
};
" use client\;

" use client\;
export default LetterGlitch;
