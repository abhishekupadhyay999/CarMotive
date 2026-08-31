import type { Metadata } from "next";

import Navbar from "@/components/home-v2/Navbar";
import FindYourCar from "@/components/FindYourCar";
import SearchResult from "@/components/SearchResult";
import FeaturedCars from "@/components/home-v2/FeaturedCars";
import Footer from "@/components/home-v2/Footer";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Cars for Sale in Virar | Carmotive India",

  description:
    "Browse cars for sale in Virar, Maharashtra at Carmotive India. Search available cars by brand, budget and fuel type and find the right car for your needs.",

  alternates: {
    canonical: "/cars",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://carmotiveindia.com/cars",
    siteName: "Carmotive India",

    title:
      "Cars for Sale in Virar | Carmotive India",

    description:
      "Browse available cars in Virar, Maharashtra. Search by brand, budget and fuel type at Carmotive India.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cars for Sale in Virar | Carmotive India",

    description:
      "Browse available cars in Virar, Maharashtra and find the right car by brand, budget and fuel type.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   CARS PAGE
========================================================= */

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

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
        {/* Background Glow */}

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

        <div
          className="
            relative
            mx-auto
            max-w-4xl
            text-center
          "
        >
          {/* Badge */}

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

          {/* Heading */}

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
            Cars for Sale in{" "}
            <span className="text-[#E50914]">
              Virar
            </span>
          </h1>

          {/* Description */}

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
            Explore our current car inventory in Virar,
            Maharashtra. Search by brand, budget and fuel type
            to find a car that suits your needs.
          </p>
        </div>
      </section>

      {/* =====================================================
          FIND YOUR CAR
      ===================================================== */}

      <FindYourCar />

      {/* =====================================================
          SEARCH RESULTS
      ===================================================== */}

      <div id="search-results">
        <SearchResult />
      </div>

      {/* =====================================================
          FEATURED CARS
      ===================================================== */}

      <section
        className="
          border-t
          border-gray-200
          bg-white
          dark:border-white/10
          dark:bg-[#050505]
        "
      >
        <FeaturedCars />
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}