import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy – Checkamo',
  description: 'Learn how Checkamo collects, uses, and protects your personal information when you use our verification platform.',
};

const sections = [
  {
    number: '1',
    title: 'Information We Collect',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
          We collect information to provide a safe and trusted verification experience for our users and verifiers.
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold mb-2 text-[var(--text-primary)]">a. Information You Provide</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Account Details – Full name, email, phone number, language preference, profile photo, and password',
                'Verification Requests – What you\'re verifying (product, property, person), location of item, purpose',
                'Verifier Media – Photos, videos, voice notes, comments, GPS location',
                'Feedback and Ratings – Reviews, complaints, dispute information',
                'Messages – Chat conversations or support queries between users, verifiers, or admins',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2 text-[var(--text-primary)]">b. Automatically Collected Data</p>
            <ul className="space-y-1.5 pl-4">
              {[
                'Device Info – IP address, browser type, device type',
                'Usage Info – Pages visited, time spent, actions taken',
                'Location Data – If enabled, we collect live location of verifiers during verifications',
                'Referral Sources – Where you joined from (referral link, ad, email)',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    number: '2',
    title: 'How We Use Your Information',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">We use your data to:</p>
        <ul className="space-y-1.5 pl-4">
          {[
            'Facilitate safe and trusted verification transactions',
            'Match users with nearby or qualified verifiers',
            'Display verification content (e.g., media uploaded, location snapshots)',
            'Enable VIP access, coin-based features, and reward systems',
            'Communicate platform updates, security alerts, or changes',
            'Moderate content to prevent fraud or abuse',
            'Improve and personalize your Checkamo experience',
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
    number: '3',
    title: 'Sharing Your Information',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
          We do not sell your personal data. We only share data when necessary, such as:
        </p>
        <ul className="space-y-1.5 pl-4">
          {[
            'With Verifiers – When you request a service, limited details are shared for verification',
            'With Users – If you are a verifier, some profile and verification history may be shown',
            'With Service Providers – For hosting, customer service, analytics, and fraud detection (e.g., Stripe, Firebase, SendGrid)',
            'For Legal Reasons – When required by law or in case of fraud, harm, or safety concerns',
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
    title: 'Cookies and Tracking',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">We use cookies or similar technologies to:</p>
        <ul className="space-y-1.5 pl-4 mb-3">
          {[
            'Remember your login and preferences',
            'Analyze usage patterns to improve performance',
            'Show relevant promotions (if any)',
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          You can manage or block cookies in your browser settings.
        </p>
      </>
    ),
  },
  {
    number: '5',
    title: 'Your Privacy Rights',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
          Depending on your country, you may have rights to:
        </p>
        <ul className="space-y-1.5 pl-4 mb-3">
          {[
            'Access your personal data',
            'Correct inaccurate data',
            'Delete your account and personal info',
            'Withdraw consent for optional data collection',
            'Request portability of your data',
            'Report privacy complaints',
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          To make any request, email{' '}
          <a href="mailto:support@checkamo.com" className="font-medium hover:underline text-[var(--c-teal)]">
            support@checkamo.com
          </a>.
        </p>
      </>
    ),
  },
  {
    number: '6',
    title: 'Data Retention',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">We retain your data only as long as needed for:</p>
        <ul className="space-y-1.5 pl-4 mb-3">
          {['Service functionality', 'Dispute resolution', 'Legal or regulatory requirements'].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-[var(--text-secondary)]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--c-teal)]" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          You can request full deletion of your account and associated data anytime.
        </p>
      </>
    ),
  },
  {
    number: '7',
    title: 'Data Security',
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        We use industry-standard encryption, authentication, and secure cloud services to protect your data. However, no platform can be 100% secure, so we encourage strong passwords and responsible use.
      </p>
    ),
  },
  {
    number: '8',
    title: "Children's Privacy",
    content: (
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        Checkamo is not intended for individuals under 18 years of age. We do not knowingly collect data from minors. If we become aware of such activity, we will delete the data immediately.
      </p>
    ),
  },
  {
    number: '9',
    title: 'Changes to This Policy',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-3 text-[var(--text-secondary)]">
          We may update this Privacy Policy from time to time. When we do, we will:
        </p>
        <ul className="space-y-1.5 pl-4">
          {[
            'Update the "Last Updated" date',
            'Notify you via email or in-app alert',
            'Give you the opportunity to review the changes',
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
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-[var(--nav-height)] pb-24 relative">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-20">
        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-[rgba(4,191,191,0.1)] text-[var(--c-teal)]">
            <Shield className="w-3.5 h-3.5" />
            Privacy Policy
          </div>
          <h1 className="headline text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight">
            Checkamo Privacy Policy
          </h1>
          <div className="flex justify-center flex-wrap gap-4 text-xs text-[var(--text-muted)]">
            <span>📅 Effective Date: <strong>22nd July, 2025</strong></span>
            <span>🔄 Last Updated: <strong>22nd July, 2025</strong></span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] max-w-xl mx-auto">
            At Checkamo, we care deeply about your privacy. This Privacy Policy outlines how we collect, use, share, and
            protect your personal information when you use our platform, which includes our website, mobile app, and services.
          </p>
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

        {/* Contact card */}
        <section className="mt-6 rounded-xl border p-6 bg-[var(--bg-secondary)] border-[var(--border)]">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold text-white bg-gradient-to-br from-[var(--c-teal)] to-[var(--c-blue)]">
              10
            </div>
            <h2 className="text-base font-bold pt-0.5 text-[var(--text-primary)]">Contact Us</h2>
          </div>
          <p className="text-sm mb-4 text-[var(--text-secondary)]">Have questions or concerns?</p>
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
            <a href="https://checkamo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[rgba(4,191,191,0.1)]">
                <Globe className="w-4 h-4 text-[var(--c-teal)]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--text-secondary)]">Website</p>
                <p className="text-sm font-medium text-[var(--c-teal)]">checkamo.com</p>
              </div>
            </a>
          </div>
        </section>

        {/* Consent footer */}
        <div className="mt-6 rounded-xl p-4 text-center text-xs leading-relaxed bg-[rgba(4,191,191,0.07)] text-[var(--text-secondary)] border border-[rgba(4,191,191,0.2)]">
          🔒 By using Checkamo, you agree to this Privacy Policy and consent to the collection and use of your data as described above.
        </div>
      </main>
    </div>
  );
}
