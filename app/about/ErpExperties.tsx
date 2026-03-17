"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "MANUFACTURING",
    description:
      "ERP for manufacturers that manages production planning, inventory, work orders, and cost tracking.",
    image: "/images/erp-experties/Manufacturing.png",
  },
  {
    id: 2,
    title: "COOPERATIVE",
    description:
      "ERP for cooperatives that manages members, savings and loans, dividends, and financial reporting.",
    image: "/images/erp-experties/Cooperatives.png",
  },
  {
    id: 3,
    title: "REAL-ESTATE",
    description:
      "ERP for real estate developers that manages property sales, client records, commissions, and payment tracking.",
    image: "/images/erp-experties/RealEstate.png",
  },
  {
    id: 4,
    title: "E-COMMERCE",
    description:
      "ERP that integrates online orders, inventory synchronization, payments, shipping, and sales analytics.",
    image: "/images/erp-experties/Ecommerce.png",
  },
  {
    id: 5,
    title: "BROKERAGE",
    description:
      "ERP for brokerage firms that manages client accounts, transactions, commissions, and reporting.",
    image: "/images/erp-experties/Brokerage.png",
  },
  {
    id: 6,
    title: "COMMISSARY",
    description:
      "ERP for commissaries that manages food production, ingredient inventory, costing, and distribution.",
    image: "/images/erp-experties/Commissary.png",
  },
  {
    id: 7,
    title: "CONSTRUCTION",
    description:
      "ERP for construction firms that handles project costing, procurement, payroll, and project monitoring.",
    image: "/images/erp-experties/Construction.png",
  },
  {
    id: 8,
    title: "HOMEOWNERS ASSOCIATION",
    description:
      "ERP for HOAs that manages member records, dues collection, billing, and community finances.",
    image: "/images/erp-experties/HomeownersAssociation.png",
  },
  {
    id: 9,
    title: "IMPORTATION",
    description:
      "ERP for import businesses that manages purchase orders, shipments, customs documents, and inventory.",
    image: "/images/erp-experties/Importation.png",
  },
  {
    id: 10,
    title: "LENDING",
    description:
      "ERP for lending businesses that automates loan processing, interest calculations, payment schedules, and borrower records.",
    image: "/images/erp-experties/Lending.png",
  },
  {
    id: 11,
    title: "MANPOWER AGENCY",
    description:
      "ERP for manpower agencies that manages employee deployment, payroll, attendance, and client billing.",
    image: "/images/erp-experties/ManpowerAgency.png",
  },
  {
    id: 12,
    title: "PROPERTY LEASING",
    description:
      "ERP that manages lease contracts, tenant billing, payment tracking, and property maintenance.",
    image: "/images/erp-experties/PropertyLeasing.png",
  },
  {
    id: 13,
    title: "RESTAURANT",
    description:
      "ERP for restaurants that integrates POS, inventory, kitchen operations, costing, and sales analytics.",
    image: "/images/erp-experties/Restaurant.png",
  },
  {
    id: 14,
    title: "SERVICE PROVIDERS",
    description:
      "ERP for service businesses that manages client contracts, scheduling, billing, payroll, and reporting.",
    image: "/images/erp-experties/ServiceProviders.png",
  },
  {
    id: 15,
    title: "TRADING",
    description:
      "ERP for trading businesses that manages purchasing, inventory, sales, suppliers, and financial reports.",
    image: "/images/erp-experties/Trading.png",
  },
];

export default function ProductsPreview() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;

      setDragWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <section className="w-full">
      {/* HEADER */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <Image
          src="/images/erp-experties/ERPHeader.png"
          alt="ERP Expertise"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-[8%] top-1/2 -translate-y-1/2 text-white max-w-xl">
          <h2 className="text-4xl font-bold mb-4">ERP EXPERTISE</h2>
          <p className="text-lg opacity-90">
            Our ERP platform centralizes business processes and delivers
            scalable enterprise solutions for modern organizations.
          </p>

          <button className="cursor-pointer mt-6 flex items-center gap-2 text-white font-semibold rounded-full hover:bg-gray-800/50 px-3 py-2">
            Explore our products
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* PRODUCT CARDS */}
      <div ref={carouselRef} className="pl-[8%] py-14 overflow-hidden">
        <motion.div
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -dragWidth, right: 0 }}
          dragElastic={0.5}
          dragMomentum={true}
          dragTransition={{
            power: 0.2, // ← lower = less overshoot (default 0.8)
            timeConstant: 300, // ← lower = decelerates faster (default 700)
            modifyTarget: (target) => Math.round(target),
          }}
          style={{ willChange: "transform" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={false}
              onHoverStart={() => setActiveCard(product.id)}
              onHoverEnd={() => setActiveCard(null)}
              className="group relative h-[360px] flex-shrink-0 overflow-hidden rounded-md shadow-lg cursor-pointer isolate"
              animate={{
                width: activeCard === product.id ? 340 : 260,
                y: activeCard === product.id ? -6 : 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
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
                className="absolute bottom-6 left-6 text-white text-lg font-bold tracking-wide z-10 drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
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
                className=" cursor-default absolute inset-0 bg-gradient-to-t from-black/95 via-[#224d9a]/90 to-[#224d9a]/80 flex flex-col justify-center px-8 text-white"
                animate={{
                  y: activeCard === product.id ? 0 : "100%",
                  opacity: activeCard === product.id ? 1 : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.h3
                  className="text-xl font-bold mb-4"
                  animate={{
                    opacity: activeCard === product.id ? 1 : 0,
                    y: activeCard === product.id ? 0 : 12,
                  }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {product.title}
                </motion.h3>

                <motion.p
                  className="text-sm leading-relaxed opacity-90 max-w-[220px]"
                  animate={{
                    opacity: activeCard === product.id ? 1 : 0,
                    y: activeCard === product.id ? 0 : 12,
                  }}
                  transition={{ duration: 0.4, delay: 0.22 }}
                >
                  {product.description}
                </motion.p>

                <motion.button
                  className="cursor-pointer mt-6 flex items-center gap-2 text-sm font-semibold"
                  animate={{
                    opacity: activeCard === product.id ? 1 : 0,
                    y: activeCard === product.id ? 0 : 16,
                  }}
                  transition={{ duration: 0.4, delay: 0.32 }}
                >
                  Learn more
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
          <div className="flex-shrink-0 w-[8vw]" />
        </motion.div>
      </div>
    </section>
  );
}
