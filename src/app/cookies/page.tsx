import type { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, Shield, BarChart2, Settings2, Megaphone, Lock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy – Checkamo',
  description: 'Learn how Checkamo uses cookies and similar tracking technologies on our platform.',
};

const COOKIE_TYPES = [
  {
    icon: Lock,
    label: 'Strictly Necessary',
    color: '#059669',
    bgColor: 'rgba(5,150,105,0.08)',
    canDisable: false,
    description: 'These cookies are essential for the Checkamo platform to function correctly. They cannot be switched off.',
    examples: [
      'Authentication tokens that keep you logged in across pages',
      'Session identifiers that link your actions to your account',
      'CSRF protection tokens that prevent malicious form submissions',
    ],
  },
  {
    icon: BarChart2,
    label: 'Performance & Analytics',
    color: '#0388a6',
    bgColor: 'rgba(3,136,166,0.08)',
    canDisable: true,
    description: 'These cookies help us understand how users interact with Checkamo so we can improve the platform.',
    examples: [
      'Pages visited and time spent on each section',
      'Errors or crashes encountered on specific devices',
    ],
  },
  {
    icon: Settings2,
    label: 'Functional',
    color: '#7c3aed',
    bgColor: 'rgba(124,58,237,0.08)',
    canDisable: true,
    description: 'Functional cookies allow Checkamo to remember choices you make and provide enhanced, more personalised features.',
    examples: [
      'Your preferred language and region settings',
      'Dark or light mode theme preference',
    ],
  },
  {
    icon: Megaphone,
    label: 'Marketing',
    color: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.08)',
    canDisable: true,
    description: 'Marketing cookies may be used in future to show you relevant promotions within and outside the Checkamo platform.',
    examples: [
      'Referral tracking when you join via an affiliate link',
      'Campaign attribution',
    ],
  },
];

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[var(--border-primary)] p-5 sm:p-6 bg-[var(--bg-secondary)]">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-white bg-gradient-to-br from-[var(--c-teal)] to-[#04bfbf] min-w-[1.75rem]">
          {number}
        </div>
        <h2 className="text-base font-bold pt-0.5 text-[var(--text-primary)]">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen pt-[var(--nav-height)] pb-24 relative">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">

        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)]">
            <Cookie className="w-3.5 h-3.5" />
            Cookie Policy
          </div>
          <h1 className="headline text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
            Checkamo Cookie Policy
          </h1>
          <div className="flex justify-center flex-wrap gap-4 text-xs text-[var(--text-muted)]">
            <span>📅 Effective Date: <strong>22nd July, 2025</strong></span>
            <span>🔄 Last Updated: <strong>22nd July, 2025</strong></span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xl mx-auto">
            This Cookie Policy explains how Checkamo ("we", "us", or "our") uses cookies and similar tracking technologies when you use our platform.
          </p>
        </div>

        <div className="space-y-4">
          <Section number="1" title="What Are Cookies?">
            <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
              Cookies are small text files that are placed on your device (phone, tablet, or computer) when you visit a website or use a web-based application. They are widely used to make platforms work more efficiently and to provide information to the site operators.
            </p>
          </Section>

          <Section number="2" title="How We Use Cookies">
            <p className="text-sm leading-relaxed mb-4 text-[var(--text-secondary)]">
              We use cookies for the following purposes on the Checkamo platform:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                'To keep you securely logged in across pages and sessions',
                'To remember the progress of multi-step verification requests',
                'To store your theme, language, and notification preferences',
                'To understand how users navigate the platform so we can improve it',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="3" title="Types of Cookies We Use">
            <div className="space-y-4">
              {COOKIE_TYPES.map(ct => {
                const Icon = ct.icon;
                return (
                  <div key={ct.label} className="rounded-xl p-4 border" style={{ background: ct.bgColor, borderColor: ct.color + '33' }}>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: ct.color + '20' }}>
                        <Icon className="w-3.5 h-3.5" style={{ color: ct.color }} />
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <p className="text-sm font-bold text-[var(--text-primary)]">{ct.label}</p>
                        {!ct.canDisable && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: ct.color + '18', color: ct.color }}>
                            Always On
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed mb-3 text-[var(--text-secondary)]">{ct.description}</p>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5 text-[var(--text-muted)]">Examples</p>
                      <ul className="space-y-1">
                        {ct.examples.map((ex, i) => (
                          <li key={i} className="flex gap-1.5 text-xs text-[var(--text-secondary)]">
                            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: ct.color }} />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
}
