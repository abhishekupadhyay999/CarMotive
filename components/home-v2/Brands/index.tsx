import type { Metadata } from "next";

import Navbar from "@/components/home-v2/Navbar";
import Brands from "@/components/home-v2/Brands";
import Footer from "@/components/home-v2/Footer";

export const metadata: Metadata = {
  title: "Car Brands Available in Virar",
  description:
    "Explore cars from leading automobile brands at Carmotive India in Virar, Maharashtra. Browse premium, popular and electric car brands and find the right car for your needs.",

  alternates: {
    canonical: "/brands",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://carmotiveindia.com/brands",
    siteName: "Carmotive India",
    title: "Car Brands Available in Virar | Carmotive India",
    description:
      "Explore leading car brands and available vehicles at Carmotive India in Virar, Maharashtra.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Car Brands Available in Virar | Carmotive India",
    description:
      "Explore leading car brands and available vehicles at Carmotive India in Virar, Maharashtra.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505]">
      <Navbar />

      {/* Page Header */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-gray-200
          bg-white
          px-6
          pb-6
          pt-6
          dark:border-white/10
          dark:bg-[#050505]
          lg:px-8
          lg:pb-8
          lg:pt-8
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-56
            w-56
            -translate-x-1/2
            rounded-full
            bg-[#E50914]/5
            blur-[80px]
            dark:bg-[#E50914]/10
          "
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#E50914]/20
              bg-[#E50914]/5
              px-4
              py-1.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#E50914]
            "
          >
            Carmotive India
          </span>

          <h1
            className="
              mt-2
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
              sm:text-4xl
              md:text-5xl
              dark:text-white
            "
          >
            Car Brands Available in{" "}
            <span className="text-[#E50914]">Virar</span>
          </h1>

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
              dark:text-gray-400
            "
          >
            Explore leading automobile brands available at
            Carmotive India, including premium, popular and
            electric car manufacturers.
          </p>
        </div>
      </section>

      {/* Brands */}

      <Brands />

      {/* Footer */}

      <Footer />
    </main>
  );
}