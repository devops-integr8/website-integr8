"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "GR8 BOOKS ACCOUNTING SOFTWARE",
    description:
      "A structured accounting system for managing financial transactions and generating reliable reports.",
    image: "/images/erp-experties/Gr8Accounting.png",
  },
  {
    id: 2,
    title: "ONYX POINT-OF-SALE SYSTEM",
    description:
      "A streamlined POS system for handling sales transactions and monitoring retail operations.",
    image: "/images/erp-experties/OnyxPOS.png",
  },
  {
    id: 3,
    title: "GR8 PAYROLL & HRIS",
    description:
      "A centralized solution for managing employee data, attendance, and payroll processes.",
    image: "/images/erp-experties/Gr8Payroll.png",
  },
  {
    id: 4,
    title: "GR8 ERP SOFTWARE",
    description:
      "An integrated platform built to manage and connect core business operations in one centralized system.",
    image: "/images/erp-experties/Gr8ERP.png",
  },
];

// Reusable button with hover (desktop) and tap (mobile) highlight on the arrow
function ArrowButton({
  children,
  arrowSize = 20,
  className = "",
  onPointerDown,
  onClick,
}: {
  children: React.ReactNode;
  arrowSize?: number;
  className?: string;
  onPointerDown?: (e: React.PointerEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      className={`cursor-pointer flex items-center gap-2 text-white font-semibold group/abtn ${className}`}
      onPointerDown={(e) => {
        setPressed(true);
        onPointerDown?.(e);
      }}
      onPointerUp={() => setTimeout(() => setPressed(false), 200)}
      onPointerLeave={() => setPressed(false)}
      onClick={onClick}
    >
      {children}
      <span
        className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200
          group-hover/abtn:bg-white/20
          ${pressed ? "bg-white/20" : ""}`}
      >
        <ArrowRight size={arrowSize} className="text-white" />
      </span>
    </button>
  );
}

export default function ProductsPreview() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = (id: number) => {
    if (isMobile) {
      setActiveCard(activeCard === id ? null : id);
    }
  };

  return (
    <div className="w-full">
      {/* HEADER */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/erp-experties/ERPHeader.png"
          alt="Gr8 Products"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute left-[6%] sm:left-[8%] top-1/2 -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-xl px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            GR8 PRODUCTS
          </h2>
          <p className="text-xs sm:text-sm md:text-lg opacity-90 leading-relaxed">
            We offer a suite of integrated business solutions designed to help
            organizations manage operations, finances, and workforce processes
            in one unified platform.
          </p>
          <ArrowButton className="mt-3 sm:mt-6 text-sm sm:text-base">
            Explore our products
          </ArrowButton>
        </div>
      </div>

      {/* PRODUCT CARDS */}
      <div className="px-4 sm:px-[6%] md:px-[8%] py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={false}
              onHoverStart={() => !isMobile && setActiveCard(product.id)}
              onHoverEnd={() => !isMobile && setActiveCard(null)}
              onClick={() => handleInteraction(product.id)}
              className="group relative w-full aspect-[3/4] overflow-hidden rounded-md shadow-lg cursor-pointer isolate"
              whileHover={!isMobile ? { y: -6 } : undefined}
              animate={{ y: activeCard === product.id ? -6 : 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* IMAGE WRAPPER */}
              <motion.div
                className="absolute inset-0"
                animate={{ scale: activeCard === product.id ? 1.4 : 2 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* TITLE (DEFAULT STATE) */}
              <motion.div
                className="absolute bottom-4 sm:bottom-6 left-3 sm:left-4 right-3 sm:right-4 text-white text-xs sm:text-sm font-bold tracking-wide z-10"
                animate={{ opacity: activeCard === product.id ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  textShadow:
                    "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
                }}
              >
                {product.title}
              </motion.div>

              {/* HOVER OVERLAY */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/95 to-[#0437f2]/80 flex flex-col justify-center px-4 sm:px-6 text-white"
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                  y: activeCard === product.id ? 0 : "100%",
                  opacity: activeCard === product.id ? 1 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.h3
                  className="text-sm sm:text-base font-bold mb-2 sm:mb-3"
                  animate={{
                    opacity: activeCard === product.id ? 1 : 0,
                    y: activeCard === product.id ? 0 : 12,
                  }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {product.title}
                </motion.h3>

                <motion.p
                  className="text-xs sm:text-sm leading-relaxed opacity-90"
                  animate={{
                    opacity: activeCard === product.id ? 1 : 0,
                    y: activeCard === product.id ? 0 : 12,
                  }}
                  transition={{ duration: 0.4, delay: 0.22 }}
                >
                  {product.description}
                </motion.p>

                <motion.div
                  animate={{
                    opacity: activeCard === product.id ? 1 : 0,
                    y: activeCard === product.id ? 0 : 16,
                  }}
                  transition={{ duration: 0.4, delay: 0.32 }}
                >
                  <ArrowButton
                    arrowSize={14}
                    className="mt-3 sm:mt-4 text-xs sm:text-sm"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn more
                  </ArrowButton>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
