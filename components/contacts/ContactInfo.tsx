"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Card */}
      <motion.div
        whileHover={{ y: -5 }}
        className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg"
      >
        <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#FF5A1F]">
          Visit Our Showroom
        </span>

        <h3 className="mt-5 text-3xl font-bold text-gray-900">
          We're Ready To Help You
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Whether you're looking for your first car or upgrading to your
          dream vehicle, our experts are here to guide you at every step.
        </p>

        {/* Phone */}
        <div className="mt-8 flex items-start gap-4">
          <div className="rounded-2xl bg-orange-100 p-4">
            <Phone className="text-[#FF5A1F]" size={24} />
          </div>

          <div>
            <p className="font-semibold text-gray-900">Call Us</p>

            <a
              href="tel:+919888195553"
              className="mt-1 block text-gray-600 hover:text-[#FF5A1F]"
            >
              +91 98881 95553
            </a>

            <a
              href="tel:+919888295553"
              className="block text-gray-600 hover:text-[#FF5A1F]"
            >
              +91 98882 95553
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="mt-6 flex items-start gap-4">
          <div className="rounded-2xl bg-green-100 p-4">
            <MessageCircle className="text-green-600" size={24} />
          </div>

          <div>
            <p className="font-semibold text-gray-900">WhatsApp</p>

            <a
              href="https://wa.me/919888195553"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-gray-600 hover:text-green-600"
            >
              Chat with us instantly
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="mt-6 flex items-start gap-4">
          <div className="rounded-2xl bg-orange-100 p-4">
            <Mail className="text-[#FF5A1F]" size={24} />
          </div>

          <div>
            <p className="font-semibold text-gray-900">Email</p>

            <a
              href="mailto:sales@carmotiveindia.com"
              className="mt-1 block text-gray-600 hover:text-[#FF5A1F]"
            >
              sales@carmotiveindia.com
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6 flex items-start gap-4">
          <div className="rounded-2xl bg-orange-100 p-4">
            <MapPin className="text-[#FF5A1F]" size={24} />
          </div>

          <div>
            <p className="font-semibold text-gray-900">Showroom Address</p>

            <p className="mt-1 leading-7 text-gray-600">
              Shop No. B-4/5/6,
              <br />
              Anora Residency,
              <br />
              Sahayog Hospital Road,
              <br />
              Jakat Naka,
              <br />
              Virar (West),
              <br />
              Maharashtra - 401303
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-6 flex items-start gap-4">
          <div className="rounded-2xl bg-orange-100 p-4">
            <Clock3 className="text-[#FF5A1F]" size={24} />
          </div>

          <div>
            <p className="font-semibold text-gray-900">Business Hours</p>

            <p className="mt-1 text-gray-600">
              Monday – Saturday
            </p>

            <p className="text-gray-600">
              10:00 AM – 8:00 PM
            </p>

            <p className="mt-2 text-gray-600">
              Sunday
            </p>

            <p className="text-gray-600">
              10:00 AM – 7:00 PM
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://share.google/9ZoOsji7bdKA8AEXB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5A1F] px-6 py-4 font-semibold text-white transition hover:bg-[#E84A12]"
          >
            Get Directions
            <ArrowUpRight size={18} />
          </a>

          <a
            href="https://wa.me/919888195553"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-4 font-semibold text-gray-800 transition hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
          >
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}