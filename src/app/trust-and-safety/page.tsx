import React from 'react';
import { Shield, CheckCircle, Search, AlertTriangle } from 'lucide-react';
import { TextType } from '@/components/animations/TextType';

export default function TrustAndSafetyPage() {
  return (
    <div className="min-h-screen pt-[var(--nav-height)] pb-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-teal)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
      
      <div className="container-xl px-6 mx-auto text-center mt-12 mb-16">
        <h1 className="headline text-4xl md:text-6xl lg:text-7xl mb-6">
          <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]">
            <TextType text="Trust & Safety" />
          </span>
        </h1>
        <p className="lead text-[var(--text-secondary)] max-w-2xl mx-auto font-medium">
          Your safety and security are our top priorities. Here is how we ensure every verification is trustworthy.
        </p>
      </div>

      <div className="container-xl px-6 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-[32px]">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(4,191,191,0.1)] flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-[var(--c-teal)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Escrow Payments</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We hold all payments in secure escrow until the verification is completed and the report is delivered. If a verifier fails to deliver, you get your money back.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[32px]">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(3,136,166,0.1)] flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-[var(--c-ocean)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Verified Verifiers</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Every verifier goes through a strict vetting process, including identity checks (NIN) and address confirmation, before they can accept tasks.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[32px]">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(29,78,216,0.1)] flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-[var(--c-blue)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Real-time Evidence</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Verifiers must upload photos and videos directly from the location with GPS metadata, preventing the use of fake or recycled images.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-[32px]">
            <div className="w-12 h-12 rounded-2xl bg-[rgba(220,38,38,0.1)] flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 text-[var(--c-error)]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Zero Tolerance for Fraud</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Any attempt to submit fraudulent reports or compromise the platform results in immediate and permanent bans, and legal escalation where necessary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
