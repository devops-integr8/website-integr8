"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Introduction() {
  const imgRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        {/* LEFT: IMAGE (SQUARE) */}
        <div
          ref={imgRef}
          className="w-full aspect-square relative rounded-md overflow-hidden"
        >
          <Image
            src="/images/home/CompanyIntro.jpg"
            alt="Integr8 Office"
            fill
            className={`object-cover transition-transform duration-[2500ms] ease-out ${
              visible ? "scale-100" : "scale-150"
            }`}
            priority
          />
        </div>

        {/* RIGHT: TEXT CONTENT */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0818a8] leading-tight mb-6 gap-24">
            We're Building Tools <br />
            That Fit Your Business
          </h2>

          <p className="text-black/60 mb-4 leading-relaxed">
            Integr8 Software Solutions helps businesses streamline operations,
            manage finances, and optimize workforce processes through integrated
            systems.
          </p>

          <p className="text-black/60 mb-6 leading-relaxed">
            We provide reliable, scalable solutions designed to improve
            efficiency, accuracy, and real-time visibility across your
            organization.
          </p>

        <Link 
          href="/about" 
          className="flex items-center gap-2 text-[#0437f2] font-medium hover:underline w-fit cursor-pointer"
        >
          Learn more about us
          <span className="text-lg">→</span>
        </Link>
        </div>
      </div>
    </section>
  );
}
