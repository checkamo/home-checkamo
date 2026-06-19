'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, BRAND } from '@/lib/constants'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'
import { MobileMenu } from './MobileMenu'
import { Logo } from '../shared/Logo'
import { ThemeToggle } from '../theme/ThemeToggle'

export function Navbar() {
  const pathname = usePathname()
  const scrolled = useScrolled(24)

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false)

  // Desktop dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setMobileCategoriesOpen(false)
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const openDropdown = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className={cn('nav', scrolled && 'nav--scrolled')} role="banner">
        <div className="xl:container container-xl  mx-auto px-6 h-full flex items-center justify-between gap-6">

          {/*  Logo  */}
          <Logo variant='full' type='checkamo1'/>
          {/*  Desktop navigation  */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
          >
            {NAV_LINKS.map((link) => {
              const hasChildren = 'children' in link && link.children?.length > 0
              const active = isActive(link.href)

              if (hasChildren) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => openDropdown(link.label)}
                    onMouseLeave={scheduleClose}
                  >
                    {/* Trigger */}
                    <button
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === link.label}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label
                        )
                      }
                      className={cn(
                        'flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors',
                        active || activeDropdown === link.label
                          ? 'text-brand-teal bg-[rgba(4,191,191,0.06)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                      )}
                    >
                      {link.label}
                      <span
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === link.label && 'rotate-180'
                        )}
                      >
                        <NavChevron />
                      </span>
                    </button>

                    {/* Dropdown panel */}
                    <div
                      role="menu"
                      aria-label={`${link.label} submenu`}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      className={cn(
                        'nav-dropdown bg-[var(--bg)] shadow-2xl border border-[var(--border)] rounded-2xl',
                        activeDropdown === link.label && 'nav-dropdown--open'
                      )}
                    >
                      {/* All categories shortcut */}
                      <Link
                        href="/categories"
                        role="menuitem"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase text-[var(--c-ocean)] hover:bg-[var(--bg-secondary)] transition-colors mb-1"
                      >
                        All categories
                        <span className="ml-auto opacity-50">
                          <ArrowRight size={13} />
                        </span>
                      </Link>

                      <div className="divider mb-1" />

                      {/* Category items */}
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                          className={cn(
                            'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors',
                            isActive(child.href)
                              ? 'text-brand-teal bg-[rgba(4,191,191,0.07)] font-medium'
                              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                          )}
                        >
                          <CategoryDot active={isActive(child.href)} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-lg text-sm font-medium transition-colors',
                    active
                      ? 'text-brand-teal bg-[rgba(4,191,191,0.06)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/*  Desktop CTAs  */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <Link
              href={`${BRAND.appUrl}/login`}
              className="px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-[var(--bg-secondary)]"
            >
              Log in
            </Link>

            {/* Verifier CTA — blue, subdued */}
            <Link
              href={BRAND.verifierAppUrl}
              className="btn btn-blue text-sm px-4 py-2"
            >
              Earn as Verifier
            </Link>

          </div>

          {/*  Mobile hamburger  */}
          <button
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              'lg:hidden flex flex-col gap-[5px] cursor-pointer p-2.5 rounded-lg transition-colors',
              'hover:bg-[var(--bg-secondary)]',
              menuOpen && 'hamburger--open'
            )}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/*  Mobile menu  */}
      <div id="mobile-menu">
        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          categoriesOpen={mobileCategoriesOpen}
          onToggleCategories={() => setMobileCategoriesOpen((v) => !v)}
        />
      </div>
    </>
  )
}

// --- Inline SVG atoms ---

function NavChevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 5L7 9L11 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7H12M8 3L12 7L8 11"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CategoryDot({ active }: { active: boolean }) {
  return (
    <span
      className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
      style={{ background: active ? 'var(--c-teal)' : 'var(--border-dark)' }}
    />
  )
}