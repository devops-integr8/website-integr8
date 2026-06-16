"use client";

import { useState, useEffect } from "react";

type HoverCardProps = {
  title: string;
  description: string;
  background: string;
};

const HoverCard = ({ title, description, background }: HoverCardProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleClick = () => {
    if (isMobile) setIsActive((prev) => !prev);
  };

  return (
    <div
      className="group relative w-full h-[300px] sm:h-[340px] md:h-[400px] lg:h-[450px] max-w-full overflow-hidden cursor-pointer rounded-md"
      onClick={handleClick}
    >
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004A80] to-[#5FAFFF]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Watermark Icon */}
      {isMobile ? (
        <div
          className="absolute bg-contain bg-no-repeat transition-all duration-[1200ms] will-change-transform"
          style={{
            backgroundImage: `url(${background})`,
            width: "120%",
            height: "120%",
            top: "-5%",
            left: "-5%",
            opacity: isActive ? 0 : 0.5,
            transform: isActive ? "scale(1.6)" : "scale(1)",
            transformOrigin: "center",
          }}
        />
      ) : (
        // DESKTOP: Tailwind group-hover controls everything
        <div
          className="absolute w-[570px] h-[570px] bg-contain bg-no-repeat
            opacity-50 transition-all duration-[1200ms] will-change-transform
            -translate-x-20 -translate-y-16
            group-hover:scale-[1.6] group-hover:opacity-0"
          style={{ backgroundImage: `url(${background})` }}
        />
      )}

      {/* Content Container */}
      {isMobile ? (
        <div
          className="absolute w-full flex flex-col items-center justify-center px-4 sm:px-6
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            top: isActive ? "45%" : "52%",
            transform: "translateY(-50%)",
          }}
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white tracking-wide text-center mb-4"
            style={{
              textShadow:
                "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            {title}
          </h2>
          <div
            className="w-full max-w-md transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "translateY(0)" : "translateY(4rem)",
            }}
          >
            <p className="text-center text-white/90 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="absolute top-[52%] -translate-y-1/2 w-full flex flex-col items-center justify-center px-10 lg:px-16
            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:top-[45%]"
        >
          <h2
            className="text-5xl font-bold text-white tracking-wide text-center mb-4"
            style={{
              textShadow:
                "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            {title}
          </h2>
          <div
            className="w-full max-w-md transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              opacity-0 translate-y-16
              group-hover:opacity-100 group-hover:translate-y-0"
          >
            <p className="text-center text-white/90 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      )}

      {/* Tap hint for mobile only */}
      {isMobile && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <span
            className="text-white/60 text-xs transition-opacity duration-300"
            style={{ opacity: isActive ? 0 : 1 }}
          >
            Tap to reveal
          </span>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
