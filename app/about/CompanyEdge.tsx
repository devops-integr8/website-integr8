"use client";
import { useEffect, useRef, useState } from "react";

function ZoomImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setZoomed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-[570px] h-[570px] rounded-full border border-solid overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        className={`
          w-full h-full object-cover
          transition-transform duration-[5000ms] ease-out
          ${zoomed ? "scale-100" : "scale-125"}
        `}
      />
    </div>
  );
}

export default function CompanyEdge() {
  return (
    <section className="bg-white py-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-10 ml-12">
            WHAT MAKES US DIFFERENT
          </h2>
          <div className="space-y-10 ml-12">
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-semibold uppercase text-sm mb-2">
                Built for your industry, not just any business
              </h4>
              <p className="text-black font-semibold">
                We don’t offer generic software. Our ERP solutions are designed
                to meet the real-world demands of cooperatives, trading
                companies, and growing enterprises.
              </p>
            </div>
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-semibold uppercase text-sm mb-2">
                Implementation done right
              </h4>
              <p className="text-black font-semibold">
                We guide you from consultation to go-live with a structured,
                hands-on approach that minimizes disruption and maximizes
                results.
              </p>
            </div>
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-semibold uppercase text-sm mb-2">
                Real support. Real people.
              </h4>
              <p className="text-black font-semibold">
                Our team stays with you beyond deployment providing responsive
                assistance, updates, and continuous improvement support.
              </p>
            </div>
            <div>
              <div className="w-10 h-[2px] bg-black mb-4"></div>
              <h4 className="font-semibold uppercase text-sm mb-2">
                Built for local compliance
              </h4>
              <p className="text-black font-semibold">
                Stay aligned with Philippine regulatory requirements through
                accurate financial reporting and system-ready compliance
                features.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end translate-x-30">
          <ZoomImage
            src="/images/company-edge/CompanyEdge.png"
            alt="Team working"
          />
        </div>
      </div>
    </section>
  );
}