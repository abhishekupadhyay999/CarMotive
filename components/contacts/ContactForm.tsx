"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useMemo, useRef, useState } from "react";


const vehicleData: Record<string, string[]> = {
  "Maruti Suzuki": [
    "Ertiga",
    "XL6",
    "Swift",
    "Dzire",
    "Brezza",
    "Baleno",
    "Grand Vitara",
    "Other",
  ],

  Hyundai: [
    "Creta",
    "Venue",
    "Verna",
    "i20",
    "Alcazar",
    "Other",
  ],

  Tata: [
    "Safari",
    "Harrier",
    "Nexon",
    "Punch",
    "Curvv",
    "Altroz",
    "Other",
  ],

  Mahindra: [
    "Scorpio N",
    "XUV700",
    "Thar",
    "XUV 3XO",
    "Bolero",
    "Other",
  ],

  Toyota: [
    "Innova Crysta",
    "Innova Hycross",
    "Fortuner",
    "Urban Cruiser Hyryder",
    "Glanza",
    "Other",
  ],

  Honda: [
    "City",
    "Elevate",
    "Amaze",
    "Other",
  ],

  Kia: [
    "Seltos",
    "Sonet",
    "Carens",
    "Syros",
    "Other",
  ],

  BMW: [
    "3 Series",
    "5 Series",
    "X1",
    "X3",
    "X5",
    "Other",
  ],

  Mercedes: [
    "A-Class",
    "C-Class",
    "E-Class",
    "GLA",
    "GLC",
    "GLE",
    "Other",
  ],

  Audi: [
    "A4",
    "A6",
    "Q3",
    "Q5",
    "Q7",
    "Other",
  ],

  Volvo: [
    "XC40",
    "XC60",
    "XC90",
    "S90",
    "Other",
  ],

  "Land Rover": [
    "Defender",
    "Discovery",
    "Range Rover",
    "Range Rover Sport",
    "Other",
  ],

  Jeep: [
    "Compass",
    "Meridian",
    "Wrangler",
    "Other",
  ],

  BYD: [
    "Atto 3",
    "Seal",
    "eMAX 7",
    "Other",
  ],

  VinFast: [
    "VF6",
    "VF7",
    "VF8",
    "VF9",
    "Other",
  ],
};

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const models = useMemo(() => {
    return vehicleData[brand] || [];
  }, [brand]);

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_pzbzax4",
        "template_ro69vel",
        formRef.current,
        "eUIBMV2tMsvzvBaEb"
      );

      setSuccess(true);

      formRef.current.reset();

      setBrand("");
      setModel("");

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("EmailJS ERROR:",error);
      alert(JSON.stringify(error));
    }

    setLoading(false);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl"
    >
      <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
        Send an Enquiry
      </span>

      <h3 className="mt-5 text-3xl font-bold text-gray-900">
        Send Enquiry 
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        Fill in your details and our experts will contact you shortly.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mt-10 space-y-6"
      >        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            name="from_name"
            required
            placeholder="Enter your full name"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="reply_to"
            required
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Select Brand
          </label>

          <select
            name="brand"
            required
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setModel("");
            }}
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          >
            <option value="">Choose Brand</option>

            {Object.keys(vehicleData).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Model */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Select Model
          </label>

          <select
            name="model"
            required
            value={model}
            disabled={!brand}
            onChange={(e) => setModel(e.target.value)}
            className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100 disabled:bg-gray-100 disabled:text-gray-400"
          >
            <option value="">
              {brand ? "Choose Model" : "Select Brand First"}
            </option>

            {models.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block font-medium text-gray-700">
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            placeholder="Tell us what you're looking for..."
            className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#FF5A1F] focus:ring-4 focus:ring-orange-100"
          />
        </div>        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#FF5A1F] px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#E84A12] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending Enquiry..." : "Let's Find Your Dream Car"}

          {!loading && (
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </button>

        {success && (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-center">
            <p className="font-semibold text-green-700">
              ✅ Thank you! Your enquiry has been sent successfully.
            </p>

            <p className="mt-2 text-sm text-green-600">
              Our team will contact you shortly.
            </p>
          </div>
        )}
      </form>
    </motion.div>
  );
}