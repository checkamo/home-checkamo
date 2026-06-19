import React from 'react';
import { notFound } from 'next/navigation';
import { CATEGORIES, BRAND } from '@/lib/constants';
import Link from 'next/link';
import { TextType } from '@/components/animations/TextType';

// We map the richer data to the slugs provided in constants.ts
const CATEGORY_DETAILS: Record<string, any> = {
  'property': {
    titleLines: ['Property &', 'Real Estate'],
    subtitle: 'Verify Before You Rent, Buy, Lease, or Invest',
    desc: 'Real estate scams, fake agents, duplicate listings, and misleading property advertisements cost people millions every year. With Checkamo, you can verify a property before making payments or commitments.',
    whatWeVerify: ['Houses', 'Apartments', 'Land', 'Commercial properties', 'Airbnb listings', 'Property agents', 'Landlords', 'Property documents', 'Construction sites'],
    verificationIncludes: ['Property existence confirmation', 'Photos and video walkthroughs', 'Neighborhood assessment', 'Occupancy checks', 'Agent verification', 'Accessibility and road conditions', 'Property condition reports'],
    useCases: ['Renting an apartment remotely', 'Buying land in another city', 'Verifying an Airbnb before booking', "Confirming a real estate agent's legitimacy"],
    cta: 'Request Property Verification →'
  },
  'products': {
    titleLines: ['Products &', 'Electronics'],
    subtitle: "Know Exactly What You're Buying",
    desc: 'Avoid damaged, counterfeit, or non-existent products. Our verifiers inspect products physically and provide evidence before you send money.',
    whatWeVerify: ['Smartphones', 'Laptops', 'Tablets', 'Gaming consoles', 'TVs', 'Cameras', 'Appliances', 'Gadgets', 'Business equipment'],
    verificationIncludes: ['Product condition checks', 'Functionality testing', 'Photos and videos', 'Originality assessment', 'Seller confirmation', 'Packaging review', 'Defect identification'],
    useCases: ['Buying used phones', 'Purchasing electronics from online marketplaces', 'Bulk procurement for businesses'],
    cta: 'Request Product Verification →'
  },
  'vehicles': {
    titleLines: ['Vehicles'],
    subtitle: 'Buy With Confidence',
    desc: 'Before paying for a vehicle, ensure it exists and matches its advertised condition.',
    whatWeVerify: ['Cars', 'SUVs', 'Trucks', 'Motorcycles', 'Commercial vehicles', 'Fleet vehicles'],
    verificationIncludes: ['Physical vehicle inspection', 'Exterior condition', 'Interior condition', 'VIN and registration checks', 'Mileage confirmation', 'Seller legitimacy', 'Photo and video reports'],
    useCases: ['Buying vehicles remotely', 'Used car purchases', 'Fleet acquisition'],
    cta: 'Request Vehicle Verification →'
  },
  'documents': {
    titleLines: ['Documents &', 'Certificates'],
    subtitle: 'Verify Documents Before Trusting Them',
    desc: 'Protect yourself from forged documents and fraudulent claims.',
    whatWeVerify: ['Academic certificates', 'Professional licenses', 'Employment letters', 'Business registrations', 'Property documents', 'Legal agreements', 'Government-issued records'],
    verificationIncludes: ['Authenticity checks', 'Issuing institution confirmation', 'Ownership validation', 'Consistency review', 'Fraud indicators assessment'],
    useCases: ['Recruitment', 'Scholarship applications', 'Property transactions', 'Vendor onboarding'],
    cta: 'Request Document Verification →'
  },
  'identity': {
    titleLines: ['Identity &', 'Background'],
    subtitle: "Know Who You're Dealing With",
    desc: "Whether you're hiring, partnering, dating, or conducting business, verify identities and backgrounds before proceeding.",
    whatWeVerify: ['Individuals', 'Business owners', 'Employees', 'Freelancers', 'Tenants', 'Prospective partners'],
    verificationIncludes: ['Identity confirmation', 'Physical presence verification', 'Address confirmation', 'Reputation indicators', 'Employment validation', 'Business association checks'],
    useCases: ['Hiring staff', 'Meeting new business partners', 'Tenant screening', 'Freelancer verification'],
    cta: 'Request Identity Verification →'
  },
  'online-stores': {
    titleLines: ['Online Stores', '& Sellers'],
    subtitle: 'Verify Sellers Before Sending Money',
    desc: 'Online shopping should not feel like gambling. Verify sellers and online businesses before making payments.',
    whatWeVerify: ['Instagram stores', 'Facebook sellers', 'Marketplace vendors', 'E-commerce merchants', 'Independent online businesses'],
    verificationIncludes: ['Business existence checks', 'Product availability confirmation', 'Physical store verification', 'Seller credibility assessment', 'Operational status verification'],
    useCases: ['Instagram shopping', 'Marketplace purchases', 'Wholesale transactions'],
    cta: 'Request Seller Verification →'
  },
  'services': {
    titleLines: ['Services &', 'Contractors'],
    subtitle: 'Verify Professionals Before Hiring',
    desc: "Don't rely solely on reviews or promises. Verify service providers before committing.",
    whatWeVerify: ['Contractors', 'Electricians', 'Plumbers', 'Builders', 'Consultants', 'Event vendors', 'Cleaning companies', 'Repair technicians', 'Freelancers'],
    verificationIncludes: ['Business existence', 'Previous work validation', 'Identity confirmation', 'Physical office verification', 'Professional reputation assessment'],
    useCases: ['Construction projects', 'Home renovations', 'Corporate vendors', 'Outsourced services'],
    cta: 'Request Service Verification →'
  },
  'luxury': {
    titleLines: ['Luxury', 'Items'],
    subtitle: 'Authenticate High-Value Purchases',
    desc: 'Luxury goods attract counterfeits and scams. Verify authenticity before investing.',
    whatWeVerify: ['Luxury watches', 'Designer handbags', 'Jewelry', 'Precious metals', 'Art collections', 'Collectibles', 'Premium fashion items'],
    verificationIncludes: ['Authenticity review', 'Condition assessment', 'Ownership confirmation', 'Seller verification', 'Detailed photo and video evidence'],
    useCases: ['Luxury watch purchases', 'Designer bag acquisitions', 'Jewelry transactions', 'Collector purchases'],
    cta: 'Request Luxury Item Verification →'
  }
};

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Handle both Next.js 14 (object) and Next.js 15 (Promise) params
  const resolvedParams = await Promise.resolve(params);
  const data = CATEGORY_DETAILS[resolvedParams.slug];
  const baseData = CATEGORIES.find(c => c.slug === resolvedParams.slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="pt-[var(--nav-height)] overflow-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative section-py overflow-hidden border-b border-[var(--border)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[var(--c-teal)]/10 to-transparent blur-[100px] -z-10 pointer-events-none" />
        
        <div className="container-xl px-6 mx-auto text-center">
          <h1 className="headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-[var(--c-teal)] via-[var(--c-ocean)] to-[var(--c-blue)]">
              {data.titleLines.map((line: string, index: number) => (
                <React.Fragment key={index}>
                  <TextType text={line} delay={index * 0.4} />
                  {index < data.titleLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </span>
          </h1>

          <p className="lead max-w-2xl mx-auto font-semibold text-[var(--text-primary)] mb-4">
            {data.subtitle}
          </p>
          <p className="lead max-w-3xl mx-auto text-[var(--text-secondary)]">
            {data.desc}
          </p>
        </div>
      </section>

      {/* ── CONTENT SECTION ── */}
      <section className="section-py relative bg-[var(--bg-secondary)]">
        <div className="container-xl px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: What We Verify & Use Cases */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-3xl border-t-4 border-t-[var(--c-teal)] h-full">
                <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">What We Verify</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.whatWeVerify.map((item: string) => (
                    <li key={item} className="flex items-center gap-3 p-3 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                      <span className="text-[var(--c-teal)] flex-shrink-0">✓</span>
                      <span className="text-sm font-medium text-[var(--text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)] border-b border-[var(--border)] pb-2">Popular Use Cases</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.useCases.map((uc: string) => (
                      <span key={uc} className="badge badge-neutral px-4 py-2 bg-[var(--bg)]">{uc}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Verification Includes & Action */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-3xl border-t-4 border-t-[var(--c-ocean)] h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 text-[var(--text-primary)]">Verification Includes</h3>
                <ul className="space-y-4 flex-1">
                  {data.verificationIncludes.map((item: string) => (
                    <li key={item} className="flex items-start gap-3 p-4 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                      <span className="w-6 h-6 rounded-full bg-[rgba(4,191,191,0.1)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[var(--c-ocean)] text-sm">✓</span>
                      </span>
                      <span className="text-base font-medium text-[var(--text-secondary)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-8 border-t border-[var(--border)]">
                  {baseData && (
                    <div className="flex flex-wrap gap-6 mb-8 text-sm">
                      <div>
                        <p className="font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-1 text-xs">Estimated Cost</p>
                        <p className="font-semibold text-[var(--text-primary)]">{baseData.priceRange}</p>
                      </div>
                      <div>
                        <p className="font-bold text-[var(--text-tertiary)] uppercase tracking-wider mb-1 text-xs">Turnaround Time</p>
                        <p className="font-semibold text-[var(--text-primary)]">{baseData.turnaround}</p>
                      </div>
                    </div>
                  )}
                  <Link href={BRAND.appUrl} className="btn btn-primary w-full text-lg py-4 shadow-lg shadow-teal-500/20">
                    {data.cta}
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
