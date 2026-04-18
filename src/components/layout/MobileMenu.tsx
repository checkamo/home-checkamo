'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, BRAND } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  categoriesOpen: boolean
  onToggleCategories: () => void
}

export function MobileMenu({
  isOpen,
  onClose,
  categoriesOpen,
  onToggleCategories,
}: MobileMenuProps) {
  const pathname = usePathname()
  const drawerRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('scroll-locked')
      // Move focus into drawer for accessibility
      setTimeout(() => firstFocusRef.current?.focus(), 50)
    } else {
      document.body.classList.remove('scroll-locked')
    }
    return () => document.body.classList.remove('scroll-locked')
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const categoriesLink = NAV_LINKS.find((l) => l.label === 'Categories')
  const otherLinks = NAV_LINKS.filter((l) => l.label !== 'Categories')

  return (
    <>
      {/* Backdrop overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn('mobile-drawer', isOpen && 'mobile-drawer--open')}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] sticky top-0 bg-white z-10">
          <Link
            href="/"
            onClick={onClose}
            className="font-display text-xl font-extrabold tracking-tight text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Check<span className="text-brand-teal">amo</span>
          </Link>

          <button
            ref={firstFocusRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-tertiary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Body — scroll if content overflows */}
        <div className="flex-1 overflow-y-auto px-4 py-4">

          {/* Standard nav links */}
          <div className="mb-2">
            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-[rgba(4,191,191,0.08)] text-brand-teal'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Categories — collapsible */}
          {categoriesLink && 'children' in categoriesLink && (
            <div className={cn('accordion-item mb-2', categoriesOpen && 'is-open')}>
              <button
                onClick={onToggleCategories}
                aria-expanded={categoriesOpen}
                className={cn(
                  'w-full flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors',
                  categoriesOpen
                    ? 'bg-[rgba(4,191,191,0.08)] text-brand-teal'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                )}
              >
                <span>{categoriesLink.label}</span>
                <span className="accordion-icon flex-shrink-0">
                  <ChevronIcon />
                </span>
              </button>

              <div className="accordion-content">
                <div className="ml-4 mt-1 border-l-2 border-[var(--border)] pl-3 pb-2 flex flex-col gap-0.5">
                  <Link
                    href="/categories"
                    onClick={onClose}
                    className="px-3 py-2 rounded-lg text-sm font-semibold text-[var(--c-ocean)] hover:bg-[var(--bg-secondary)] transition-colors"
                  >
                    All categories
                  </Link>
                  {categoriesLink.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={onClose}
                      className={cn(
                        'px-3 py-2.5 rounded-lg text-sm transition-colors',
                        isActive(child.href)
                          ? 'text-brand-teal font-medium'
                          : 'text-[var(--text-tertiary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="divider my-4" />

          {/* Secondary links */}
          <div className="mb-2">
            {[
              { label: 'About Us',        href: '/about' },
              { label: 'Help Center',     href: '/help' },
              { label: 'Blog',            href: '/blog' },
              { label: 'Trust & Safety',  href: '/trust-and-safety' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 rounded-xl text-sm text-[var(--text-tertiary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer CTAs — always visible at bottom */}
        <div className="px-5 py-6 border-t border-[var(--border)] flex flex-col gap-3">
          <Link
            href={BRAND.verifierAppUrl}
            onClick={onClose}
            className="btn btn-outline w-full justify-center text-center"
          >
            Become a Verifier
          </Link>
          <Link
            href={BRAND.appUrl}
            onClick={onClose}
            className="btn btn-primary w-full justify-center text-center"
          >
            Get Started
          </Link>

          {/* Already have account */}
          <p className="text-center text-xs text-[var(--text-muted)] mt-1">
            Already have an account?{' '}
            <Link
              href={`${BRAND.appUrl}/login`}
              onClick={onClose}
              className="text-brand-teal font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

// --- Inline SVG icons (no emoji, no icon library dependency) ---

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M1 1L17 17M17 1L1 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}