"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/Hero12.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay to deepen the video and ensure text legibility */}
      <div className="absolute inset-0 bg-[#030b1a]/55" />

      {/* Content — bottom-left anchored, matching reference */}
      <div className="relative z-10 flex flex-col justify-end h-full px-10 pb-20 md:px-16 md:pb-24 lg:px-20 lg:pb-28 max-w-4xl">
        {/* Heading */}
        <h1 className="text-white font-extrabold leading-tight tracking-tight text-[32px] md:text-5xl lg:text-[3.25rem] mb-4">
          Let&apos;s Find The Right Fit
          <br />
          For Your Business
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 font-normal text-sm md:text-base leading-relaxed max-w-sm md:max-w-md">
          Tell us about your business and we&apos;ll show you how GR8 Software
          can be customized to fit your business
        </p>
      </div>
    </section>
  );
}
