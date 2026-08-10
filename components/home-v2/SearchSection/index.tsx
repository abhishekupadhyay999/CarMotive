"use client";

import {
  Search,
  CarFront,
  Fuel,
  Settings2,
  ShieldCheck,
} from "lucide-react";

export default function SearchSection() {
  return (
    <section
      id="search"
      className="
        relative overflow-hidden
        bg-white
        py-20
        text-gray-900
        transition-colors duration-300
        dark:bg-[#050505]
        dark:text-white
        lg:py-24
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-32
          h-96
          w-96
          rounded-full
          bg-[#E50914]/5
          blur-[120px]
          dark:bg-[#E50914]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-gray-100
          blur-[100px]
          dark:bg-white/[0.02]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ===================================================
            SEARCH CARD
        =================================================== */}

        <div
          className="
            rounded-[32px]
            border
            border-gray-200
            bg-white
            p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            transition-all
            duration-300

            dark:border-white/10
            dark:bg-[#111111]
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]

            md:p-10
            lg:p-12
          "
        >
          {/* =================================================
              HEADING
          ================================================= */}

          <div className="text-center">
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

                dark:border-[#E50914]/30
                dark:bg-[#E50914]/10
              "
            >
              Quick Search
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                text-gray-900

                dark:text-white

                md:text-4xl
              "
            >
              Find Your Perfect Car
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-gray-500
                dark:text-gray-400
              "
            >
              Browse hundreds of verified vehicles from India's leading
              brands.
            </p>
          </div>

          {/* =================================================
              SEARCH GRID
          ================================================= */}

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
            {/* =================================================
                BRAND
            ================================================= */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Brand
              </label>

              <div
                className="
                  flex
                  h-14
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  transition-all
                  duration-300

                  focus-within:border-[#E50914]
                  focus-within:ring-4
                  focus-within:ring-[#E50914]/10

                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <CarFront
                  size={20}
                  className="shrink-0 text-[#E50914]"
                />

                <select
                  className="
                    w-full
                    cursor-pointer
                    bg-transparent
                    text-gray-800
                    outline-none
                    dark:text-gray-200

                    [&>option]:bg-white
                    [&>option]:text-gray-900

                    dark:[&>option]:bg-[#111111]
                    dark:[&>option]:text-white
                  "
                >
                  <option>All Brands</option>
                  <option>Mercedes-Benz</option>
                  <option>BMW</option>
                  <option>Audi</option>
                  <option>Toyota</option>
                  <option>Mahindra</option>
                </select>
              </div>
            </div>

            {/* =================================================
                BUDGET
            ================================================= */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Budget
              </label>

              <div
                className="
                  flex
                  h-14
                  items-center
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  transition-all
                  duration-300

                  focus-within:border-[#E50914]
                  focus-within:ring-4
                  focus-within:ring-[#E50914]/10

                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <select
                  className="
                    w-full
                    cursor-pointer
                    bg-transparent
                    text-gray-800
                    outline-none
                    dark:text-gray-200

                    [&>option]:bg-white
                    [&>option]:text-gray-900

                    dark:[&>option]:bg-[#111111]
                    dark:[&>option]:text-white
                  "
                >
                  <option>Any Budget</option>
                  <option>Under ₹5 Lakh</option>
                  <option>₹5–10 Lakh</option>
                  <option>₹10–20 Lakh</option>
                  <option>Above ₹20 Lakh</option>
                </select>
              </div>
            </div>

            {/* =================================================
                FUEL
            ================================================= */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Fuel Type
              </label>

              <div
                className="
                  flex
                  h-14
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  transition-all
                  duration-300

                  focus-within:border-[#E50914]
                  focus-within:ring-4
                  focus-within:ring-[#E50914]/10

                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <Fuel
                  size={20}
                  className="shrink-0 text-[#E50914]"
                />

                <select
                  className="
                    w-full
                    cursor-pointer
                    bg-transparent
                    text-gray-800
                    outline-none
                    dark:text-gray-200

                    [&>option]:bg-white
                    [&>option]:text-gray-900

                    dark:[&>option]:bg-[#111111]
                    dark:[&>option]:text-white
                  "
                >
                  <option>Any Fuel</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>CNG</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                </select>
              </div>
            </div>

            {/* =================================================
                TRANSMISSION
            ================================================= */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Transmission
              </label>

              <div
                className="
                  flex
                  h-14
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-4
                  transition-all
                  duration-300

                  focus-within:border-[#E50914]
                  focus-within:ring-4
                  focus-within:ring-[#E50914]/10

                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <Settings2
                  size={20}
                  className="shrink-0 text-[#E50914]"
                />

                <select
                  className="
                    w-full
                    cursor-pointer
                    bg-transparent
                    text-gray-800
                    outline-none
                    dark:text-gray-200

                    [&>option]:bg-white
                    [&>option]:text-gray-900

                    dark:[&>option]:bg-[#111111]
                    dark:[&>option]:text-white
                  "
                >
                  <option>Any</option>
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>
            </div>

            {/* =================================================
                SEARCH BUTTON
            ================================================= */}

            <div className="flex items-end">
              <button
                type="button"
                className="
                  flex
                  h-14
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#E50914]
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-red-700
                  hover:shadow-[0_12px_30px_rgba(229,9,20,0.25)]
                "
              >
                <Search size={20} />
                Find My Car
              </button>
            </div>
          </div>

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
              rounded-2xl
              border
              border-red-100
              bg-red-50
              px-6
              py-4

              dark:border-[#E50914]/20
              dark:bg-[#E50914]/5

              md:gap-6
            "
          >
            {/* Verified */}

            <div
              className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              <ShieldCheck
                size={18}
                className="text-[#E50914]"
              />

              Verified Inventory
            </div>

            <div
              className="
                hidden
                h-5
                w-px
                bg-gray-300
                dark:bg-white/10
                md:block
              "
            />

            {/* Cars */}

            <div
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              500+ Cars Available
            </div>

            <div
              className="
                hidden
                h-5
                w-px
                bg-gray-300
                dark:bg-white/10
                md:block
              "
            />

            {/* Brands */}

            <div
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              20+ Premium Brands
            </div>

            <div
              className="
                hidden
                h-5
                w-px
                bg-gray-300
                dark:bg-white/10
                md:block
              "
            />

            {/* Assistance */}

            <div
              className="
                text-sm
                font-medium
                text-gray-700
                dark:text-gray-300
              "
            >
              Instant Assistance
            </div>
          </div>
        </div>

        {/* =====================================================
            POPULAR SEARCHES
        ===================================================== */}

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span
            className="
              mr-2
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-gray-500
              dark:text-gray-400
            "
          >
            Popular Searches
          </span>

          {[
            "SUV",
            "Sedan",
            "Luxury",
            "Electric",
            "Under ₹10L",
            "Automatic",
          ].map((item) => (
            <button
              key={item}
              type="button"
              className="
                rounded-full
                border
                border-gray-300
                bg-white
                px-5
                py-2
                text-sm
                font-medium
                text-gray-700
                transition-all
                duration-300

                hover:border-[#E50914]
                hover:bg-[#E50914]
                hover:text-white

                dark:border-white/10
                dark:bg-[#111111]
                dark:text-gray-300

                dark:hover:border-[#E50914]
                dark:hover:bg-[#E50914]
                dark:hover:text-white
              "
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}