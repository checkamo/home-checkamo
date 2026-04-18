'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

//  Marquee items 
const MARQUEE_ITEMS = [
  'Property & Land',
  'Electronics',
  'Vehicles',
  'Documents',
  'Identity Checks',
  'Online Sellers',
  'Services',
  'Luxury Items',
  'Certificates',
  'Background Checks',
  'Contractors',
  'Real Estate',
]
const MARQUEE_FULL = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

//  Pillars 
const PILLARS = [
  {
    number: '8',
    unit: 'categories',
    detail: 'From land to luxury — if it can be verified, we cover it.',
  },
  {
    number: '24hr',
    unit: 'turnaround',
    detail: 'Most requests are assigned and completed within a day.',
  },
  {
    number: '100%',
    unit: 'escrow',
    detail: 'Your money moves only when you approve the result.',
  },
]

export function GlanceSection() {
  const headlineRef = useReveal<HTMLDivElement>()
  const imageRef    = useReveal<HTMLDivElement>()
  const pillarsRef  = useReveal<HTMLDivElement>()

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="Checkamo at a glance"
    >
      {/*  Section header  */}
      <div className="container mx-auto px-6 pt-24 pb-14">
        <div
          ref={headlineRef}
          className="reveal flex flex-col items-center text-center gap-5"
        >
          <span
            className="eyebrow"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            At a glance
          </span>

          <h2
            className="font-black tracking-tight leading-[1.07]"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: 'var(--text-primary)',
              maxWidth: '560px',
            }}
          >
            One platform.{' '}
            <span className="gradient-text">Every verification.</span>
          </h2>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '1rem',
              lineHeight: 1.78,
              color: 'var(--text-tertiary)',
              maxWidth: '420px',
            }}
          >
            Checkamo connects people who need things verified with trusted
            local experts who can do it — anywhere in Nigeria.
          </p>
        </div>
      </div>

      {/*  Full-width cinematic image panel  */}
      <div
        ref={imageRef}
        className="reveal mx-4 sm:mx-6 lg:mx-12 rounded-2xl overflow-hidden relative"
        style={{ aspectRatio: '16 / 6.5', minHeight: '300px' }}
      >
        {/*
           HOW TO ADD THE REAL IMAGE 
          1. Download a wide professional photo (min 2400×1050px, 16:6.5 ratio)
             Suggestions:
               - Unsplash: search "Lagos aerial night", "Nigeria city skyline"
               - Pexels: "African city aerial", "Nigeria business district"
             Place it at: /public/images/glance-hero.jpg

          2. Remove the gradient placeholder <div> below.

          3. Uncomment the <Image> block.

          The Image component is already imported from 'next/image' at the top.
          
        */}
      

        {/* REAL IMAGE — uncomment when you have /public/images/glance-hero.jpg */}
        <Image
          src="/images/glance-hero.png"
          alt="Checkamo verifiers at work across Nigeria"
          fill
          sizes="(max-width: 768px) 100vw, 90vw"
          className="object-cover"
          priority={false}
        />
        

        {/* Overlay gradient — left-to-right dark so text reads on any photo */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(1,13,38,0.88) 0%, rgba(1,13,38,0.45) 50%, rgba(1,13,38,0.08) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Text content over image */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
          <p
            className="font-semibold tracking-[0.10em] uppercase mb-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.50)',
            }}
          >
            Trusted verification
          </p>
          <h3
            className="font-black leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
              color: '#ffffff',
              maxWidth: '500px',
            }}
          >
            Real people. Real places.{' '}
            <span style={{ color: 'var(--c-teal)' }}>Real proof.</span>
          </h3>
        </div>

        {/* Circular rotating banner — bottom right of image */}
        <CircularBanner />
      </div>

      {/*  Three pillars  */}
      <div className="container mx-auto px-6 py-16">
        <div
          ref={pillarsRef}
          className="reveal grid grid-cols-1 sm:grid-cols-3"
          style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-8 py-12"
              style={{
                borderRight: i < PILLARS.length - 1 ? '1px solid var(--border)' : undefined,
              }}
            >
              <div
                className="font-black leading-none tracking-tight mb-1"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                  color: 'var(--text-primary)',
                }}
              >
                {p.number}
              </div>
              <div
                className="font-bold mb-3 tracking-wide uppercase"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.7rem',
                  color: 'var(--c-teal)',
                }}
              >
                {p.unit}
              </div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.875rem',
                  lineHeight: 1.7,
                  color: 'var(--text-tertiary)',
                  maxWidth: '200px',
                }}
              >
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*  Marquee strip  */}
      <div
        className="relative overflow-hidden py-5"
        style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
        aria-hidden="true"
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg), transparent)' }}
        />

        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marqueeScroll 30s linear infinite' }}
        >
          {MARQUEE_FULL.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-5"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--text-tertiary)',
              }}
            >
              {item}
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: 'var(--c-teal)', flexShrink: 0 }}
              />
            </span>
          ))}
        </div>

        <style>{`
          @keyframes marqueeScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  )
}

//  Circular rotating SVG banner 
function CircularBanner() {
  const R    = 66
  const TEXT = 'VERIFY BEFORE YOU BUY  ·  CHECKAMO  ·  '
  const full = TEXT.repeat(2)

  return (
    <div
      className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-30"
      aria-hidden="true"
    >
      <div
        className="relative"
        style={{
          width: R * 2 + 16,
          height: R * 2 + 16,
          animation: 'circularSpin 24s linear infinite',
        }}
      >
        <style>{`
          @keyframes circularSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>

        <svg
          width={R * 2 + 16}
          height={R * 2 + 16}
          viewBox={`0 0 ${R * 2 + 16} ${R * 2 + 16}`}
        >
          <defs>
            <path
              id="ctp"
              d={`M${R + 8},${R + 8} m-${R},0 a${R},${R} 0 1,1 ${R * 2},0 a${R},${R} 0 1,1 -${R * 2},0`}
            />
          </defs>

          <circle
            cx={R + 8}
            cy={R + 8}
            r={R}
            fill="rgba(4,191,191,0.10)"
            stroke="rgba(4,191,191,0.30)"
            strokeWidth="1"
          />

          <text
            fill="rgba(255,255,255,0.80)"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.10em',
            }}
          >
            <textPath href="#ctp">{full}</textPath>
          </text>
        </svg>

        {/* Counter-rotating centre arrow */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ animation: 'circularSpin 24s linear infinite reverse' }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: 'var(--c-teal)' }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6H10M7.5 3L10 6L7.5 9"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}