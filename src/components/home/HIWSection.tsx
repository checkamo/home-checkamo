'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'
import { cn } from '@/lib/utils'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

//  Step definitions 
// image: path under /public/images/hiw/  — see notes at bottom of file
const USER_STEPS = [
  {
    number: '01',
    title: 'Describe what needs verifying',
    detail:
      'Tell us the category, location, and exactly what you want checked — a property, a product listing, a seller, or a document.',
    bullets: ['Choose a category', 'Drop a location pin', 'Add your specific concerns', 'Attach reference photos (optional)'],
    image: '/images/hiw/user-01.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #010d26 0%, #0a2540 100%)',
  },
  {
    number: '02',
    title: 'Fund the escrow',
    detail:
      'Pay into our secure escrow. Your money is held safely and only released when you approve the result — zero risk to you.',
    bullets: ['Secure payment hold', 'No risk upfront', 'Released only on your approval', 'Full refund if disputed'],
    image: '/images/hiw/user-02.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #032040 0%, #0a3060 100%)',
  },
  {
    number: '03',
    title: 'A local verifier is assigned',
    detail:
      'We match your request to a vetted, NIN-verified local expert nearest to the location. They are notified immediately.',
    bullets: ['NIN-verified verifier', 'Nearest available expert', 'Background checked', 'Notified instantly'],
    image: '/images/hiw/user-03.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #041830 0%, #083050 100%)',
  },
  {
    number: '04',
    title: 'Receive your verification report',
    detail:
      'The verifier visits in person, inspects everything thoroughly, and submits timestamped photos and a detailed written report.',
    bullets: ['Timestamped photo evidence', 'Detailed written findings', 'GPS-tagged location proof', 'Delivered to your dashboard'],
    image: '/images/hiw/user-04.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #051025 0%, #0d2848 100%)',
  },
  {
    number: '05',
    title: 'Approve and release payment',
    detail:
      'Review the report at your pace. Satisfied? Release the escrow. Have a concern? Raise a dispute — we mediate and protect you.',
    bullets: ['Review the full report', 'One-click approval', 'Dispute protection available', 'Full refund if unresolved'],
    image: '/images/hiw/user-05.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #030e20 0%, #0a2038 100%)',
  },
]

const VERIFIER_STEPS = [
  {
    number: '01',
    title: 'Apply and get verified',
    detail:
      'Submit your NIN and a government-issued ID. Our team reviews your application and approves you within 48 hours.',
    bullets: ['Submit your NIN', 'Government ID upload', 'Quick background check', 'Approved in 48 hours'],
    image: '/images/hiw/ver-01.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #010820 0%, #091838 100%)',
  },
  {
    number: '02',
    title: 'Set your categories and coverage',
    detail:
      'Choose which verification categories you handle and which cities or states you cover. You only ever see jobs near you.',
    bullets: ['Pick your expertise', 'Set your coverage area', 'Jobs come to you', 'No minimum commitment'],
    image: '/images/hiw/ver-02.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #010a24 0%, #0b1e40 100%)',
  },
  {
    number: '03',
    title: 'Accept a verification job',
    detail:
      'Browse available requests in your area and accept the ones that suit your schedule. Full control over what you take on.',
    bullets: ['Real-time job feed', 'See full details before accepting', 'Accept what fits you', 'Flexible hours, always'],
    image: '/images/hiw/ver-03.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #020c28 0%, #0c2045 100%)',
  },
  {
    number: '04',
    title: 'Conduct the verification',
    detail:
      'Visit the location, inspect what was requested, and submit your full photo report directly through the verifier app.',
    bullets: ['Visit the location in person', 'Capture timestamped photos', 'Submit through the app', 'Automatic GPS tagging'],
    image: '/images/hiw/ver-04.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #010b26 0%, #0d2248 100%)',
  },
  {
    number: '05',
    title: 'Get paid instantly',
    detail:
      'Once the client approves the report, your earnings are released immediately to your wallet. Withdraw to your bank any time.',
    bullets: ['Instant wallet credit', 'Withdraw any time', 'Transparent fee structure', 'No payment delays'],
    image: '/images/hiw/ver-05.jpg',
    imageFallbackGradient: 'linear-gradient(135deg, #010d28 0%, #0e244a 100%)',
  },
]

