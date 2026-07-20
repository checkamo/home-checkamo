// src/lib/constants.ts
// No emojis anywhere — icon identifiers map to SVG icon components

export const NAV_LINKS = [
  {
    label: 'For Users',
    href: '/for-users',
  },
  {
    label: 'For Verifiers',
    href: '/for-verifiers',
  },
  {
    label: 'How It Works',
    href: '/how-it-works',
  },
  {
    label: 'Ask ABRAHAM',
    href: '/ask-abraham',
  },
  {
    label: 'Categories',
    href: '/categories',
    children: [
      { label: 'Property & Real Estate',  href: '/categories/property',      icon: 'property' },
      { label: 'Products & Electronics',  href: '/categories/products',      icon: 'product' },
      { label: 'Vehicles',                href: '/categories/vehicles',      icon: 'vehicle' },
      { label: 'Documents & Certificates',href: '/categories/documents',     icon: 'document' },
      { label: 'Identity & Background',   href: '/categories/identity',      icon: 'identity' },
      { label: 'Online Stores & Sellers', href: '/categories/online-stores', icon: 'store' },
      { label: 'Services & Contractors',  href: '/categories/services',      icon: 'service' },
      { label: 'Luxury Items',            href: '/categories/luxury',        icon: 'luxury' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
] as const

export const FOOTER_LINKS = {
  product: [
    { label: 'For Users',        href: '/for-users' },
    { label: 'For Verifiers',    href: '/for-verifiers' },
    { label: 'How It Works',     href: '/how-it-works' },
    { label: 'Categories',       href: '/categories' },
    { label: 'Pricing',          href: '/pricing' },
    { label: 'Trust & Safety',   href: '/trust-and-safety' },
  ],
  company: [
    { label: 'About Us',   href: '/about-us' },
    // { label: 'Careers',    href: '/careers' },
    // { label: 'Blog',       href: '/blog' },
    // { label: 'Press',      href: '/about#press' },
    // { label: 'Partners',   href: '/partners' },
  ],
  support: [
    { label: 'Help Center',           href: '/help-center' },
    { label: 'Contact Us',            href: '/contact' },
    // { label: 'Community Guidelines',  href: '/community-guidelines' },
    // { label: 'Report an Issue',       href: '/contact#report' },
  ],
  legal: [
    { label: 'Terms of Service',  href: '/terms' },
    { label: 'Privacy Policy',    href: '/privacy' },
    { label: 'Refund Policy',     href: '/refund-policy' },
    { label: 'Cookie Policy',     href: '/cookies' },
    { label: 'Verifier Agreement',href: '/verifier-agreement' },
  ],
} as const

export const BRAND = {
  name: 'Checkamo',
  tagline: 'Verify anything, anywhere in Nigeria',
  email: 'hello@checkamo.com',
  supportEmail: 'support@checkamo.com',
  appUrl: 'https://app.checkamo.com',
  verifierAppUrl: 'https://verifier.checkamo.com',
  twitter: 'https://twitter.com/checkamo',
  instagram: 'https://instagram.com/checkamo',
  linkedin: 'https://linkedin.com/company/checkamo',
  facebook: 'https://facebook.com/checkamo',
} as const

// icon field is a string key — map it to an SVG component in your icon registry
export const CATEGORIES = [
  {
    slug: 'property',
    label: 'Property & Real Estate',
    icon: 'property',
    description: 'Verify land documents, inspect properties before purchase, and confirm ownership for peace of mind.',
    useCases: ['Land title verification', 'Property inspection', 'Ownership confirmation', 'Rental due diligence'],
    priceRange: '₦5,000 – ₦30,000',
    turnaround: '24–72 hours',
  },
  {
    slug: 'products',
    label: 'Products & Electronics',
    icon: 'product',
    description: 'Authenticate products, verify physical condition, and confirm listings match reality before you pay.',
    useCases: ['Electronics authentication', 'Condition verification', 'Listing confirmation', 'Bulk order inspection'],
    priceRange: '₦2,000 – ₦10,000',
    turnaround: '12–48 hours',
  },
  {
    slug: 'vehicles',
    label: 'Vehicles',
    icon: 'vehicle',
    description: 'Comprehensive vehicle inspection covering engine health, chassis integrity, papers, and body condition.',
    useCases: ['Pre-purchase inspection', 'Papers verification', 'Engine & chassis check', 'Accident history review'],
    priceRange: '₦5,000 – ₦20,000',
    turnaround: '24–48 hours',
  },
  {
    slug: 'documents',
    label: 'Documents & Certificates',
    icon: 'document',
    description: 'Verify academic certificates, legal documents, and official papers for authenticity and legitimacy.',
    useCases: ['Academic certificate checks', 'Legal document review', 'Business registration verification', 'Reference validation'],
    priceRange: '₦3,000 – ₦15,000',
    turnaround: '24–72 hours',
  },
  {
    slug: 'identity',
    label: 'Identity & Background',
    icon: 'identity',
    description: 'Background checks, NIN verification, and identity confirmation — know exactly who you are dealing with.',
    useCases: ['NIN verification', 'Employment background check', 'Tenant screening', 'Business partner due diligence'],
    priceRange: '₦5,000 – ₦25,000',
    turnaround: '48–96 hours',
  },
  {
    slug: 'online-stores',
    label: 'Online Stores & Sellers',
    icon: 'store',
    description: 'Verify seller legitimacy, confirm physical store locations, and check inventory availability.',
    useCases: ['Store address confirmation', 'Seller legitimacy check', 'Inventory verification', 'Social commerce vetting'],
    priceRange: '₦3,000 – ₦12,000',
    turnaround: '12–48 hours',
  },
  {
    slug: 'services',
    label: 'Services & Contractors',
    icon: 'service',
    description: 'Verify contractors, artisans, and service providers before you hire and send any payment.',
    useCases: ['Contractor verification', 'Artisan credential check', 'Service provider legitimacy', 'Professional license review'],
    priceRange: '₦5,000 – ₦20,000',
    turnaround: '24–72 hours',
  },
  {
    slug: 'luxury',
    label: 'Luxury Items',
    icon: 'luxury',
    description: 'Authenticate designer items, luxury watches, jewelry, and high-value collectibles with certified experts.',
    useCases: ['Watch authentication', 'Designer bag verification', 'Jewelry assessment', 'Art & collectible authentication'],
    priceRange: '₦10,000 – ₦50,000',
    turnaround: '48–96 hours',
  },
] as const

export const SOCIAL_LINKS = [
  { platform: 'twitter',   label: 'X (Twitter)', href: BRAND.twitter },
  { platform: 'instagram', label: 'Instagram',   href: BRAND.instagram },
  { platform: 'linkedin',  label: 'LinkedIn',    href: BRAND.linkedin },
  { platform: 'facebook',  label: 'Facebook',    href: BRAND.facebook },
] as const