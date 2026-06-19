'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { GradientText } from '@/components/animations/GradientText';
import { TextType } from '@/components/animations/TextType';
import { cn } from '@/lib/utils';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SERVICES = [
  {
    icon: '📱',
    title: 'Products & Electronics',
    price: '₦5,000',
    includes: ['Physical product confirmation', 'Photo evidence', 'Basic condition assessment', 'Seller confirmation', 'Summary report'],
    idealFor: ['Phones', 'Laptops', 'Electronics', 'Marketplace purchases']
  },
  {
    icon: '🚗',
    title: 'Vehicle Verification',
    price: '₦15,000',
    includes: ['Vehicle existence confirmation', 'Photos and videos', 'Exterior inspection', 'Interior inspection', 'Seller verification', 'Basic condition report'],
    idealFor: ['Cars', 'Motorcycles', 'Commercial vehicles']
  },
  {
    icon: '🏠',
    title: 'Property & Real Estate',
    price: '₦20,000',
    includes: ['Property existence check', 'Video walkthrough', 'Neighborhood assessment', 'Agent verification', 'Occupancy confirmation', 'Detailed report'],
    idealFor: ['Rentals', 'Land purchases', 'Property investments']
  },
  {
    icon: '👤',
    title: 'Identity & Background',
    price: '₦10,000',
    includes: ['Identity confirmation', 'Address verification', 'Physical presence verification', 'Background observations', 'Verification report'],
    idealFor: ['Employees', 'Freelancers', 'Business partners', 'Tenants']
  },
  {
    icon: '📄',
    title: 'Documents & Certificates',
    price: '₦7,500',
    includes: ['Authenticity review', 'Consistency checks', 'Institution verification', 'Fraud risk indicators', 'Verification report'],
    idealFor: ['Recruitment', 'Scholarships', 'Property transactions', 'Vendor onboarding']
  },
  {
    icon: '🛒',
    title: 'Online Sellers & Businesses',
    price: '₦10,000',
    includes: ['Store existence confirmation', 'Operational verification', 'Product availability', 'Photos and videos', 'Credibility assessment'],
    idealFor: ['Instagram shopping', 'Marketplace purchases', 'Wholesale transactions']
  },
  {
    icon: '🛠',
    title: 'Services & Contractors',
    price: '₦10,000',
    includes: ['Business verification', 'Office verification', 'Service provider confirmation', 'Reputation assessment', 'Report delivery'],
    idealFor: ['Construction', 'Renovations', 'Corporate vendors', 'Outsourcing']
  },
  {
    icon: '💎',
    title: 'Luxury Item Verification',
    price: '₦20,000',
    includes: ['Item inspection', 'Seller verification', 'Authenticity indicators', 'Condition assessment', 'Detailed media evidence'],
    idealFor: ['Luxury watches', 'Designer bags', 'Jewelry transactions', 'Collectors']
  }
];

const ADDONS = [
  { icon: '🎥', title: 'HD Video Evidence', price: '₦2,500', desc: 'Receive enhanced video documentation of your request.' },
  { icon: '📍', title: 'Live Verification Tracking', price: '₦3,000', desc: 'Track verifier progress in real time.' },
  { icon: '⚡', title: 'Express Verification', price: '₦5,000', desc: 'Priority processing within hours.' },
  { icon: '🔒', title: 'Discreet Verification Mode', price: '₦7,500', desc: 'For sensitive and confidential requests.', features: ['Anonymous request handling', 'Confidential reporting', 'Restricted verifier visibility', 'Enhanced privacy'] },
  { icon: '📞', title: 'Live Video Call Verification', price: '₦10,000', desc: 'Join a verifier remotely and inspect in real time.', idealFor: ['Properties', 'Vehicles', 'High-value products'] },
  { icon: '📑', title: 'Premium Verification Report', price: '₦5,000', desc: 'Receive a professionally structured report.', features: ['Summary findings', 'Risk assessment', 'Recommendations', 'Supporting evidence', 'Verification score'] }
];

