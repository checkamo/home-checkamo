"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { BRAND } from "@/lib/constants";

// TYPES

type Track = "users" | "verifiers";

interface Step {
  number: string;
  title: string;
  detail: string;
  tag: string;
  bullets: string[];
  cta?: { label: string; href: string; isUser: boolean };
}

// DATA

const STEPS: Record<Track, Step[]> = {
  users: [
    {
      number: "01",
      tag: "Request",
      title: "Describe what needs verifying",
      detail:
        "Tell us the category, location, and exactly what you want checked — a property, a product listing, a seller, or a document. Be as specific as you like.",
      bullets: [
        "Choose from 8 verification categories",
        "Drop a location pin anywhere in Nigeria",
        "Add photos or reference files",
        "Specify exactly what concerns you",
      ],
    },
    {
      number: "02",
      tag: "Payment",
      title: "Fund the escrow — your money is protected",
      detail:
        "Pay into our secure escrow vault. Not a single naira leaves until you personally approve the result. Full refund if we cannot resolve a dispute.",
      bullets: [
        "Secure escrow hold — zero risk",
        "Accepted: card, bank transfer, USSD",
        "Released only on your approval",
        "Full refund guarantee if disputed",
      ],
    },
    {
      number: "03",
      tag: "Matching",
      title: "A vetted local verifier is assigned",
      detail:
        "Our system matches your request to the nearest NIN-verified expert. They are background-checked, rated by past clients, and notified within minutes.",
      bullets: [
        "NIN-verified & background-checked",
        "Matched by proximity to your location",
        "Average match time: under 10 minutes",
        "You can see their rating before they start",
      ],
    },
    {
      number: "04",
      tag: "Verification",
      title: "Physical inspection, documented in full",
      detail:
        "The verifier visits in person. Every finding is photographed, timestamped, and GPS-tagged. You receive a structured written report — not a phone call.",
      bullets: [
        "In-person visit to the exact location",
        "Timestamped, GPS-tagged photo evidence",
        "Structured written report",
        "Delivered straight to your dashboard",
      ],
    },
    {
      number: "05",
      tag: "Resolution",
      title: "Approve and release — or raise a dispute",
      detail:
        "Review everything at your own pace. Happy with the findings? One click releases the escrow. Something off? Raise a dispute and we mediate fully.",
      bullets: [
        "No time pressure — review when ready",
        "One-click approval and payment release",
        "Dispute mediation available 24 / 7",
        "Full refund if unresolved in your favour",
      ],
      cta: { label: "Get started", href: BRAND.appUrl, isUser: true },
    },
  ],
  verifiers: [
    {
      number: "01",
      tag: "Onboarding",
      title: "Apply and get verified in 48 hours",
      detail:
        "Submit your NIN and a government-issued ID. Our compliance team reviews every application manually and sends your approval within 48 hours.",
      bullets: [
        "Submit NIN + government ID",
        "Manual compliance review",
        "Approved within 48 hours",
        "One-time setup — no renewal fees",
      ],
    },
    {
      number: "02",
      tag: "Setup",
      title: "Set your categories and coverage area",
      detail:
        "Choose the verification categories you are confident in and draw your coverage zone on the map. You will only ever see jobs inside your zone.",
      bullets: [
        "Pick from 8 verification categories",
        "Draw your city or state coverage",
        "Jobs come to you — no bidding",
        "No minimum hours or commitment",
      ],
    },
    {
      number: "03",
      tag: "Jobs",
      title: "Browse and accept jobs on your schedule",
      detail:
        "Your job feed shows all available requests near you with full details — location, category, client instructions — before you commit to anything.",
      bullets: [
        "Real-time job feed near you",
        "Full details before accepting",
        "Completely flexible hours",
        "No penalty for declining jobs",
      ],
    },
    {
      number: "04",
      tag: "Field work",
      title: "Conduct the verification with the app",
      detail:
        "Visit the location, inspect what was requested, and submit your full evidence through the verifier app. GPS, timestamps, and photos are captured automatically.",
      bullets: [
        "In-person visit required",
        "App captures GPS + timestamps",
        "Structured photo submission flow",
        "Offline mode for low connectivity",
      ],
    },
    {
      number: "05",
      tag: "Payout",
      title: "Get paid the moment the client approves",
      detail:
        "Earnings land in your Checkamo wallet instantly on client approval. Withdraw to any Nigerian bank account at any time — no batch processing, no waiting.",
      bullets: [
        "Instant wallet credit on approval",
        "Withdraw to any Nigerian bank",
        "Transparent platform fee shown upfront",
        "Weekly earnings summary report",
      ],
      cta: {
        label: "Apply to verify",
        href: BRAND.verifierAppUrl,
        isUser: false,
      },
    },
  ],
};

