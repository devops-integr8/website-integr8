"use client";
import React from "react";

const CallToAction = () => {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "120dvh",
        backgroundImage: "url('/images/home/Home CTA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 10%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center text-center gap-10 -translate-y-[45%]">
        <h2
          className="text-white font-extrabold leading-tight tracking-widest m-0"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            textShadow: "0 0 40px rgba(80,140,255,0.35)",
          }}
        >
          POWER YOUR
          <br />
          BUSINESS TODAY
        </h2>

        <a
          href="mailto:info@gr8software.ph"
          className="
            inline-flex items-center gap-2.5
            px-12 py-3.5
            text-[0.8rem] font-semibold tracking-[0.28em] uppercase
            text-white/90
            bg-transparent
            border border-white/70
            rounded-lg
            transition-all duration-300 ease-in-out
            hover:text-white
            hover:border-white
            hover:shadow-[0_0_40px_12px_rgba(100,160,255,0.5)]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          INQUIRE NOW
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