/*
   IMAGE NOTES 
  Each step has a full-screen background image. Until you source them, the
  gradient fallback renders instead. Gradient fallbacks are dark navy tones
  so the white overlay text reads perfectly.

  Recommended image dimensions: 1920 × 1080px minimum, landscape.
  Place at: /public/images/hiw/

  USER STEPS — suggested search terms (Unsplash / Pexels / Shutterstock):
    user-01.jpg → "Nigerian person on phone browsing app"
    user-02.jpg → "mobile payment Nigeria secure"
    user-03.jpg → "Nigerian professional in field"
    user-04.jpg → "person taking photos property inspection"
    user-05.jpg → "Nigerian person satisfied happy phone"

  VERIFIER STEPS:
    ver-01.jpg  → "Nigerian professional ID verification"
    ver-02.jpg  → "map Nigeria city locations"
    ver-03.jpg  → "Nigerian professional accepting task phone"
    ver-04.jpg  → "person inspecting property Nigeria"
    ver-05.jpg  → "mobile banking payment Nigeria"
  
*/

// 

export function HowItWorksSection() {
  const [activeTrack, setActiveTrack] = useState<'user' | 'verifier'>('user')
  const [activeStep,  setActiveStep]  = useState(0)
  const [imagesExist, setImagesExist] = useState<Record<string, boolean>>({})

  const wrapperRef    = useRef<HTMLDivElement>(null)
  const panelsRef     = useRef<HTMLDivElement[]>([])
  const triggersRef   = useRef<ScrollTrigger[]>([])

  const steps  = activeTrack === 'user' ? USER_STEPS : VERIFIER_STEPS
  const accent = activeTrack === 'user' ? '#3b82f6' : '#1d4ed8'

  //  GSAP: pin each full-screen panel 
  useEffect(() => {
    // Kill all previous triggers
    triggersRef.current.forEach((t) => t.kill())
    triggersRef.current = []
    setActiveStep(0)

    const panels = panelsRef.current.filter(Boolean)

    panels.forEach((panel, i) => {
      const st = ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onEnter:     () => setActiveStep(i),
        onEnterBack: () => setActiveStep(i),
      })
      triggersRef.current.push(st)
    })

    return () => {
      triggersRef.current.forEach((t) => t.kill())
    }
  }, [activeTrack])

  return (
    <div
      ref={wrapperRef}
      className="relative"
      aria-label="How Checkamo works"
    >
      {/*  Section intro header — sits above the pinned panels  */}
      <div
        className="relative z-10 flex flex-col items-center text-center pt-24 pb-16 gap-5 px-6"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <span
          className="eyebrow"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          How it works
        </span>

        <h2
          className="font-black tracking-tight leading-[1.07]"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
            maxWidth: '540px',
          }}
        >
          Simple for everyone.{' '}
          <span className="gradient-text-blue">Powerful when it matters.</span>
        </h2>

        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            color: 'var(--text-tertiary)',
            maxWidth: '400px',
          }}
        >
          Whether you need something verified or want to earn by verifying,
          Checkamo is built for both sides.
        </p>
      </div>

      {/*  Pinned step panels  */}
      {steps.map((step, i) => (
        <div
          key={`${activeTrack}-${i}`}
          ref={(el) => { if (el) panelsRef.current[i] = el }}
          className="relative w-full overflow-hidden"
          style={{ height: '100vh' }}
        >
          {/*  Full-screen background image (or gradient fallback)  */}
          <div className="absolute inset-0">
            {/* Gradient fallback — always visible behind the image */}
            <div
              className="absolute inset-0"
              style={{ background: step.imageFallbackGradient }}
              aria-hidden="true"
            />

            {/* Real image — remove the comment wrapper once images are in /public */}
            {/*
            <Image
              src={step.image}
              alt={step.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
            */}

            {/* Dark scrim — ensures all text is legible on any image */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.15) 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          {/*  Track toggle — top right  */}
          {i === 0 && (
            <div className="absolute top-6 right-6 z-30 flex items-center gap-4">
              <button
                onClick={() => setActiveTrack('user')}
                className="text-sm font-semibold transition-all"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: activeTrack === 'user' ? '#ffffff' : 'rgba(255,255,255,0.40)',
                  borderBottom: activeTrack === 'user' ? '1.5px solid #3b82f6' : '1.5px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                For users
              </button>
              <button
                onClick={() => setActiveTrack('verifier')}
                className="text-sm font-semibold transition-all"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: activeTrack === 'verifier' ? '#ffffff' : 'rgba(255,255,255,0.40)',
                  borderBottom: activeTrack === 'verifier' ? '1.5px solid #1d4ed8' : '1.5px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                For verifiers
              </button>
            </div>
          )}

          {/*  Step number — top left  */}
          <div className="absolute top-6 left-6 z-20">
            <span
              className="font-black tracking-[0.12em]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.7rem',
                color: accent,
                textTransform: 'uppercase',
              }}
            >
              Step {step.number}
            </span>
          </div>

          {/*  Progress dots — top centre  */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {steps.map((_, dotIdx) => (
              <div
                key={dotIdx}
                className="rounded-full transition-all duration-400"
                style={{
                  width:   i === dotIdx ? '20px' : '5px',
                  height:  '3px',
                  background: i === dotIdx ? accent : 'rgba(255,255,255,0.30)',
                }}
              />
            ))}
          </div>

          {/*  Main content — bottom of screen  */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end">
            <div className="container mx-auto px-6 pb-16">
              <div className="flex flex-col lg:flex-row items-end justify-between gap-12">

                {/* Left — step title and detail */}
                <div style={{ maxWidth: '520px' }}>
                  <h3
                    className="font-black leading-[1.05] tracking-tight mb-4"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                      color: '#ffffff',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '1rem',
                      lineHeight: 1.78,
                      color: 'rgba(255,255,255,0.65)',
                      maxWidth: '400px',
                    }}
                  >
                    {step.detail}
                  </p>

                  {/* CTA on the last step only */}
                  {i === steps.length - 1 && (
                    <div className="mt-8">
                      <Link
                        href={activeTrack === 'user' ? BRAND.appUrl : BRAND.verifierAppUrl}
                        className={cn(
                          'btn text-sm px-8 py-3.5',
                          activeTrack === 'user' ? 'btn-blue-light' : 'btn-blue'
                        )}
                        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
                      >
                        {activeTrack === 'user' ? 'Get Started' : 'Apply to Verify'}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Right — bullet points card */}
                <div
                  className="flex-shrink-0 w-full lg:w-auto"
                  style={{ maxWidth: '300px' }}
                >
                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.12)',
                    }}
                  >
                    <div className="flex flex-col gap-3">
                      {step.bullets.map((bullet, bi) => (
                        <div key={bi} className="flex items-center gap-3">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${accent}28`, border: `1px solid ${accent}50` }}
                          >
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                              <path
                                d="M1.5 4.5L3.7 6.8L7.5 2.5"
                                stroke={accent}
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: '0.8125rem',
                              fontWeight: 500,
                              color: 'rgba(255,255,255,0.80)',
                            }}
                          >
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/*  After all steps: transition out panel  */}
      <div
        className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center gap-6"
        style={{ background: 'var(--bg)' }}
      >
        <p
          className="font-black tracking-tight"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: 'var(--text-primary)',
          }}
        >
          Ready to{' '}
          <span className="gradient-text-blue">
            {activeTrack === 'user' ? 'verify something?' : 'start earning?'}
          </span>
        </p>
        <div className="flex items-center gap-3">
          <Link
            href={activeTrack === 'user' ? BRAND.appUrl : BRAND.verifierAppUrl}
            className={activeTrack === 'user' ? 'btn btn-blue-light px-8 py-3.5 text-sm' : 'btn btn-blue px-8 py-3.5 text-sm'}
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
          >
            {activeTrack === 'user' ? 'Get Started' : 'Apply Now'}
          </Link>
          <Link
            href={activeTrack === 'user' ? '/how-it-works' : '/for-verifiers'}
            className="btn btn-outline-dark px-8 py-3.5 text-sm"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  )
}