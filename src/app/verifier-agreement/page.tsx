'use client';

import { useState } from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { BRAND } from '@/lib/constants';

const sections = [
  {
    number: '1',
    title: 'COMPANY DETAILS',
    content: (
      <ul className="space-y-1.5 pl-2 mb-3">
        {['📍 Phoenix, Arizona, USA', '📍 Lagos, Nigeria', '📍 Calabar, Cross River State, Nigeria'].map((loc, i) => (
          <li key={i} className="flex gap-2 text-[13px] text-[var(--text-secondary)]">{loc}</li>
        ))}
      </ul>
    ),
  },
  {
    number: '2',
    title: 'ROLE OF THE VERIFIER',
    content: (
      <>
        <p className="text-[13px] leading-relaxed mb-2 text-[var(--text-secondary)]">As a Verifier, you agree to:</p>
        <ul className="space-y-1.5 pl-4 mb-3">
          {[
            'Conduct independent, on-ground verification services',
            'Provide accurate, honest, and unbiased reports',
            'Upload authentic media (photos, videos, audio, notes)',
            'Act as a neutral third party between clients and subjects'
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-[13px] text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: '3',
    title: 'VERIFIER ELIGIBILITY',
    content: (
      <>
        <p className="text-[13px] leading-relaxed mb-2 text-[var(--text-secondary)]">To use the platform, you must:</p>
        <ul className="space-y-1.5 pl-4 mb-3">
          {[
            'Be at least 18 years old',
            'Provide valid identification',
            'Pass any required background or trust checks',
            'Maintain a functional mobile device with location capability'
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-[13px] text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  }
];

export default function VerifierAgreementPage() {
  const [signature, setSignature] = useState('');
  // Mocked auth state for the home page demonstration
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn) {
      toast.error('Authentication Required', {
        description: 'You must be signed in to submit the verifier agreement.',
        action: {
          label: 'Sign In / Register',
          onClick: () => window.location.href = `${BRAND.verifierAppUrl}/login`,
        },
      });
      return;
    }
    
    if (!signature.trim()) {
      toast.error('Signature Required', {
        description: 'Please type your full name to sign the agreement.',
      });
      return;
    }

    toast.success('Agreement Signed Successfully', {
      description: 'Redirecting to your dashboard...',
    });
    setTimeout(() => {
      window.location.href = `${BRAND.verifierAppUrl}/login`;
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-[var(--nav-height)] pb-24 relative">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)]">
            <FileText className="w-3.5 h-3.5" />
            Verifier Agreement
          </div>
          <h1 className="headline text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
            Verifier Agreement
          </h1>
          <div className="flex justify-center flex-wrap gap-4 text-xs text-[var(--text-muted)]">
            <span>📅 Effective Date: <strong>1st May, 2026</strong></span>
          </div>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <section
              key={section.number}
              className="rounded-2xl border border-[var(--border-primary)] p-5 bg-[var(--bg-secondary)]"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold text-white bg-gradient-to-br from-[var(--c-teal)] to-[var(--c-blue)]">
                  {section.number}
                </div>
                <h3 className="text-[14px] font-bold pt-0.5 text-[var(--text-primary)]">
                  {section.title}
                </h3>
              </div>
              {section.content}
            </section>
          ))}
          
          <section className="rounded-2xl border border-[var(--border-primary)] p-5 bg-[var(--bg-secondary)] mt-8">
            <h3 className="text-[16px] font-bold mb-4 text-[var(--text-primary)]">Digital Signature</h3>
            
            {/* Toggle mock state for testing purposes */}
            <div className="mb-4 flex items-center gap-2 text-xs">
              <input type="checkbox" id="mockAuth" checked={isSignedIn} onChange={e => setIsSignedIn(e.target.checked)} />
              <label htmlFor="mockAuth" className="text-[var(--text-secondary)]">Mock: Simulate signed-in user</label>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-[13px] text-[var(--text-secondary)] mb-2">
                By entering your full name and clicking "Submit Agreement", you accept the terms outlined above and confirm your intent to sign this document electronically.
              </p>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="signature" className="text-[13px] font-semibold text-[var(--text-primary)]">Full Name (Signature)</label>
                <input
                  id="signature"
                  type="text"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="px-4 py-2.5 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-tertiary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--c-teal)]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-[var(--c-teal)] text-[#000508] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <CheckCircle2 className="w-5 h-5" />
                Submit Agreement
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
