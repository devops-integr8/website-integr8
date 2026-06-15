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

import icon1 from "@/public/images/productsErpHero/icons/ManufacturingIcon.png";
import icon2 from "@/public/images/productsErpHero/icons/LendingIcon.png";
import icon3 from "@/public/images/productsErpHero/icons/ConstructionIcon.png";
import icon4 from "@/public/images/productsErpHero/icons/BrokerageIcon.png";
import icon5 from "@/public/images/productsErpHero/icons/ManpowerIcon.png";
import icon6 from "@/public/images/productsErpHero/icons/HOAIcon.png";
import icon7 from "@/public/images/productsErpHero/icons/LeaseManagementIcon.png";
import icon8 from "@/public/images/productsErpHero/icons/CooperativesIcon.png";
import icon9 from "@/public/images/productsErpHero/icons/TradingIcon.png";
import icon10 from "@/public/images/productsErpHero/icons/RealEstateIcon.png";
import icon11 from "@/public/images/productsErpHero/icons/CommissaryIcon.png";
import icon12 from "@/public/images/productsErpHero/icons/RestaurantIcon.png";
import icon13 from "@/public/images/productsErpHero/icons/EcommerceIcon.png";
import icon14 from "@/public/images/productsErpHero/icons/ServiceProvidersIcon.png";
import icon15 from "@/public/images/productsErpHero/icons/ImportationIcon.png";

// ─── Sideheader ──────────────────────────────────────────────────────────────

