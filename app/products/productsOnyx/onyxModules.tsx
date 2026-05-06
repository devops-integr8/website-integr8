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
      setActiveCard(activeCard === id ? null : id);
    }
  };

  return (
    <section className="min-h-screen bg-white">
      <div className="min-h-screen bg-white flex justify-center px-6 py-7">
        <div className="max-w-5xl w-full">

          <p
            className="text-base font-extrabold tracking-[0.25em] uppercase mb-5"
            style={{
              background: "linear-gradient(to right, #0437f2, #02208C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
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

            {products.map((product) => (
              <motion.div
                key={product.id}
                className="group relative w-full h-[480px] overflow-hidden rounded-md shadow-lg cursor-pointer isolate"
                onHoverStart={() => !isMobile && setActiveCard(product.id)}
                onHoverEnd={() => !isMobile && setActiveCard(null)}
                onClick={() => handleInteraction(product.id)}
                animate={{ y: activeCard === product.id ? -3 : 0 }}
                transition={{ duration: 0.4 }}
              >

                {/* IMAGE */}
                <motion.div
                  className="absolute inset-0"
                  // animate={{ scale: activeCard === product.id ? 1.08 : 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-[#0437f2]/50" />
                </motion.div>

                {/* TEXT */}
                <div className="absolute bottom-5 sm:bottom-6 left-3 right-3 text-white z-10">
                  <motion.div
                    animate={{ opacity: activeCard === product.id ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold">
                      {product.title}
                    </h2>

                    <p className="text-sm mt-1 opacity-90 line-clamp-3">
                      {product.description}
                    </p>
                  </motion.div>
                </div>

                {/* HOVER OVERLAY */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/30 to-[#0437f2]/40 flex flex-col justify-center px-4 text-white"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{
                    y: activeCard === product.id ? 0 : "100%",
                    opacity: activeCard === product.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <h3 className="text-2xl font-bold mb-3">
                    {product.title}
                  </h3>

                  <div className="flex flex-wrap gap-1 max-h-[60vh] sm:max-h-none overflow-y-scroll sm:overflow-y-auto sm:overflow-visible pr-1 no-scrollbar">
                    {product.features?.map((f, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-full bg-white text-gray-800 text-[11px] sm:text-xs font-medium shadow-md"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}