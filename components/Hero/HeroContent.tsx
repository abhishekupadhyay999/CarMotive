"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      {/* Badge */}
    
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
      >
        Find Your
        <br />

        <span className="text-[#FF5A1F]">
          Dream Car
        </span>

        <br />

        Drive Home
        <br />
        With Confidence.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
      >
        Discover premium certified vehicles with transparent pricing,
        flexible finance solutions, trusted dealerships and complete
        documentation support — all under one roof.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <a
          href="#brands"
          className="group flex items-center gap-3 rounded-full bg-[#FF5A1F] px-8 py-4 font-semibold text-white shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E64A19]"
        >
          Explore Brands

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        <a
          href="#contact"
          className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
        >
          <PlayCircle size={20} />

          Contact Dealer
        </a>
      </motion.div>

      {/* Trust Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-16 grid grid-cols-3 gap-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"
      >
        <div>
          <h3 className="text-3xl font-black text-white">
            500+
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Happy Customers
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-black text-white">
            20+
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Premium Brands
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-black text-white">
            4.9★
          </h3>

          <p className="mt-2 text-sm text-gray-300">
            Customer Rating
          </p>
        </div>
      </motion.div>

    </div>
  );
}