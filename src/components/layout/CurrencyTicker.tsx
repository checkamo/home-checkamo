'use client'

import { useEffect, useState } from 'react'

export function CurrencyTicker() {
  const [rates, setRates] = useState<{ USD: string; GBP: string; EUR: string } | null>(null)

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('/api/exchange-rates')
        if (res.ok) {
          const data = await res.json()
          setRates(data)
        }
      } catch (error) {
        console.error('Failed to fetch rates', error)
      }
    }
    fetchRates()
  }, [])

  if (!rates) return null

  return (
    <div className="bg-[var(--bg-secondary)] border-b border-[var(--border)] overflow-hidden w-full relative h-8 flex items-center">
      <div className="flex whitespace-nowrap text-xs font-mono text-[var(--text-secondary)]" style={{ animation: 'marqueeScroll 40s linear infinite' }}>
        <span className="mx-4">💱 Live Exchange Rates:</span>
        <span className="mx-4 text-[var(--c-ocean)]">🇺🇸 1 USD = ₦{rates.USD}</span>
        <span className="mx-4 text-brand-teal">🇬🇧 1 GBP = ₦{rates.GBP}</span>
        <span className="mx-4 text-blue-400">🇪🇺 1 EUR = ₦{rates.EUR}</span>
        
        {/* Duplicate for seamless scrolling */}
        <span className="mx-4">💱 Live Exchange Rates:</span>
        <span className="mx-4 text-[var(--c-ocean)]">🇺🇸 1 USD = ₦{rates.USD}</span>
        <span className="mx-4 text-brand-teal">🇬🇧 1 GBP = ₦{rates.GBP}</span>
        <span className="mx-4 text-blue-400">🇪🇺 1 EUR = ₦{rates.EUR}</span>
        
        <span className="mx-4">💱 Live Exchange Rates:</span>
        <span className="mx-4 text-[var(--c-ocean)]">🇺🇸 1 USD = ₦{rates.USD}</span>
        <span className="mx-4 text-brand-teal">🇬🇧 1 GBP = ₦{rates.GBP}</span>
        <span className="mx-4 text-blue-400">🇪🇺 1 EUR = ₦{rates.EUR}</span>
      </div>
    </div>
  )
}
