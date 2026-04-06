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
      className="overflow-hidden rounded-full w-full h-full aspect-square"
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-5000 ease-out ${
          visible ? "scale-100" : "scale-150"
        }`}
      />
    </div>
  );
}

export default function CTA() {
  return (
    <section className="relative pt-12 md:pt-24 pb-32 sm:pb-40">
      <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-0">
        {/* CIRCLE IMAGE */}
        <div className="w-4/5 sm:w-3/5 md:w-1/2 flex-shrink-0 flex justify-center md:justify-start">
          <div className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-none md:w-[600px] md:h-[600px] md:ml-15 aspect-square rounded-full overflow-hidden shadow-md shadow-black/80">
            <ZoomImage src="/images/CTA/cta.png" alt="Integr8 Software" />
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 px-6 sm:px-8 md:px-12 md:mr-10 text-center md:text-right pb-12 md:pb-0">
          <h2
            className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase leading-tight"
            style={{
              textShadow:
                "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            Power Your <br /> Business Today
          </h2>
          <p className="text-blue-200 text-sm sm:text-base md:text-lg leading-relaxed">
            We provide smart and easy to use software solutions that help
            businesses manage their operations, improve productivity, and grow
            with confidence.
          </p>
          <div className="flex gap-4 mt-2 justify-center md:justify-end">
            <button className="px-6 py-3 border-2 border-white text-white font-semibold text-sm tracking-widest hover:bg-white hover:text-[#224d9a] active:bg-white active:text-[#224d9a] transition-all duration-200 cursor-pointer">
              INQUIRE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
