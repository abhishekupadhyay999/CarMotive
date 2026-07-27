"use client";

import { motion } from "framer-motion";
import {
  User,
  CalendarDays,
  IndianRupee,
  Briefcase,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const eligibility = [
  {
    icon: User,
    title: "Age",
    value: "21 - 65 Years",
    description: "Applicant should be between 21 and 65 years of age.",
  },
  {
    icon: Briefcase,
    title: "Employment",
    value: "Salaried / Self-Employed",
    description: "Stable employment or a well-established business.",
  },
  {
    icon: IndianRupee,
    title: "Monthly Income",
    value: "As per Bank Policy",
    description: "Minimum income varies depending on the lender.",
  },
  {
    icon: CalendarDays,
    title: "Work Experience",
    value: "Minimum 1 Year",
    description: "Consistent work history helps improve loan approval.",
  },
  {
    icon: MapPin,
    title: "Residence",
    value: "Indian Resident",
    description: "Valid address proof is required.",
  },
  {
    icon: BadgeCheck,
    title: "Credit Score",
    value: "Good CIBIL Preferred",
    description: "Higher credit scores improve loan eligibility and interest rates.",
  },
];

export default function Eligibility() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-[#FF5A1F]">
            ELIGIBILITY
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Check Your
            <span className="block text-[#FF5A1F]">
              Loan Eligibility
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Most customers qualify for car finance. Our finance specialists
            will help you find the lender that best matches your profile.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eligibility.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg transition-all hover:border-[#FF5A1F] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                  <Icon className="h-8 w-8 text-[#FF5A1F]" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-lg font-semibold text-[#FF5A1F]">
                  {item.value}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] bg-gradient-to-r from-[#FF5A1F] to-orange-500 p-10 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold">
            Not Sure If You're Eligible?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-orange-100">
            Contact our finance experts for a free eligibility assessment.
            We'll help you choose the best finance option with no obligation.
          </p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-[#FF5A1F] transition hover:scale-105">
            Check Eligibility
          </button>
        </motion.div>
      </div>
    </section>
  );
}