'use client';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--bg)]/60 backdrop-blur-md">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
        <DotLottieReact
          src="https://lottie.host/6386b0f2-5b99-492f-8bfb-1084cd63bbe9/oC44WIFGZx.lottie"
          loop
          autoplay
        />
      </div>
      <p className="mt-4 text-xs font-semibold tracking-[0.15em] text-[var(--text-tertiary)] uppercase animate-pulse">
        Loading
      </p>
    </div>
  );
}
