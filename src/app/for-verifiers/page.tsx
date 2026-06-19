'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { TextType } from '@/components/animations/TextType'
import { GradientText } from '@/components/animations/GradientText'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const WHO_CAN_JOIN = [
  'A student', 'Graduate', 'Real estate professional', 'Consultant', 
  'Field officer', 'Entrepreneur', 'Freelancer', 'Community leader', 'Trusted local resident'
]

const CORE_VALUES = [
  { label: 'Integrity' },
  { label: 'Professionalism' },
  { label: 'Attention to detail' },
  { label: 'Reliability' }
]

const EARNING_EXAMPLES = [
  { text: 'Visit a property' },
  { text: 'Inspect a smartphone' },
  { text: 'Verify a vehicle' },
  { text: 'Confirm a business location' },
  { text: 'Verify a service provider' },
]

const WHAT_YOULL_DO = [
  { title: 'Visit locations' },
  { title: 'Capture photos' },
  { title: 'Record videos' },
  { title: 'Upload reports' },
  { title: 'Share observations' },
]

export default function ForVerifiersPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-blue)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/47ff3066-2f9e-40b4-b478-330007870174/2aZCSAJcro.lottie"
            loop
            autoplay
          />
        </div>
        
        <div className="container-xl px-6 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto mb-6"
          >
            <TextType text="Turn Your" />
            <br />
            <span className="gradient-text-blue">
              <TextType text="Local Knowledge" delay={0.4} />
            </span>
            <br />
            <span className="gradient-text-blue">
              <TextType text="Into Income." delay={0.8} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lead max-w-2xl mx-auto mb-10"
          >
            Become part of a trusted network helping people make smarter decisions. Earn by verifying products, properties, businesses, services, and people within your city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={BRAND.verifierAppUrl} className="btn btn-blue text-lg px-8 py-4">
              Apply to Become a Verifier
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHO CAN BECOME A VERIFIER? ── */}
      <section className="section-py bg-[var(--bg-secondary)] relative">
        <div className="container-xl px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="headline text-3xl md:text-5xl mb-6"
              >
                Who Can Become a Verifier?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lead mb-8"
              >
                No special degree required. You may qualify if you fall into any of these categories:
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                {WHO_CAN_JOIN.map((person, i) => (
                  <span key={person} className="px-4 py-2 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-sm font-medium text-[var(--text-secondary)] shadow-sm">
                    {person}
                  </span>
                ))}
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-3d p-8 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-blue)]/10 blur-[50px] rounded-full" />
                <h3 className="text-xl font-bold mb-6 text-[var(--text-primary)]">What matters most:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CORE_VALUES.map((val) => (
                    <div key={val.label} className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border)]">
                      <span className="font-semibold text-[var(--text-primary)]">{val.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW VERIFIERS EARN & WHAT YOU'LL DO ── */}
      <section className="section-py relative">
        <div className="container-xl px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline text-3xl md:text-5xl mb-4">The Verification Process</h2>
            <p className="lead max-w-2xl mx-auto">You are the trusted eyes and ears for users.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* How Earn */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-t-[var(--c-ocean)]"
            >
              <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">How Verifiers Earn</h3>
              <p className="text-[var(--text-secondary)] mb-6">Receive paid verification requests from users.</p>
              
              <ul className="space-y-3">
                {EARNING_EXAMPLES.map((ex, i) => (
                  <li key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                    <span className="font-medium text-[var(--text-primary)]">{ex.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What You'll Do */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-t-[var(--c-teal)]"
            >
              <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">What You'll Do</h3>
              <p className="text-[var(--text-secondary)] mb-6">Your on-the-ground tasks to complete a check.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHAT_YOULL_DO.map((task, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] shadow-sm">
                    <span className="font-semibold text-sm text-[var(--text-primary)]">{task.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── REPUTATION AND SAFETY ── */}
      <section className="section-py bg-[var(--bg-secondary)] relative">
        <div className="container-xl px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Reputation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card p-8 md:p-10"
            >
              <h3 className="headline text-2xl mb-4">Grow Your Reputation</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Build your verifier profile through positive ratings, completed tasks, fast response times, and quality reports.
              </p>
              
              <div className="bg-[var(--bg-tertiary)] p-6 rounded-xl border border-[var(--border)]">
                <p className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4">Top performers gain:</p>
                <ul className="space-y-3">
                  {['Priority task access', 'Higher-paying jobs', 'Premium verifier status', 'Additional earning opportunities'].map((perk, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-teal)]"></span> {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Safety */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 md:p-10"
            >
              <h3 className="headline text-2xl mb-4">Verifier Safety First</h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Your safety is incredibly important. You have complete control over your working conditions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Reject unsafe tasks' },
                  { title: 'Report suspicious activity' },
                  { title: 'Choose your availability' },
                  { title: 'Set your coverage areas' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-tertiary)]">
                    <span className="font-semibold text-sm text-[var(--text-primary)]">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 text-center">
        <div className="container-xl px-6 mx-auto">
          <h2 className="headline text-3xl md:text-5xl mb-8">Ready to Start Earning?</h2>
          <Link href={BRAND.verifierAppUrl} className="btn btn-blue text-lg px-10 py-5">
            Apply to Become a Verifier
          </Link>
        </div>
      </section>

    </main>
  )
}
