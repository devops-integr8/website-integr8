"use client";
import { useState, useEffect, useRef } from "react";

function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-full w-full h-full rounded-full aspect-square "
    >
      <img
        src={src}
        alt={alt}
        className={`
        w-full h-full object-cover
        transition-transform duration-5000 ease-out
        ${visible ? "scale-100" : "scale-150"}
        `}
      />
    </div>
  );
}

export default function CTA() {
  return (
    <section className="relative pt-24 pb-36">
      {/* BOTTOM wave */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path d="M0,80 Q720,0 1440,80 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="w-full flex flex-row items-center">
        {/* Left — image, half bleeds off screen */}
        <div className="w-1/2 flex-shrink-0 flex justify-start">
          <div
            className="
        w-[600px] h-[600px]        
        rounded-full overflow-hidden
        ml-15                  
        flex-shrink-0
        shadow-md shadow-4xl shadow-black/80"
          >
            <ZoomImage src="/images/CTA/cta.png" alt="Integr8 Software" />
          </div>
        </div>

        {/* Right — text, strictly on the right half */}
        <div className="w-1/2 flex flex-col gap-6 px-12 mr-10">
          <h2
            className="text-white font-extrabold text-5xl md:text-6xl uppercase leading-tight text-right"
            style={{
              textShadow:
                "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            Power Your <br /> Business Today
          </h2>
          <p className="text-blue-200 text-base md:text-lg leading-relaxed text-right">
            We provide smart and easy to use software solutions that help
            businesses manage their operations, improve productivity, and grow
            with confidence.
          </p>
          <div className="flex gap-4 mt-2 justify-end">
            <button className="px-6 py-3 border-2 border-white text-white font-semibold text-sm tracking-widest hover:bg-white hover:text-[#224d9a] transition-all duration-200 cursor-pointer">
              INQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
