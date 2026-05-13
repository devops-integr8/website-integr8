"use client";
import { useEffect, useRef, useState } from "react";

function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setZoomed(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-center justify-center">
      <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[640px] lg:h-[640px] rounded-full border border-solid border-black overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover repeat-infinite transition-transform duration-[5000ms] ease-out ${zoomed ? "scale-100" : "scale-125"}`}
        />
      </div>
    </div>
  );
}

export default function CompanyEdge() {
  return (
    <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-[#0818a8]">
            WHAT MAKES US DIFFERENT
          </h2>
          <div className="space-y-8 sm:space-y-10">
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-extrabold uppercase text-sm mb-2 text-[#0818a8]">
                Built for your industry, not just any business
              </h4>
              <p className="text-black/60 font-semibold text-sm sm:text-base">
                We don't offer generic software. Our ERP solutions are designed
                to meet the real-world demands of cooperatives, trading
                companies, and growing enterprises.
              </p>
            </div>
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-extrabold uppercase text-sm mb-2 text-[#0818a8]">
                Implementation done right
              </h4>
              <p className="text-black/60 font-semibold text-sm sm:text-base">
                We guide you from consultation to go-live with a structured,
                hands-on approach that minimizes disruption and maximizes
                results.
              </p>
            </div>
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-extrabold uppercase text-sm mb-2 text-[#0818a8]">
                Real support. Real people.
              </h4>
              <p className="text-black/60 font-semibold text-sm sm:text-base">
                Our team stays with you beyond deployment providing responsive
                assistance, updates, and continuous improvement support.
              </p>
            </div>
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-extrabold uppercase text-sm mb-2 text-[#0818a8]">
                Built for local compliance
              </h4>
              <p className="text-black/60 font-semibold text-sm sm:text-base">
                Stay aligned with Philippine regulatory requirements through
                accurate financial reporting and system-ready compliance
                features.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end translate-x-30">
          <ZoomImage src="/images/company-edge/CompanyEdge.png" alt="Integr8" />
        </div>
      </div>
    </div>
  );
}
