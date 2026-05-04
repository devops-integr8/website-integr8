"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ── Card that observes its own visibility and passes it down ── */
function ProblemCard({
  badge,
  badgeBg,
  badgeTextColor,
  text,
  textColor,
  cardBg,
  cardStyle,
  imageSrc,
  imageAlt,
}: {
  badge: string;
  badgeBg: string;
  badgeTextColor: string;
  text: string;
  textColor: string;
  cardBg?: string;
  cardStyle?: React.CSSProperties;
  imageSrc: string;
  imageAlt: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
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
    <div
      ref={cardRef}
      className={`relative rounded-3xl overflow-hidden flex flex-col p-8 min-h-[420px] ${cardBg ?? ""}`}
      style={cardStyle}
    >
      {/* Badge */}
      <span
        className="self-start text-xs font-semibold px-3 py-1.5 rounded-md mb-6"
        style={{ backgroundColor: badgeBg, color: badgeTextColor }}
      >
        {badge}
      </span>

      {/* Body text – no max-w constraint so it spreads across the card */}
      <p
        className="text-[1.35rem] leading-snug font-semibold w-full pr-4"
        style={{ color: textColor }}
      >
        {text}
      </p>

      {/* PNG icon – anchored bottom-right, zooms in on scroll */}
      <div className="absolute bottom-0 right-0 w-[72%] h-[55%] pointer-events-none select-none overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-contain object-right-bottom transition-transform duration-[2500ms] ease-out ${
            visible ? "scale-100" : "scale-150"
          }`}
        />
      </div>
    </div>
  );
}

/* ── Section ── */
export default function ProblemSolutionSection() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* LEFT – White card */}
          <ProblemCard
            badge="The Problem"
            badgeBg="#0437f2"
            badgeTextColor="#ffffff"
            text="Most software makes you work around it. Businesses reshape their processes, retrain their teams, and settle — just to fit a system that was never built for them."
            textColor="#0437f2"
            cardBg="bg-white border border-gray-100"
            cardStyle={{
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
            imageSrc="/images/home/Problem.png"
            imageAlt="Problem illustration"
          />

          {/* RIGHT – Blue gradient card */}
          <ProblemCard
            badge="The Solution"
            badgeBg="#ffffff"
            badgeTextColor="#0437f2"
            text="Instead of forcing your business into a rigid system, GR8 Software adapts to you — one customizable platform for accounting, inventory, payroll, and operations."
            textColor="#ffffff"
            cardStyle={{
              background:
                "linear-gradient(135deg, #02208c 0%, #0437f2 55%, #1a52ff 100%)",
              boxShadow:
                "0 8px 32px rgba(4, 55, 242, 0.4), 0 2px 8px rgba(2, 32, 140, 0.3)",
            }}
            imageSrc="/images/home/Solution.png"
            imageAlt="Solution illustration"
          />
        </div>
      </div>
    </section>
  );
}
