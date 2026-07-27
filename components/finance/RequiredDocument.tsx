"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

const salaried = [
  "PAN Card",
  "Aadhaar Card",
  "Passport Size Photographs",
  "Last 3 Months Salary Slips",
  "Last 6 Months Bank Statement",
  "Latest Form 16 / ITR",
  "Current Address Proof",
];

const selfEmployed = [
  "PAN Card",
  "Aadhaar Card",
  "Passport Size Photographs",
  "Business Registration Proof",
  "GST Registration (If Applicable)",
  "Last 2 Years ITR",
  "Last 12 Months Bank Statement",
];

export default function RequiredDocuments() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-white py-28">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

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
            REQUIRED DOCUMENTS
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Documents Required
            <span className="block text-[#FF5A1F]">
              For Car Finance
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Keep these documents ready to ensure a faster and hassle-free
            finance approval process.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Salaried */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            whileHover={{ y: -6 }}
            className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl"
          >
            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                <UserCheck className="h-8 w-8 text-[#FF5A1F]" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Salaried Individuals
                </h3>

                <p className="mt-1 text-gray-500">
                  Documents generally required for salaried applicants.
                </p>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              {salaried.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-orange-50 px-5 py-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#FF5A1F]" />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>

          {/* Self Employed */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            whileHover={{ y: -6 }}
            className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl"
          >
            <div className="flex items-center gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                <Briefcase className="h-8 w-8 text-[#FF5A1F]" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Self-Employed
                </h3>

                <p className="mt-1 text-gray-500">
                  Additional documents may be requested by the lender.
                </p>
              </div>

            </div>

            <div className="mt-10 space-y-5">

              {selfEmployed.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-orange-50 px-5 py-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#FF5A1F]" />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[32px] border border-orange-200 bg-orange-50 p-8 text-center"
        >
          <h4 className="text-2xl font-bold text-gray-900">
            Need Help With Documentation?
          </h4>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-7">
            Don't worry if you're unsure about the paperwork. Our finance
            experts will guide you through the complete documentation process
            and help you prepare everything required for a smooth loan approval.
          </p>
        </motion.div>

      </div>
    </section>
  );
}