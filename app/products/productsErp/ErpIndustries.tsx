"use client";

import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

import img1 from "@/public/images/productsErpHero/ManufacturingProduction.png";
import img2 from "@/public/images/productsErpHero/Lending.png";
import img3 from "@/public/images/productsErpHero/Construction.png";
import img4 from "@/public/images/productsErpHero/Brokerage.png";
import img5 from "@/public/images/productsErpHero/Manpower.png";
import img6 from "@/public/images/productsErpHero/HOA.png";
import img7 from "@/public/images/productsErpHero/LeaseManagement.png";
import img8 from "@/public/images/productsErpHero/Cooperatives.png";
import img9 from "@/public/images/productsErpHero/Trading.png";
import img10 from "@/public/images/productsErpHero/RealEstate.png";
import img11 from "@/public/images/productsErpHero/Commissary.png";
import img12 from "@/public/images/productsErpHero/Restaurant.png";
import img13 from "@/public/images/productsErpHero/Ecommerce.png";
import img14 from "@/public/images/productsErpHero/ServiceProvider.png";
import img15 from "@/public/images/productsErpHero/Importation.png";

// ─── Sideheader ──────────────────────────────────────────────────────────────

const Sideheader = () => {
  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-24 z-50">
      <h1 className="text-blue-700 text-4xl font-semibold leading-tight">
        Built for the way your business works
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed">
        Modules built specifically for your industry so every team works with
        tools shaped around how they actually operate.
      </p>
    </div>
  );
};

// ─── Card ────────────────────────────────────────────────────────────────────

type CardProps = {
  title: string;
  description: string;
  features?: string[];
  image: StaticImageData | string;
  flipped: boolean; //
  onFlip: () => void; //
};

