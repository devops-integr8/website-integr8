"use client";
import { useState, useRef } from "react";

interface Logo {
  id: number;
  src: string;
  alt: string;
}

interface LogoRowProps {
  logos: Logo[];
  direction: "left" | "right";
  speed?: number;
  isPaused: boolean;
  onTap: () => void;
}

const LogoRow = ({
  logos,
  direction,
  speed = 30,
  isPaused,
  onTap,
}: LogoRowProps) => {
  const isTouching = useRef(false);

  const duplicatedLogos = [...logos, ...logos, ...logos];

  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    isTouching.current = true;
    onTap();
  };

  return (
    <div
      className="relative overflow-hidden py-1"
      onMouseEnter={() => {
        if (!isTouching.current) onTap();
      }}
      onMouseLeave={() => {
        if (!isTouching.current) onTap();
      }}
      onTouchStart={handleTouchStart}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-6 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? "paused" : "running",
          width: "fit-content",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 w-52 sm:w-40 md:w-56 h-40 sm:h-28 md:h-36 flex items-center justify-center px-2 transition-transform duration-300 hover:scale-150 cursor-pointer"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  const [pausedRow, setPausedRow] = useState<number | null>(null);

  const handleTap = (rowIndex: number) => {
    setPausedRow((prev) => (prev === rowIndex ? null : rowIndex));
  };

  const row1Logos: Logo[] = [
    { id: 1, src: "/images/client-logos/Hr.png", alt: "HR Network Inc" },
    { id: 2, src: "/images/client-logos/logo-2.png", alt: "Barrio" },
    { id: 3, src: "/images/client-logos/logo-0.png", alt: "Breighton" },
    { id: 4, src: "/images/client-logos/logo-1.png", alt: "Baliwag" },
    { id: 6, src: "/images/client-logos/CoopUB.png", alt: "CoopUB" },
    { id: 7, src: "/images/client-logos/Crimson.png", alt: "Crimson" },
    { id: 8, src: "/images/client-logos/Darbc.png", alt: "Darbc" },
    { id: 9, src: "/images/client-logos/Dlsud.png", alt: "Dlsud" },
  ];

  const row2Logos: Logo[] = [
    { id: 10, src: "/images/client-logos/Epeople.png", alt: "Epeople" },
    { id: 11, src: "/images/client-logos/Gu.png", alt: "Gu" },
    { id: 13, src: "/images/client-logos/Ishida.png", alt: "Ishida" },
    { id: 14, src: "/images/client-logos/KaiMall.png", alt: "KaiMall" },
    { id: 15, src: "/images/client-logos/Lobo.png", alt: "Lobo" },
    { id: 16, src: "/images/client-logos/Malalim.png", alt: "Malalim" },
    { id: 17, src: "/images/client-logos/MetroTurf.png", alt: "MetroTurf" },
  ];

  const row3Logos: Logo[] = [
    { id: 18, src: "/images/client-logos/Polaris.png", alt: "Polaris" },
    { id: 19, src: "/images/client-logos/Polyserve.png", alt: "Polyserve" },
    { id: 20, src: "/images/client-logos/Precast.png", alt: "Precast" },
    { id: 21, src: "/images/client-logos/Raquel.png", alt: "Raquel" },
    { id: 22, src: "/images/client-logos/Rldc.png", alt: "Rldc" },
    { id: 23, src: "/images/client-logos/Vegefoods.png", alt: "Vegefoods" },
    { id: 24, src: "/images/client-logos/VillaMedica.png", alt: "VillaMedica" },
    { id: 25, src: "/images/client-logos/Zamba.png", alt: "Zamba" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Header image */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden bg-gray-900">
        <img
          src="/images/client-logos/ClientsHeader.png"
          alt="City skyline"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-8">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight">
            POWERING BUSINESSES
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide mt-1 sm:mt-2 leading-tight">
            ACROSS INDUSTRIES
          </h2>
        </div>
      </div>

      {/* Logo marquee rows */}
      <div className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoRow
            logos={row1Logos}
            direction="right"
            speed={35}
            isPaused={pausedRow === 0}
            onTap={() => handleTap(0)}
          />
          <LogoRow
            logos={row2Logos}
            direction="left"
            speed={40}
            isPaused={pausedRow === 1}
            onTap={() => handleTap(1)}
          />
          <LogoRow
            logos={row3Logos}
            direction="right"
            speed={35}
            isPaused={pausedRow === 2}
            onTap={() => handleTap(2)}
          />
        </div>
      </div>
      <div className="py-6 md:py-8" onTouchStart={() => {}}></div>
      <div
        className="w-full bg-white"
        onTouchStart={() => setPausedRow(null)}
      ></div>
    </div>
  );
};

export default Clients;
