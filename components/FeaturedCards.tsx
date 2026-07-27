"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  RefreshCcw,
  Landmark,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: CarFront,
    title: "20+ Car Brands",
    description:
      "Choose from India's leading automotive brands under one roof.",
  },
  {
    icon: RefreshCcw,
    title: "Best Exchange Value",
    description:
      "Receive a fair and competitive valuation for your existing car.",
  },
  {
    icon: Landmark,
    title: "Easy Finance & EMI",
    description:
      "Flexible finance options with attractive EMI plans from trusted banking partners.",
  },
  {
    icon: Truck,
    title: "PAN India Delivery",
    description:
      "Vehicle delivery assistance across India, subject to availability and location.",
  },
];

export default function FeatureCards() {
  return (
    <section className="relative -mt-16 z-30 pb-20 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.15,
          }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.6,
                }}
                className="group rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF5A1F]/10 text-[#FF5A1F] transition-all duration-300 group-hover:bg-[#FF5A1F] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}