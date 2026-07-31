"use client";

import { Search, CarFront, Fuel, Settings2, ShieldCheck } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="relative z-40 -mt-20 bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search Card */}
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.12)]">
          <div className="p-8 lg:p-10">
            {/* Heading */}
            <div className="mb-8">
              <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E50914]">
                Quick Search
              </span>

              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Find Your Perfect Car
              </h2>

              <p className="mt-2 text-gray-500">
                Browse hundreds of verified vehicles from India's leading brands.
              </p>
            </div>

            {/* Search Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
              {/* Brand */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Brand
                </label>

                <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#E50914]">
                  <CarFront size={20} className="text-[#E50914]" />

                  <select className="w-full bg-transparent text-gray-800 outline-none">
                    <option>All Brands</option>
                    <option>Mercedes-Benz</option>
                    <option>BMW</option>
                    <option>Audi</option>
                    <option>Toyota</option>
                    <option>Mahindra</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Budget
                </label>

                <div className="flex h-14 items-center rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#E50914]">
                  <select className="w-full bg-transparent text-gray-800 outline-none">
                    <option>Any Budget</option>
                    <option>Under ₹5 Lakh</option>
                    <option>₹5–10 Lakh</option>
                    <option>₹10–20 Lakh</option>
                    <option>Above ₹20 Lakh</option>
                  </select>
                </div>
              </div>

              {/* Fuel */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Fuel Type
                </label>

                <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#E50914]">
                  <Fuel size={20} className="text-[#E50914]" />

                  <select className="w-full bg-transparent text-gray-800 outline-none">
                    <option>Any Fuel</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>
                    <option>Hybrid</option>
                    <option>Electric</option>
                  </select>
                </div>
              </div>

              {/* Transmission */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Transmission
                </label>

                <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#E50914]">
                  <Settings2 size={20} className="text-[#E50914]" />

                  <select className="w-full bg-transparent text-gray-800 outline-none">
                    <option>Any</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#E50914] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-red-700">
                  <Search size={20} />
                  Find My Car
                </button>
              </div>
            </div>

            {/* Trust Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-red-100 bg-red-50 px-6 py-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <ShieldCheck size={18} className="text-[#E50914]" />
                Verified Inventory
              </div>

              <div className="hidden h-5 w-px bg-gray-300 md:block" />

              <div className="text-sm font-medium text-gray-700">
                500+ Cars Available
              </div>

              <div className="hidden h-5 w-px bg-gray-300 md:block" />

              <div className="text-sm font-medium text-gray-700">
                20+ Premium Brands
              </div>

              <div className="hidden h-5 w-px bg-gray-300 md:block" />

              <div className="text-sm font-medium text-gray-700">
                Instant Assistance
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="mr-2 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Popular Searches
          </span>

          {[
            "SUV",
            "Sedan",
            "Luxury",
            "Electric",
            "Under ₹10L",
            "Automatic",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition duration-300 hover:border-[#E50914] hover:bg-[#E50914] hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}