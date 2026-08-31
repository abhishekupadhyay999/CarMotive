"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import BrandCard from "./BrandCard";
import { brands, type BrandCategory } from "./brands";

const categories: BrandCategory[] = [
  "All",
  "Luxury",
  "Popular",
  "EV",
];

export default function Brands() {
  const [activeCategory, setActiveCategory] =
    useState<BrandCategory>("All");

  const filteredBrands = useMemo(() => {
    if (activeCategory === "All") {
      return brands;
    }

    return brands.filter((brand) =>
      brand.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-12
        transition-colors
        duration-300
        dark:bg-[#050505]
        lg:py-16
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-72
          w-72
          -translate-x-1/2
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
          bottom-0
          right-0
          h-80
          w-80
          rounded-full
          bg-red-100/40
          blur-[140px]
          dark:bg-red-950/10
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* Category Filters */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          }}
          className="
            mb-10
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {categories.map((category) => {
            const isActive =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  rounded-full
                  border
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "border-[#E50914] bg-[#E50914] text-white shadow-md shadow-red-500/20"
                      : "border-gray-200 bg-white text-gray-700 hover:border-[#E50914]/40 hover:text-[#E50914] dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-[#E50914] dark:hover:text-white"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Brands Grid */}

        <motion.div
          layout
          className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
          "
        >
          {filteredBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.03,
              }}
            >
              <BrandCard brand={brand} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}

        {filteredBrands.length === 0 && (
          <div
            className="
              py-16
              text-center
              text-gray-500
              dark:text-gray-400
            "
          >
            No brands found in this category.
          </div>
        )}
      </div>
    </section>
  );
}