"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-[#080d1f]">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/HomeHero.mp4" type="video/mp4" />
      </video>

      {/* Geometric diamond grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(30, 80, 220, 0.18) 0px,
              rgba(30, 80, 220, 0.18) 1px,
              transparent 1px,
              transparent 80px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(30, 80, 220, 0.18) 0px,
              rgba(30, 80, 220, 0.18) 1px,
              transparent 1px,
              transparent 80px
            )
          `,
        }}
      />

      {/* Subtle dark vignette on edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(4, 8, 20, 0.7) 100%)",
        }}
      />

      {/* Hero content */}
      <div
        className={`relative z-10 flex flex-col h-full px-8 md:px-16 lg:px-24 transition-opacity duration-700 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Headlines sit just below true center */}
        <div className="flex-1 flex items-center pt-24">
          {/* Main Headlines */}
          <div className="flex flex-col gap-0 w-full">
            {/* Line 1 — left aligned */}
            <h1
              className="text-white font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "80px",
                animation: mounted
                  ? "slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
                  : "none",
              }}
            >
              FLEXIBLE SOLUTIONS.
            </h1>

            {/* Line 2 — right aligned */}
            <h1
              className="text-white font-extrabold leading-none tracking-tight text-right"
              style={{
                fontSize: "80px",
                animation: mounted
                  ? "slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s both"
                  : "none",
              }}
            >
              BUILT TO INTEGR
              <span style={{ color: "#2563EB" }}>8</span>.
            </h1>
          </div>
        </div>

        {/* Subtitle — bottom right */}
        <div className="flex justify-end pb-16">
          <p
            className="text-white/80 font-normal text-right"
            style={{ fontSize: "33px" }}
          >
            Priced Right. Adaptable. All in One.
          </p>
        </div>
      </div>
    </div>
  );
}