// STEP CARD — individual right-column block

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });

  return (
    <div
      ref={ref}
      style={{
        paddingTop: index === 0 ? 0 : "10vh",
        paddingBottom: index === 4 ? 0 : "10vh",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%" }}
      >
        {/* Tag pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 20,
            padding: "5px 12px",
            borderRadius: 9999,
            border: "1px solid rgba(29,78,216,0.3)",
            background: "rgba(29,78,216,0.08)",
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#3b82f6",
              display: "block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#3b82f6",
            }}
          >
            {step.tag}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: 16,
          }}
        >
          {step.title}
        </motion.h3>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
          style={{
            height: 1,
            background:
              "linear-gradient(to right, rgba(29,78,216,0.6), transparent)",
            marginBottom: 20,
            transformOrigin: "left",
          }}
        />

        {/* Detail */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.975rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.52)",
            marginBottom: 28,
            fontWeight: 400,
          }}
        >
          {step.detail}
        </motion.p>

        {/* Bullets */}
        <motion.ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {step.bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 16 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
              transition={{
                duration: 0.45,
                delay: 0.38 + i * 0.07,
                ease: "easeOut",
              }}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  flexShrink: 0,
                  borderRadius: "50%",
                  background: "rgba(29,78,216,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                  <path
                    d="M1 3.5L3.5 6L8 1"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {b}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        {step.cta && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.55, delay: 0.75 }}
            style={{ marginTop: 36 }}
          >
            <Link
              href={step.cta.href}
              className={step.cta.isUser ? "btn btn-primary" : "btn btn-blue"}
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {step.cta.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7.5 3l4 4-4 4"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// STICKY LEFT PANEL — number + progress line
function StickyLeft({ steps, track, activeStep }: { steps: Step[]; track: Track; activeStep: number }) {
  return (
    <div
      // Adding a key here forces the sticky container to refresh on track change
      key={track} 
      style={{
        position: 'sticky',
        top: '20vh', 
        alignSelf: 'start',
        width: '100%',
        zIndex: 20
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          // Crucial: track in the key ensures 01 vs 02 swap works across modes
          key={`${track}-${activeStep}`} 
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          transition={{ duration: 0.4, ease: "circOut" }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 'clamp(6rem, 10vw, 9rem)',
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(135deg, rgba(29,78,216,0.22) 0%, rgba(59,130,246,0.08) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 8,
          }}
        >
          {steps[activeStep]?.number}
        </motion.div>
      </AnimatePresence>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.div
              animate={{
                scale: i === activeStep ? 1.2 : 1,
                background: i === activeStep 
                  ? (track === 'users' ? '#04bfbf' : '#3b82f6') 
                  : 'rgba(255,255,255,0.1)',
              }}
              style={{ width: 8, height: 8, borderRadius: '50%' }}
            />
            <span style={{ 
              fontSize: 11, 
              fontFamily: 'JetBrains Mono',
              textTransform: 'uppercase',
              color: i === activeStep ? '#fff' : 'rgba(255,255,255,0.2)' 
            }}>
              {step.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// STEP DOT — individual progress dot
function StepDot({
  step,
  index,
  total,
  isActive,
  scrollYProgress,
  onActivate,
}: {
  step: Step;
  index: number;
  total: number;
  isActive: boolean;
  scrollYProgress: any;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-35% 0px -35% 0px" });

  // Activate parent when this step is in view
  const prevInView = useRef(false);
  if (inView !== prevInView.current) {
    prevInView.current = inView;
    if (inView) onActivate();
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        paddingTop: 6,
        paddingBottom: index < total - 1 ? 0 : 6,
      }}
    >
      {/* Dot + connecting line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <motion.div
          animate={{
            width: isActive ? 10 : 7,
            height: isActive ? 10 : 7,
            background: isActive ? "#1d4ed8" : "rgba(255,255,255,0.18)",
            boxShadow: isActive
              ? "0 0 0 4px rgba(29,78,216,0.18)"
              : "0 0 0 0px transparent",
          }}
          transition={{ duration: 0.3 }}
          style={{ borderRadius: "50%" }}
        />
        {index < total - 1 && (
          <div
            style={{
              width: 1,
              height: 28,
              background: isActive
                ? "linear-gradient(to bottom, #1d4ed8, rgba(255,255,255,0.10))"
                : "rgba(255,255,255,0.10)",
              transition: "background 400ms ease",
              marginTop: 3,
            }}
          />
        )}
      </div>

      {/* Step tag */}
      <motion.span
        animate={{
          color: isActive ? "#fff" : "rgba(255,255,255,0.28)",
          fontWeight: isActive ? 600 : 400,
        }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 12,
          letterSpacing: isActive ? "0" : "0.02em",
          lineHeight: index < total - 1 ? 1 : "normal",
        }}
      >
        {step.tag}
      </motion.span>
    </div>
  );
}

// MAIN COMPONENT
export default function HowItWorksSection() {
  const [track, setTrack] = useState<Track>('users')
  const [activeStep, setActiveStep] = useState(0)
  const steps = STEPS[track]
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  // 1. Reset step when track changes
  const handleTrackChange = (t: Track) => {
    setTrack(t)
    setActiveStep(0)
    // Optional: Scroll user to the top of the section so they start at Step 1
    containerRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine which "chunk" of the scroll we are in
    const stepCount = steps.length
    const currentStep = Math.min(
      Math.floor(latest * stepCount),
      stepCount - 1
    )
    
    if (currentStep !== activeStep && currentStep >= 0) {
      setActiveStep(currentStep)
    }
  })

  return (
    <section
      id="how-it-works"
      style={{
        background: "#000",
        position: "relative",
      }}
    >
      {/* Ambient blue radial behind everything */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at center, rgba(29,78,216,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/*  HEADER  */}
      <div className="container mx-auto px-6">
        <div
          style={{
            paddingTop: "clamp(80px, 12vw, 140px)",
            paddingBottom: "clamp(56px, 8vw, 96px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 0,
          }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
            style={{ marginBottom: 16 }}
          >
            How it works
          </motion.div>

          {/* Headline + toggle on same row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              width: "100%",
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.06,
                color: "#fff",
              }}
            >
              Five steps.{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Zero confusion.
              </span>
            </motion.h2>

            {/* Track toggle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "flex",
                gap: 2,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 10,
                padding: 4,
                flexShrink: 0,
              }}
            >
              {(["users", "verifiers"] as Track[]).map((t) => (
                <button
                  key={t}
                  onClick={() => handleTrackChange(t)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 7,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    transition: "all 220ms ease",
                    background:
                      track === t
                        ? t === "users"
                          ? "#04bfbf"
                          : "#1d4ed8"
                        : "transparent",
                    color: track === t ? "#fff" : "rgba(255,255,255,0.38)",
                    boxShadow:
                      track === t
                        ? t === "users"
                          ? "0 4px 14px rgba(4,191,191,0.28)"
                          : "0 4px 14px rgba(29,78,216,0.32)"
                        : "none",
                  }}
                >
                  {t === "users" ? "I need verification" : "I want to earn"}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.72,
              color: "rgba(255,255,255,0.42)",
              maxWidth: 520,
              marginTop: 20,
              fontWeight: 400,
            }}
          >
            {track === "users"
              ? "You stay in control the whole way. Escrow-protected, transparent pricing, real humans doing real checks."
              : "Work when you want, earn what you deserve. Every job comes with a fixed price you see before accepting."}
          </motion.p>
        </div>

        {/* Thin separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            height: 1,
            background: "rgba(255,255,255,0.07)",
            transformOrigin: "left",
            marginBottom: 0,
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={track}
          onAnimationComplete={() => setActiveStep(0)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container mx-auto px-6">
            {/* 4. Add the ref to this grid */}
            <div
              ref={containerRef}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.6fr",
                gap: "clamp(40px, 6vw, 96px)",
                alignItems: "start",
                paddingTop: "6vh",
                position: "relative",
              }}
            >
              {/* Pass the state down */}
              <StickyLeft steps={steps} track={track} activeStep={activeStep} />

              <div className="overflow-hidden">
                {steps.map((step, i) => (
                  <StepCard key={`${track}-${i}`} step={step} index={i} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/*  BOTTOM STATS BAR  */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="container mx-auto px-6">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
            }}
          >
            {[
              { value: "48 hrs", label: "Average turnaround" },
              { value: "100%", label: "Escrow protected" },
              { value: "NIN", label: "Verified verifiers only" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  padding: "clamp(28px, 4vw, 40px) 24px",
                  borderRight:
                    i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    background:
                      "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.55) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: 6,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
