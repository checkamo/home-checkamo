'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TextType } from '@/components/animations/TextType';
import { HelpCircle, FileText, Shield, CreditCard, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    category: "Getting Started",
    icon: <FileText className="w-5 h-5" />,
    items: [
      { q: "How do I request a verification?", a: "To request a verification, sign up on our platform, select the category of verification you need, provide the details, and a local verifier will be assigned to your request." },
      { q: "How much does a verification cost?", a: "Prices vary based on the category and complexity. You can view detailed base prices on our Pricing page." },
    ]
  },
  {
    category: "For Verifiers",
    icon: <Shield className="w-5 h-5" />,
    items: [
      { q: "How do I become a verifier?", a: "Download the Checkamo Verifier app, complete your profile, submit your KYC documents, and pass our background check to start earning." },
      { q: "How and when do I get paid?", a: "Verifiers are paid upon successful completion and approval of a verification report. Funds are disbursed to your linked bank account." },
    ]
  },
  {
    category: "Payments & Refunds",
    icon: <CreditCard className="w-5 h-5" />,
    items: [
      { q: "Is my payment secure?", a: "Yes, all payments are held in escrow until the verification is successfully completed by the verifier." },
      { q: "What is your refund policy?", a: "If a verifier cannot fulfill the request or provides an inaccurate report, you are entitled to a full refund as per our Refund Policy." },
    ]
  }
];

export default function HelpCenterPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden border-b border-[var(--border)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-ocean)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/0cbe0e44-26fa-40ae-a828-dbda0978c841/0AjtsYJwbN.lottie"
            loop
            autoplay
          />
        </div>
        
        <div className="container-xl px-6 mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--c-ocean)]/10 text-[var(--c-ocean)] mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]">
              <TextType text="HELP CENTER" />
            </span>
          </h1>
          <p className="lead max-w-2xl mx-auto">
            Find answers to common questions, learn how to use Checkamo, and get the support you need.
          </p>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="section-py bg-[var(--bg)]">
        <div className="container-md px-6 mx-auto max-w-4xl">
          <div className="space-y-12">
            {FAQ_ITEMS.map((section, idx) => (
              <div key={idx} className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border)] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--c-ocean)]">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)]">{section.category}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="pl-13 border-l-2 border-[var(--border)] ml-5 pb-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 pl-4">{item.q}</h3>
                      <p className="text-[var(--text-secondary)] pl-4">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-[var(--c-blue)]/5 rounded-3xl border border-[var(--c-blue)]/20">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Still need help?</h2>
            <p className="text-[var(--text-secondary)] mb-6">Our support team is always ready to assist you.</p>
            <Link href="/contact" className="btn btn-primary inline-flex items-center gap-2">
              Contact Support <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
