"use client";

import Image from "next/image";
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
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#FF5A1F]/20 blur-[170px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#FF5A1F]/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Company */}

          <div>

            <Image
              src="/logo/logo2.png"
              alt="Carmotive India"
              width={220}
              height={90}
              className="h-auto w-52"
            />

            <p className="mt-6 max-w-lg leading-8 text-gray-400">
              Carmotive India is your trusted multi-brand car dealership,
              helping customers drive home their dream cars with transparent
              pricing, easy finance solutions and premium customer service.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://wa.me/919888195553"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-[#25D366]"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/carmotiveindia?igsh=cTR1OGZwamFvdjB0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-[#E1306C]"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1CaV6sa7BW/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-[#1877F2]"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.google.com/search?q=Carmotive+India"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-[#4285F4]"
              >
                <FaGoogle size={18} />
              </a>

            </div>

          </div>
                    {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold">
              Contact Us
            </h3>

            <div className="mt-2 h-1 w-12 rounded-full bg-[#FF5A1F]" />

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <Phone className="mt-1 text-[#FF5A1F]" />

                <div className="text-gray-400">
                  <a href="tel:+919888195553" className="block hover:text-[#FF5A1F]">
                    +91 98881 95553
                  </a>

                  <a href="tel:+919888295553" className="hover:text-[#FF5A1F]">
                    +91 98882 95553
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 text-[#FF5A1F]" />

                <a
                  href="mailto:sales@carmotiveindia.com"
                  className="text-gray-400 hover:text-[#FF5A1F]"
                >
                  sales@carmotiveindia.com
                </a>
              </div>

              <div className="flex gap-4">
                <MapPin className="mt-1 text-[#FF5A1F]" />

                <p className="leading-7 text-gray-400">
                  Shop No. B-4/5/6
                  <br />
                  Anora Residency
                  <br />
                  Sahayog Hospital Road
                  <br />
                  Virar (West)
                  <br />
                  Maharashtra - 401303
                </p>
              </div>

              <div className="flex gap-4">
                <Clock3 className="mt-1 text-[#FF5A1F]" />

                <div className="text-gray-400">
                  <p>Mon - Sat</p>
                  <p>10:00 AM – 8:00 PM</p>

                  <p className="mt-2">Sunday</p>
                  <p>10:00 AM – 7:00 PM</p>
                </div>
              </div>

            </div>

          </div>

        </div>
                {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-center text-gray-400 md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                Carmotive India
              </span>
              . All Rights Reserved.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="rounded-full bg-[#FF5A1F] p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-orange-500/40"
            >
              <ArrowUp size={20} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}