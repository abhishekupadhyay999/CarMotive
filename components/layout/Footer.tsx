"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#111827] text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF5A1F]/20 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <Image
              src="/logo/logo2.png"
              alt="Carmotive India"
              width={180}
              height={70}
            />

            <p className="mt-6 leading-8 text-gray-400">
              India's trusted multi-brand car dealership helping
              customers drive home their dream cars with complete
              transparency and premium service.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://wa.me/919888195553"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all hover:bg-[#25D366] hover:scale-110"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all hover:bg-[#E1306C] hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all hover:bg-[#1877F2] hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.google.com/search?sxsrf=APpeQnvKxB9EhFfhKavpxnqo3yAHYkiHow:1784569971883&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_50L--Z_jtN_-f_uFtTrti-zI-w1gka1WQ8g00bU0nU9qJ2BA1vQvHqihUReQpQnWDQKjA_mbvQO0tR-xgjPn4dwtA9RN7JIuxhsn1PtM0MTSVwAMRG-CMkjTSVcsAISUYfuH4aX7HdG_a1Bp171znYTlDiK&q=Carmotive+India+%28India%E2%80%99s+Best+Multibrand+Car+Dealer%29+Reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all hover:bg-[#4285F4] hover:scale-110"
              >
                <FaGoogle size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <Link href="#home" className="hover:text-[#FF5A1F]">
                Home
              </Link>

              <Link href="#about" className="hover:text-[#FF5A1F]">
                About
              </Link>

              
              <Link href="#brands" className="hover:text-[#FF5A1F]">
                Brands
              </Link>

              <Link href="#contact" className="hover:text-[#FF5A1F]">
                Contact
              </Link>

            </div>

          </div>

          {/* Brands */}

          <div>

            <h3 className="text-xl font-bold">
              Popular Brands
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">

              <span>Toyota</span>
              <span>Mahindra</span>
              <span>Tata</span>
              <span>Hyundai</span>
              <span>Kia</span>
              <span>Honda</span>
              <span>BMW</span>
              <span>Mercedes-Benz</span>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold">
              Contact Us
            </h3>

            <div className="mt-6 space-y-6">

              <div className="flex gap-3">

                <Phone
                  size={20}
                  className="mt-1 text-[#FF5A1F]"
                />

                <div className="text-gray-400">

                  <a
                    href="tel:+919888195553"
                    className="block hover:text-[#FF5A1F]"
                  >
                    +91 98881 95553
                  </a>

                  <a
                    href="tel:+919888295553"
                    className="hover:text-[#FF5A1F]"
                  >
                    +91 98882 95553
                  </a>

                </div>

              </div>

              <div className="flex gap-3">

                <Mail
                  size={20}
                  className="mt-1 text-[#FF5A1F]"
                />

                <a
                  href="mailto:sales@carmotiveindia.com"
                  className="text-gray-400 hover:text-[#FF5A1F]"
                >
                  sales@carmotiveindia.com
                </a>

              </div>

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="mt-1 text-[#FF5A1F]"
                />

                <p className="text-gray-400">
                  Shop No. B-4/5/6,
                  <br />
                  Anora Residency,
                  <br />
                  Sahayog Hospital Road,
                  <br />
                  Virar (West),
                  <br />
                  Maharashtra - 401303
                </p>

              </div>

              <div className="flex gap-3">

                <Clock3
                  size={20}
                  className="mt-1 text-[#FF5A1F]"
                />

                <div className="text-gray-400">
                  <p>Mon - Sat</p>
                  <p>10:00 AM - 8:00 PM</p>

                  <p className="mt-2">Sunday</p>
                  <p>10:00 AM - 7:00 PM</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} <strong>Carmotive India</strong>.
            All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="rounded-full bg-[#FF5A1F] p-4 transition-all hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>

    </footer>
  );
}