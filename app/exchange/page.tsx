import type { Metadata } from "next";

import Navbar from "@/components/home-v2/Navbar";
import ExchangeSection from "@/components/home-v2/ExchangeSection";
import Footer from "@/components/home-v2/Footer";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Car Exchange & Sell Your Car | Carmotive India",

  description:
    "Exchange or sell your car with Carmotive India. Get a vehicle valuation, explore car exchange options and upgrade to your next car with expert assistance across India.",

  alternates: {
    canonical: "/exchange",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://carmotiveindia.com/exchange",
    siteName: "Carmotive India",

    title: "Car Exchange Services Across India | Carmotive India",

    description:
      "Get your car valued, explore exchange options and upgrade to your next vehicle with Carmotive India. Serving customers across India, including Maharashtra.",
  },

  twitter: {
    card: "summary_large_image",

    title: "Car Exchange Services | Carmotive India",

    description:
      "Sell or exchange your car with Carmotive India. Explore vehicle valuation and car upgrade options across India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   EXCHANGE PAGE
========================================================= */

export default function ExchangePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505]">
      <Navbar />

      {/* PAGE HEADER */}

      <section
        className="
          relative overflow-hidden
          border-b border-gray-200
          bg-white px-6
          pb-6 pt-6
          dark:border-white/10
          dark:bg-[#050505]
          lg:px-8 lg:pb-8 lg:pt-8
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none absolute
            left-1/2 top-0
            h-56 w-56
            -translate-x-1/2
            rounded-full
            bg-[#E50914]/5
            blur-[80px]
            dark:bg-[#E50914]/10
          "
        />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge */}

          <span
            className="
              inline-flex rounded-full
              border border-[#E50914]/20
              bg-[#E50914]/5
              px-4 py-1.5
              text-[11px] font-semibold
              uppercase tracking-[0.28em]
              text-[#E50914]
            "
          >
            Carmotive India
          </span>

          {/* Heading */}

          <h1
            className="
              mt-2 text-3xl font-bold
              leading-tight tracking-tight
              text-gray-900
              sm:text-4xl md:text-5xl
              dark:text-white
            "
          >
            Car Exchange Made{" "}
            <span className="text-[#E50914]">
              Easy
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto mt-2 max-w-2xl
              text-sm leading-6
              text-gray-600
              sm:text-base sm:leading-7
              dark:text-gray-400
            "
          >
            Get your current car valued, explore exchange
            options and make your next upgrade easier
            with Carmotive India.
          </p>
        </div>
      </section>

      {/* EXCHANGE CONTENT */}

      <section className="bg-white dark:bg-[#050505]">
        <ExchangeSection />
      </section>

      {/* FOOTER */}

      <Footer />
    </main>
  );
}
