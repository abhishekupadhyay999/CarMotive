"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import SectionHeading from "../SectionHeading";

import BudgetSlider from "./BudgetSlider";
import BrandSelector from "./BrandSelector";
import CarForm from "./CarForm";
import SummaryCard from "./SummaryCard";

import { DreamCarForm } from "./types";

export default function DreamCarFinder() {
  const [form, setForm] = useState<DreamCarForm>({
    budget: 1500000,
    brand: "",
    fuel: "",
    transmission: "",
    bodyType: "",
    finance: true,
    name: "",
    phone: "",
    message: "",
  });

  return (
    <section
      id="dream-car"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionHeading
          badge="Premium Car Finder"
          title="Find Your Dream Car"
          subtitle="Tell us your preferences and our experts will shortlist the perfect vehicle for you."
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-10">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8"
          >
            <BudgetSlider
              form={form}
              setForm={setForm}
            />

            <div className="my-10">
              <BrandSelector
                form={form}
                setForm={setForm}
              />
            </div>

            <CarForm
              form={form}
              setForm={setForm}
            />

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SummaryCard form={form} />
          </motion.div>

        </div>

      </div>
    </section>
  );
}