const Card = ({
  title,
  description,
  features = [],
  image,
  flipped,
  onFlip,
}: CardProps) => {
  return (
    <div style={{ perspective: "1000px" }}>
      {/* FLIP CARD */}
      <div
        className="relative w-full cursor-pointer h-[420px]"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onFlip();
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white font-bold text-xl">{title}</h3>
            <p className="text-white/80 text-sm mt-1">{description}</p>
            <p className="text-white text-xs mt-4 italic">
              Click to see features →
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* BLURRED IMAGE BACKGROUND */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover scale-110"
            style={{ filter: "blur(12px)" }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-white/10" />

          {/* SCROLLABLE CONTENT */}
          <div className="absolute inset-0 overflow-y-auto px-6 pt-6 pb-10">
            {/* TITLE */}
            <h3 className="text-white font-bold text-xl drop-shadow mb-4">
              {title}
            </h3>

            {/* PILL BADGES */}
            <div className="flex flex-wrap gap-2">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white text-gray-800 text-xs font-medium shadow-md"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* CLICK TO FLIP — pinned to bottom */}
            <p className="absolute bottom-4 right-6 text-white/100 text-xs italic">
              Click to flip back
            </p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION BELOW CARD */}
      <p className="text-sm text-gray-600 mt-3 max-w-[280px]">{description}</p>
    </div>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const modules = [
  {
    image: img1,
    title: "MANUFACTURING/PRODUCTION MODULE",
    description:
      "From raw materials to finished goods — plan, track, and cost every step of your production.",
    features: [
      "BOM Semi-finished Goods",
      "Demand Forecasting",
      "BOM Finished Goods Transfer",
      "Materials Planning",
      "Job Order",
      "Work in Progress",
      "BOM Conversion",
      "BOM Explosion",
      "Finished Goods Transfer",
      "Average Cost",
      "Standard Cost",
    ],
  },
  {
    image: img2,
    title: "LENDING MODULE",
    description: "Verify, approve, and collect employee loans automatically.",
    features: [
      "Loan Verifier",
      "Auto Deduct if with Payroll System",
      "Co-Maker Limit",
      "Maximum and Minimum Loanable Amount",
      "Straight Line Computation",
      "Past Due Penalty Computation",
      "Loan Approval Limit",
      "Salary Deduction Billing and Collection",
      "Straight Line Diminishing After a Year",
      "Diminishing Balance but with Even Principal",
    ],
  },
  {
    image: img3,
    title: "CONSTRUCTION MODULE",
    description:
      "Manage projects, materials, and costs on-site or in the office.",
    features: [
      "Project Management",
      "Contract Management",
      "Project Scope of Work Management",
      "Progress Billing",
      "Retention Payable",
      "Billing for Downpayment",
      "Project Budget Uploader",
      "Recoupment of Downpayment",
    ],
  },
  {
    image: img4,
    title: "BROKERAGE MODULE",
    description:
      "Track transactions, commissions, and client activity without the clutter.",
    features: [
      "Shipper Maintenance",
      "Charges Maintenance",
      "Shipping Lines Maintenance",
      "Vessel & Port Location",
      "Container Number",
      "Refund Monitoring",
      "Shipment Reports",
      "Item Tracking",
      "Document Date",
      "Status Monitoring",
      "Delivery Area",
      "Statement of Accounts",
    ],
  },
  {
    image: img5,
    title: "MANPOWER AGENCY MODULE",
    description:
      "Track deployments, billings, and worker records without the chaos.",
    features: [
      "Fully Integrated with Accounting and Inventory",
      "HRIS Management",
      "Payroll Automation",
      "Timekeeping System",
    ],
  },
  {
    image: img6,
    title: "HOA MODULE",
    description:
      "Collect dues, manage residents, and handle association finances effortlessly.",
    features: [
      "Monthly Dues Billing",
      "Water Billing",
      "Statement of Account",
      "Notice of Disconnection",
      "Interest and Penalties",
      "Uploader of Water Meter Reading",
    ],
  },
  {
    image: img7,
    title: "LEASE MANAGEMENT MODULE",
    description:
      "Track contracts, renewals, and payments across all your properties.",
    features: [
      "Tenant Charges Maintenance",
      "Contract Management",
      "Rental, Electricity, Water, and Monthly Dues Billing",
      "Electricity and Water Reading",
      "Tenant Management",
      "PDC Monitoring",
      "Improved Control in Property Rental",
      "Consistency in your Property Rental",
    ],
  },
  {
    image: img8,
    title: "COOPERATIVES MODULE",
    description:
      "Manage memberships, shares, loans, and dividends in one place.",
    features: [
      "Savings Account Maintenance",
      "CDA Chart of Accounts",
      "Loan Co-Maker Set Up",
      "Member Maintenance",
      "Loan Collateral Set Up",
      "Savings Maintenance",
      "Time Deposit Maintenance",
      "Allocation of Net Surplus",
      "Loan Maintenance",
      "Collectors Maintenance",
    ],
  },
  {
    image: img9,
    title: "TRADING MODULE",
    description: "Track purchases, sales, and inventory movement in real time.",
    features: [
      "Fully Integrated with Accounting and Inventory",
      "Core Financials",
    ],
  },
  {
    image: img10,
    title: "REAL ESTATE MODULE",
    description:
      "List, sell, and manage properties without the paperwork maze.",
    features: [
      "Account Monitoring",
      "List of Available Units",
      "Contract to Sell",
      "Inventory Property",
      "Reservation Agreement",
      "Waiver",
      "Buyers Information Sheet",
      "List of Requirements",
      "Credit Approval Memorandum Form",
      "Notice of Disapproval for CAM",
      "Notice of Unpaid Equity",
      "Notice on Non-Compliance",
      "Notice of Cancellation for Documentation",
      "Buyer’s Ledger",
      "Real Estate Sales",
      "Property Maintenance",
      "JVA Maintenance",
    ],
  },
  {
    image: img11,
    title: "COMMISSARY MODULE",
    description:
      "Manage production, costs, and distribution from a central hub.",
    features: [
      "Fully Integrated with Accounting and Inventory",
      "Includes ONYX Point of Sale System",
      "Includes Production Module",
      "Online Sales Order",
    ],
  },
  {
    image: img12,
    title: "RESTAURANT MODULE",
    description: "Manage orders, recipes, and kitchen costs in one system .",
    features: [
      "Fully Integrated with Accounting and Inventory",
      "Includes Production Module",
      "Includes ONYX Point of Sale System",
      "Online Sales Order",
      "Kitchen Monitoring",
      "Table Monitoring",
      "Receipt Bill of Materials",
    ],
  },
  {
    image: img13,
    title: "E-COMMERCE MODULE",
    description: "Connect your store, inventory, and financials in one system.",
    features: [
      "Fully Integrated with Accounting and Inventory",
      "API for E-Commerce Website",
      "Online Ordering",
      "Can be Integrated with Production Module",
    ],
  },
  {
    image: img14,
    title: "SERVICE PROVIDERS MODULE",
    description: "Manage job orders, billing, and client records in one place.",
    features: [
      "Book of Accounts",
      "Service Invoice",
      "Statement of Accounts",
      "Aging of Accounts Receivable",
      "BIR Reports",
      "Statement of Cash Flows",
    ],
  },
  {
    image: img15,
    title: "IMPORTATION MODULE",
    description: "Monitor your imports from purchase order to landed cost.",
    features: [
      "Integrated with Accounting and Inventory",
      "Landed Cost",
      "Importation Cost",
      "Brokerage and Delivery Charges",
      "Container Deposit",
      "Shipping Charges",
      "Service Invoice",
      "Advance Duties",
    ],
  },
];

// ─── ErpIndustries ────────────────────────────────────────────────────────────

const ErpIndustries = () => {
  // Tracks which card is flipped by its index. null = none flipped.
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    // If clicking the already-flipped card, flip it back. Otherwise flip the new one.
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="flex flex-col gap-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 pt-10 pb-12"
      onClick={() => setFlippedIndex(null)}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* LEFT - sticky sidebar */}
        <div className="lg:w-[320px] w-full shrink-0 lg:sticky lg:top-24 lg:self-start">
          <Sideheader />
        </div>

        {/* RIGHT - cards */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {Array.from(
            { length: Math.ceil(modules.length / 2) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10"
              >
                {modules
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((mod, colIndex) => {
                    const globalIndex = rowIndex * 2 + colIndex;
                    return (
                      <Card
                        key={mod.title}
                        {...mod}
                        flipped={flippedIndex === globalIndex}
                        onFlip={() => handleFlip(globalIndex)}
                      />
                    );
                  })}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ErpIndustries;
