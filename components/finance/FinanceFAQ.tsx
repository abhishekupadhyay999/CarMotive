"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum down payment for a car loan?",
    answer:
      "The minimum down payment depends on the lender, vehicle, and your eligibility. Our finance experts will help you find the best available option.",
  },
  {
    question: "Can I get 100% financing for my car?",
    answer:
      "Some lenders may offer up to 100% financing for eligible applicants and selected vehicles. Availability depends on your credit profile and bank policies.",
  },
  {
    question: "How long does loan approval take?",
    answer:
      "Most car loan applications are processed within 24–48 hours after successful document verification, depending on the lender.",
  },
  {
    question: "Can I prepay or foreclose my loan?",
    answer:
      "Yes. Most banks allow part-payment or foreclosure after a specified period. Charges, if any, depend on the lender's terms and conditions.",
  },
  {
    question: "Do I need a good CIBIL score?",
    answer:
      "A good CIBIL score improves your chances of approval and helps you secure better interest rates, but financing options may still be available based on your overall profile.",
  },
  {
    question: "Which banks do you work with?",
    answer:
      "We work with leading public and private sector banks and NBFCs to help you compare loan offers and choose the best one.",
  },
];
export default function FinanceFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-gradient-to-br from-orange-50/40 via-white to-white py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-20 text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-[#FF5A1F]">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Frequently Asked
            <span className="block text-[#FF5A1F]">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Find answers to the most common questions about car finance.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const active = open === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md"
              >
                <button
                  onClick={() =>
                    setOpen(active ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-8 text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: active ? 180 : 0,
                    }}
                  >
                    <ChevronDown className="h-6 w-6 text-[#FF5A1F]" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                    >
                      <div className="px-8 pb-8 leading-8 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}