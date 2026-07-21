'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'
import { GradientText } from '@/components/animations/GradientText'
import { TextType } from '@/components/animations/TextType'
import LetterGlitch from '@/components/animations/LetterGlitch'
import BorderGlow from '@/components/animations/BorderGlow'

const VERIFICATION_CATEGORIES = [
  {
    title: 'Properties & Real Estate',
    desc: 'Upload a property listing or describe your situation.',
    bullets: [
      'Identify common real estate scam indicators',
      'Review listing information for inconsistencies',
      'Recommend questions to ask landlords or agents',
      'Suggest the most appropriate verification service',
      'Estimate potential risks before payment'
    ],
    img: '/images/categories/property.jpg'
  },
  {
    title: 'Products & Electronics',
    desc: 'Planning to buy a phone, laptop, television, or other electronics?',
    bullets: [
      'Analyze product listings',
      'Detect suspicious pricing',
      'Review seller conversations',
      'Identify warning signs',
      'Recommend whether human verification is advisable'
    ],
    img: '/images/categories/product.jpg'
  },
  {
    title: 'Vehicles',
    desc: 'Before buying a vehicle, let ABRAHAM help you evaluate:',
    bullets: [
      'Listing quality',
      'Seller credibility',
      'Potential red flags',
      'Questions to ask the owner',
      'Recommended inspection services'
    ],
    img: '/images/categories/vehicle.webp'
  },
  {
    title: 'Documents & Certificates',
    desc: 'Upload supported documents for intelligent analysis.',
    bullets: [
      'Certificates & Contracts',
      'Invoices & Property documents',
      'Business registrations',
      'Employment letters'
    ],
    img: '/images/categories/document.jpg'
  },
  {
    title: 'Identity & Background',
    desc: 'Need to verify someone before doing business?',
    bullets: [
      'Information consistency',
      'Public details',
      'Potential risks',
      'Verification requirements',
      'Recommended next steps'
    ],
    img: '/images/categories/identity.jpg'
  },
  {
    title: 'Conversation Analysis',
    desc: 'Paste a conversation from WhatsApp, Telegram, Messenger, Instagram, email, or SMS.',
    bullets: [
      'Pressure tactics',
      'Unrealistic promises',
      'Emotional manipulation',
      'Payment urgency',
      'Inconsistent information'
    ],
    img: '/images/categories/services.jpg'
  },
  {
    title: 'Website & Online Store Review',
    desc: 'Share a website or online store.',
    bullets: [
      'Trust indicators',
      'Business legitimacy',
      'Security practices',
      'Potential warning signs'
    ],
    img: '/images/categories/online-stores.jpg'
  },
  {
    title: 'Business Verification',
    desc: 'Before entering into a partnership or making an investment:',
    bullets: [
      'Business credibility indicators',
      'Information gaps',
      'Questions worth asking',
      'Recommended verification services'
    ],
    img: '/images/categories/luxury.jpg'
  }
]

