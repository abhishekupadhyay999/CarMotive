"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  BadgeIndianRupee,
  Search,
  FileCheck,
  Zap,
  CheckCircle2,
  X,
  Phone,
  Send,
} from "lucide-react";

const features = [
  {
    icon: BadgeIndianRupee,
    title: "Best Exchange Value",
    description:
      "Get the highest market value for your current vehicle with a transparent valuation process.",
  },
  {
    icon: Search,
    title: "Free Inspection",
    description:
      "Our experts inspect your vehicle at no extra cost for an accurate exchange quote.",
  },
  {
    icon: FileCheck,
    title: "Loan Assistance",
    description:
      "Complete documentation support including loan closure and ownership transfer.",
  },
  {
    icon: Zap,
    title: "Instant Valuation",
    description:
      "Receive your exchange estimate quickly and upgrade without unnecessary delays.",
  },
];

const makes = [
  "Maruti Suzuki",
  "Hyundai",
  "Tata",
  "Mahindra",
  "Toyota",
  "Honda",
  "Kia",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volvo",
  "Land Rover",
  "Jeep",
  "BYD",
  "Other",
];

const fuels = [
  "Petrol",
  "Diesel",
  "CNG",
  "Electric",
  "Hybrid",
];

const transmissions = [
  "Manual",
  "Automatic",
  "AMT",
  "CVT",
  "DCT",
];

const owners = [
  "1st Owner",
  "2nd Owner",
  "3rd Owner",
  "4th Owner",
  "4+ Owners",
];

