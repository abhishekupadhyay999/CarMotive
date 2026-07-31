"use client";

import { motion } from "framer-motion";
import BankMarquee from "./BankMarquee";
import EMIcalculator from "./EMICalculator";

export default function FinanceSection() {
  return (
    <section
      id="finance"
      className="relative overflow-hidden bg-[#080808] py-28 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.18),transparent_40%)]" />
        <div className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-red-600/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[150px]" />
    </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Finance Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Finance Your Dream Car
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Compare loan offers from India's leading banks and NBFCs.
            Calculate your monthly EMI instantly and let our finance
            experts help you choose the perfect loan for your budget.
          </p>
        </motion.div>

        {/* Bank Logos */}
        <div className="mt-14">
          <BankMarquee />
        </div>

        {/* Content */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold leading-tight lg:text-4xl">
              Drive Home Your Dream Car with Easy Finance
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              We partner with India's most trusted banks and NBFCs to
              provide competitive interest rates, quick approvals,
              flexible repayment options and hassle-free documentation,
              making your luxury car ownership journey smooth.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                "150+ Banking Partners",
                "Lowest Interest Rates",
                "Approval in 24 Hours",
                "Minimal Documentation",
              ].map((item) => (
                <motion.div
                  whileHover={{ y: -6 }}
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-red-500/50 hover:bg-white/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl font-bold text-white shadow-lg shadow-red-600/30">
                    ✓
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {item}
                  </h4>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#E50914] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-red-700">
                Apply for Loan
              </button>

              <button className="rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-red-500 hover:text-red-400">
                Talk to Finance Expert
              </button>
            </div>
          </motion.div>

          {/* Right */}
          <EMIcalculator />
        </div>
      </div>
    </section>
  );
}