'use client';

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { TextType } from '@/components/animations/TextType';
import { ShieldCheck, Target, Eye, Handshake } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden border-b border-[var(--border)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-teal)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute inset-0 -z-20 opacity-10 pointer-events-none flex items-center justify-center">
          <DotLottieReact
            src="https://lottie.host/0cbe0e44-26fa-40ae-a828-dbda0978c841/0AjtsYJwbN.lottie"
            loop
            autoplay
          />
        </div>
        
        <div className="container-xl px-6 mx-auto text-center">
          <h1 className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto">
            <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]">
              <TextType text="ABOUT CHECKAMO" />
            </span>
          </h1>
          <p className="lead max-w-3xl mx-auto">
            Building Trust Before Transactions
          </p>
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <section className="section-py bg-[var(--bg)]">
        <div className="container-md px-6 mx-auto max-w-3xl text-[var(--text-secondary)] space-y-12 leading-relaxed">
          
          {/* Building Trust Before Transactions */}
          <div>
            <p className="mb-4">
              Every day, people lose money, opportunities, and peace of mind because they trusted the wrong person, property, product, service, or business.
            </p>
            <p className="mb-4">
              At Checkamo, we believe trust should not be based on assumptions, screenshots, promises, or online reviews alone.
            </p>
            <p className="font-bold text-xl text-[var(--text-primary)] my-6">
              Trust should be verified.
            </p>
            <p className="mb-4">
              That&apos;s why we built Checkamo — a platform that helps individuals, businesses, investors, buyers, renters, employers, and organizations verify before they commit.
            </p>
            <p className="mb-4">
              Whether you&apos;re buying a product online, renting an apartment, hiring a contractor, investing in a business, purchasing a vehicle, or working with someone you&apos;ve never met, Checkamo gives you access to real people who can verify what matters most.
            </p>
            <p className="font-medium text-[var(--c-teal)] mt-6">
              Because one verification today can prevent a costly mistake tomorrow.
            </p>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <Eye className="w-8 h-8 text-[var(--c-ocean)]" />
              OUR STORY
            </h2>
            <p className="mb-4">Trust is one of the most valuable currencies in the world. Yet millions of transactions happen every day between strangers.</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>People send money to sellers they have never met.</li>
              <li>Businesses hire contractors they barely know.</li>
              <li>Tenants pay agents for properties they have never seen.</li>
              <li>Investors commit funds based on information they cannot independently verify.</li>
            </ul>
            <p className="font-bold text-[var(--text-primary)] mb-4">The result? Fraud. Scams. Misinformation. Bad decisions. Lost opportunities.</p>
            <p className="mb-4">
              Checkamo was created to solve this problem. We recognized that while technology makes transactions easier, it does not automatically make them safer. People still need reliable information before making important decisions.
            </p>
            <p>
              Checkamo bridges the gap between online trust and real-world verification. By combining technology with a network of trusted verifiers, we help users make informed decisions backed by evidence, not assumptions.
            </p>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)]">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-[var(--c-teal)]" />
                OUR MISSION
              </h2>
              <p>
                To help people and organizations make smarter, safer, and more confident decisions through trusted verification. We are committed to reducing fraud, increasing transparency, and creating a world where trust can be verified before commitments are made.
              </p>
            </div>
            <div className="p-6 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)]">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[var(--c-blue)]" />
                OUR VISION
              </h2>
              <p>
                To become the world&apos;s most trusted verification and trust infrastructure platform. We envision a future where anyone, anywhere can verify people, products, properties, businesses, documents, and opportunities before making important decisions. A future where trust is earned through evidence. Not promises.
              </p>
            </div>
          </div>

          <hr className="border-[var(--border)]" />

          {/* What We Do */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[var(--c-teal)]" />
              WHAT WE DO
            </h2>
            <p className="mb-6">
              Checkamo connects users with independent verifiers who can physically inspect, confirm, validate, and report on real-world assets and situations. Our platform enables verification across multiple categories:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-lg">🏠 Property & Real Estate</div>
              <div className="p-3 bg-white/5 rounded-lg">📱 Products & Electronics</div>
              <div className="p-3 bg-white/5 rounded-lg">🚗 Vehicles</div>
              <div className="p-3 bg-white/5 rounded-lg">📄 Documents & Certificates</div>
              <div className="p-3 bg-white/5 rounded-lg">👤 Identity & Background Checks</div>
              <div className="p-3 bg-white/5 rounded-lg">🛒 Online Stores & Sellers</div>
              <div className="p-3 bg-white/5 rounded-lg">🛠 Services & Contractors</div>
              <div className="p-3 bg-white/5 rounded-lg">💎 Luxury Items</div>
            </div>
            <p className="mb-4">And many other custom verification requests.</p>
            <p className="mb-4 font-bold text-[var(--text-primary)]">Our verifiers provide evidence through:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <li>✓ Photos</li>
              <li>✓ Videos</li>
              <li>✓ Voice Notes</li>
              <li>✓ Written Reports</li>
              <li>✓ Location Confirmation</li>
              <li>✓ Real-Time Observations</li>
            </ul>
            <p>Giving users confidence before they commit their money, time, or trust.</p>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Why Checkamo Exists */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-[var(--c-ocean)]" />
              WHY CHECKAMO EXISTS
            </h2>
            <p className="mb-4 font-bold text-xl text-[var(--text-primary)]">Because trust is expensive when it&apos;s broken.</p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>A fake property listing can cost years of savings.</li>
              <li>A fraudulent seller can wipe out a business investment.</li>
              <li>A dishonest contractor can delay critical projects.</li>
              <li>An unverified document can lead to legal and financial consequences.</li>
            </ul>
            <p className="font-medium text-[var(--c-teal)]">We believe prevention is always better than recovery. Verification is cheaper than regret.</p>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Our Values */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
              <Handshake className="w-8 h-8 text-[var(--c-blue)]" />
              OUR VALUES
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Integrity</h3>
                <p>We prioritize truth, transparency, and honesty in every verification.</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Trust</h3>
                <p>Everything we build is designed to strengthen confidence between people and organizations.</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Accountability</h3>
                <p>We believe evidence matters more than assumptions.</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Privacy</h3>
                <p>Users deserve control over their information, especially in sensitive situations.</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Safety</h3>
                <p>We prioritize the safety of our users, verifiers, and communities.</p>
              </div>
              <div>
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Innovation</h3>
                <p>We continuously explore new ways to make verification faster, smarter, and more accessible.</p>
              </div>
            </div>
          </div>

          <hr className="border-[var(--border)]" />

          {/* For Whom */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-[var(--text-primary)] text-xl mb-3">FOR INDIVIDUALS</h3>
              <p className="mb-2">Whether you&apos;re:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                <li>Renting an apartment</li>
                <li>Buying a used car</li>
                <li>Purchasing a phone</li>
                <li>Hiring a freelancer</li>
                <li>Meeting a business partner</li>
                <li>Verifying a document</li>
              </ul>
              <p className="text-sm">Checkamo helps you make decisions with confidence.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)] text-xl mb-3">FOR BUSINESSES</h3>
              <p className="mb-2">Organizations use Checkamo to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-sm">
                <li>Verify vendors</li>
                <li>Confirm locations</li>
                <li>Conduct due diligence</li>
                <li>Validate partners</li>
                <li>Assess contractors</li>
                <li>Reduce operational risk</li>
              </ul>
              <p className="text-sm">Helping businesses move faster while staying protected.</p>
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)] text-xl mb-3">FOR VERIFIERS</h3>
              <p className="text-sm mb-2">Our verifier network forms the backbone of the platform.</p>
              <p className="text-sm mb-2">These are trusted individuals who help bring transparency to transactions by providing independent, on-the-ground verification services.</p>
              <p className="text-sm">By becoming a verifier, individuals can earn income while helping create a more trustworthy economy.</p>
            </div>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Privacy & The Future */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">PRIVACY & DISCRETION</h2>
            <p className="mb-6">
              Some situations require confidentiality. That&apos;s why Checkamo supports discreet verification services designed for sensitive cases where privacy and anonymity are essential. Users maintain control over how their information is shared while receiving the verification they need.
            </p>

            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 mt-8">THE FUTURE OF TRUST</h2>
            <p className="mb-4">We are building more than a verification platform. We are building trust infrastructure.</p>
            <p className="mb-4">
              A future where people can confidently verify before they buy, rent, hire, invest, partner, or commit.
            </p>
            <p>
              As we continue to grow, we aim to introduce advanced technologies, intelligent verification systems, reputation layers, and trusted digital identities that make transactions safer for everyone.
            </p>
          </div>

          <hr className="border-[var(--border)]" />

          {/* Conclusion */}
          <div className="text-center p-8 bg-gradient-to-br from-[var(--c-teal)]/10 to-[var(--c-ocean)]/10 rounded-3xl border border-[var(--c-teal)]/20">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">JOIN US IN BUILDING A MORE TRUSTED WORLD</h2>
            <p className="mb-2">Every verified transaction is a step toward a safer marketplace.</p>
            <p className="mb-2">Every successful verification helps reduce fraud.</p>
            <p className="mb-6">Every informed decision creates stronger communities and businesses.</p>
            <p className="mb-8 font-medium">Together, we&apos;re creating a future where trust is no longer a gamble. It&apos;s something you can verify.</p>
            
            <h3 className="text-3xl font-extrabold text-[var(--c-teal)] mb-2">Verify Before You Trust.</h3>
            <p className="text-xl font-bold text-[var(--text-primary)]">Checkamo</p>
            <p className="text-sm mt-2">The Trust Layer for Transactions, Relationships, and Opportunities.</p>
          </div>

        </div>
      </section>
    </main>
  );
}