export default function AskAbrahamPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full -z-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/heroSection/ABRAHAM_hero_home.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[var(--bg)]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/50 to-[var(--bg)]" />
        </div>
        
        <div className="container-xl px-6 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[var(--c-teal)]/10 border border-[var(--c-teal)]/20"
          >
            <span className="text-[var(--c-teal)] font-bold text-sm tracking-wide uppercase">
              Meet ABRAHAM
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-5xl mx-auto"
          >
            <span className="gradient-text">
              <TextType text="The AI That Helps You" />
            </span>
            <br />
            Verify Before You Trust.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lead max-w-3xl mx-auto mb-10 text-lg sm:text-xl text-[var(--text-secondary)] space-y-4"
          >
            <p>Every important decision begins with a question.</p>
            <p className="font-medium text-[var(--text-primary)]">
              Can I trust this seller? Is this property real? Is this document genuine? Should I pay now?
            </p>
            <p>
              ABRAHAM is Checkamo's intelligent verification assistant, designed to help you identify risks, ask the right questions, and make better decisions before you commit. 
            </p>
            <p className="font-semibold text-[var(--c-teal)] text-xl mt-4">
              Your intelligent AI Trust Advisor behind Every Verification.
            </p>
            <p className="font-bold text-[var(--c-ocean)] mt-6 text-2xl">
              Start with AI. Verify with Confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={`${BRAND.appUrl}/ask-abraham`} className="btn btn-primary btn-specular text-lg px-8 py-4 shadow-lg shadow-teal-500/25 transition-transform hover:scale-105">
              Try ABRAHAM
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BACKGROUND GLITCH CONTAINER ── */}
      <div className="relative z-0">
        <div className="hidden md:block absolute inset-0 -z-30 pointer-events-none opacity-[0.2]">
          <LetterGlitch glitchColors={['#04bfbf', '#0388a6', '#025266']} glitchSpeed={60} centerVignette={false} outerVignette={true} smooth={true} characters='01' />
        </div>

      {/* ── WHY ABRAHAM? ── */}
      <section className="section-py relative">
        <div className="container-xl px-6 mx-auto">
          <BorderGlow className="p-10 md:p-16 max-w-5xl mx-auto shadow-xl relative" borderRadius={40} backgroundColor="var(--bg-secondary)" colors={['#04bfbf', '#0388a6', '#025266']} animated={true}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--c-ocean)]/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="headline text-3xl md:text-5xl mb-6">Why ABRAHAM?</h2>
              
              <div className="space-y-6 text-lg text-[var(--text-secondary)]">
                <p>
                  Every day, people lose money because they act without enough information. Sometimes all it takes is one overlooked detail:
                </p>
                <div className="flex flex-wrap gap-3 my-6">
                  {['A suspicious message', 'An unrealistic price', 'An altered document', 'A fake business address'].map((item) => (
                    <span key={item} className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl font-medium text-[var(--text-primary)]">
                      {item}
                    </span>
                  ))}
                </div>
                <p>
                  ABRAHAM helps you uncover those details before they become expensive problems. Instead of relying on assumptions, ABRAHAM analyzes your information, highlights potential concerns, and recommends the next best step.
                </p>
                <p className="font-medium text-[var(--text-primary)] border-l-4 border-[var(--c-teal)] pl-4">
                  When additional certainty is needed, ABRAHAM can seamlessly connect you with a trusted Checkamo verifier for an on-the-ground inspection.
                </p>
                <p>Because smarter decisions begin with better information.</p>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* ── WHAT CAN ABRAHAM HELP YOU VERIFY? ── */}
      <section className="section-py bg-[var(--bg-secondary)]">
        <div className="container-xl px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="headline text-3xl md:text-5xl mb-4">What Can ABRAHAM Help You Verify?</h2>
            <p className="lead">ABRAHAM works across multiple categories to give you instant insights and practical recommendations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFICATION_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group h-full flex"
              >
                <BorderGlow className="flex flex-col w-full h-full overflow-hidden" borderRadius={16} backgroundColor="var(--bg-secondary)" colors={['#04bfbf', '#0388a6', '#025266']} animated={false}>
                <div className="relative h-48 w-full overflow-hidden bg-[var(--bg)]">
                  <Image 
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/50 to-transparent" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col relative z-10 -mt-10">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{cat.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{cat.desc}</p>
                  <ul className="space-y-2 mt-auto">
                    {cat.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm flex items-start gap-2 text-[var(--text-tertiary)]">
                        <span className="text-[var(--c-teal)] mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPLOAD ALMOST ANYTHING & INTELLIGENT RISK ASSESSMENT ── */}
      <section className="section-py relative">
        <div className="container-xl px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Upload */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <BorderGlow className="p-8 md:p-12 h-full" borderRadius={24} backgroundColor="var(--bg-secondary)" colors={['#04bfbf', '#0388a6', '#025266']} animated={true}>
              <h2 className="headline text-3xl mb-6">Upload Almost Anything</h2>
              <p className="text-[var(--text-secondary)] mb-8 text-lg">
                ABRAHAM works with multiple types of information. Upload or paste what you have, and let AI do the rest.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Images' },
                  { label: 'Documents' },
                  { label: 'Website links' },
                  { label: 'Conversations' },
                  { label: 'Locations' },
                  { label: 'Descriptions' },
                  { label: 'Business info' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-4 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)] hover:border-[var(--c-ocean)]/50 transition-colors">
                    
                    <span className="font-semibold text-[var(--text-primary)]">{item.label}</span>
                  </div>
                ))}
              </div>
              </BorderGlow>
            </motion.div>

            {/* Risk Assessment */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full relative"
            >
              <BorderGlow className="p-8 md:p-12 h-full overflow-hidden" borderRadius={24} backgroundColor="var(--bg-secondary)" colors={['#04bfbf', '#0388a6', '#025266']} animated={true}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 blur-[80px] pointer-events-none" />
              
              <h2 className="headline text-3xl mb-6">Intelligent Risk Assessment</h2>
              <p className="text-[var(--text-secondary)] mb-8 text-lg">
                Every analysis includes an easy-to-understand summary to guide your next steps.
              </p>
              
              <div className="space-y-6">
                <div className="p-5 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
                  <h4 className="font-bold text-[var(--c-ocean)] flex items-center gap-2 mb-2">
                    Trust Score
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">A confidence rating based on the available information.</p>
                </div>

                <div className="p-5 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
                  <h4 className="font-bold text-[var(--text-primary)] flex items-center gap-2 mb-3">
                    Risk Level
                  </h4>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-500 border border-green-500/20">Low</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">Moderate</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20">High</span>
                  </div>
                </div>

                <div className="p-5 bg-[var(--bg-secondary)] rounded-xl border border-[var(--border)]">
                  <h4 className="font-bold text-[var(--c-teal)] flex items-center gap-2 mb-2">
                    Key Findings & Recommended Actions
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">A clear explanation of the factors influencing the assessment and practical next steps you can take before making a decision.</p>
                </div>
              </div>
              </BorderGlow>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── AI + HUMAN VERIFICATION ── */}
      <section className="section-py bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg)]">
        <div className="container-xl px-6 mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="headline text-3xl md:text-5xl mb-6">AI + Human Verification</h2>
            <div className="lead space-y-4">
              <p>Artificial intelligence is powerful. But some situations require someone on the ground.</p>
              <p>
                When additional confidence is needed, ABRAHAM can instantly recommend a Checkamo verifier who can visit the location, inspect the item, validate the information, and provide photos, videos, and professional reports.
              </p>
              <p className="font-bold text-[var(--c-ocean)] text-xl mt-4">
                Technology and human expertise work together to give you greater confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* ── FEATURES & PRIVACY GRID ── */}
      <section className="section-py">
        <div className="container-xl px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <BorderGlow className="p-8 col-span-1 md:col-span-2" borderRadius={16} backgroundColor="var(--bg-secondary)" colors={['#04bfbf', '#0388a6', '#025266']} animated={false}>
            <h3 className="text-2xl font-bold mb-4">Built for Individuals & Businesses</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Home buyers', 'Property renters', 'Online shoppers', 'Investors', 'Employers', 'Procurement teams', 'Financial institutions', 'NGOs', 'Startups', 'Small businesses', 'Enterprises'].map(item => (
                <span key={item} className="badge badge-neutral">{item}</span>
              ))}
            </div>
            <p className="text-[var(--text-secondary)]">
              Whether you're making a ₦20,000 purchase or a ₦200 million investment, better information leads to better decisions.
            </p>
          </BorderGlow>

          <BorderGlow className="p-8" borderRadius={16} backgroundColor="rgba(4,191,191,0.03)" colors={['#04bfbf', '#0388a6', '#025266']} animated={false}>
            <h3 className="text-2xl font-bold mb-4 text-[var(--c-teal)]">Privacy Comes First</h3>
            <p className="text-[var(--text-secondary)] mb-4">
              Your privacy matters. Information shared with ABRAHAM is handled securely and used only to provide intelligent verification assistance.
            </p>
            <p className="text-sm text-[var(--text-tertiary)]">
              For sensitive situations, Checkamo also supports discreet verification services designed to protect your identity and confidentiality.
            </p>
          </BorderGlow>

        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="section-py bg-[var(--bg-secondary)] border-y border-[var(--border)] overflow-hidden">
        <div className="container-xl px-6 mx-auto relative">
          
          {/* Animated Marquee for "Coming Soon" */}
          <div className="mb-10 text-center">
            <h2 className="headline text-3xl mb-4">The future is just getting started</h2>
            <p className="text-[var(--text-secondary)]">Upcoming capabilities for ABRAHAM include:</p>
          </div>

          <div className="flex overflow-hidden space-x-4 max-w-full relative fade-edges-horizontal py-4">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex whitespace-nowrap gap-4"
            >
              {[
                'Intelligent image analysis', 'Deep document verification', 'Fraud pattern detection',
                'Voice note analysis', 'Video assessment', 'Smart report generation', 
                'Business due diligence', 'Transaction risk scoring', 'Personal Trust Scores',
                'Verifier recommendations', 'Enterprise AI verification tools'
              ].map((item, i) => (
                <span key={i} className="px-6 py-3 glass-3d rounded-full border border-[var(--border)] font-semibold text-[var(--text-primary)]">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-py text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-gradient-to-b from-[var(--c-teal)]/10 to-transparent blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container-xl px-6 mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline text-4xl md:text-5xl mb-6"
          >
            <GradientText text="The Future of Trusted Decisions" />
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lead mx-auto mb-10 text-[var(--text-secondary)] space-y-4"
          >
            <p>At Checkamo, we believe every important decision deserves reliable information.</p>
            <p>ABRAHAM is more than an AI assistant. It is the intelligence layer behind a smarter, safer way to verify people, products, properties, businesses, documents, and opportunities.</p>
            <p className="text-xl font-bold text-[var(--text-primary)] mt-6">
              Because trust should never depend on guesswork.<br/>
              <span className="text-[var(--c-ocean)]">It should be built on evidence.</span>
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 bg-gradient-to-r from-[var(--c-teal)]/10 to-[var(--c-ocean)]/10 p-8 rounded-3xl border border-[var(--border)]"
          >
            <h3 className="text-2xl font-bold mb-6">Ready to Verify with Confidence?</h3>
            <p className="mb-8 text-[var(--text-secondary)]">Ask ABRAHAM your first question today and discover a better way to make informed decisions.</p>
            <div className="flex flex-col items-center justify-center">
              <Link href={`${BRAND.appUrl}/ask-abraham`} className="btn btn-primary btn-specular text-lg px-8 py-4 shadow-xl mb-8">
                Start with ABRAHAM
              </Link>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-[var(--text-tertiary)] font-medium">
                <span>ABRAHAM is powered by</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <img src="/images/partners/gemini-logo.svg" alt="Gemini" className="h-5 object-contain" />
                    <span className="text-[var(--text-primary)] font-semibold">Gemini</span>
                  </div>
                  <span className="text-white/30 text-xs">and</span>
                  <div className="flex items-center gap-1.5">
                    <img src="/images/partners/deepseek-logo.svg" alt="DeepSeek" className="h-5 object-contain" />
                    <span className="text-[var(--text-primary)] font-semibold">DeepSeek</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      </div>
    </main>
  )
}
