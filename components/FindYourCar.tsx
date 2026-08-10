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
  const {
    cars,
    filters,
    setFilters,
    searchCars,
    resetFilters,
  } = useCars();

  const brands = [...new Set(cars.map((car) => car.brand))].sort();

  const fuels = [
    ...new Set(cars.flatMap((car) => car.fuel)),
  ].sort();

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
      className="
        relative overflow-hidden
        bg-gray-50
        py-24
        transition-colors duration-500
        dark:bg-[#050505]
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(229,9,20,0.06),transparent_55%)]
          dark:bg-[radial-gradient(circle_at_top,#1b1b1b_0%,#050505_70%)]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border border-[#E50914]/20
              bg-[#E50914]/5
              px-5 py-2
              text-xs font-semibold uppercase
              tracking-[0.3em]
              text-[#E50914]
            "
          >
            Find Your Perfect Car
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl font-bold
              text-gray-900
              transition-colors duration-500
              md:text-5xl
              dark:text-white
            "
          >
            Explore Cars That Match{" "}
            <span className="text-[#E50914]">
              Your Lifestyle
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto mt-5 max-w-2xl
              leading-8
              text-gray-600
              transition-colors duration-500
              dark:text-gray-400
            "
          >
            Browse India's latest cars by brand, budget, fuel
            type and transmission. Find your perfect match in
            seconds.
          </p>
        </motion.div>

        {/* ================= SEARCH CARD ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-14"
        >
          <Card
            className="
              rounded-3xl
              border border-gray-200
              bg-white
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              transition-all duration-500

              dark:border-white/10
              dark:bg-[#111111]
              dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >
            {/* ================= FILTER GRID ================= */}

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {/* ================= BRAND ================= */}

              <div>
                <label
                  className="
                    mb-2 flex items-center gap-2
                    text-sm font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  <CarFront
                    className="h-4 w-4 text-[#E50914]"
                  />

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
                  <SelectTrigger
                    className="
                      h-12 rounded-xl
                      border-gray-200
                      bg-gray-50
                      text-gray-900

                      transition-all duration-300

                      hover:border-[#E50914]/50

                      focus:ring-[#E50914]/20

                      dark:border-white/10
                      dark:bg-[#080808]
                      dark:text-white
                    "
                  >
                    <SelectValue placeholder="All Brands" />
                  </SelectTrigger>

                  <SelectContent
                    className="
                      border-gray-200
                      bg-white
                      text-gray-900

                      dark:border-white/10
                      dark:bg-[#151515]
                      dark:text-white
                    "
                  >
                    <SelectItem value="all">
                      All Brands
                    </SelectItem>

                    {brands.map((brand) => (
                      <SelectItem
                        key={brand}
                        value={brand}
                      >
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* ================= BUDGET ================= */}

              <div>
                <label
                  className="
                    mb-2 flex items-center gap-2
                    text-sm font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  <Wallet
                    className="h-4 w-4 text-[#E50914]"
                  />

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
                  <SelectTrigger
                    className="
                      h-12 rounded-xl
                      border-gray-200
                      bg-gray-50
                      text-gray-900

                      transition-all duration-300

                      hover:border-[#E50914]/50

                      focus:ring-[#E50914]/20

                      dark:border-white/10
                      dark:bg-[#080808]
                      dark:text-white
                    "
                  >
                    <SelectValue placeholder="All Budgets" />
                  </SelectTrigger>

                  <SelectContent
                    className="
                      border-gray-200
                      bg-white
                      text-gray-900

                      dark:border-white/10
                      dark:bg-[#151515]
                      dark:text-white
                    "
                  >
                    <SelectItem value="all">
                      All Budgets
                    </SelectItem>

                    {budgets.map((budget) => (
                      <SelectItem
                        key={budget}
                        value={budget}
                      >
                        {budget}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* ================= FUEL ================= */}

              <div>
                <label
                  className="
                    mb-2 flex items-center gap-2
                    text-sm font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  <Fuel
                    className="h-4 w-4 text-[#E50914]"
                  />

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
                  <SelectTrigger
                    className="
                      h-12 rounded-xl
                      border-gray-200
                      bg-gray-50
                      text-gray-900

                      transition-all duration-300

                      hover:border-[#E50914]/50

                      focus:ring-[#E50914]/20

                      dark:border-white/10
                      dark:bg-[#080808]
                      dark:text-white
                    "
                  >
                    <SelectValue placeholder="All Fuel Types" />
                  </SelectTrigger>

                  <SelectContent
                    className="
                      border-gray-200
                      bg-white
                      text-gray-900

                      dark:border-white/10
                      dark:bg-[#151515]
                      dark:text-white
                    "
                  >
                    <SelectItem value="all">
                      All Fuel Types
                    </SelectItem>

                    {fuels.map((fuel) => (
                      <SelectItem
                        key={fuel}
                        value={fuel}
                      >
                        {fuel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* ================= TRANSMISSION ================= */}

              <div>
                <label
                  className="
                    mb-2 flex items-center gap-2
                    text-sm font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  <Settings2
                    className="h-4 w-4 text-[#E50914]"
                  />

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
                  <SelectTrigger
                    className="
                      h-12 rounded-xl
                      border-gray-200
                      bg-gray-50
                      text-gray-900

                      transition-all duration-300

                      hover:border-[#E50914]/50

                      focus:ring-[#E50914]/20

                      dark:border-white/10
                      dark:bg-[#080808]
                      dark:text-white
                    "
                  >
                    <SelectValue placeholder="All Transmissions" />
                  </SelectTrigger>

                  <SelectContent
                    className="
                      border-gray-200
                      bg-white
                      text-gray-900

                      dark:border-white/10
                      dark:bg-[#151515]
                      dark:text-white
                    "
                  >
                    <SelectItem value="all">
                      All Transmissions
                    </SelectItem>

                    {transmissions.map(
                      (transmission) => (
                        <SelectItem
                          key={transmission}
                          value={transmission}
                        >
                          {transmission}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}

            <div
              className="
                mt-8
                flex flex-col
                items-center justify-center
                gap-4
                sm:flex-row
              "
            >
              {/* Search */}

              <Button
                onClick={searchCars}
                className="
                  h-12
                  rounded-xl
                  bg-[#E50914]
                  px-8
                  text-white
                  shadow-lg
                  shadow-red-500/20
                  transition-all duration-300

                  hover:scale-[1.02]
                  hover:bg-red-700
                "
              >
                <Search className="mr-2 h-4 w-4" />

                Search Cars
              </Button>

              {/* Reset */}

              <Button
                variant="outline"
                onClick={resetFilters}
                className="
                  h-12
                  rounded-xl
                  border-gray-200
                  bg-transparent
                  px-8

                  text-gray-700

                  transition-all duration-300

                  hover:border-[#E50914]
                  hover:bg-[#E50914]/5
                  hover:text-[#E50914]

                  dark:border-white/10
                  dark:text-white
                  dark:hover:bg-white/10
                "
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