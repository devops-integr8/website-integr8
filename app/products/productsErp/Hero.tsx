"use client";

import Image from "next/image";
import { useState } from "react";
import bgImage from "@/public/products/erpbg.png";
import image1 from "@/public/products/cooperative.png";
import image2 from "@/public/products/construcmdl.png";
import image3 from "@/public/products/payrollmdl.png";
import image4 from "@/public/products/lendingmdl.png";
import image5 from "@/public/products/Rectangle 198.png";
import image6 from "@/public/products/Rectangle 354.png";
import image7 from "@/public/products/hoamdl.png";
import image8 from "@/public/products/Rectangle 355.png";
import image9 from "@/public/products/Rectangle 358.png";
import image10 from "@/public/products/trading.png";
import image11 from "@/public/products/Rectangle 370.png";
import image12 from "@/public/products/Rectangle 360.png";
import image13 from "@/public/products/Rectangle 368.png";
import image14 from "@/public/products/Rectangle 374.png";
import image15 from "@/public/products/Rectangle 363.png";
import image16 from "@/public/products/Rectangle 376.png";

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

  {
  label: "Construction",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
  ),
  image: image5,
},

 {
  label: "Real Estate",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 19.5A4.5 4.5 0 0111.25 15h.018A4.5 4.5 0 0115.75 19.5" />
</svg>
  ),
  image: image6,
},
 {
  label: "Homeowners’ Association",
  icon: (
   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>
  ),
  image: image7,
},

 {
  label: "Property Leasing",
  icon: (
   <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>
  ),
  image: image8,
},

{
  label: "Commissary Module",
  icon: (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>
  ),
  image: image9,
},

{
  label: "Trading",
  icon: (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>
  ),
  image: image10,
},

{
  label: "Restaurant",
  icon: (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
</svg>

  ),
  image: image11,
},

{
  label: "Manpower Agency",
  icon: (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
  ),
  image: image12,
},

{
  label: "E-Commerce",
  icon: (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
  ),
  image: image13,
},

{
  label: "Brokerage",
  icon: (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
</svg>
  ),
  image: image14,
},

{
  label: "Importation",
  icon: (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
  ),
  image: image15,
},

{
  label: "Service Providers",
  icon: (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

  ),
  image: image16,
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