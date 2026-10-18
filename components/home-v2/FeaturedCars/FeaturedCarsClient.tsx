
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CarCard from "./CarCard";
import type { Car } from "./cars";

interface FeaturedCarsClientProps {
  cars: Car[];
}

export default function FeaturedCarsClient({
  cars,
}: FeaturedCarsClientProps) {
  return (
    <section
      id="featured-cars"
      className="
        relative overflow-hidden
        bg-white
        py-24
        text-gray-900
        transition-colors duration-300
        dark:bg-[#050505]
        dark:text-white
        lg:py-32
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f3f3f3_0%,#ffffff_75%)] dark:hidden" />

      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_top_right,#1b1b1b_0%,#050505_75%)] dark:block" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <span
              className="
                inline-flex rounded-full
                border border-red-500/30
                bg-red-500/10
                px-5 py-2
                text-xs font-semibold
                uppercase tracking-[0.35em]
                text-[#E50914]
              "
            >
              Featured Collection
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Our Featured Cars
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Discover some of the most sought-after cars available at{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                CARMOTIVE INDIA
              </span>
              . From powerful SUVs and premium luxury cars to stylish family
              cars and modern EVs, explore a carefully selected range that
              brings together performance, technology, comfort, and style.
            </p>
          </div>

          <Link
            href="#search"
            className="
              group inline-flex shrink-0
              items-center gap-2
              rounded-full
              border border-gray-200
              bg-white
              px-6 py-3
              font-medium
              text-gray-800
              shadow-sm
              transition-all duration-300
              hover:border-[#E50914]
              hover:text-[#E50914]
              dark:border-white/10
              dark:bg-white/5
              dark:text-white
              dark:shadow-none
              dark:hover:bg-white/10
            "
          >
            Explore More Cars

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Cars Grid */}
        {cars.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-gray-500 dark:text-gray-400">
            No cars are available to display right now.
          </p>
        )}
      </div>
    </section>
  );
}
