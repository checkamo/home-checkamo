'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TextType } from '@/components/animations/TextType';
import { MapPin, Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden border-b border-[var(--border)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-blue)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute inset-0 -z-20 opacity-10 pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/47ff3066-2f9e-40b4-b478-330007870174/2aZCSAJcro.lottie"
            loop
            autoplay
          />
        </div>
        
        <div className="container-xl px-6 mx-auto text-center">
          <h1 className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]">
              <TextType text="CONTACT US" />
            </span>
          </h1>
          <p className="lead max-w-2xl mx-auto">
            We're here to help. Get in touch with our support team for any inquiries or assistance.
          </p>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="section-py bg-[var(--bg)]">
        <div className="container-md px-6 mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Email Support */}
            <div className="p-8 bg-[var(--bg-card)] rounded-3xl border border-[var(--border)] flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--c-teal)]/10 flex items-center justify-center mb-6 text-[var(--c-teal)]">
                <Mail className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Email Us</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Our support team is available around the clock to address any questions, verifications, or issues you may face.
              </p>
              <div className="space-y-3 w-full">
                <a href="mailto:support@checkamo.com" className="block w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-[var(--text-primary)] font-medium border border-white/10 break-all">
                  support@checkamo.com
                </a>
                <a href="mailto:contact.checkamo@gmail.com" className="block w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition text-[var(--text-primary)] font-medium border border-white/10 break-all">
                  contact.checkamo@gmail.com
                </a>
              </div>
            </div>

            {/* Headquarters */}
            <div className="p-8 bg-[var(--bg-card)] rounded-3xl border border-[var(--border)] flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--c-blue)]/10 flex items-center justify-center mb-6 text-[var(--c-blue)]">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Our Offices</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Checkamo operates globally to ensure trust in local verification networks.
              </p>
              
              <div className="space-y-4 w-full text-left">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-2 text-[var(--c-blue)]">US Headquarters</h3>
                  <p className="text-[var(--text-secondary)]">730 E McKellips Rd.<br/>Tempe, Arizona, 85288<br/>United States</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-wider mb-2 text-[var(--c-blue)]">Nigeria Office</h3>
                  <p className="text-[var(--text-secondary)]">82 Calabar Road, Cross River State<br/>Magboro, Lagos<br/>Nigeria</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
