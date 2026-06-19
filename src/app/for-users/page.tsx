'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { TextType } from '@/components/animations/TextType'
import { GradientText } from '@/components/animations/GradientText'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// Categories for "What Can You Verify?"
const CATEGORIES = [
  {
    icon: '🏠',
    title: 'Real Estate',
    verify: ['Apartments', 'Houses', 'Land', 'Agents', 'Property documents', 'Airbnb listings'],
    receive: ['Property walkthrough videos', 'Neighborhood assessments', 'Agent credibility checks', 'Occupancy verification'],
    color: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'rgba(59, 130, 246, 0.2)'
  },
  {
    icon: '🛍',
    title: 'Products & Marketplace',
    verify: ['Product condition', 'Seller credibility', 'Product authenticity', 'Delivery readiness'],
    receive: ['Photos', 'Videos', 'Voice observations'],
    buyingFrom: ['Jiji', 'Facebook Marketplace', 'Instagram vendors', 'Online stores'],
    color: 'from-emerald-500/20 to-emerald-500/5',
    borderColor: 'rgba(16, 185, 129, 0.2)'
  },
  {
    icon: '👤',
    title: 'People Verification',
    verify: ['Freelancers', 'Business partners', 'Vendors', 'Agents', 'Service providers'],
    receive: ['Identity confirmation', 'Reputation checks', 'Physical presence verification'],
    color: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'rgba(168, 85, 247, 0.2)'
  },
  {
    icon: '🚗',
    title: 'Vehicles',
    verify: ['Vehicle condition', 'Seller legitimacy', 'Vehicle existence', 'Physical inspection'],
    receive: ['Photos', 'Videos', 'Diagnostic reports (if requested)'],
    subtitle: 'Avoid expensive surprises before paying for a car.',
    color: 'from-orange-500/20 to-orange-500/5',
    borderColor: 'rgba(249, 115, 22, 0.2)'
  },
  {
    icon: '💼',
    title: 'Businesses',
    verify: ['Store existence', 'Operational status', 'Staff presence', 'Inventory availability'],
    subtitle: 'Perfect for investors and remote buyers.',
    color: 'from-teal-500/20 to-teal-500/5',
    borderColor: 'rgba(20, 184, 166, 0.2)'
  },
  {
    icon: '🔒',
    title: 'Discreet Verification',
    verify: ['Sensitive investigations', 'Confidential transactions', 'Private due diligence', 'High-value negotiations'],
    subtitle: 'Use Checkamo anonymously. Your identity remains protected.',
    color: 'from-slate-500/20 to-slate-500/5',
    borderColor: 'rgba(100, 116, 139, 0.2)'
  }
]

const BENEFITS = [
  { title: 'Save Money', desc: 'Avoid costly mistakes and scams.' },
  { title: 'Save Time', desc: 'Get verified information without traveling.' },
  { title: 'Gain Confidence', desc: 'Make informed decisions backed by evidence.' },
  { title: 'Stay Safe', desc: 'Reduce risks before sending money.' },
  { title: 'Get Independent Opinions', desc: 'Receive unbiased reports from third-party verifiers.' },
]

export default function ForUsersPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-teal)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
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
            <TextType text="Make Better Decisions" />
            <br />
            <span className="gradient-text">
              <TextType text="Before You Pay" delay={0.8} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lead max-w-2xl mx-auto mb-10"
          >
            Whether you're buying a car, renting an apartment, hiring a freelancer, meeting someone, investing in a business, or purchasing an item online, Checkamo helps you verify first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={BRAND.appUrl} className="btn btn-primary w-full sm:w-auto text-lg px-8 py-4">
              Get Eyes on the Ground
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT CAN YOU VERIFY? ── */}
      <section className="section-py bg-[var(--bg-secondary)] relative">
        <div className="container-xl px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline text-3xl md:text-5xl mb-4">What Can You Verify?</h2>
            <p className="lead max-w-2xl mx-auto">Stop relying solely on pictures, promises, and screenshots.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-3d rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Subtle gradient background specific to the card */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                />
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">
                    <GradientText text={cat.title} />
                  </h3>
                  {cat.subtitle && <p className="text-sm text-[var(--text-secondary)] mb-4">{cat.subtitle}</p>}
                  
                  <div className="space-y-4 mt-6">
                    {cat.buyingFrom && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Buying from:</p>
                        <div className="flex flex-wrap gap-2">
                          {cat.buyingFrom.map(item => (
                            <span key={item} className="badge badge-neutral">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Verify:</p>
                      <ul className="space-y-1">
                        {cat.verify.map(item => (
                          <li key={item} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                            <span className="text-[var(--c-teal)] mt-0.5">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {cat.receive && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-2 mt-4">Receive:</p>
                        <ul className="space-y-1">
                          {cat.receive.map(item => (
                            <li key={item} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                              <span className="text-[var(--c-ocean)] mt-0.5">↳</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE CHECKAMO ── */}
      <section className="section-py relative">
        <div className="container-xl px-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="headline text-3xl md:text-5xl mb-6"
              >
                Why Users Choose <span className="gradient-text">Checkamo</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lead mb-8"
              >
                We provide the transparency you need to transact safely in a low-trust environment.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href={BRAND.appUrl} className="btn btn-primary text-lg px-8 py-4">
                  Request a Verification
                </Link>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="grid gap-4">
                {BENEFITS.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="glass-panel p-5 rounded-xl flex gap-4 items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[rgba(4,191,191,0.1)] flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--c-teal)] font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[var(--text-primary)]">{benefit.title}</h4>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