const Sideheader = () => {
  return (
    <div className="flex flex-col gap-4 lg:sticky lg:top-24 z-50">
      <h1 className="text-[#004A80] text-4xl font-bold leading-tight">
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
  icon: StaticImageData | string;
  flipped: boolean;
  onFlip: () => void;
};

const Card = ({
  title,
  description,
  features = [],
  image,
  icon,
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
            {/* Icon + Title row */}
            <div className="flex items-center gap-2">
              <Image
                src={icon}
                alt={`${title} icon`}
                width={24}
                height={24}
                className="object-contain"
              />
              <h3 className="text-white font-bold text-xl">{title}</h3>
            </div>
            <p className="text-white text-xs mt-4 italic">
              Click to see features →
            </p>
          </div>
        </div>

        {/* BACK */}
        <style>{`
          .pills-scroll::-webkit-scrollbar { width: 2px; }
          .pills-scroll::-webkit-scrollbar-track { background: transparent; }
          .pills-scroll::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.18);
            border-radius: 99px;
          }
          .pills-scroll { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.18) transparent; }
        `}</style>
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
          <div className="absolute inset-0 bg-black/30" />

          {/* CONTENT — one flex column, no outer scroll */}
          <div className="absolute inset-0 flex flex-col px-6 pt-6">

            {/* Icon + Title — pinned, never scrolls */}
            <div className="flex items-center gap-2 mb-4 shrink-0">
              <Image
                src={icon}
                alt={`${title} icon`}
                width={24}
                height={24}
                className="object-contain"
              />
              <h3 className="text-white font-bold text-xl drop-shadow">{title}</h3>
            </div>

    {/* Pills — scrolls only when content overflows */}
    <div className="pills-scroll flex-1 overflow-y-auto flex flex-wrap gap-2 content-start">
      {[...features].sort((a, b) => a.length - b.length).map((f, i) => (
        <span
          key={i}
          className="px-4 py-2 rounded-full bg-white text-gray-800 text-xs font-medium shadow-md h-fit"
        >
          {f}
        </span>
      ))}
    </div>

    {/* Click to flip back — always pinned at bottom */}
    <p className="text-right text-white text-xs italic py-3 shrink-0">
      Click to flip back
    </p>

    </div>
  </div>
</div>

      {/* DESCRIPTION BELOW CARD */}
      <p className="text-sm text-gray-600 mt-3 max-w-full">{description}</p>
    </div>
  );
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const modules = [
  {
    image: img1,
    icon: icon1,
    title: "MANUFACTURING/PRODUCTION MODULE",
    description:
      "From raw materials to finished goods — plan, track, and cost every step of your production.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
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
    icon: icon2,
    title: "LENDING MODULE",
    description: "Verify, approve, and collect employee loans automatically.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
      "Loan Verifier",
      "Loan Application",
      "Auto Deduct if with Payroll System",
      "Co-Maker Limit",
      "Collateral Limit",
      "Maximum and Minimum Loanable Amount",
      "Straight Line Computation",
      "Past Due Penalty Computation",
      "Loan Approval Limit",
      "Salary Deduction Billing and Collection",
      "Straight Line Diminishing After a Year",
      "Diminishing Balance but with Even Principal",
      "Diminishing Balance Computation",
      "Multiple Loan Types",
      "Restructuring of Loans",
    ],
  },
  {
    image: img3,
    icon: icon3,
    title: "CONSTRUCTION MODULE",
    description:
      "Manage projects, materials, and costs on-site or in the office.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
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
    icon: icon4,
    title: "BROKERAGE MODULE",
    description:
      "Track transactions, commissions, and client activity without the clutter.",
    features: [
      "Accounting Modules",
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
    icon: icon5,
    title: "MANPOWER AGENCY MODULE",
    description:
      "Track deployments, billings, and worker records without the chaos.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
      "HRIS Management",
      "Payroll Automation",
      "Timekeeping System",
    ],
  },
  {
    image: img6,
    icon: icon6,
    title: "HOA MODULE",
    description:
      "Collect dues, manage residents, and handle association finances effortlessly.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
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
    icon: icon7,
    title: "LEASE MANAGEMENT MODULE",
    description:
      "Track contracts, renewals, and payments across all your properties.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
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
    icon: icon8,
    title: "COOPERATIVES MODULE",
    description:
      "Manage memberships, shares, loans, and dividends in one place.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
      "Savings Account Maintenance",
      "CDA Chart of Accounts",
      "Loan Co-Maker Set Up",
      "Loan Application",
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
    icon: icon9,
    title: "TRADING MODULE",
    description: "Track purchases, sales, and inventory movement in real time.",
    features: ["Accounting Modules", "Inventory Modules", "Core Financials"],
  },
  {
    image: img10,
    icon: icon10,
    title: "REAL ESTATE MODULE",
    description:
      "List, sell, and manage properties without the paperwork maze.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
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
      "Buyer's Ledger",
      "Real Estate Sales",
      "Property Maintenance",
      "JVA Maintenance",
    ],
  },
  {
    image: img11,
    icon: icon11,
    title: "COMMISSARY MODULE",
    description:
      "Manage production, costs, and distribution from a central hub.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
      "POS Module",
      "Production Module",
      "Online Sales Order",
    ],
  },
  {
    image: img12,
    icon: icon12,
    title: "RESTAURANT MODULE",
    description: "Manage orders, recipes, and kitchen costs in one system.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
      "Production Module",
      "POS Module",
      "Online Sales Order",
      "Kitchen Monitoring",
      "Table Monitoring",
      "Receipt Bill of Materials",
    ],
  },
  {
    image: img13,
    icon: icon13,
    title: "E-COMMERCE MODULE",
    description: "Connect your store, inventory, and financials in one system.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
      "API for E-Commerce Website",
      "Online Ordering",
      "Production Module",
    ],
  },
  {
    image: img14,
    icon: icon14,
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
    icon: icon15,
    title: "IMPORTATION MODULE",
    description: "Monitor your imports from purchase order to landed cost.",
    features: [
      "Accounting Modules",
      "Inventory Modules",
      "Landed Cost",
      "Importation Cost",
      "Brokerage and Delivery Charges",
      "Container Deposit",
      "Shipping Charges",
      "Service Invoice",
      "Advance Duties",
      "Letters of Credit Charges",
    ],
  },
];

// ─── ErpIndustries ────────────────────────────────────────────────────────────

const ErpIndustries = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
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
