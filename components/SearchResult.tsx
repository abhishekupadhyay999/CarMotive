"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Fuel, Settings2 } from "lucide-react";
import { useCars } from "@/components/context/CarContext";

export default function SearchResult() {
  const { filteredCars, hasSearched } = useCars();

  if (!hasSearched) return null;

  return (
    <section
      id="search-results"
      className="bg-black px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400">
            Search Results
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Cars Matching Your Search
          </h2>

          <p className="mt-4 text-gray-400">
            {filteredCars.length}{" "}
            {filteredCars.length === 1 ? "car" : "cars"} found
          </p>
        </motion.div>

        {/* No Results */}
        {filteredCars.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white">
              No Cars Found
            </h3>

            <p className="mt-4 text-gray-400">
              Try changing your search filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#E50914]/50 hover:shadow-[0_15px_50px_rgba(229,9,20,0.15)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-zinc-900">
                  <Image
                    src={car.image || "/images/cars/no-image.webp"}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/images/cars/no-image.webp";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm uppercase tracking-widest text-[#E50914]">
                    {car.brand}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {car.model}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    {car.engine}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-gray-300">
                      <Fuel size={15} />
                      {car.fuel.join(", ")}
                    </span>

                    <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-gray-300">
                      <Settings2 size={15} />
                      {car.transmission.join(", ")}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-400">
                        Starting From
                      </p>

                      <h4 className="text-2xl font-bold text-white">
                        {car.price}
                      </h4>
                    </div>

                    <Link
                      href={`/cars/${car.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#E50914] px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-red-700"
                    >
                      View Details

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}