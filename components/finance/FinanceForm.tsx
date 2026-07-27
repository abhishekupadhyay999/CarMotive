"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  ShieldCheck,
  Clock3,
  Landmark,
  CheckCircle2,
} from "lucide-react";

export default function FinanceEnquiry() {
  return (
    <section
      id="finance-form"
      className="relative overflow-hidden bg-gradient-to-br from-[#FF5A1F] via-orange-500 to-orange-600 py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white">
              APPLY FOR FINANCE
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-white">
              Get Your Car Loan
              <span className="block text-orange-100">
                Approved Faster
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-orange-100">
              Our finance specialists compare offers from multiple banks
              to help you secure the best interest rates with a quick,
              hassle-free approval process.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "20+ Banking Partners",
                "Quick Loan Processing",
                "Competitive Interest Rates",
                "Dedicated Finance Assistance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                  <span className="text-lg text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur"
              >
                <Phone className="text-white" />
                <div>
                  <p className="text-sm text-orange-100">Call Us</p>
                  <p className="font-semibold text-white">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@carmotive.in"
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-5 backdrop-blur"
              >
                <Mail className="text-white" />
                <div>
                  <p className="text-sm text-orange-100">Email</p>
                  <p className="font-semibold text-white">
                    info@carmotive.in
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[36px] bg-white p-10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Apply for Finance
            </h3>

            <p className="mt-3 text-gray-600">
              Fill in your details and our finance expert will contact you shortly.
            </p>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#FF5A1F]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#FF5A1F]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#FF5A1F]"
              />

              <input
                type="text"
                placeholder="Interested Car"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#FF5A1F]"
              />

              <textarea
                rows={4}
                placeholder="Additional Requirements"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#FF5A1F]"
              />

              <button
                className="w-full rounded-2xl bg-[#FF5A1F] py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
              >
                Submit Enquiry
              </button>

            </form>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6 text-center">

              <div>
                <ShieldCheck className="mx-auto mb-2 text-[#FF5A1F]" />
                <p className="text-sm text-gray-600">
                  Secure Data
                </p>
              </div>

              <div>
                <Clock3 className="mx-auto mb-2 text-[#FF5A1F]" />
                <p className="text-sm text-gray-600">
                  Quick Response
                </p>
              </div>

              <div>
                <Landmark className="mx-auto mb-2 text-[#FF5A1F]" />
                <p className="text-sm text-gray-600">
                  Trusted Banks
                </p>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}