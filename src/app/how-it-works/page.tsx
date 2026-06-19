'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { GradientText } from '@/components/animations/GradientText'
import { TextType } from '@/components/animations/TextType'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const STEPS = [
  {
    num: '1',
    title: 'Submit a Request',
    desc: 'Tell us what you need verified. Provide the location and instructions.',
    examples: ['Property', 'Product', 'Person', 'Vehicle', 'Business'],
  },
  {
    num: '2',
    title: 'Match With a Verifier',
    desc: 'We connect your request with a qualified verifier nearby.',
    receives: ['Task details', 'Instructions', 'Timeline', 'Verification requirements'],
  },
  {
    num: '3',
    title: 'Verification Happens On Ground',
    desc: 'The verifier visits the location and conducts the inspection.',
    collects: ['Photos', 'Videos', 'Voice notes', 'Written observations', 'Location proof'],
  },
  {
    num: '4',
    title: 'Receive Your Verification Report',
    desc: 'Get a complete report showing exactly what was found. No guesswork. Just facts.',
    showing: ['What was verified', 'Evidence collected', 'Potential risks', 'Observations', 'Recommendations'],
  },
  {
    num: '5',
    title: 'Make Your Decision',
    desc: "Proceed confidently. You'll have the information needed to make a smarter decision.",
    decisions: ['Buy', 'Rent', 'Invest', 'Hire', 'Partner', 'Meet'],
  }
]

const TRUST_FEATURES = [
  'Verified verifier profiles',
  'Evidence-based reporting',
  'Location validation',
  'Media uploads',
  'Community accountability',
  'Secure payment systems',
  'Report history'
]

export default function HowItWorksPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-teal)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/0cbe0e44-26fa-40ae-a828-dbda0978c841/0AjtsYJwbN.lottie"
            loop
            autoplay
          />
        </div>
        
        <div className="container-xl px-6 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto"
          >
            <span className="gradient-text">
              <TextType text="A Simple 5-Step Process" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lead max-w-2xl mx-auto mb-10"
          >
            From submitting a request to making an informed decision, here is exactly how Checkamo protects you.
          </motion.p>
        </div>
      </section>

      {/* ── 5-STEP PROCESS ── */}
      <section className="section-py bg-[var(--bg-secondary)] relative">
        <div className="container-xl px-6 mx-auto max-w-4xl">
          
          <div className="relative">
            {/* Vertical Line Connector (hidden on mobile, visible on sm and up) */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--border)] hidden sm:block opacity-30" />

            {STEPS.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col sm:flex-row gap-6 mb-12 last:mb-0"
              >
                {/* Step Indicator */}
                <div className="flex-shrink-0 relative z-10 hidden sm:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full glass-3d flex items-center justify-center text-2xl font-bold text-[var(--text-primary)] shadow-lg shadow-teal-500/10">
                    {step.num}
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass-3d p-6 md:p-8 rounded-2xl flex-1 border border-[var(--border)] shadow-sm group hover:border-[var(--c-teal)]/30 transition-colors">
                  <div className="sm:hidden mb-4 inline-flex items-center gap-2 px-3 py-1 bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)] font-bold rounded-lg text-sm">
                    Step {step.num}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-[var(--text-secondary)] mb-6 text-lg">
                    {step.desc}
                  </p>

                  <div className="bg-[var(--bg)]/50 rounded-xl p-5 border border-[var(--border)]">
                    {step.examples && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">Examples:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.examples.map(ex => (
                            <span key={ex} className="badge badge-neutral">{ex}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.receives && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">The verifier receives:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.receives.map(rec => (
                            <div key={rec} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                              <span className="text-[var(--c-ocean)]">✓</span> {rec}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.collects && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">They collect:</p>
                        <div className="flex flex-wrap gap-3">
                          {step.collects.map(col => (
                            <div key={col} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] text-sm font-medium">
                              <span className="text-[var(--text-secondary)]">{col}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.showing && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">Report includes:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.showing.map(show => (
                            <div key={show} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                              <span className="text-[var(--c-teal)]">✓</span> {show}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {step.decisions && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">Whether you choose to:</p>
                        <div className="flex flex-wrap gap-2">
                          {step.decisions.map(dec => (
                            <span key={dec} className="badge badge-teal">{dec}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST & SAFETY SECTION ── */}
      <section className="section-py relative">
        <div className="container-xl px-6 mx-auto">
          <div className="glass-3d p-10 md:p-16 rounded-[2.5rem] max-w-5xl mx-auto border border-[var(--c-ocean)]/30 shadow-2xl shadow-[var(--c-ocean)]/10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="headline text-3xl md:text-5xl mb-4">Building Trust Through Verification</h2>
                  <p className="lead">
                    Your safety and confidence are our top priorities. Every step is designed to protect your interests.
                  </p>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--border)]"
                >
                  <p className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-5">
                    Every request is supported by:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {TRUST_FEATURES.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--bg)] transition-colors border border-transparent hover:border-[var(--border)]">
                        <span className="text-sm font-semibold text-[var(--text-secondary)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-py bg-[var(--bg-secondary)] text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-gradient-to-b from-[var(--c-blue)]/10 to-transparent blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container-xl px-6 mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline text-4xl md:text-6xl mb-6"
          >
            <GradientText text="Stop Guessing. Start Verifying." />
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lead max-w-2xl mx-auto mb-10"
          >
            Don't rely on screenshots, promises, or assumptions. Use Checkamo to verify products, properties, people, and businesses before making important decisions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={BRAND.appUrl} className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              🟢 Request Verification
            </Link>
            <Link href={BRAND.verifierAppUrl} className="btn btn-outline-dark text-lg px-8 py-4 w-full sm:w-auto">
              ⚪ Become a Verifier
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