export default function ExchangeSection() {
  const [showValuation, setShowValuation] = useState(false);
  const [showExpert, setShowExpert] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    make: "",
    model: "",
    mfg_year: "",
    variant: "",
    fuel: "",
    transmission: "",
    color: "",
    owner: "",
    mileage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleValuationSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_pzbzax4",
        "template_ekb47qb",
        {
          from_name: formData.name,
          phone: formData.number,
          brand: formData.make,
          model: formData.model,
          mfg_year: formData.mfg_year,
          variant: formData.variant,
          fuel: formData.fuel,
          transmission: formData.transmission,
          color: formData.color,
          owner: formData.owner,
          mileage: formData.mileage,
          subject: "New Car Valuation Request",

          message: `
New Car Valuation Request

Name: ${formData.name}
Number: ${formData.number}
Make: ${formData.make}
Model: ${formData.model}
Mfg Year: ${formData.mfg_year}
Variant: ${formData.variant}
Fuel: ${formData.fuel}
Transmission: ${formData.transmission}
Color: ${formData.color}
Owner: ${formData.owner}
Mileage: ${formData.mileage}
          `,
        },
        "eUIBMV2tMsvzvBaEb"
      );

      setSuccess(true);

      setFormData({
        name: "",
        number: "",
        make: "",
        model: "",
        mfg_year: "",
        variant: "",
        fuel: "",
        transmission: "",
        color: "",
        owner: "",
        mileage: "",
      });

      setTimeout(() => {
        setSuccess(false);
        setShowValuation(false);
      }, 3000);
    } catch (error) {
      console.error("Valuation EmailJS Error:", error);

      alert(
        "Unable to send your valuation request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1b1b1b_0%,#050505_75%)]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}

          <span className="inline-flex rounded-full border border-[#E50914]/30 bg-[#E50914]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#E50914]">
            Vehicle Exchange
          </span>

          {/* Heading */}

          <h2 className="mt-7 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Exchange Your Car
            <br />

            <span className="text-[#E50914]">
              For A Better Drive
            </span>
          </h2>

          {/* Description */}

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Upgrade to your dream car with confidence. Get a fair market value
            for your existing vehicle, enjoy a hassle-free exchange process,
            quick documentation, finance assistance and exclusive dealer
            benefits—all under one roof.
          </p>

          {/* ================= FEATURES ================= */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#E50914]/40 hover:shadow-[0_20px_50px_rgba(229,9,20,0.15)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E50914]/10">
                    <Icon
                      size={24}
                      className="text-[#E50914]"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ================= CTA ================= */}

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Get Free Valuation */}

            <button
              type="button"
              onClick={() => setShowValuation(true)}
              className="inline-flex rounded-full bg-[#E50914] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(229,9,20,0.35)]"
            >
              Get Free Valuation
            </button>

            {/* Talk To Expert */}

            <button
              type="button"
              onClick={() => setShowExpert(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#E50914] hover:bg-white/10"
            >
              Talk to Expert

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* ================= TRUST STRIP ================= */}

          <div className="mt-8 flex flex-wrap gap-6">
            {[
              "Dealer Verified",
              "Transparent Process",
              "Instant Quote",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-gray-300"
              >
                <CheckCircle2
                  size={18}
                  className="text-green-500"
                />

                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative lg:mt-8"
        >
          {/* Image */}

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] shadow-2xl">
            <Image
              src="/images/home/exchange.png"
              alt="Exchange Your Car"
              width={900}
              height={700}
              priority
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[600px]"
            />
          </div>

          {/* Floating Card */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
            }}
            className="absolute -bottom-8 -left-8 hidden rounded-3xl border border-white/10 bg-[#111111] p-6 shadow-2xl lg:block"
          >
            <p className="text-sm text-gray-400">
              Successful Exchanges
            </p>

            <h3 className="mt-2 text-5xl font-bold text-[#E50914]">
              500+
            </h3>

            <p className="mt-2 max-w-[220px] text-sm text-gray-400">
              Happy customers upgraded their cars with Carmotive
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* FREE VALUATION POPUP */}
      {/* ========================================================= */}

      <AnimatePresence>
        {showValuation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              if (!loading) {
                setShowValuation(false);
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-2xl rounded-[30px] border border-white/10 bg-[#111111] p-6 shadow-2xl sm:p-8"
            >
              {/* Close */}

              <button
                type="button"
                onClick={() => setShowValuation(false)}
                disabled={loading}
                aria-label="Close valuation form"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-[#E50914] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X size={20} />
              </button>

              {/* Header */}

              <div className="pr-12">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E50914]">
                  Free Car Valuation
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Get Your Car Valued
                </h3>

                <p className="mt-3 text-gray-400">
                  Share your vehicle details and our team will contact you
                  with the next steps.
                </p>
              </div>

              {/* Form */}

              <form
                onSubmit={handleValuationSubmit}
                className="mt-8 grid gap-5 sm:grid-cols-2"
              >
                {/* Name */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  />
                </div>

                {/* Number */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Number
                  </label>

                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  />
                </div>

                {/* Make */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Make
                  </label>

                  <select
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#151515] px-4 py-3.5 text-white outline-none transition focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  >
                    <option value="">Select Make</option>

                    {makes.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Model */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Model
                  </label>

                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Creta"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  />
                </div>

                {/* Mfg Year */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Mfg Year
                  </label>

                  <input
                    type="number"
                    name="mfg_year"
                    value={formData.mfg_year}
                    onChange={handleChange}
                    required
                    min="1990"
                    max={new Date().getFullYear()}
                    placeholder="e.g. 2022"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  />
                </div>

                {/* Variant */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Variant
                  </label>

                  <input
                    type="text"
                    name="variant"
                    value={formData.variant}
                    onChange={handleChange}
                    required
                    placeholder="e.g. SX(O)"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  />
                </div>

                {/* Fuel */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Fuel
                  </label>

                  <select
                    name="fuel"
                    value={formData.fuel}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#151515] px-4 py-3.5 text-white outline-none transition focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  >
                    <option value="">Select Fuel</option>

                    {fuels.map((fuel) => (
                      <option key={fuel} value={fuel}>
                        {fuel}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Transmission */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Transmission
                  </label>

                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#151515] px-4 py-3.5 text-white outline-none transition focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  >
                    <option value="">
                      Select Transmission
                    </option>

                    {transmissions.map((transmission) => (
                      <option
                        key={transmission}
                        value={transmission}
                      >
                        {transmission}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Color
                  </label>

                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    placeholder="e.g. White"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  />
                </div>

                {/* Owner */}

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Owner
                  </label>

                  <select
                    name="owner"
                    value={formData.owner}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#151515] px-4 py-3.5 text-white outline-none transition focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  >
                    <option value="">
                      Select Owner
                    </option>

                    {owners.map((owner) => (
                      <option key={owner} value={owner}>
                        {owner}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mileage */}

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Mileage
                  </label>

                  <input
                    type="text"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 45,000 km"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/20"
                  />
                </div>

                {/* Success */}

                {success && (
                  <div className="sm:col-span-2 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">
                    <p className="font-semibold text-green-400">
                      Thank you! Your valuation request has been sent.
                    </p>

                    <p className="mt-1 text-sm text-green-500/80">
                      Our team will contact you shortly.
                    </p>
                  </div>
                )}

                {/* Submit */}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#E50914] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(229,9,20,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      "Sending Request..."
                    ) : (
                      <>
                        Get Free Valuation

                        <Send
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* TALK TO EXPERT POPUP */}
      {/* ========================================================= */}

      <AnimatePresence>
        {showExpert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowExpert(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md rounded-[28px] border border-white/10 bg-[#111111] p-8 text-center shadow-2xl"
            >
              {/* Close */}

              <button
                type="button"
                onClick={() => setShowExpert(false)}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition hover:bg-[#E50914] hover:text-white"
              >
                <X size={20} />
              </button>

              {/* Phone Icon */}

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E50914]/10">
                <Phone
                  size={28}
                  className="text-[#E50914]"
                />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#E50914]">
                Talk to an Expert
              </p>

              <h3 className="mt-3 text-3xl font-bold text-white">
                Need Help Choosing a Car?
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Speak with our car experts for help with car selection,
                exchange, finance and the buying process.
              </p>

              {/* Phone Number */}

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-500">
                  Call us directly
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  +91 98881 95553
                </p>
              </div>

              {/* Call Button */}

              <a
                href="tel:+919888195553"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#E50914] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-[0_15px_40px_rgba(229,9,20,0.35)]"
              >
                <Phone size={19} />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}