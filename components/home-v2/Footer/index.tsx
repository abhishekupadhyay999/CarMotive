"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Brands", href: "#brands" },
  { name: "Featured Cars", href: "#featured-cars" },
  { name: "Finance", href: "#finance" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Buy Premium Cars",
  "Sell Your Car",
  "Car Exchange",
  "Finance Assistance",
  "Insurance",
  "RC Transfer",
];

const socialLinks = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/carmotiveindia?igsh=cTR1OGZwamFvdjB0",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1CaV6sa7BW/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#151515_0%,#050505_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* ================= COMPANY / LINKS / SERVICES ================= */}

        <div className="grid gap-14 lg:grid-cols-3">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <Link
              href="#home"
              className="mb-6 inline-flex items-center"
            >
              <Image
                src="/logo/logo3.png"
                alt="Carmotive India"
                width={220}
                height={70}
                className="h-auto w-[200px] object-contain"
                priority
              />
            </Link>

            <p className="leading-8 text-gray-400">
              Carmotive India is one of Mumbai's trusted destinations
              for buying and selling premium pre-owned cars. We provide
              transparent deals, finance assistance, exchange offers,
              and complete ownership support.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <h3 className="mb-8 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="grid gap-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 transition-all duration-300 hover:translate-x-2 hover:text-[#E50914]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            <h3 className="mb-8 text-xl font-semibold">
              Services
            </h3>

            <div className="grid gap-4">
              {services.map((service) => (
                <p
                  key={service}
                  className="text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-[#E50914]"
                >
                  {service}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= CONTACT & MAP ================= */}

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-8 text-2xl font-semibold">
              Contact Us
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone
                  className="mt-1 text-[#E50914]"
                  size={22}
                />

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <a
                    href="tel:+919888195553"
                    className="transition hover:text-[#E50914]"
                  >
                    +91 98881 95553
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail
                  className="mt-1 text-[#E50914]"
                  size={22}
                />

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <a
                    href="mailto:sales@carmotive.com"
                    className="transition hover:text-[#E50914]"
                  >
                    sales@carmotive.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 text-[#E50914]"
                  size={22}
                />

                <div>
                  <p className="text-sm text-gray-500">
                    Address
                  </p>

                  <p className="text-gray-300">
                    Carmotive India,
                    <br />
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <Clock
                  className="mt-1 text-[#E50914]"
                  size={22}
                />

                <div>
                  <p className="text-sm text-gray-500">
                    Working Hours
                  </p>

                  <p className="text-gray-300">
                    Mon – Sat | 10:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#151515] transition hover:border-[#E50914] hover:bg-[#E50914]"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.184420394984!2d72.8034709!3d19.447613999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ab00021d86e1%3A0xcd86574557684753!2sCarmotive%20India%20(India%E2%80%99s%20Best%20Multibrand%20Car%20Dealer)!5e0!3m2!1sen!2sin!4v1785477821971!5m2!1sen!2sin"
                width="100%"
                height="350"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Carmotive India Location"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Carmotive India.
              All Rights Reserved.
            </p>

            <div className="flex gap-8">
              <Link
                href="#"
                className="transition hover:text-[#E50914]"
              >
                Privacy Policy
              </Link>

              <Link
                href="#"
                className="transition hover:text-[#E50914]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}