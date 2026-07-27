"use client";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/60 to-transparent" />

      {/* Decorative Blurs */}
      <div className="absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-[#FF5A1F]/20 blur-[120px]" />
      <div className="absolute right-[-120px] bottom-20 h-80 w-80 rounded-full bg-[#FF5A1F]/15 blur-[140px]" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-8 lg:px-12">

        {/* Left */}
        <div className="w-full lg:w-1/2 pt-28 lg:pt-20">
          <HeroContent />
        </div>

        {/* Right Glass Card */}
        <div className="hidden lg:flex w-1/2 justify-end">

          <div className="w-[360px] rounded-[32px] border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl">

            {/* Badge */}
            <span className="inline-flex rounded-full bg-[#FF5A1F] px-4 py-2 text-sm font-semibold text-white">
              Trusted Multi-Brand Dealer
            </span>

            {/* Heading */}
            <h3 className="mt-6 text-3xl font-bold text-white">
              Trusted by
              <span className="text-[#FF5A1F]"> 1000+ </span>
              Happy Customers
            </h3>

            {/* Description */}
            <p className="mt-4 leading-7 text-gray-300">
              Explore brand-new vehicles from India's leading automotive
              brands with transparent pricing, easy finance solutions,
              and complete documentation support.
            </p>

            {/* Stats */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4">
                <span className="text-gray-300">
                  Car Brands
                </span>

                <span className="font-bold text-white">
                  20+
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4">
                <span className="text-gray-300">
                  Happy Customers
                </span>

                <span className="font-bold text-white">
                  1000+
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4">
                <span className="text-gray-300">
                  Finance Support
                </span>

                <span className="font-bold text-white">
                  Quick Approval
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 lg:flex flex-col items-center">

        <span className="mb-2 text-xs uppercase tracking-[0.3em] text-white/70">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-white/40">

          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white" />

        </div>

      </div>

    </section>
  );
}