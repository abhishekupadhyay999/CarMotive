"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Landmark,
  Car,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Your Application",
    description:
      "Share your basic details and preferred vehicle. Our finance team will help you choose the right loan option.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Document Verification",
    description:
      "Upload the required documents. We verify everything quickly for a smooth approval process.",
  },
  {
    number: "03",
    icon: Landmark,
    title: "Loan Approval",
    description:
      "We compare offers from multiple banks and NBFCs to secure the best interest rate for you.",
  },
  {
    number: "04",
    icon: Car,
    title: "Drive Home Your Car",
    description:
      "Complete the final formalities and take delivery of your dream car with complete peace of mind.",
  },
];

export default function FinanceProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-[#FF5A1F]">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Finance Your Car
            <span className="block text-[#FF5A1F]">
              In 4 Easy Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our finance experts manage everything from application to
            approval, making your car buying journey smooth, transparent
            and hassle-free.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-20 hidden h-1 bg-orange-100 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: index * .15,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >
                  {/* Step Number */}

                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#FF5A1F] text-xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Card */}

                  <div className="mt-8 rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 group-hover:border-[#FF5A1F] group-hover:shadow-2xl">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-[#FF5A1F]">

                      <Icon className="h-8 w-8 text-[#FF5A1F] transition-colors duration-300 group-hover:text-white" />

                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {step.description}
                    </p>

                    <div className="mt-8 h-1 w-14 rounded-full bg-orange-200 transition-all duration-300 group-hover:w-24 group-hover:bg-[#FF5A1F]" />

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-[#FF5A1F] to-orange-500 px-10 py-14 text-center text-white shadow-2xl"
        >
          <h3 className="text-4xl font-bold">
            Ready to Get Started?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-orange-100">
            Apply for finance today and let our experts help you find
            the best loan with competitive interest rates and flexible
            EMI options.
          </p>

          <Link
            href="#finance-form"
            className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#FF5A1F] transition-all duration-300 hover:scale-105"
          >
            Apply for Finance

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}