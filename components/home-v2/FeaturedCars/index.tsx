"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FeaturedCard from "./FeaturedCard";
import CarCard from "./CarCard";
import { cars } from "./cars";

export default function FeaturedCars() {
  const featuredCar = cars.find((car) => car.featured);
  const otherCars = cars.filter((car) => !car.featured);

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#f8f8f8_70%)]" />

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
            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E50914]">
              Featured Collection
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
              Find Your Dream Car
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Browse our handpicked collection of luxury, SUV, sedan and family
              cars with attractive finance options and the best dealer offers.
            </p>
          </div>

          <button className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 transition-all duration-300 hover:border-[#E50914] hover:text-[#E50914] hover:shadow-lg">
            View All Cars

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </motion.div>

        {/* Cars Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Featured */}
          {featuredCar && (
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FeaturedCard car={featuredCar} />
            </motion.div>
          )}

          {/* First Small Card */}
          {otherCars[0] && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CarCard car={otherCars[0]} />
            </motion.div>
          )}
        </div>

        {/* Remaining Cars */}
        {otherCars.length > 1 && (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {otherCars.slice(1).map((car, index) => (
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
        )}
      </div>
    </section>
  );
}