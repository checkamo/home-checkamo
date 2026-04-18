// src/types/gsap.d.ts
// GSAP ScrollTrigger is imported directly from 'gsap/ScrollTrigger'
// This file ensures TypeScript doesn't complain about the plugin import

declare module 'gsap/ScrollTrigger' {
  export { ScrollTrigger } from 'gsap'
}