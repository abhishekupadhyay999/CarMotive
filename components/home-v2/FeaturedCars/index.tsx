"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CarCard from "./CarCard";
import { cars } from "./cars";

export default function FeaturedCars() {
  return (
    <section
      id="featured-cars"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a1a_0%,#050505_75%)]" />

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
            <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#E50914]">
              Featured Collection
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Our Featured Cars
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Explore our handpicked collection of India's most popular SUVs
              and premium family cars. Get the best prices, attractive finance
              options and exclusive dealer offers—all in one place.
            </p>
          </div>

          <Link
            href="#search"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-[#E50914] hover:bg-white/10"
          >
            Explore More Cars

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Cars Grid */}
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
      </div>
    </section>
  );
}