"use client";

import { motion } from "framer-motion";
import {
  Search,
  RotateCcw,
  CarFront,
  Wallet,
  Fuel,
  Settings2,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useCars } from "@/components/context/CarContext";

export default function FindYourCar() {
  const { cars, filters, setFilters, searchCars, resetFilters } = useCars();

  const brands = [...new Set(cars.map((car) => car.brand))].sort();

  const fuels = [...new Set(cars.flatMap((car) => car.fuel))].sort();

  const transmissions = [
    ...new Set(cars.flatMap((car) => car.transmission)),
  ].sort();

  const budgets = [
    "Under ₹10 Lakh",
    "₹10–15 Lakh",
    "₹15–20 Lakh",
    "₹20–30 Lakh",
    "₹30–50 Lakh",
    "Above ₹50 Lakh",
  ];

  return (
    <section
      id="search"
      className="relative bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-black px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-medium text-red-400">
            Find Your Perfect Car
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Explore Cars That Match
            <span className="text-[#E50914]"> Your Lifestyle</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Browse India's latest cars by brand, budget, fuel type and
            transmission. Find your perfect match in seconds.
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-14"
        >
          <Card className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {/* Brand */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <CarFront className="h-4 w-4 text-[#E50914]" />
                  Brand
                </label>

                <Select
                  value={filters.brand}
                  onValueChange={(value) =>
                    setFilters((prev) => ({
                      ...prev,
                      brand: value,
                    }))
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-white/10 bg-black/40 text-white">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All Brands</SelectItem>

                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Wallet className="h-4 w-4 text-[#E50914]" />
                  Budget
                </label>

                <Select
                  value={filters.budget}
                  onValueChange={(value) =>
                    setFilters((prev) => ({
                      ...prev,
                      budget: value,
                    }))
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-white/10 bg-black/40 text-white">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All Budgets</SelectItem>

                    {budgets.map((budget) => (
                      <SelectItem key={budget} value={budget}>
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Fuel */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Fuel className="h-4 w-4 text-[#E50914]" />
                  Fuel
                </label>

                <Select
                  value={filters.fuel}
                  onValueChange={(value) =>
                    setFilters((prev) => ({
                      ...prev,
                      fuel: value,
                    }))
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-white/10 bg-black/40 text-white">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All Fuel Types</SelectItem>

                    {fuels.map((fuel) => (
                      <SelectItem key={fuel} value={fuel}>
                        {fuel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Transmission */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Settings2 className="h-4 w-4 text-[#E50914]" />
                  Transmission
                </label>

                <Select
                  value={filters.transmission}
                  onValueChange={(value) =>
                    setFilters((prev) => ({
                      ...prev,
                      transmission: value,
                    }))
                  }
                >
                  <SelectTrigger className="h-12 rounded-xl border-white/10 bg-black/40 text-white">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">All Transmissions</SelectItem>

                    {transmissions.map((transmission) => (
                      <SelectItem
                        key={transmission}
                        value={transmission}
                      >
                        {transmission}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                onClick={searchCars}
                className="h-12 rounded-xl bg-[#E50914] px-8 text-white hover:bg-red-700"
              >
                <Search className="mr-2 h-4 w-4" />
                Search Cars
              </Button>

              <Button
                variant="outline"
                onClick={resetFilters}
                className="h-12 rounded-xl border-white/10 bg-transparent px-8 text-white hover:bg-white/10"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset Filters
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}