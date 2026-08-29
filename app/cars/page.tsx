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

        <div
          className="
            relative
            mx-auto
            max-w-5xl
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
            Find Your
            <span className="text-[#E50914]">
              {" "}Perfect Car
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
              dark:text-gray-400
              md:text-lg
            "
          >
            Explore our latest cars, compare options and find the right
            vehicle based on your preferred brand, budget, fuel type and
            transmission.
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