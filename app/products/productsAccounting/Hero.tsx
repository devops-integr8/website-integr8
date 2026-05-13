"use client";
import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [navHeight] = useState(64);

  return (
    <div
      className="relative h-[100dvh] w-full overflow-hidden"
    >
      <img
        src="/products/AccountingBackground.png"
        alt="City skyline"
        className="absolute inset-0 w-full h-full object-cover"
      />
<div className="absolute inset-0 bg-gradient-to-b from-[#0437F2]/50 to-black/40  " />

      <div className="absolute bottom-10 md:bottom-16 lg:bottom-20 right-0 px-6 md:px-12 lg:px-16 text-white">

      {/* ── Top text ── */}
      <div
       className="relative z-10 flex flex-col items-end text-right pl-8 pr-0 md:pl-16 md:pr-0 mt-auto mb-auto"
        style={{ paddingTop: "18vh" }}
      >
        <p className="text-white text-xs font-extrabold tracking-widest uppercase mb-3">
          Gr8 Books Accounting Software
        </p>
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        One Place for All Your
        </h1>
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
         Business Finances
        </h1>
        <p className="text-white/90 text-base font-semibold mb-6">
       Gr8Books keeps your records, transactions, and reports organized so you <br /> always have a clear picture of your finances
        </p>

     <Link href= "/contactUs" 
     className="flex items-center gap-2 bg-gradient-to-br from-[#02208C] to-[#0437F2] text-white font-bold mb-10 py-3 px-6 whitespace-nowrap cursor-pointer transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-blue-500/40">
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
        </Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;