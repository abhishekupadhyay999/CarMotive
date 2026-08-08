"use client";

import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { SITE } from "@/lib/site";
export default function TopBar() {
  return (
    <div className="hidden lg:block border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">

        {/* Left */}

        <div className="flex items-center gap-6 text-sm text-gray-300">

          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 transition hover:text-[#E50914]"
          >
            <Phone size={14} />
            +91 {SITE.phone}
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 transition hover:text-[#E50914]"
          >
            <Mail size={14} />
            {SITE.email}
          </a>

        </div>

        {/* Right */}

        <div className="flex items-center gap-6 text-sm text-gray-300">

          <div className="flex items-center gap-2">
            <MapPin size={14} />
            Virar (West), Maharashtra
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={14} />
            Mon - Sun | 10:00 AM - 8:00 PM
          </div>

        </div>

      </div>
    </div>
  );
}