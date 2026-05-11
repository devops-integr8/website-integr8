"use client";

import Image from "next/image";

// ─── Industry cards — just provide the src path as a string, no imports needed
const industries = [
  {
    label: "Manufacturing/Production",
    src: "/images/productsErpHero/ManufacturingProduction.png",
  },
  { label: "Cooperatives", src: "/images/productsErpHero/Cooperatives.png" },
  { label: "Lending", src: "/images/productsErpHero/Lending.png" },
  { label: "Construction", src: "/images/productsErpHero/Construction.png" },
  { label: "Real Estate", src: "/images/productsErpHero/RealEstate.png" },
  { label: "Homeowners' Association", src: "/images/productsErpHero/HOA.png" },
  {
    label: "Lease Management",
    src: "/images/productsErpHero/LeaseManagement.png",
  },
  { label: "Commissary", src: "/images/productsErpHero/Commissary.png" },
  { label: "Trading", src: "/images/productsErpHero/Trading.png" },
  { label: "Restaurant", src: "/images/productsErpHero/Restaurant.png" },
  { label: "Manpower Agency", src: "/images/productsErpHero/Manpower.png" },
  { label: "E-Commerce", src: "/images/productsErpHero/Ecommerce.png" },
  { label: "Brokerage", src: "/images/productsErpHero/Brokerage.png" },
  { label: "Importation", src: "/images/productsErpHero/Importation.png" },
  {
    label: "Service Providers",
    src: "/images/productsErpHero/ServiceProvider.png",
  },
];

// Duplicate for seamless infinite loop
const marqueeItems = [...industries, ...industries];

export default function ErpHero() {
  return (
    <section className="relative w-full h-full flex flex-col items-start justify-between overflow-hidden">
      {/* ── Background photo ── */}
      <Image
        src="/images/productsErpHero/Gr8ERPHero.png"
        alt="Gr8 ERP Hero"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* ── Top text ── */}
      <div
        className="relative z-10 flex flex-col items-start text-left px-8 md:px-16 mt-auto mb-auto"
        style={{ paddingTop: "18vh" }}
      >
        <p className="text-white text-xs font-bold tracking-widest uppercase mb-3">
          Gr8 ERP
        </p>
        <h1 className="text-white text-3xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          Tailored for
        </h1>
        <h1 className="text-white text-3xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Your Industry
        </h1>
        <p className="text-white/90 text-base mb-6">
          Priced Right. Affordable. All In One.
        </p>
          <button className="flex items-center gap-2 bg-gradient-to-br from-[#02208C] to-[#0437F2] hover:bg-blue-700 active:scale-95 text-white font-bold mb-10 py-2 px-4 whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 sm:w-4 sm:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            INQUIRE NOW
          </button>
      </div>

      {/* ── Marquee strip ── */}
      <div className="relative z-10 w-full pb-4 overflow-hidden">
        <div className="flex gap-9 w-max animate-marquee">
          {marqueeItems.map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-md overflow-hidden border border-white/10 shadow-lg"
              style={{ width: "280px", height: "180px" }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              {/* Label bar */}
              <div className="absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-3 py-1.5 flex items-center gap-1.5">
                <span className="text-black/80 font-semibold text-[16px] truncate">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee keyframe ── */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
