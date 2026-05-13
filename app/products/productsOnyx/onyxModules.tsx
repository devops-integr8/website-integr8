"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  features?: string[];
}

const products: Product[] = [
  {
    id: 1,
    title: "POS MODULE",
    description:
      "Process every sale through a structured POS system — ensuring fast, accurate transactions while keeping sales data organized in real time.",
    image: "/products/onyxposmodule.png",
    features: [
      "Integrated with Accounting & Inventory",
      "Z Reading",
      "VCE Masterfile",
      "Reprint Receipt",
      "Company Information",
      "Member Tagging",
      "Open Fund",
      "Discounts",
      "Cash In/Out",
      "Database for the Item Master",
      "Database for the VCE Masterfile",
      "Price Inquiry",
      "View Previous Transactions",
      "Suspend Transaction",
      "Database for Inventory",
      "Resume Transaction",
      "New Transaction",
      "Previous Transaction",
      "GC Check",
      "Delete Transaction",
      "Next Transaction",
      "X Reading",
      "Cancel Transaction",
      "Quantity",
      "Return Item",
    ],
  },
  {
    id: 2,
    title: "REPORTS",
    description:
      "Access real time sales and inventory reports — giving you clear visibility into daily performance and operational trends.",
    image: "/products/onyxreports.png",
    features: [
      "Sales Report",
      "Member Total Purchases",
      "Item Master List",
      "BIR Sales Report",
      "Audit Trail Report",
      "Text File Sales Report",
    ],
  },
];

export default function OnyxModules() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = (id: number) => {
    if (isMobile) {
      setActiveCard((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="min-h-screen bg-white flex justify-center px-6 py-7">
        <div className="max-w-5xl w-full">

          {/* HEADER */}
          <p className="text-base font-extrabold tracking-[0.25em] uppercase mb-5 text-[#0437f2]">
            Modules
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-14 sm:mb-16">
            <h2
              className="font-bold leading-[1.1]"
              style={{ fontSize: "clamp(26px, 3vw, 46px)", color: "#0818A8" }}
            >
              Run Your Business Like
              <br />
              You Mean It
            </h2>

            <p
              className="text-base sm:text-xl font-medium sm:text-right flex-shrink-0 sm:pt-2"
              style={{ color: "rgba(0,0,0,0.6)" }}
            >
              Take control of every sale,
              <br />
              every customer, and every transaction
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">

            {products.map((product) => {
              const isActive = activeCard === product.id;

              return (
                <div
                  key={product.id}
                  className="relative w-full h-[480px] overflow-hidden rounded-md shadow-lg cursor-pointer isolate"
                  onMouseEnter={() => !isMobile && setActiveCard(product.id)}
                  onMouseLeave={() => !isMobile && setActiveCard(null)}
                  onClick={() => handleInteraction(product.id)}
                >

                  {/* IMAGE */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-[#0437f2]/60" />
                  </div>

                  {/* TITLE + DESCRIPTION — slides down and fades out on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8 pb-10 z-10 text-white"
                    animate={{
                      opacity: isActive ? 0 : 1,
                      y: isActive ? 12 : 0,
                    }}
                    transition={{ duration: 0.38, ease: [0.32, 0, 0.67, 0] }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      {product.title}
                    </h2>
                    <p className="text-sm opacity-80 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                  </motion.div>

                  {/* OVERLAY — slides up from the bottom of the card */}
                  <motion.div
                    className="absolute inset-0 flex flex-col px-5 pt-6 pb-6 text-white"
                    initial={{ y: "100%" }}
                    animate={{ y: isActive ? "0%" : "100%" }}
                    transition={{
                      duration: 0.42,
                      ease: [0.25, 0.46, 0.45, 0.94], // smooth ease-out curve
                    }}
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(4,55,242,0.85), rgba(0,0,0,0.90))",
                      backdropFilter: "blur(2px)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    {/* Module title */}
                    <h3 className="text-xl font-bold mb-1 tracking-wide">
                      {product.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-10 h-0.5 mb-4 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.35)" }} />

                    {/* Pill badges — frosted glass style */}
                    <div className="flex flex-wrap gap-x-2 gap-y-2.5 overflow-y-auto max-h-[360px] pr-1 no-scrollbar">
                      {product.features?.map((f, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-white"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.30)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.20)",
                          }}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}