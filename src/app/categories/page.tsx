'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { GradientText } from '@/components/animations/GradientText'
import { TextType } from '@/components/animations/TextType'
import { CardCarousel } from '@/components/categories/CardCarousel'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const CATEGORY_CAROUSEL_DATA = [
  {
    src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    alt: 'Property',
    title: 'Property & Real Estate',
    description: 'Verify Before You Rent, Buy, Lease, or Invest',
    href: '/categories/property'
  },
  {
    src: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800',
    alt: 'Products',
    title: 'Products & Electronics',
    description: "Know Exactly What You're Buying",
    href: '/categories/products'
  },
  {
    src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    alt: 'Vehicles',
    title: 'Vehicles',
    description: 'Buy With Confidence',
    href: '/categories/vehicles'
  },
  {
    src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    alt: 'Documents',
    title: 'Documents & Certificates',
    description: 'Verify Documents Before Trusting Them',
    href: '/categories/documents'
  },
  {
    src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    alt: 'Identity',
    title: 'Identity & Background',
    description: "Know Who You're Dealing With",
    href: '/categories/identity'
  },
  {
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    alt: 'Online Stores',
    title: 'Online Stores & Sellers',
    description: 'Verify Sellers Before Sending Money',
    href: '/categories/online-stores'
  },
  {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
    alt: 'Services',
    title: 'Services & Contractors',
    description: 'Verify Professionals Before Hiring',
    href: '/categories/services'
  },
  {
    src: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&q=80&w=800',
    alt: 'Luxury',
    title: 'Luxury Items',
    description: 'Authenticate High-Value Purchases',
    href: '/categories/luxury'
  }
]

export default function CategoriesPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden border-b border-[var(--border)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-ocean)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
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
            className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl"
          >
            <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]">
              <TextType text="Explore with us..." />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lead max-w-2xl mx-auto"
          >
            <TextType text="Discover what you can verify to make smarter decisions." />
          </motion.p>
        </div>
      </section>

      {/* ── CATEGORIES CAROUSEL ── */}
      <CardCarousel images={CATEGORY_CAROUSEL_DATA} />

      {/* ── COMING SOON CATEGORY ── */}
      <section className="py-12 bg-[var(--bg-tertiary)] border-t border-b border-[var(--border)]">
        <div className="container-xl px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl border border-dashed border-[var(--text-muted)] bg-[var(--bg)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🌐</span>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Online Profiles & Social Media Verification</h3>
                <span className="badge badge-ocean">Coming Soon</span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm max-w-xl">
                As Checkamo evolves into a trust infrastructure platform, we will be adding verification for dating profiles, influencers, remote freelancers, digital businesses, and marketplace accounts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CUSTOM VERIFICATION CTA ── */}
      <section className="section-py text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-[var(--c-teal)]/10 to-transparent blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container-xl px-6 mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline text-3xl md:text-5xl mb-6"
          >
            Can't Find Your Category?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lead max-w-2xl mx-auto mb-10"
          >
            Checkamo supports custom verification requests. If it can be visited, inspected, observed, or validated, there's a good chance we can verify it. Tell us what you need verified, and we'll match you with the right verifier.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href={BRAND.appUrl} className="btn btn-outline-dark text-lg px-8 py-4">
              Start a Custom Verification Request →
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