const PLANS = [
  {
    name: 'FREE',
    price: { monthly: '₦0', yearly: '₦0' },
    description: 'For occasional verification needs.',
    features: ['Access to platform', 'Request verifications', 'Basic support', 'Standard turnaround times'],
    isFeatured: false,
    idealFor: ['First-time users', 'Occasional buyers']
  },
  {
    name: 'CHECKAMO PLUS',
    price: { monthly: '₦9,999', yearly: '₦99,990' },
    description: 'For frequent users who need reliable checks.',
    features: ['Reduced verification fees', 'Faster matching', 'Priority support', 'Discounted premium add-ons', 'Verification history dashboard'],
    isFeatured: true,
    idealFor: ['Active online shoppers', 'Real estate seekers', 'Freelancers', 'Small business owners']
  },
  {
    name: 'CHECKAMO PRO',
    price: { monthly: '₦24,999', yearly: '₦249,990' },
    description: 'For investors and high-volume professionals.',
    features: ['Priority verification queue', 'Dedicated account assistance', 'Exclusive verifier network access', 'Advanced reporting', 'Multiple discounted requests monthly'],
    isFeatured: false,
    idealFor: ['Investors', 'Real estate professionals', 'Procurement teams', 'Growing businesses']
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeInOut" as const,
    },
  }),
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [rates, setRates] = useState<{ USD: number; GBP: number; EUR: number } | null>(null);
  const [currency, setCurrency] = useState<'NGN' | 'USD' | 'GBP' | 'EUR'>('NGN');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API || process.env.EXCHANGE_RATE_API || '601f93ef711d84e1b7c89be0';
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/NGN`);
        const data = await res.json();
        if (data.result === 'success') {
          setRates({
            USD: data.conversion_rates.USD,
            GBP: data.conversion_rates.GBP,
            EUR: data.conversion_rates.EUR,
          });
        }
      } catch (e) {
        console.error('Failed to fetch exchange rates', e);
      }
    };
    fetchRates();
  }, []);

  const formatPrice = (priceStr: string, currentCurrency: string) => {
    if (currentCurrency === 'NGN' || !rates) return priceStr;
    const numericMatch = priceStr.replace(/,/g, '').match(/\d+/);
    if (!numericMatch) return priceStr;
    const value = parseInt(numericMatch[0], 10);
    const converted = value * rates[currentCurrency as keyof typeof rates];
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currentCurrency,
      maximumFractionDigits: 0
    });
    return formatter.format(converted);
  };

  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      
      {/* ── HERO & INTRO ── */}
      <section className="relative w-full section-py flex flex-col items-center justify-center overflow-hidden border-b border-[var(--border)]">
        {/* Aurora Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="aurora-bg">
            <div className="aurora-shape-1"></div>
            <div className="aurora-shape-2"></div>
          </div>
        </div>
        <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/40ebfb8c-e465-4cb5-9f2f-baf03a2585d5/btUEBP4YEb.lottie"
            loop
            autoplay
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center container-xl px-6 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
            className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl"
          >
            <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]">
              <TextType text="Transparent Pricing." />
              <br />
              <TextType text="Trusted Verification." delay={0.6} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lead max-w-2xl mx-auto mb-10"
          >
            Whether you're verifying a product, property, person, or business, Checkamo helps you make informed decisions before committing your money, time, or trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass-panel p-6 rounded-2xl border border-[var(--border)] max-w-3xl w-full text-left"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-4 text-center">
              Pricing depends on:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Verification category', 'Location', 'Complexity', 'Distance', 'Urgency', 'Media requirements', 'Report depth'].map((factor) => (
                <div key={factor} className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg)] rounded-lg text-sm text-[var(--text-secondary)] shadow-sm border border-[var(--border)]">
                  <span className="text-[var(--c-teal)]">✓</span> {factor}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STANDARD SERVICES ── */}
      <section className="section-py relative">
        <div className="container-xl px-6 mx-auto">
          <div className="text-center mb-10">
            <h2 className="headline text-3xl md:text-5xl mb-4">Standard Verification Services</h2>
            <p className="lead max-w-2xl mx-auto mb-8">Base prices for our most common verification requests.</p>

            <div className="flex items-center justify-center space-x-2">
              {['NGN', 'USD', 'GBP', 'EUR'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c as any)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-bold transition-all",
                    currency === c 
                      ? "bg-[var(--c-teal)] text-white shadow-md shadow-teal-500/20" 
                      : "bg-[var(--bg)] border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--c-teal)]"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-3d p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--c-teal)]/30 transition-all flex flex-col h-full group"
              >
                <div className="flex justify-end items-start mb-4">
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-1">Starting From</p>
                    <p className="text-xl font-bold text-[var(--c-teal)]">{formatPrice(service.price, currency)}</p>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-5 text-[var(--text-primary)] group-hover:text-[var(--c-teal)] transition-colors">
                  {service.title}
                </h3>
                
                <div className="flex-1 space-y-5">
                  <div>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3 border-b border-[var(--border)] pb-2">Includes:</p>
                    <ul className="space-y-2.5">
                      {service.includes.map(inc => (
                        <li key={inc} className="text-sm md:text-base text-[var(--text-secondary)] flex items-start gap-2">
                          <span className="text-[var(--c-ocean)] mt-1">✓</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[var(--border)]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">Ideal For:</p>
                  <p className="text-sm md:text-base font-medium text-[var(--text-muted)] leading-relaxed">
                    {service.idealFor.join(' • ')}
                  </p>
                </div>

                <Link href={BRAND.appUrl} className="mt-8 text-base font-bold text-[var(--c-ocean)] flex items-center gap-1 hover:gap-2 transition-all">
                  Request Verification <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREMIUM ADD-ONS ── */}
      <section className="section-py bg-[var(--bg-secondary)] relative">
        <div className="container-xl px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="headline text-3xl md:text-5xl mb-4">Premium Add-Ons</h2>
            <p className="lead max-w-2xl mx-auto">Customize your verification experience with these powerful upgrades.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDONS.map((addon, i) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 border-t-4 border-t-[var(--c-ocean)] flex flex-col h-full"
              >
                <div className="flex justify-end items-start mb-4">
                  <div className="bg-[var(--bg)] px-3 py-1 rounded-lg border border-[var(--border)]">
                    <span className="font-bold text-[var(--c-ocean)]">{formatPrice(addon.price, currency)}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{addon.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 flex-1">{addon.desc}</p>

                {addon.features && (
                  <ul className="mt-2 space-y-2 mb-4 bg-[var(--bg)] p-3 rounded-xl border border-[var(--border)]">
                    {addon.features.map(feat => (
                      <li key={feat} className="text-xs font-medium text-[var(--text-secondary)] flex items-center gap-2">
                        <span className="text-[var(--c-teal)]">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                )}

                {addon.idealFor && (
                  <div className="mt-2 text-xs text-[var(--text-muted)] font-medium">
                    Perfect for: {addon.idealFor.join(', ')}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP PLANS (AURORA STYLING) ── */}
      <section className="relative w-full section-py flex flex-col items-center justify-center overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center text-center container-xl px-6 mx-auto">
          <h2 className="headline text-3xl md:text-5xl mb-4">Membership Plans</h2>
          <p className="lead max-w-2xl mx-auto mb-12">For frequent users who need ongoing reliability and priority support.</p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-16">
            <span className={cn("text-lg font-medium", billingCycle === 'monthly' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]')}>Monthly</span>
            <div 
              className="w-14 h-8 flex items-center bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full p-1 cursor-pointer transition-colors hover:border-[var(--c-teal)]"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <motion.div 
                className="w-6 h-6 bg-[var(--c-teal)] rounded-full shadow-md"
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                style={{ marginLeft: billingCycle === 'yearly' ? 'auto' : '0' }}
              />
            </div>
            <span className={cn("text-lg font-medium", billingCycle === 'yearly' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]')}>Yearly</span>
            <span className="text-xs font-bold bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)] px-2 py-1 rounded-md ml-2">(Save 20%)</span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full text-left">
            {PLANS.map((plan, index) => (
              <motion.div
                key={plan.name}
                custom={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={cn(
                  "relative p-8 rounded-3xl border overflow-hidden flex flex-col h-full",
                  plan.isFeatured ? 'bg-[var(--bg)] border-[var(--c-teal)]/50 shadow-2xl shadow-teal-500/10' : 'bg-[var(--bg-secondary)] border-[var(--border)]'
                )}
              >
                <div className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none",
                  plan.isFeatured ? 'card-aurora-featured' : 'card-aurora'
                )}></div>
                  
                {plan.isFeatured && (
                  <div className="absolute top-0 right-0 text-xs font-bold text-white bg-gradient-to-r from-[var(--c-teal)] to-[var(--c-ocean)] px-4 py-1.5 rounded-bl-2xl">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">{plan.name}</h3>
                  <p className="text-[var(--text-secondary)] mt-2 h-10">{plan.description}</p>
                  
                  <div className="flex items-baseline mt-6 mb-8">
                    <span className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={billingCycle + currency}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {formatPrice(plan.price[billingCycle], currency)}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <span className="text-[var(--text-muted)] ml-2 font-medium">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                  </div>

                  <ul className="space-y-4 flex-1">
                    {plan.features.map(feature => (
                      <li key={feature} className="flex items-start text-[var(--text-secondary)] font-medium">
                        <CheckCircle className={cn("h-5 w-5 mr-3 flex-shrink-0 mt-0.5", plan.isFeatured ? "text-[var(--c-teal)]" : "text-[var(--c-ocean)]")} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-[var(--border)] mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">Best For:</p>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {plan.idealFor.join(' • ')}
                    </p>
                  </div>

                  <Link href={BRAND.appUrl} className={cn(
                    "w-full text-center mt-auto text-lg font-bold rounded-xl py-4 transition-all duration-300",
                    plan.isFeatured ? "bg-gradient-to-r from-[var(--c-teal)] to-[var(--c-ocean)] text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40" : "bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg)]"
                  )}>
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* ENTERPRISE BLOCK */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3 mt-4 glass-panel p-8 md:p-12 rounded-3xl border border-[var(--border)] flex flex-col md:flex-row items-center gap-8 justify-between"
            >
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg)] rounded-lg border border-[var(--border)] mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">Enterprise</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Custom Pricing</h3>
                <p className="text-[var(--text-secondary)] max-w-xl mb-6">
                  Built for Corporates, NGOs, Financial institutions, Property companies, Recruitment agencies, and Marketplaces.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Bulk verification requests', 'Team management', 'API access', 'Dedicated support', 'Custom workflows', 'SLA-backed service'].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)]">
                      <span className="text-[var(--c-blue)]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link href="/contact" className="btn btn-outline-dark text-lg px-8 py-4 whitespace-nowrap">
                  Contact Sales →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── POWERFUL CTA ── */}
      <section className="section-py bg-gradient-to-b from-[var(--bg)] to-[var(--bg-secondary)] text-center relative overflow-hidden">
        <div className="container-xl px-6 mx-auto max-w-4xl">
          <div className="w-16 h-16 rounded-full glass-3d flex items-center justify-center text-2xl mb-8 mx-auto shadow-xl shadow-teal-500/20">
            💡
          </div>
          <h2 className="headline text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            A single verification can save you <span className="gradient-text">thousands</span>—or even millions—in losses.
          </h2>
          <p className="lead text-xl mb-12 text-[var(--text-secondary)]">
            Before you send money, sign contracts, hire a contractor, rent a property, purchase a vehicle, or trust an online seller, invest in certainty.
          </p>
          
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Verify first. Decide confidently.</h3>
            <p className="text-[var(--text-muted)] mb-8">Checkamo — Verify Before You Trust.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={BRAND.appUrl} className="btn btn-primary text-lg px-10 py-5 w-full sm:w-auto">
                Request Verification Now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
