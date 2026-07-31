"use client";

import { motion } from "framer-motion";
import {
  CarFront,
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "Happy Customers",
  },
  {
    icon: CarFront,
    value: "500+",
    label: "Cars Available",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Cars",
  },
  {
    icon: Truck,
    value: "Pan India",
    label: "Delivery",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Customer Support",
  },
  {
    icon: Award,
    value: "Best",
    label: "Price Guarantee",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050505] py-20">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-3 xl:grid-cols-6"
        >

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-[#111111] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#E50914]/40"
              >

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E50914]/10">

                  <Icon
                    size={30}
                    className="text-[#E50914]"
                  />

                </div>

                <h3 className="text-3xl font-bold text-white">

                  {item.value}

                </h3>

                <p className="mt-2 text-gray-400">

                  {item.label}

                </p>

              </div>

            );

          })}

        </motion.div>

      </div>

    </section>
  );
}