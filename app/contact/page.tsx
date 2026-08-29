import Navbar from "@/components/home-v2/Navbar";
import Contact from "@/components/contacts/Contacts";
import Footer from "@/components/home-v2/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505]">
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
          pb-20
          pt-40

          dark:border-white/10
          dark:bg-[#050505]

          lg:px-8
        "
      >
        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-[#E50914]/5
            blur-[120px]

            dark:bg-[#E50914]/10
          "
        />

        {/* Secondary Glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-20
            h-64
            w-64
            rounded-full
            bg-gray-100
            blur-[100px]

            dark:bg-white/[0.02]
          "
        />

        <div className="relative mx-auto max-w-5xl text-center">

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#E50914]/20
              bg-[#E50914]/5
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#E50914]
            "
          >
            Carmotive India
          </span>

          {/* Heading */}

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight
              text-gray-900

              md:text-5xl
              lg:text-6xl

              dark:text-white
            "
          >
            Get In
            <span className="text-[#E50914]">
              {" "}Touch
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-600

              md:text-lg

              dark:text-gray-400
            "
          >
            Have a question about a car, exchange, finance or a
            test drive? Our team is here to help you find the right
            vehicle and make your car-buying journey easier.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section
        className="
          bg-white
          dark:bg-[#050505]
        "
      >
        <Contact />
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </main>
  );
}