"use client";
import { useState } from "react";

const Hero = () => {
  const [navHeight] = useState(64);

  return (
    <div
     className="relative h-[100dvh] w-full overflow-hidden"
    >
      <img
        src="/products/OnyxHeroBackground.png"
        alt="City skyline"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0437F2]/30 to-black/20  " />

      <div className="absolute bottom-10 md:bottom-16 lg:bottom-20 w-full px-6 md:px-12 lg:px-16 text-white">
        
        <p className="pb-3 font-bold">ONYX POS</p>

        
        <div className="flex flex-col items-start gap-2 md:gap-3 max-w-xl">
          
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
            Sell Smarter With Everything Connected
          </h1>

          <p className="text-xs sm:text-sm md:text-base max-w-lg leading-relaxed">
            ONYX keeps your sales, inventory, and finances in sync —< br/> automatically, in real time.
          </p>

          <button className="flex items-center gap-2 bg-gradient-to-br from-[#02208C] to-[#0437F2] hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 whitespace-nowrap">
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
      </div>
    </div>
  );
};

export default Hero;