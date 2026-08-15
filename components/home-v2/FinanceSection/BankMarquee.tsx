"use client";

import Image from "next/image";

const logos = [
  {
    src: "/images/banks/axis.png",
    alt: "Axis Bank",
  },
  {
    src: "/images/banks/bob.svg",
    alt: "Bank of Baroda",
  },
  {
    src: "/images/banks/bom.png",
    alt: "Bank of Maharashtra",
  },
  {
    src: "/images/banks/federal.png",
    alt: "Federal Bank",
  },
  {
    src: "/images/banks/hdfc.jpg",
    alt: "HDFC Bank",
  },
  {
    src: "/images/banks/icici.png",
    alt: "ICICI Bank",
  },
  {
    src: "/images/banks/idfc.png",
    alt: "IDFC FIRST Bank",
  },
  {
    src: "/images/banks/indusland.png",
    alt: "IndusInd Bank",
  },
  {
    src: "/images/banks/kotak.svg",
    alt: "Kotak Mahindra Bank",
  },
  {
    src: "/images/banks/pnb.jpeg",
    alt: "Punjab National Bank",
  },
  {
    src: "/images/banks/sbi.png",
    alt: "State Bank of India",
  },
];

const marqueeLogos = [...logos, ...logos];

export default function BankMarquee() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white py-8 shadow-sm">
      
      {/* Heading */}
      <div className="mb-7 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
          Trusted Banking & NBFC Partners
        </span>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="bank-marquee flex w-max items-center gap-14">

          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="
                flex
                h-[80px]
                w-[190px]
                shrink-0
                items-center
                justify-center
              "
            >
              <div
                className="
                  flex
                  h-[70px]
                  w-[175px]
                  items-center
                  justify-center
                "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={80}
                  sizes="180px"
                  className="
                    block
                    h-auto
                    max-h-[58px]
                    w-auto
                    max-w-[165px]
                    object-contain
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}