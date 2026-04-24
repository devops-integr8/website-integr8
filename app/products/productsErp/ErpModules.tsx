"use client";

import { useState } from "react";
import Image from "next/image";

const modules = [
  {
    id: 1,
    title: "BOOK OF ACCOUNTS",
    description:
      "Every transaction automatically lands in the right book. GR8Books maintains your complete set of accounting books — accurately, in real time, without the manual entry.",
    image: "/images/productsModules/BookofAccounts.jpg",
  },
  {
    id: 2,
    title: "P.O. TO PAYMENT",
    description:
      "Take control of every purchase — from request to disbursement. GR8Books ensures your procurement process is transparent, traceable, and always audit-ready.",
    image: "/images/productsModules/PurchaseOrder.jpg",
  },
  {
    id: 3,
    title: "BILLING TO COLLECTION",
    description:
      "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
    image: "/images/productsModules/Billing.jpg",
  },
  {
    id: 4,
    title: "ACCOUNTING MODULE",
    description:
      "Maintain your general ledger, journal entries, and core accounting processes — all structured for accuracy and consistency.",
    image: "/images/productsModules/AccountingModule.jpg",
  },
  {
    id: 5,
    title: "REPORTS",
    description:
      "No more waiting for month-end reports. GR8Books generates financial, inventory, and compliance reports in real time — so leadership always has the full picture.",
    image: "/images/productsModules/Reports.jpg",
  },
  {
    id: 6,
    title: "BIR REPORTS",
    description:
      "GR8Books is built specifically for Philippine businesses. BIR CAS certification, EDI/COR/SRP readiness, and CDA reporting are built in. Never worry about compliance again.",
    image: "/images/productsModules/AccountingBIRReports.jpg",
  },
  {
    id: 7,
    title: "ORDER & COLLECTION",
    description:
      "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
    image: "/images/productsModules/Collection.jpg",
  },
  {
    id: 8,
    title: "INVENTORY MODULE",
    description:
      "Real-time inventory visibility means no more stockouts, no more overstocking. GR8Books tracks every item from request to issuance — and every discrepancy before it costs you.",
    image: "/images/productsModules/Inventory.jpg",
  },
  {
    id: 9,
    title: "SAVINGS",
    description:
      "Replace your fragmented spreadsheets with a complete accounting engine. From advances and vouchers to period-end closing and subsidiary ledgers — it's all here, all connected.",
    image: "/images/productsModules/Sales.jpg",
  },
  {
    id: 10,
    title: "LOAN MODULE",
    description:
      "Take control of every purchase — from request to disbursement. GR8Books ensures your procurement process is transparent, traceable, and always audit-ready.",
    image: "/images/productsModules/LoanModule.jpg",
  },
  {
    id: 11,
    title: "LOAN REPORTS",
    description:
      "Missed loan deadlines and scattered records cost you. GR8Books tracks every loan from approval to collection — and every overdue account before it slips through.",
    image: "/images/productsModules/LoanReports.jpg",
  },
  {
    id: 12,
    title: "FINANCIAL REPORTS",
    description:
      "Unclear numbers lead to bad decisions. GR8Books tracks every transaction and turns it into clear, actionable financial reports — before it affects your bottom line.",
    image: "/images/productsModules/FinancialReports.jpg",
  },
];

export default function ErpModules() {
  const [showAll, setShowAll] = useState(false);

  const visibleModules = showAll ? modules : modules.slice(0, 6);

  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* ── MODULES eyebrow — larger ── */}
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

        {/* ── Header row: heading spreads wide, subtitle pinned right ── */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-14 sm:mb-16">
          {/* Heading: 2 lines, large, spread across like reference */}
          <h2
            className="font-bold leading-[1.1]"
            style={{ fontSize: "clamp(26px, 3vw, 46px)", color: "#0818A8" }}
          >
            A Fully Integrated ERP Solution that
            <br />
            Scales with You
          </h2>

          {/* Right subtitle — larger text, italic, right-aligned */}
          <p
            className="text-base sm:text-xl font-medium sm:text-right flex-shrink-0 sm:pt-2"
            style={{ color: "rgba(0,0,0,0.6)" }}
          >
            Includes Gr8 Books
            <br />
            Accounting Software
          </p>
        </div>

        {/* ── Module cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleModules.map((mod) => (
            <div
              key={mod.id}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{ border: "1.5px solid rgba(8, 24, 168, 0.4)" }}
            >
              {/* Card image */}
              <div className="relative w-full h-[220px] sm:h-[240px] bg-gray-100 flex-shrink-0">
                <Image
                  src={mod.image}
                  alt={mod.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-3 px-6 py-6">
                <h3
                  className="font-extrabold text-base tracking-wide uppercase leading-snug"
                  style={{ color: "#0818a8" }}
                >
                  {mod.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(0,0,0,0.6)" }}
                >
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Show More / Show Less toggle ── */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-16 py-4 rounded-lg text-sm font-medium border transition-colors duration-200"
            style={{
              color: "#0818A8",
              borderColor: "#0818A8",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(8,24,168,0.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
