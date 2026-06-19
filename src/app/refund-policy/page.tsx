import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy – Checkamo',
  description: 'Our Refund Policy',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-[var(--nav-height)] pb-24 relative">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20 text-center">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)]">
            <Shield className="w-3.5 h-3.5" />
            Refund Policy
          </div>
          <h1 className="headline text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
            Checkamo Refund Policy
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xl mx-auto">
            This policy will outline our escrow refund rules and satisfaction guarantees. Content coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
