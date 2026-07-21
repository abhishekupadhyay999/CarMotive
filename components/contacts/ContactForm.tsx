"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

const vehicleData: Record<string, string[]> = {
  "Maruti Suzuki": [
    "Ertiga",
    "XL6",
    "Swift",
    "Dzire",
    "Brezza",
    "Baleno",
    "Grand Vitara",
    "Other",
  ],

  Hyundai: [
    "Creta",
    "Venue",
    "Verna",
    "i20",
    "Alcazar",
    "Other",
  ],

  Tata: [
    "Safari",
    "Harrier",
    "Nexon",
    "Punch",
    "Curvv",
    "Altroz",
    "Other",
  ],

  Mahindra: [
    "Scorpio N",
    "XUV700",
    "Thar",
    "XUV 3XO",
    "Bolero",
    "Other",
  ],

  Toyota: [
    "Innova Crysta",
    "Innova Hycross",
    "Fortuner",
    "Urban Cruiser Hyryder",
    "Glanza",
    "Other",
  ],

  Honda: [
    "City",
    "Elevate",
    "Amaze",
    "Other",
  ],

  Kia: [
    "Seltos",
    "Sonet",
    "Carens",
    "Syros",
    "Other",
  ],

  BMW: [
    "3 Series",
    "5 Series",
    "X1",
    "X3",
    "X5",
    "Other",
  ],

  Mercedes: [
    "A-Class",
    "C-Class",
    "E-Class",
    "GLA",
    "GLC",
    "GLE",
    "Other",
  ],

  Audi: [
    "A4",
    "A6",
    "Q3",
    "Q5",
    "Q7",
    "Other",
  ],

  Volvo: [
    "XC40",
    "XC60",
    "XC90",
    "S90",
    "Other",
  ],

  "Land Rover": [
    "Defender",
    "Discovery",
    "Range Rover",
    "Range Rover Sport",
    "Other",
  ],

  Jeep: [
    "Compass",
    "Meridian",
    "Wrangler",
    "Other",
  ],

  BYD: [
    "Atto 3",
    "Seal",
    "eMAX 7",
    "Other",
  ],

  VinFast: [
    "VF6",
    "VF7",
    "VF8",
    "VF9",
    "Other",
  ],
};

export default function ContactForm() {
  const [brand, setBrand] = useState("");

  const models = useMemo(() => {
    return vehicleData[brand] || [];
  }, [brand]);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl"
    >
      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
        Send an Enquiry
      </span>

      <h3 className="mt-5 text-3xl font-bold text-gray-900">
        Let's Find Your Dream Car
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        Fill in your details and our experts will contact you shortly.
      </p>

      <form className="mt-10 space-y-6">

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        {/* Brand */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Select Brand
          </label>

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          >
            <option value="">Choose Brand</option>

            {Object.keys(vehicleData).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Model */}

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Select Model
          </label>

          <select
            disabled={!brand}
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100 disabled:bg-gray-100 disabled:text-gray-400"
          >
            <option>
              {brand ? "Choose Model" : "Select Brand First"}
            </option>

            {models.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Tell us what you're looking for..."
            className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#FF5A1F] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#E84A12]"
        >
          Let's Find Your Dream Car

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>
    </motion.div>
  );
}