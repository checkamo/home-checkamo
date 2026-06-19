import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Mail, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service – Checkamo',
  description: 'Read the Terms of Service governing your use of the Checkamo verification platform.',
};

const sections: { number: string; title: string; content: React.ReactNode }[] = [
  {
    number: '1',
    title: 'Eligibility',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        You must be at least <strong>18 years old</strong> and capable of entering into legally binding contracts.
        By using Checkamo, you represent and warrant that you meet these requirements.
      </p>
    ),
  },
  {
    number: '2',
    title: 'Our Services',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
          Checkamo provides a peer-powered, AI-assisted verification ecosystem, including:
        </p>
        <ul className="space-y-1.5 pl-4 mb-3">
          {[
            'User Requests for product, property, or person verification',
            'Verifier Services (local middlemen/agents performing checks)',
            'Real-time data & media uploads (photos, videos, voice notes)',
            'Referral and reward system',
            'VIP and premium access tiers',
            'AI-powered fraud detection and alerts',
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          We reserve the right to modify or discontinue services at any time.
        </p>
      </>
    ),
  },
  {
    number: '3',
    title: 'User Responsibilities',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">You agree to:</p>
        <ul className="space-y-1.5 pl-4">
          {[
            'Provide accurate, current, and complete information',
            'Use the platform only for lawful and ethical purposes',
            'Not impersonate another person or misrepresent your identity',
            'Not misuse verifications for illegal, exploitative, or malicious purposes',
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: '4',
    title: 'Verifier Conduct',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
          If you register as a Verifier, you agree to:
        </p>
        <ul className="space-y-1.5 pl-4">
          {[
            'Verify only what you can truthfully and safely assess',
            'Use real-time location and authentic media uploads',
            'Follow all Checkamo guidelines and local laws',
            'Accept that verifications may be moderated, rated, or reviewed',
            'Understand that repeated misuse or false reports may lead to permanent removal',
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: '5',
    title: 'Discreet Services',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        For sensitive clients (e.g., sex workers, whistleblower), Checkamo provides discreet verification with limited
        media exposure. We respect confidentiality, but we cannot guarantee anonymity from legal authorities in cases
        where abuse is reported or suspected.
      </p>
    ),
  },
  {
    number: '6',
    title: 'Fees and Payments',
    content: (
      <ul className="space-y-1.5 pl-4">
        {[
          'Some features are free (e.g., browsing, requesting verification)',
          'Premium content and videos may require coins or a paid subscription',
          'Verifiers may earn coins or money based on completed and rated verifications',
          'We reserve the right to change pricing or reward structure with notice',
        ].map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '7',
    title: 'Content Ownership & Licensing',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        You retain ownership of any content (photos, videos, text) you upload. However, by using Checkamo, you grant us
        a <strong>non-exclusive, royalty-free license</strong> to use, display, reproduce, and adapt your content for
        platform-related purposes.
      </p>
    ),
  },
  {
    number: '8',
    title: 'Privacy Policy',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        Your data is important to us. Please read our{' '}
        <Link href="/privacy" className="font-semibold hover:underline text-[var(--c-teal)]">
          Privacy Policy
        </Link>{' '}
        to understand how we collect, use, and protect your personal information. By agreeing to these Terms, you also
        agree to the terms of our Privacy Policy.
      </p>
    ),
  },
  {
    number: '9',
    title: 'Termination',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        We reserve the right to suspend or terminate any account that violates these Terms, engages in suspicious
        activity, or poses risk to the safety of the platform and its users.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Disclaimers',
    content: (
      <ul className="space-y-1.5 pl-4">
        {[
          'Checkamo does not guarantee 100% accuracy of any verification result',
          'We are not liable for losses incurred from transactions done outside the platform',
          'All verifications are based on user-submitted or human-verifier media; users still require due diligence',
        ].map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    number: '11',
    title: 'Limitation of Liability',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        To the fullest extent permitted by law, Checkamo shall not be liable for any indirect, incidental, punitive,
        or consequential damages arising out of or in connection with your use of the platform.
      </p>
    ),
  },
  {
    number: '12',
    title: 'Governing Law',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        These Terms are governed by the laws of the <strong>Federal Republic of Nigeria</strong>, without regard to
        conflict of law principles.
      </p>
    ),
  },
  {
    number: '13',
    title: 'Dispute Resolution',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        We encourage resolving disputes amicably. If necessary, unresolved issues may be escalated to binding
        arbitration or local courts in Nigeria.
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-[var(--nav-height)] pb-24 relative">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">
        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)]">
            <FileText className="w-3.5 h-3.5" />
            Terms of Service
          </div>
          <h1 className="headline text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
            Checkamo Terms of Service
          </h1>
          <div className="flex justify-center flex-wrap gap-4 text-xs text-[var(--text-muted)]">
            <span>📅 Effective Date: <strong>22nd July, 2025</strong></span>
            <span>🔄 Last Updated: <strong>22nd July, 2025</strong></span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xl mx-auto">
            Welcome to Checkamo ("we", "us", or "our"). Checkamo is a platform that helps individuals and businesses
            verify products, properties, and people before completing transactions. By accessing or using our website,
            mobile application, or services (the "Platform"), you agree to the following Terms of Service ("Terms").
          </p>
          <div className="mt-4 px-4 py-3 rounded-xl text-sm font-medium bg-[rgba(239,68,68,0.07)] border border-[rgba(239,68,68,0.2)] text-[var(--c-error)]">
            ⚠️ If you do not agree to these Terms, do not use our platform.
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <section
              key={section.number}
              className="rounded-xl border p-5 sm:p-6 bg-[var(--bg-secondary)] border-[var(--border)]"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-white bg-gradient-to-br from-[var(--c-teal)] to-[var(--c-blue)] min-w-[1.75rem]">
                  {section.number}
                </div>
                <h2 className="text-base font-bold pt-0.5 text-[var(--text-primary)]">
                  {section.title}
                </h2>
              </div>
              {section.content}
            </section>
          ))}
        </div>

        {/* Contact section */}
        <section className="mt-4 rounded-xl border p-5 sm:p-6 bg-[var(--bg-secondary)] border-[var(--border)]">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-white bg-gradient-to-br from-[var(--c-teal)] to-[var(--c-blue)]">
              14
            </div>
            <h2 className="text-base font-bold pt-0.5 text-[var(--text-primary)]">Contact Us</h2>
          </div>
          <p className="text-sm mb-4 text-[var(--text-secondary)]">
            For questions or support, please contact:
          </p>
          <div className="space-y-3">
            <a href="mailto:support@checkamo.com" className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(4,191,191,0.1)]">
                <Mail className="w-4 h-4 text-[var(--c-teal)]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-secondary)]">Email</p>
                <p className="text-sm font-medium text-[var(--c-teal)]">support@checkamo.com</p>
              </div>
            </a>
          </div>
        </section>

        {/* Consent footer */}
        <div className="mt-6 rounded-xl p-4 text-center text-xs leading-relaxed bg-[rgba(4,191,191,0.07)] text-[var(--text-secondary)] border border-[rgba(4,191,191,0.2)]">
          📋 By using Checkamo, you acknowledge that you have read, understood, and agreed to these Terms of Service.
        </div>
      </main>
    </div>
  );
}
