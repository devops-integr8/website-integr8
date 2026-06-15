"use client";
import { useState, useRef } from "react";

interface Logo {
  id: number;
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { id: 1, src: "/images/client-logos/Hr.png", alt: "HR Network Inc" },
  { id: 2, src: "/images/client-logos/Barrio.png", alt: "Barrio" },
  { id: 3, src: "/images/client-logos/Breighton.png", alt: "Breighton" },
  { id: 4, src: "/images/client-logos/Baliwag.png", alt: "Baliwag" },
  { id: 5, src: "/images/client-logos/Clean.png", alt: "Clean" },
  { id: 6, src: "/images/client-logos/CoopUB.png", alt: "CoopUB" },
  { id: 7, src: "/images/client-logos/Crimson.png", alt: "Crimson" },
  { id: 8, src: "/images/client-logos/Darbc.png", alt: "Darbc" },
  { id: 9, src: "/images/client-logos/Dlsud.png", alt: "Dlsud" },
  { id: 10, src: "/images/client-logos/Epeople.png", alt: "Epeople" },
  { id: 11, src: "/images/client-logos/Gu.png", alt: "Gu" },
  { id: 12, src: "/images/client-logos/Ishida.png", alt: "Ishida" },
  { id: 13, src: "/images/client-logos/KaiMall.png", alt: "KaiMall" },
  { id: 14, src: "/images/client-logos/Lobo.png", alt: "Lobo" },
  { id: 15, src: "/images/client-logos/Malalim.png", alt: "Malalim" },
  { id: 16, src: "/images/client-logos/MetroTurf.png", alt: "MetroTurf" },
  { id: 17, src: "/images/client-logos/Polaris.png", alt: "Polaris" },
  { id: 18, src: "/images/client-logos/Polyserve.png", alt: "Polyserve" },
  { id: 19, src: "/images/client-logos/Raquel.png", alt: "Raquel" },
  { id: 20, src: "/images/client-logos/Rldc.png", alt: "Rldc" },
  { id: 21, src: "/images/client-logos/Vegefoods.png", alt: "Vegefoods" },
  { id: 22, src: "/images/client-logos/VillaMedica.png", alt: "VillaMedica" },
  { id: 23, src: "/images/client-logos/Zamba.png", alt: "Zamba" },
];

const LogoRow = ({
  logos,
  direction,
  isPaused,
  speed = 35,
  onTap,
}: {
  logos: Logo[];
  direction: "left" | "right";
  isPaused: boolean;
  speed?: number;
  onTap: () => void;
}) => {
  const isTouching = useRef(false);
  const duplicated = [...logos, ...logos];

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={() => !isTouching.current && onTap()}
      onMouseLeave={() => !isTouching.current && onTap()}
      onTouchStart={() => {
        isTouching.current = true;
        onTap();
      }}
    >
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-10 ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? "paused" : "running",
          width: "fit-content",
        }}
      >
        {duplicated.map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            className="flex-shrink-0 w-52 h-36 flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  const [pausedRow, setPausedRow] = useState<number | null>(null);

  const split1 = logos.slice(0, 9);
  const split2 = logos.slice(9, 16);
  const split3 = logos.slice(16);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-y-14">

        {/* Title */}
        <div className="flex flex-col items-center gap-y-5 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#004A80]">
            Trusted By Companies Nationwide
          </h2>
          <div className="w-full md:w-[45rem] h-[1px] bg-[#0818a8] rounded-full" />
        </div>

        {/* 3 Rows */}
        <div className="w-full space-y-6">
          <LogoRow
            logos={split1}
            direction="right"
            isPaused={pausedRow === 0}
            onTap={() => setPausedRow(pausedRow === 0 ? null : 0)}
          />
          <LogoRow
            logos={split2}
            direction="left"
            isPaused={pausedRow === 1}
            onTap={() => setPausedRow(pausedRow === 1 ? null : 1)}
          />
          <LogoRow
            logos={split3}
            direction="right"
            isPaused={pausedRow === 2}
            onTap={() => setPausedRow(pausedRow === 2 ? null : 2)}
          />
        </div>

        {/* Description (fixed placement) */}
        <p className="text-sm lg:text-base text-gray-500 text-center max-w-2xl leading-relaxed">
          From cooperatives and development firms to retail chains and service
          providers — we&apos;re proud to partner with a diverse range of
          organizations across the Philippines.
        </p>
      </div>
    </section>
  );
};

export default Clients;