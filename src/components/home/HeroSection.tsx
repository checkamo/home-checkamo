'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { BRAND } from '@/lib/constants'
import { cn } from '@/lib/utils'

// SSR-safe — three-globe needs browser APIs + WebGL
const GlobeCanvas = dynamic(
  () => import('./GlobeCanvas').then((m) => m.GlobeCanvas),
  { ssr: false, loading: () => null }
)

//  Language cycling 
const CYCLES = [
  { phrase: 'Verify it.',   lang: 'English' },
  { phrase: 'Gaan am.',     lang: 'Pidgin'  },
  { phrase: 'Amụọ ya.',    lang: 'Igbo'    },
  { phrase: 'Ṣayẹwo rẹ.', lang: 'Yoruba'  },
  { phrase: 'Tabbatar.',    lang: 'Hausa'   },
]

export function HeroSection() {
  const [cycleIndex,    setCycleIndex]    = useState(0)
  const [phraseVisible, setPhraseVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setPhraseVisible(false)
      setTimeout(() => {
        setCycleIndex((i) => (i + 1) % CYCLES.length)
        setPhraseVisible(true)
      }, 280)
    }, 2800)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const current = CYCLES[cycleIndex]

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ minHeight: '100vh', paddingTop: 'var(--nav-height)' }}
      aria-label="Checkamo — verify anything in Nigeria"
    >
      {/*  Globe — right side, half overflowing  */}
      {/*
        The globe container is positioned absolute on the right half.
        overflow-hidden on the section clips it.
        We make it wider than 50% so the globe feels massive.
      */}
      <div
        className="absolute top-0 bottom-0 right-0"
        style={{
          width: '62%',
          // Push globe container slightly right so the left half of globe is hidden
          // This creates the "half globe" cinematic effect
        }}
        aria-hidden="true"
      >
        <GlobeCanvas />
      </div>

      {/* Right-side gradient fade — blends globe into white on the left edge */}
      <div
        className="absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{
          left: '30%',
          width: '28%',
          background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }}
        aria-hidden="true"
      />

      {/*  Text content — left aligned  */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div
            className="flex flex-col items-start text-left"
            style={{ maxWidth: '720px' }}
          >

            {/* Live badge */}
            {/* <div
              className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border"
              style={{
                background: 'rgba(4,191,191,0.06)',
                borderColor: 'rgba(4,191,191,0.25)',
              }}
            >
              <span className="pulse-dot" aria-hidden="true" />
              <span
                className="text-[9px] font-semibold tracking-[0.12em] uppercase"
                style={{
                  color: 'var(--c-ocean)',
                  fontFamily: "'Montserrat', 'JetBrains Mono', monospace",
                }}
              >
                Now live across Nigeria
              </span>
            </div> */}

            {/* Fixed headline */}
            <h1
              className="font-black leading-[1.0] tracking-[-0.04em] mb-1 select-none"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(2.8rem, 6vw, 5.4rem)',
                color: 'var(--text-primary)',
              }}
            >
              Don&rsquo;t guess.
            </h1>

            {/* Cycling line */}
            <div
              aria-live="polite"
              aria-label={`${current.phrase} — ${current.lang}`}
              className="mb-10 overflow-hidden"
              style={{ minHeight: 'clamp(2.8rem, 6vw, 5.4rem)' }}
            >
              <span
                className={cn(
                  'block font-black leading-[1.0] tracking-[-0.04em] gradient-text-blue select-none',
                  'transition-all duration-[280ms] ease-out',
                  phraseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                )}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 'clamp(2.8rem, 6vw, 5.4rem)',
                }}
                aria-hidden="true"
              >
                {current.phrase}
              </span>
              <span className="sr-only">Verify it — in English, Pidgin, Igbo, Yoruba and Hausa.</span>
            </div>

            {/* Sub-copy */}
            <p
              className="mb-10"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'var(--text-tertiary)',
                maxWidth: '400px',
              }}
            >
              Connect with trusted local verifiers for properties, products,
              documents, and more — before you send a single naira.
            </p>

            {/* Single CTA — Get Started */}
            <Link
              href={BRAND.appUrl}
              className="btn btn-blue px-9 py-4 text-[0.9375rem]"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
            >
              Get Started
            </Link>

            {/* Micro-trust line */}
            <p
              className="flex items-center gap-2 mt-5 text-xs"
              style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--text-muted)' }}
            >
              <ShieldTick />
              Free to request &mdash; 100% escrow protected
            </p>
          </div>
        </div>
      </div>

      {/* Drag hint — bottom right, over the globe */}
      <div
        className="absolute bottom-10 right-8 z-20 hidden lg:flex items-center gap-2"
        style={{ opacity: 0.45 }}
        aria-hidden="true"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="6" stroke="var(--text-muted)" strokeWidth="1.2"/>
          <path d="M7 4v3.5l2 1.2" stroke="var(--text-muted)" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <span
          className="text-[10px] font-semibold tracking-[0.14em] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif", color: 'var(--text-muted)' }}
        >
          Drag globe
        </span>
      </div>
    </section>
  )
}

//  Shield tick icon 
function ShieldTick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
      <path
        d="M7 1L2 3.5V7c0 2.76 2.13 5.34 5 6 2.87-.66 5-3.24 5-6V3.5L7 1Z"
        stroke="var(--c-teal)" strokeWidth="1.25" strokeLinejoin="round"
      />
      <path
        d="M4.5 7L6.2 8.8 9.5 5.5"
        stroke="var(--c-teal)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}