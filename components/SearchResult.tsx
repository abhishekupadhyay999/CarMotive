"use client";

import { motion } from "framer-motion";
import { ArrowRight, Fuel, Settings2 } from "lucide-react";
import { useCars } from "@/components/context/CarContext";

export default function SearchResult() {
  const { filteredCars, hasSearched } = useCars();

  if (!hasSearched) return null;

  return (
    <section
      id="search-results"
      className="bg-black py-24 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400">
            Search Results
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Cars Matching Your Search
          </h2>

          <p className="mt-4 text-gray-400">
            {filteredCars.length} matching cars found
          </p>
        </motion.div>

        {filteredCars.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#E50914]/50 transition"
              >
                <div className="flex h-56 items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
                  <span className="text-gray-500">
                    Car Image
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-sm uppercase tracking-widest text-[#E50914]">
                    {car.brand}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {car.model}
                  </h3>

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

                    <button className="flex items-center gap-2 rounded-xl bg-[#E50914] px-5 py-3 text-white hover:bg-red-700 transition">
                      View Details

                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition"
                      />
                    </button>
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