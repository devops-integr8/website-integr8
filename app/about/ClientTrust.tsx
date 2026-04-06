"use client";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    title: "Trusted by 300+ SMEs",
    subtitle: "13 years of reliable accounting support",
  },
  { title: "500+ Businesses Served", subtitle: "99% on-time tax compliance" },
  {
    title: "Supporting SMEs Since 2013",
    subtitle: "99% client retention rate",
  },
  {
    title: "Built for Growing Businesses",
    subtitle: "1,000+ filings completed yearly",
  },
  {
    title: "Your Accounting Partner",
    subtitle: "99.9% accuracy. 100% commitment",
  },
  {
    title: "Certified Professionals",
    subtitle: "All CPAs & licensed tax agents",
  },
];

type Stat = {
  title: string;
  subtitle: string;
  delay?: number;
};

function AnimatedStat({ title, subtitle, delay = 0 }: Stat) {
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
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0 blur-none"
          : "opacity-0 translate-y-8 blur-sm"
      }`}
    >
      <h3
        className="text-white font-bold text-xl md:text-2xl leading-tight"
        style={{
          textShadow:
            "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        {title}
      </h3>
      <p className="text-blue-200 text-sm mt-2">{subtitle}</p>
    </div>
  );
}

export default function ClientTrust() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-10">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
        {stats.map((stat, index) => (
          <AnimatedStat
            key={index}
            title={stat.title}
            subtitle={stat.subtitle}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}
