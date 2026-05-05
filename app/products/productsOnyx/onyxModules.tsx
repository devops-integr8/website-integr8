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
    image: "/products/Rectangle 483.png",
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
    image: "/products/Rectangle 485.png",
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
    <section className="min-h-screen bg-white">
      <div className="min-h-screen bg-white flex justify-center px-6 py-7">
        <div className="max-w-5xl w-full">

          {/* HEADER */}
          <div className="mb-12">
            <p className="text-[#02208C] font-semibold text-sm tracking-wide">
              MODULES
            </p>

            <div className="mt-4 flex flex-col lg:flex-row gap-6 items-start">
              <h1 className="text-3xl text-[#02208C] md:text-5xl font-bold max-w-2xl">
                The Run Your Business Like You Mean It
              </h1>

              <p className="max-w-md text-sm md:text-base text-gray-600 text-justify">
                Streamline your operations, strengthen customer relationships, and
                stay on top of every transaction
              </p>
            </div>
          </div>

          {/* CARDS — CENTERED */}
          <div className="flex justify-center w-full">
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl w-full">

              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="group relative w-full max-w-[420px] h-[480px] overflow-hidden rounded-md shadow-lg cursor-pointer isolate"
                  onHoverStart={() => !isMobile && setActiveCard(product.id)}
                  onHoverEnd={() => !isMobile && setActiveCard(null)}
                  onClick={() => handleInteraction(product.id)}
                  animate={{ y: activeCard === product.id ? -3 : 0 }}
                  transition={{ duration: 0.4 }}
                >

                  {/* IMAGE */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: activeCard === product.id ? 1.08 : 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-[#0437f2]/50" />
                  </motion.div>

                  {/* TEXT */}
                  <div className="absolute bottom-5 sm:bottom-6 left-3 right-3 text-white z-10">
                    <motion.div
                      animate={{ opacity: activeCard === product.id ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xs sm:text-sm md:text-2xl font-bold">
                        {product.title}
                      </h2>

                      <p className="text-[10px] sm:text-sm mt-1 opacity-90 line-clamp-3">
                        {product.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* OVERLAY */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/30 to-[#0437f2]/40 flex flex-col justify-center px-4 text-white"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{
                      y: activeCard === product.id ? 0 : "100%",
                      opacity: activeCard === product.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.7 }}
                  >
                    <h3 className="text-xs sm:text-2xl font-bold mb-3">
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
      </div>
    </section>
  );
}