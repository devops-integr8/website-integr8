"use client";

import Image from "next/image";
import { useState } from "react";
import bgImage from "@/public/products/erpbg.png";
import image1 from "@/public/products/cooperative.png";
import image2 from "@/public/products/construcmdl.png";
import image3 from "@/public/products/payrollmdl.png";
import image4 from "@/public/products/lendingmdl.png";
// ─── Data ─────────────────────────────────────────────────────────────────────
const industries = [
  {
    label: "Manufacturing/Production",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: image2,
  },
  {
    label: "Cooperatives",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: image1,
  },
  {
    label: "Lending",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: image4,
  },
  {
    label: "Payroll",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    image: image3,
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────
// "hidden" is the new 4th state for any card that isn't left/center/right
type CardPosition = "left" | "center" | "right" | "hidden";

// ─── Style Function ───────────────────────────────────────────────────────────
// Now takes `direction` so hidden cards park on the correct side
// This is what keeps the animation smooth with 4+ cards
function getStyle(position: CardPosition, direction: "left" | "right"): React.CSSProperties {
  const shared: React.CSSProperties = {
    position: "absolute",
    transition: "all 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    willChange: "transform, opacity, width, height",
    transformOrigin: "bottom center",
    borderRadius: "16px",
    overflow: "hidden",
  };

  // Hidden cards park themselves on the same side as the travel direction
  // They are invisible (opacity:0) but already in position
  // So when they rotate into view they animate from the correct edge
  if (position === "hidden") {
    return {
      ...shared,
      left: "50%",
      width: "clamp(140px, 26vw, 400px)",
      height: "clamp(120px, 22vw, 280px)",
      transform: direction === "right"
        ? "translateX(60%) translateY(100px) rotate(20deg) scale(0.3)"
        : "translateX(-160%) translateY(100px) rotate(-20deg) scale(0.3)",
      zIndex: 0,
      opacity: 0,
      pointerEvents: "none",
    };
  }

  if (position === "center") {
    return {
      ...shared,
      left: "50%",
      width: "clamp(200px, 38vw, 500px)",
      height: "clamp(200px, 22vw, 380px)",
      transform: "translateX(-50%) translateY(20px) rotate(0deg)",
      zIndex: 20,
      opacity: 1,
      cursor: "default",
      boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
    };
  }

  if (position === "left") {
    return {
      ...shared,
      left: "50%",
      width: "clamp(140px, 26vw, 400px)",
      height: "clamp(120px, 22vw, 280px)",
      transform: "translateX(-160%) translateY(100px) rotate(-20deg)",
      zIndex: 10,
      opacity: 1,
      cursor: "pointer",
      boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
    };
  }

  // right
  return {
    ...shared,
    left: "50%",
    width: "clamp(140px, 26vw, 400px)",
    height: "clamp(120px, 22vw, 280px)",
    transform: "translateX(60%) translateY(100px) rotate(20deg)",
    zIndex: 10,
    opacity: 1,
    cursor: "pointer",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
  };
}

// ─── Component ────────────────────────────────────────────────────────────────
const Hero = () => {
  const total = industries.length;
  const [centerIndex, setCenterIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right"); // ✅ NEW

  const leftIndex  = (centerIndex - 1 + total) % total;
  const rightIndex = (centerIndex + 1) % total;

  // ✅ Now returns 4 possible positions including "hidden"
  const getPosition = (i: number): CardPosition => {
    if (i === centerIndex) return "center";
    if (i === leftIndex)   return "left";
    if (i === rightIndex)  return "right";
    return "hidden";
  };

  const handleClick = (i: number) => {
    if (isAnimating || i === centerIndex) return;
    setIsAnimating(true);

    // ✅ Set direction BEFORE setCenterIndex so style gets correct direction
    if (i === leftIndex)  setDirection("left");
    if (i === rightIndex) setDirection("right");

    setCenterIndex(i);
    setTimeout(() => setIsAnimating(false), 560);
  };

  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-between overflow-hidden pt-16 pb-0">

      {/* BACKGROUND */}
      <Image src={bgImage} alt="Hero Background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/55" />

      {/* TOP TEXT */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-2">
        <p className="text-white/70 text-xs tracking-widest uppercase mb-3">Gr8 ERP</p>
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-tight">Tailored for</h1>
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold italic leading-tight mb-6 sm:mb-8">
          YOUR INDUSTRY
        </h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          INQUIRE NOW
        </button>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative z-10 w-full"
        style={{ height: "clamp(240px, 40vw, 440px)" }}
      >
        {industries.map((card, i) => {
          const position = getPosition(i);
          const isCenter = position === "center";

          return (
            <div
              key={card.label}
              // ✅ Hidden cards are not clickable
              onClick={() => position !== "hidden" && handleClick(i)}
              style={getStyle(position, direction)} // ✅ Pass direction
            >
              <Image src={card.image} alt={card.label} fill className="object-cover" />

              <div className={`absolute inset-0 ${isCenter ? "bg-white/5" : "bg-black/20"}`} />

              {isCenter ? (
                <div className="absolute top-0 left-0 right-0 bg-white flex items-center gap-2 px-4 py-3 shadow-md">
                  {card.icon}
                  <span className="text-black font-bold text-sm sm:text-base">{card.label}</span>
                </div>
              ) : (
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex items-center gap-1 sm:gap-2 bg-white/95 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow">
                  {card.icon}
                  <span className="text-black font-bold text-xs sm:text-sm">{card.label}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* DOT INDICATORS */}
      <div className="relative z-10 flex items-center gap-2">
        {industries.map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="relative rounded-full overflow-hidden transition-all duration-500"
            style={{
              height: "4px",
              width: i === centerIndex ? "24px" : "8px",
              background: i === centerIndex ? "white" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* BOTTOM TEXT */}
      <div className="relative z-10 pb-6 sm:pb-8 text-center px-4">
        <p className="text-white text-xs max-w-xs sm:max-w-lg mx-auto">
          Each edition is purpose-built with the modules, workflows, and compliance features your specific industry demands.
        </p>
      </div>

    </section>
  );
};

export default Hero;