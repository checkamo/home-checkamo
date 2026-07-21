'use client';

import { useState } from 'react';
import Link from 'next/link'
import { FOOTER_LINKS, BRAND, SOCIAL_LINKS } from '@/lib/constants'
import { Logo } from '../shared/Logo'
import { toast } from 'sonner';

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    
    try {
      const res = await fetch(`/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (res.ok) {
        setStatus('success');
        toast.success('Successfully subscribed!', {
          description: 'Keep an eye on your inbox for the latest updates.',
        });
        setEmail('');
      } else {
        setStatus('error');
        toast.error('Subscription failed', {
          description: 'Please try again later.',
        });
      }
    } catch (err) {
      setStatus('error');
      toast.error('Network error', {
        description: 'Please check your connection and try again.',
      });
    }
  };

  return (
    <footer className="footer-dark" aria-label="Site footer">

      {/* ── Main footer grid ── */}
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">

          {/* Brand column */}
          <div className="flex flex-col gap-0">
            {/* Logo */}
          <Logo variant='full' type='checkamo'/>

            {/* Tagline */}
            <p className="text-sm leading-relaxed text-white/50 max-w-[280px] mb-6">
              Trusted verification platform. Connect with local experts before you buy, hire, or send payment.
            </p>

            {/* Trust badge row */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                <ShieldIcon />
                <span className="text-xs text-white/50 font-medium">Escrow Protected</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8">
                <VerifiedIcon />
                <span className="text-xs text-white/50 font-medium">Verified Verifiers</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2.5 mb-8">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Checkamo on ${social.label}`}
                  className="footer-social-btn"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>

            {/* Monnify Badge */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs text-white/50 font-medium tracking-wide uppercase">Payments Secured & Powered by</span>
              <img src="/images/partners/logo-new-monnify.svg" alt="Monnify" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Product links */}
          <div>
            <p className="text-xs font-bold tracking-[0.10em] uppercase text-white mb-5">
              Product
            </p>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.product.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company & Support links */}
          <div>
            <p className="text-xs font-bold tracking-[0.10em] uppercase text-white mb-5">
              Company
            </p>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.company.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-xs font-bold tracking-[0.10em] uppercase text-white mt-8 mb-5">
              Support
            </p>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.support.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
            
            <p className="text-xs font-bold tracking-[0.10em] uppercase text-white mt-8 mb-5">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter + contact column */}
          <div>
            <p className="text-xs font-bold tracking-[0.10em] uppercase text-white mb-5">
              Stay updated
            </p>
            <p className="text-sm text-white/45 mb-4 leading-relaxed">
              Verification tips, scam alerts, and platform updates. No spam.
            </p>

            {/* Newsletter form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2.5"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                aria-label="Email address"
                className="w-full px-4 py-2.5 rounded-lg bg-white/6 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--c-teal)] focus:bg-white/8 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary text-sm py-2.5 w-full justify-center disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {/* Contact */}
            <div className="mt-8">
              <p className="text-xs font-bold tracking-[0.10em] uppercase text-white mb-3">
                Contact
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${BRAND.supportEmail}`}
                  className="footer-link hover:text-brand-teal transition-colors"
                >
                  {BRAND.supportEmail}
                </a>
                <a
                  href="mailto:contact.checkamo@gmail.com"
                  className="footer-link hover:text-brand-teal transition-colors"
                >
                  contact.checkamo@gmail.com
                </a>
                <p className="text-xs text-white/50 mt-2 leading-relaxed">
                  <span className="font-semibold text-white/70">US Headquarters:</span><br />
                  730 E McKellips Rd.<br />
                  Tempe, Arizona, 85288
                </p>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">
                  <span className="font-semibold text-white/70">Nigeria Office:</span><br />
                  17 CMD Road, Ikosi-Ketu, Lagos State<br />
                  82 Calabar Road Miniplex, Cross River State
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="container-xl px-6">
        <div className="divider-dark" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="container-xl px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Copyright */}
          <p className="text-xs text-white/30 text-center">
            &copy; {currentYear} Checkamo Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>

      {/* ── Verifier CTA strip ── */}
      <div className="border-t border-white/6">
        <div className="container-xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white/80">
                Want to earn as a verifier?
              </p>
              <p className="text-xs text-white/40 mt-0.5">
                Join thousands of verifiers earning from their local knowledge.
              </p>
            </div>
            <a
              href={BRAND.verifierAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-shrink-0 text-sm"
            >
              Apply to Become a Verifier
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// --- Social icon registry ---
function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'twitter':
      return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
          <path d="M11.513 1.5H13.5L9.187 6.42 14.25 13.5H10.31L7.21 9.44 3.66 13.5H1.672l4.617-5.28L1.25 1.5h4.04l2.797 3.697L11.513 1.5Zm-.677 10.778h1.107L4.218 2.635H3.031l7.805 9.643Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
          <rect x="1.5" y="1.5" width="12" height="12" rx="3.5" />
          <circle cx="7.5" cy="7.5" r="2.8" />
          <circle cx="11.2" cy="3.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
          <path d="M2.5 1A1.5 1.5 0 1 0 2.5 4 1.5 1.5 0 0 0 2.5 1ZM1 5.5h3v8H1v-8Zm4.5 0H9v1.1C9.5 6 10.4 5.4 11.5 5.4c2.2 0 2.5 1.5 2.5 3.4V13.5h-3V9.4c0-.9 0-2-1.2-2C8.5 7.4 8 8.3 8 9V13.5H5.5v-8Z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" aria-hidden="true">
          <path d="M8.5 13.5V8.5H10l.25-2H8.5V5.4c0-.6.1-1 1-1H10.3V2.1C10 2 9.4 2 8.7 2 7 2 6 3 6 4.9v1.6H4.5v2H6v5h2.5Z" />
        </svg>
      )
    default:
      return null
  }
}

// --- Trust badge icons ---
function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1L2 3.5V7c0 2.76 2.13 5.34 5 6 2.87-.66 5-3.24 5-6V3.5L7 1Z"
        stroke="#04bfbf"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 7L6.2 8.8 9.5 5.5"
        stroke="#04bfbf"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="#04bfbf" strokeWidth="1.25" />
      <path
        d="M4.5 7L6.2 8.8 9.5 5.5"
        stroke="#04bfbf"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}