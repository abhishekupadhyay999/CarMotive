import type { Metadata } from "next";

import Navbar from "@/components/home-v2/Navbar";
import Contact from "@/components/contacts/Contacts";
import Footer from "@/components/home-v2/Footer";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Contact Carmotive India | Car Dealer in Virar",

  description:
    "Contact Carmotive India in Virar, Maharashtra for cars, test drives, car exchange, finance assistance and other car-buying enquiries.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://carmotiveindia.com/contact",
    siteName: "Carmotive India",

    title:
      "Contact Carmotive India | Car Dealer in Virar",

    description:
      "Get in touch with Carmotive India in Virar, Maharashtra for cars, test drives, exchange and finance assistance.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Carmotive India | Car Dealer in Virar",

    description:
      "Get in touch with Carmotive India in Virar, Maharashtra for cars, test drives, exchange and finance assistance.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
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

        <div className="relative mx-auto max-w-4xl text-center">

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
            Contact Carmotive India
            <span className="text-[#E50914]">
              {" "}in Virar
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
            Have a question about a car, exchange, finance or a
            test drive? Get in touch with our team and we will be
            happy to help.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section className="bg-white dark:bg-[#050505]">
        <Contact />
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}