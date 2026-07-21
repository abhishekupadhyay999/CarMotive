"use client";

import { motion } from "framer-motion";
import {
  Car,
  Users,
  BadgeCheck,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    icon: Car,
    number: "500+",
    title: "Cars Delivered",
    description:
      "Helping customers drive home their dream cars across India.",
  },
  {
    icon: Users,
    number: "20+",
    title: "Premium Brands",
    description:
      "Choose from India's leading automobile manufacturers.",
  },
  {
    icon: BadgeCheck,
    number: "100%",
    title: "Verified Vehicles",
    description:
      "Every vehicle is carefully inspected for quality and reliability.",
  },
  {
    icon: IndianRupee,
    number: "98%",
    title: "Finance Approval",
    description:
      "Quick and hassle-free finance support from trusted banking partners.",
  },
];

export default function TrustStats() {
  return (
    <section
      id="about"
      className="relative bg-[#F8FAFC] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 font-semibold text-[#FF5A1F]">
            WHY CHOOSE CARMOTIVE
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
            Trusted by Hundreds of
            <span className="text-[#FF5A1F]">
              {" "}Happy Customers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We simplify your car buying journey with premium vehicles,
            transparent pricing, easy finance and complete customer
            satisfaction.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#FF5A1F] hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-[#FF5A1F]">

                  <Icon
                    className="text-[#FF5A1F] group-hover:text-white"
                    size={30}
                  />

                </div>

                <h3 className="mt-8 text-4xl font-black text-gray-900">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}