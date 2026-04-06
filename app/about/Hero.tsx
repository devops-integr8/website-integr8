"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [navHeight, setNavHeight] = useState(64); // 64px fallback

  useEffect(() => {
    const nav = document.querySelector("[data-navbar]") as HTMLElement;
    if (nav) setNavHeight(nav.offsetHeight);
  }, []);

  return (
    <div
      className="relative w-full px-6 md:px-12 lg:px-16 overflow-hidden"
      style={{ height: `calc(100dvh - ${navHeight}px)` }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/AboutHero.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-1/2 md:top-[60%] -translate-y-1/2 left-6 md:left-12 lg:left-24 max-w-xs sm:max-w-sm md:max-w-lg xl:max-w-xl space-y-6 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
          <span className="block text-white/40 -mb-2 sm:-mb-5 md:-mb-6 lg:-mb-7">
            One System.
          </span>
          <span className="block text-white/60 -mb-2 sm:-mb-5 md:-mb-6 lg:-mb-7">
            Total Control.
          </span>
          <span className="block text-white font-black">Gr8 Results.</span>
        </h1>
        <p className="mt-4 md:mt-8 text-sm md:text-base text-white/80 max-w-xs md:max-w-lg leading-relaxed">
          Explore Gr8Books — an integrated cloud and desktop ERP accounting
          system designed to combine financial operations, enhance reporting
          accuracy, and streamline business workflows, all in one platform.
        </p>
      </div>
    </div>
  );
}
