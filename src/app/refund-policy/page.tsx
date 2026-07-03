import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refund Policy – Checkamo',
  description: 'Learn about the refund policy for Checkamo.',
};

const sections = [
  {
    number: '1',
    title: 'Eligibility for Refunds',
    content: (
      <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
        Refunds may be issued if a verifier fails to deliver the agreed-upon proof within the deadline, or if the proof provided is objectively false, fabricated, or completely unrelated to the request.
      </p>
    ),
  },
  {
    number: '2',
    title: 'Dispute Process',
    content: (
      <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
        To request a refund, you must raise a dispute from the request detail page within 24 hours of the verifier submitting the proof. Our moderation team will review the dispute and make a final determination.
      </p>
    ),
  },
];

export default function RefundsPage() {
  return (
    <div className="min-h-screen pt-[var(--nav-height)] pb-24 relative">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)]">
            <Shield className="w-3.5 h-3.5" />
            Refund Policy
          </div>
          <h1 className="headline text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xl mx-auto">
            This Refund Policy outlines the conditions under which you may be eligible for a refund on Checkamo.
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <section key={section.number} className="rounded-xl border border-[var(--border-primary)] p-5 sm:p-6 bg-[var(--bg-secondary)]">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-white bg-gradient-to-br from-[var(--c-teal)] to-[#04bfbf]">
                  {section.number}
                </div>
                <h2 className="text-base font-bold pt-0.5 text-[var(--text-primary)]">{section.title}</h2>
              </div>
              {section.content}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
