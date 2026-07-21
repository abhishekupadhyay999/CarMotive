"use client";

import { motion } from "framer-motion";

interface Props {
  active: string;
  onChange: (category: string) => void;
}

const categories = ["All", "Luxury", "Popular", "EV"];

export default function BrandFilter({
  active,
  onChange,
}: Props) {
  return (
    <div className="mb-16 flex flex-wrap items-center justify-center gap-4">

      {categories.map((category) => {

        const isActive = active === category;

        return (
          <motion.button
            key={category}
            onClick={() => onChange(category)}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className={`relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-[#FF5A1F] text-white shadow-lg shadow-orange-300"
                : "border border-gray-200 bg-white text-gray-700 hover:border-[#FF5A1F] hover:text-[#FF5A1F] hover:shadow-md"
            }`}
          >

            {isActive && (
              <motion.span
                layoutId="brand-filter"
                className="absolute inset-0 rounded-full bg-[#FF5A1F]"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                }}
              />
            )}

            <span className="relative z-10">
              {category}
            </span>

          </motion.button>
        );

      })}

    </div>
  );
}