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

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);

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
      console.error("EmailJS ERROR:", error);

      alert(
        "Unable to send your enquiry right now. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        rounded-[32px]
        border border-gray-200
        bg-white
        p-8
        shadow-xl
        transition-colors
        duration-300

        dark:border-white/10
        dark:bg-[#111111]
        dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          rounded-full
          border border-[#E50914]/20
          bg-[#E50914]/5
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#E50914]
        "
      >
        Send an Enquiry
      </span>

      {/* Heading */}

      <h3
        className="
          mt-5
          text-3xl
          font-bold
          text-gray-900

          dark:text-white
        "
      >
        Send Enquiry
      </h3>

      <p
        className="
          mt-4
          leading-8
          text-gray-600

          dark:text-gray-400
        "
      >
        Fill in your details and our experts will contact you shortly.
      </p>

      {/* =====================================================
          FORM
      ===================================================== */}

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="mt-10 space-y-6"
      >
        {/* =================================================
            FULL NAME
        ================================================= */}

        <div>
          <label
            className="
              mb-2
              block
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
            Full Name
          </label>

          <input
            type="text"
            name="from_name"
            required
            placeholder="Enter your full name"
            className="
              w-full
              rounded-2xl
              border border-gray-300
              bg-white
              px-5
              py-4
              text-gray-900
              outline-none
              transition-all

              placeholder:text-gray-400

              focus:border-[#E50914]
              focus:ring-4
              focus:ring-[#E50914]/10

              dark:border-white/10
              dark:bg-white/5
              dark:text-white
              dark:placeholder:text-gray-500
            "
          />
        </div>

        {/* =================================================
            PHONE
        ================================================= */}

        <div>
          <label
            className="
              mb-2
              block
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
            className="
              w-full
              rounded-2xl
              border border-gray-300
              bg-white
              px-5
              py-4
              text-gray-900
              outline-none
              transition-all

              placeholder:text-gray-400

              focus:border-[#E50914]
              focus:ring-4
              focus:ring-[#E50914]/10

              dark:border-white/10
              dark:bg-white/5
              dark:text-white
              dark:placeholder:text-gray-500
            "
          />
        </div>

        {/* =================================================
            EMAIL
        ================================================= */}

        <div>
          <label
            className="
              mb-2
              block
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
            Email Address
          </label>

          <input
            type="email"
            name="reply_to"
            required
            placeholder="Enter your email"
            className="
              w-full
              rounded-2xl
              border border-gray-300
              bg-white
              px-5
              py-4
              text-gray-900
              outline-none
              transition-all

              placeholder:text-gray-400

              focus:border-[#E50914]
              focus:ring-4
              focus:ring-[#E50914]/10

              dark:border-white/10
              dark:bg-white/5
              dark:text-white
              dark:placeholder:text-gray-500
            "
          />
        </div>

        {/* =================================================
            BRAND
        ================================================= */}

        <div>
          <label
            className="
              mb-2
              block
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
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
            className="
              w-full
              rounded-2xl
              border border-gray-300
              bg-white
              px-5
              py-4
              text-gray-900
              outline-none
              transition-all

              focus:border-[#E50914]
              focus:ring-4
              focus:ring-[#E50914]/10

              dark:border-white/10
              dark:bg-[#181818]
              dark:text-white
            "
          >
            <option value="">Choose Brand</option>

            {Object.keys(vehicleData).map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* =================================================
            MODEL
        ================================================= */}

        <div>
          <label
            className="
              mb-2
              block
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
            Select Model
          </label>

          <select
            name="model"
            required
            value={model}
            disabled={!brand}
            onChange={(e) => setModel(e.target.value)}
            className="
              w-full
              rounded-2xl
              border border-gray-300
              bg-white
              px-5
              py-4
              text-gray-900
              outline-none
              transition-all

              focus:border-[#E50914]
              focus:ring-4
              focus:ring-[#E50914]/10

              disabled:cursor-not-allowed
              disabled:bg-gray-100
              disabled:text-gray-400

              dark:border-white/10
              dark:bg-[#181818]
              dark:text-white
              dark:disabled:bg-[#0d0d0d]
              dark:disabled:text-gray-600
            "
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

        {/* =================================================
            MESSAGE
        ================================================= */}

        <div>
          <label
            className="
              mb-2
              block
              font-medium
              text-gray-700

              dark:text-gray-300
            "
          >
            Message
          </label>

          <textarea
            rows={5}
            name="message"
            placeholder="Tell us what you're looking for..."
            className="
              w-full
              resize-none
              rounded-2xl
              border border-gray-300
              bg-white
              px-5
              py-4
              text-gray-900
              outline-none
              transition-all

              placeholder:text-gray-400

              focus:border-[#E50914]
              focus:ring-4
              focus:ring-[#E50914]/10

              dark:border-white/10
              dark:bg-white/5
              dark:text-white
              dark:placeholder:text-gray-500
            "
          />
        </div>

        {/* =================================================
            SUBMIT
        ================================================= */}

        <button
          type="submit"
          disabled={loading}
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#E50914]
            px-6
            py-4
            text-lg
            font-semibold
            text-white
            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-red-700
            hover:shadow-[0_15px_40px_rgba(229,9,20,0.25)]

            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading
            ? "Sending Enquiry..."
            : "Let's Find Your Dream Car"}

          {!loading && (
            <ArrowRight
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          )}
        </button>

        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {success && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              rounded-2xl
              border border-green-200
              bg-green-50
              p-4
              text-center

              dark:border-green-500/20
              dark:bg-green-500/10
            "
          >
            <p
              className="
                font-semibold
                text-green-700

                dark:text-green-400
              "
            >
              ✅ Thank you! Your enquiry has been sent successfully.
            </p>

            <p
              className="
                mt-2
                text-sm
                text-green-600

                dark:text-green-500
              "
            >
              Our team will contact you shortly.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}