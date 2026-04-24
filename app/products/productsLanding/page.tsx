"use client";

import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight, Monitor } from "lucide-react";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  videoSrc: string;
  href: string;
};

const PRODUCTS: Product[] = [
  {
    id: "books",
    title: "Gr8 Books",
    subtitle: "Accounting Software",
    videoSrc: "/videos/products/Gr8Accounting.mp4",
    href: "/products/productsAccounting",
  },
  {
    id: "payroll",
    title: "Gr8 Payroll and HRIS",
    subtitle: "Human Resource Management",
    videoSrc: "/videos/products/Gr8Payroll.mp4",
    href: "/products/productsPayroll",
  },
  {
    id: "onyx",
    title: "ONYX",
    subtitle: "Point-Of-Sale System",
    videoSrc: "/videos/products/Gr8Onyx.mp4",
    href: "/products/productsOnyx",
  },
  {
    id: "erp",
    title: "Gr8 ERP",
    subtitle: "Enterprise Resource Planning",
    videoSrc: "/videos/products/Gr8ERP.mp4",
    href: "/products/productsErp",
  },
];

const LaptopFrame = ({
  product,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: {
  product: Product;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play().catch(() => {});
    } else {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div className="flex flex-col items-center">
      {/* Title + laptop in one motion wrapper — rise together with bounce */}
      <motion.div
        className="flex flex-col items-center cursor-pointer group"
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        animate={{ y: isHovered ? -22 : 0 }}
        transition={{
          type: "spring",
          stiffness: 220, // lower = slower, more floaty
          damping: 12, // lower = more bounce overshoots
          mass: 0.8, // lighter = quicker initial response
        }}
        style={{ zIndex: isHovered ? 50 : 10 }}
      >
        {/* Title */}
        <motion.div
          className="mb-3 text-center px-2"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-white font-bold text-base md:text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {product.title}
          </h3>
          <p className="text-blue-200/90 text-[10px] font-medium tracking-wider uppercase mt-0.5">
            {product.subtitle}
          </p>
        </motion.div>

        {/* Screen lid */}
        <div className="relative w-[200px] h-[125px] md:w-[255px] md:h-[160px] bg-gray-800 rounded-t-lg border-[3px] border-gray-700 shadow-2xl overflow-hidden">
          <div className="absolute inset-[2px] bg-black rounded-md overflow-hidden">
            <video
              ref={videoRef}
              src={product.videoSrc}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            <AnimatePresence>
              {!isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Webcam */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-500 rounded-full z-30" />
        </div>

        {/* Keyboard base */}
        <div
          className="relative w-[220px] md:w-[278px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-md shadow-xl border-t border-gray-600"
          style={{ height: "14px" }}
        >
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-gray-600/60 rounded-full" />
          <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-[3px]">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] rounded-full bg-gray-500/50"
              />
            ))}
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-[3px]">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-[2px] h-[2px] rounded-full bg-gray-500/50"
              />
            ))}
          </div>
        </div>

        {/* White glow under hovered laptop */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[85%] h-4 rounded-full blur-lg"
              style={{ background: "rgba(255, 255, 255, 0.30)" }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default function ProductLandingHero() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black text-white overflow-hidden font-sans selection:bg-blue-500 selection:text-white flex flex-col">
      <Head>
        <title>Integr8 | Product Suite</title>
        <meta
          name="description"
          content="Everything your business needs, built to grow with you."
        />
      </Head>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/products/Hero5.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Logo */}
      <Link
        href="/"
        className="absolute top-8 left-8 md:top-10 md:left-10 z-20"
      >
        <div
          className="
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      rounded-xl
      px-4 py-2
      shadow-[0_4px_20px_rgba(0,0,0,0.25)]
      hover:scale-105 transition-transform duration-300
    "
        >
          <Image
            src="/logo.png"
            alt="Integr8 logo"
            width={120}
            height={50}
            className="
        brightness-125
        contrast-125
        drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]
       
      "
          />
        </div>
      </Link>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[1600px] mx-auto px-4 pt-16 pb-6 h-full">
        {/* Heading */}
        <div className="text-center mt-10 mb-8 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-black/30 border border-blue-400/30 text-blue-300 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-2 backdrop-blur-md">
              Integr8 Software Solutions, Inc.
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              GR8 PRODUCT SUITE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-blue-100 font-light max-w-xl mx-auto leading-relaxed drop-shadow-md"
          >
            Everything your business needs, built to grow with you.
          </motion.p>
        </div>

        {/* Laptops + shelf */}
        <div className="relative w-full flex flex-col items-center mt-4">
          {/* Laptop row */}
          <div className="flex flex-row items-end justify-center gap-4 md:gap-6 lg:gap-10 w-full px-8">
            {PRODUCTS.map((product) => (
              <Link key={product.id} href={product.href} className="group">
                <div className="cursor-pointer transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.4)]">
                  <LaptopFrame
                    product={product}
                    isHovered={hoveredId === product.id}
                    onHoverStart={() => setHoveredId(product.id)}
                    onHoverEnd={() => setHoveredId(null)}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Shelf */}
          <div className="relative w-full px-4 mt-0">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400/50 to-transparent" />
            <div
              className="w-full rounded-b-xl shadow-2xl"
              style={{
                height: "20px",
                background:
                  "linear-gradient(180deg, #4a5568 0%, #2d3748 30%, #1a202c 100%)",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-black/60 blur-xl rounded-[100%]" />
          </div>

          {/* Select to explore */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-10 text-center"
          >
            <p className="text-xs md:text-sm text-blue-200/80 tracking-widest uppercase flex items-center justify-center gap-2 drop-shadow-md">
              <Monitor className="w-3 h-3 md:w-4 md:h-4" />
              Select to explore products
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
