"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Fuel } from "lucide-react";

import { useCars } from "@/components/context/CarContext";

export default function SearchResult() {
  const { filteredCars, hasSearched } = useCars();

  if (!hasSearched) return null;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gray-50
        py-24
        transition-colors
        duration-500
        dark:bg-[#050505]
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.05),transparent_55%)]
          dark:bg-[radial-gradient(circle_at_top,#1b1b1b_0%,#050505_70%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16 text-center"
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
            Search Results
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-gray-900
              transition-colors
              duration-500
              md:text-5xl
              dark:text-white
            "
          >
            Cars Matching Your Search
          </h2>

          {/* Count */}

          <p
            className="
              mt-4
              text-gray-600
              transition-colors
              duration-500
              dark:text-gray-400
            "
          >
            {filteredCars.length}{" "}
            {filteredCars.length === 1
              ? "car"
              : "cars"}{" "}
            found
          </p>
        </motion.div>

        {/* =================================================
            NO RESULTS
        ================================================= */}

        {filteredCars.length === 0 ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              rounded-3xl
              border
              border-gray-200
              bg-white
              p-16
              text-center
              shadow-lg
              transition-all
              duration-500

              dark:border-white/10
              dark:bg-[#111111]
              dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              No Cars Found
            </h3>

            <p
              className="
                mt-4
                text-gray-600
                dark:text-gray-400
              "
            >
              Try changing your search filters.
            </p>
          </motion.div>
        ) : (

          /* =================================================
             RESULTS GRID
          ================================================= */

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gray-200
                  bg-white
                  shadow-lg
                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-[#E50914]/50
                  hover:shadow-[0_15px_50px_rgba(229,9,20,0.12)]

                  dark:border-white/10
                  dark:bg-[#111111]
                  dark:shadow-xl
                "
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <div
                  className="
                    relative
                    h-56
                    overflow-hidden
                    bg-gray-100
                    dark:bg-[#0a0a0a]
                  "
                >
                  <Image
                    src={
                      car.image ||
                      "/images/cars/no-image.webp"
                    }
                    alt={`${car.brand} ${car.model}`}
                    fill
                    sizes="
                      (max-width:768px) 100vw,
                      (max-width:1200px) 50vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                    onError={(e) => {
                      e.currentTarget.src =
                        "/images/cars/no-image.webp";
                    }}
                  />

                  {/* Image Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/30
                      via-transparent
                      to-transparent
                      dark:from-black/50
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="p-6">

                  {/* Brand */}

                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-widest
                      text-[#E50914]
                    "
                  >
                    {car.brand}
                  </p>

                  {/* Model */}

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {car.model}
                  </h3>

                  {/* Engine */}

                  <p
                    className="
                      mt-2
                      text-sm
                      text-gray-600
                      dark:text-gray-400
                    "
                  >
                    {car.engine}
                  </p>

                  {/* =================================================
                      FUEL
                  ================================================= */}

                  <div className="mt-5 flex flex-wrap gap-3">

                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-gray-200
                        bg-gray-50
                        px-3
                        py-2
                        text-sm
                        text-gray-700

                        dark:border-white/10
                        dark:bg-white/5
                        dark:text-gray-300
                      "
                    >
                      <Fuel size={15} />

                      {car.fuel.length > 0
                        ? car.fuel.join(", ")
                        : "Fuel not specified"}
                    </span>

                  </div>

                  {/* =================================================
                      PRICE
                  ================================================= */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div>

                      <p
                        className="
                          text-sm
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        Starting From
                      </p>

                      <h4
                        className="
                          text-2xl
                          font-bold
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {car.price}
                      </h4>

                    </div>

                    {/* View Details */}

                    <Link
                      href={`/cars/${car.slug}`}
                      className="
                        group/button
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-[#E50914]
                        px-5
                        py-3
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:bg-red-700
                        hover:shadow-lg
                        hover:shadow-red-500/20
                      "
                    >
                      View Details

                      <ArrowRight
                        size={16}
                        className="
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-1
                        "
                      />
                    </Link>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div
                  className="
                    h-[3px]
                    w-0
                    bg-[#E50914]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}