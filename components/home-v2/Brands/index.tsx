"use client";

import { brands } from "./brands";
import type { BrandCategory } from "./brands";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import BrandCard from "./BrandCard";

const filters: BrandCategory[] = [
  "All",
  "Luxury",
  "Popular",
  "EV",
];

export default function Brands() {
  const [activeFilter, setActiveFilter] =
    useState<BrandCategory>("All");

  const [expanded, setExpanded] = useState(false);

  const filteredBrands = useMemo(() => {
    if (activeFilter === "All") return brands;

    return brands.filter((brand) =>
      brand.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const visibleBrands = expanded
    ? filteredBrands
    : filteredBrands.slice(0, 12);

  return (
    <section
      id="brands"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1b1b1b_0%,#050505_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 flex justify-center"
        >
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-[#E50914]">
            {brands.length}+ Automotive Brands
          </span>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Explore by Brand
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Discover India's leading automobile manufacturers.
            Browse premium SUVs, hatchbacks, sedans and electric
            vehicles from trusted brands—all in one place.
          </p>
        </motion.div>

        {/* Filters */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 flex flex-wrap justify-center gap-4"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setExpanded(false);
              }}
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "border-[#E50914] bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30"
                  : "border-white/10 bg-[#111111] text-gray-300 hover:border-[#E50914] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Count */}

        <div className="mt-8 text-center text-sm text-gray-500">
          Showing {visibleBrands.length} of {filteredBrands.length} brands
        </div>

        {/* Grid */}

        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleBrands.map((brand) => (
              <motion.div
                key={brand.name}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <BrandCard brand={brand} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Button */}

        {filteredBrands.length > 12 && (
          <motion.div
            layout
            className="mt-14 flex justify-center"
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111111] px-7 py-4 font-medium text-white transition-all duration-300 hover:border-[#E50914] hover:bg-[#181818]"
            >
              {expanded ? (
                <>
                  Show Less

                  <ChevronUp
                    size={18}
                    className="transition group-hover:-translate-y-1"
                  />
                </>
              ) : (
                <>
                  View All Brands

                  <ChevronDown
                    size={18}
                    className="transition group-hover:translate-y-1"
                  />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}