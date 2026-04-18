export interface NavLink {
  label: string
  href: string
  children?: NavLink[]
}

export interface Category {
  slug: string
  label: string
  description: string
  priceRange: string
  turnaround: string
  verifierCount?: number
  completedJobs?: number
}

export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  avatar?: string
  text: string
  rating: number
  verified: boolean
}

export interface Verifier {
  id: string
  name: string
  avatar?: string
  location: string
  categories: string[]
  rating: number
  reviewCount: number
  jobCount: number
  bio: string
  verified: boolean
}

export interface FaqItem {
  question: string
  answer: string
}

export interface StatItem {
  value: string
  label: string
  suffix?: string
}