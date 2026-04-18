import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { GlanceSection }     from '@/components/home/GlanceSection'
import { HowItWorksSection } from '@/components/home/HIWSection'

export const metadata: Metadata = {
  title: 'Checkamo — Verify Anything, Anywhere',
  description:
    'Connect with trusted local verifiers for properties, products, documents, and more. Or earn money by becoming a verifier. Safe, secure, and reliable.',
  alternates: {
    canonical: 'https://www.checkamo.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
            <GlanceSection />
      <HowItWorksSection />

      {/*
         Upcoming sections (add one by one) 
        <CategoriesSection />
        <VerifierSpotlightSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      */}
    </>
  )
}