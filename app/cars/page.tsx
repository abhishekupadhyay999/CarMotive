import Navbar from "@/components/home-v2/Navbar";
import FindYourCar from "@/components/FindYourCar";
import SearchResult from "@/components/SearchResult";
import FeaturedCars from "@/components/home-v2/FeaturedCars";
import Footer from "@/components/home-v2/Footer";

export default function CarsPage() {
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
            Find Your
            <span className="text-[#E50914]">
              {" "}Perfect Car
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
            Search our current inventory by brand, budget and
            fuel type and find the right car for you.
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