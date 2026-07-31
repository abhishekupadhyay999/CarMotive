"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import FeatureCard from "./FeaturedCard";
import { features } from "./features";

const stats = [
  {
    number: "1,000+",
    label: "Happy Customers",
  },
  {
    number: "500+",
    label: "Premium Cars",
  },
  {
    number: "4.9★",
    label: "Google Rating",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#E50914]/20 bg-[#E50914]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#E50914]">
            Why Choose Carmotive
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Premium Experience.
            <br />
            Driven by Trust.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We don't just sell cars. We deliver confidence, transparency and an
            unmatched luxury buying experience from the first conversation to
            final delivery.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="mt-20 grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  index={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="mt-12"
            >
              <button className="group inline-flex items-center gap-3 rounded-full bg-[#E50914] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#c90812] hover:shadow-[0_15px_35px_rgba(229,9,20,0.35)]">
                Explore Our Collection

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image */}

            <div className="relative overflow-hidden rounded-[32px] border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/Whychoose/bmw.jpeg"
                alt="BMW X5"
                width={900}
                height={900}
                className="h-[640px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Stats */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="absolute bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl"
            >
              <div className="grid grid-cols-3 gap-6">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="text-center"
                  >
                    <h3 className="text-3xl font-bold text-[#E50914]">
                      {item.number}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}