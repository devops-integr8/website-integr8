"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Module {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const modules: Module[] = [
  {
    id: 1,
    title: "BOOK OF ACCOUNTS",
    description:
      "Every transaction automatically lands in the right book. GR8Books maintains your complete set of accounting books — accurately, in real time, without the manual entry.",
    image: "/images/productsModules/Book of Accounts.png",
    tags: [
      "Sales Quotation",
      "Sales Orders",
      "Delivery Receipts",
      "Sales Invoice",
      "Official Receipts",
      "Collection Receipt",
      "Price List",
      "Acknowledgement Receipt",
    ],
  },
  {
    id: 2,
    title: "P.O. TO PAYMENT",
    description:
      "Take control of every purchase — from request to disbursement. GR8Books ensures your procurement process is transparent, traceable, and always audit-ready.",
    image: "/images/productsModules/Purchase Order.png",
    tags: [
      "Billing Statement",
      "Billing Invoice",
      "Service Invoice",
      "Official Receipt",
      "Collection Receipt",
      "Acknowledgement Receipt",
    ],
  },
  {
    id: 3,
    title: "BILLING TO COLLECTION",
    description:
      "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
    image: "/images/productsModules/Billing.png",
    tags: [
      "Demand Forecasting",
      "Materials Planning",
      "BOM Semi-finished Goods",
      "BOM Explosion",
      "Work in Progress",
      "BOM Conversion",
      "Standard Cost",
      "Average Cost",
      "BOM Finished Goods Transfer",
      "Job Order",
      "Finished Goods Transfer",
    ],
  },
  {
    id: 4,
    title: "ACCOUNTING MODULE",
    description:
      "Maintain your general ledger, journal entries, and core accounting processes — all structured for accuracy and consistency.",
    image: "/images/productsModules/Accounting.png",
    tags: [
      "Advances to Supplier",
      "Cash Advance",
      "Purchase Journal",
      "Sales Journal",
      "Journal Voucher",
      "Subsidiary Ledger",
      "Period End Closing",
      "Audit Trail",
      "Petty Cash Replenishment",
      "Bank Reconciliation",
      "Query Generator",
      "Budget Uploader",
      "Petty Cash Disbursement",
    ],
  },
  {
    id: 5,
    title: "REPORTS",
    description:
      "No more waiting for month-end reports. GR8Books generates financial, inventory, and compliance reports in real time — so leadership always has the full picture.",
    image: "/images/productsModules/Transaction Reports.png",
    tags: [
      "Actual vs Budget",
      "Preliminary Trial Balance",
      "Post Closing Trial Balance",
      "Income Statement",
      "Balance Sheet",
      "Statement of Cashflow",
      "Cash Advance Reports",
      "Transaction Registers",
      "Statement of Changes in Equity",
      "Sales Reports",
    ],
  },
  {
    id: 6,
    title: "BIR REPORTS",
    description:
      "GR8Books is built specifically for Philippine businesses. BIR CAS certification, EDI/COR/SRP readiness, and CDA reporting are built in. Never worry about compliance again.",
    image: "/images/productsModules/BIR Reports.png",
    tags: [
      "Summary List of Sales (SLS)",
      "BIR CAS Registration",
      "Summary List of Purchases (SLP)",
      "2307 Form",
      "Quarterly Alphalist of Payees (QAP)",
      "E-Invoicing",
      "Summary Alphalist of Withholding Tax (SAWT)",
      "Annual Alphalist of Payees",
      "E-Receipts",
      "DAT File Generation of Alphalist",
      "Tax Computations",
      "Monthly Alphalist of Payees (MAP)",
    ],
  },
  {
    id: 7,
    title: "ORDER & COLLECTION",
    description:
      "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
    image: "/images/productsModules/Collection.png",
    tags: [
      "Acknowledgement Receipt",
      "Price List",
      "Official Receipts",
      "Collection Receipt",
      "Delivery Receipts",
      "Sales Invoice",
      "Sales Quotation",
      "Sales Orders",
    ],
  },
  {
    id: 8,
    title: "INVENTORY MODULE",
    description:
      "Real-time inventory visibility means no more stockouts, no more overstocking. GR8Books tracks every item from request to issuance — and every discrepancy before it costs you.",
    image: "/images/productsModules/Inventory.png",
    tags: [
      "BOM Finished Goods Transfer",
      "BOM Explosion",
      "BOM Conversion",
      "BOM Semi-finished Goods",
      "Standard Cost",
      "Average Cost",
      "Job Order",
      "Work in Progress",
      "Finished Goods Transfer",
      "Demand Forecasting",
      "Materials Planning",
    ],
  },
  {
    id: 9,
    title: "SAVINGS",
    description:
      "Replace your fragmented spreadsheets with a complete accounting engine. From advances and vouchers to period-end closing and subsidiary ledgers — it's all here, all connected.",
    image: "/images/productsModules/Savings.png",
    tags: [
      "Savings Interest Based on ADB",
      "Savings Verifier",
      "Withdrawals Module",
      "Withdrawal Slip Validation",
      "General Interest",
      "Interest Computation Type",
      "Deposit Module",
      "Deposit Slip Validation",
      "Minimum Account to Generate Interest",
      "Passbook Printing",
      "Joint Account",
      "Annual Interest Percentage Rate",
    ],
  },
  {
    id: 10,
    title: "LOAN MODULE",
    description:
      "Take control of every purchase — from request to disbursement. GR8Books ensures your procurement process is transparent, traceable, and always audit-ready.",
    image: "/images/productsModules/Loan Module.png",
    tags: [
      "Loan Application",
      "Diminishing Balance Computation",
      "Past Due Penalty Computation",
      "Loan Verifier",
      "Collateral Limit",
      "Restructuring of Loans",
      "Diminishing Balance but with Even Principal",
      "Maximum and Minimum Loanable Amount",
      "Co-Maker Limit",
      "Loan Approval Limit",
      "Salary Deduction Billing and Collection",
      "Auto Deduct if with Payroll System",
    ],
  },
  {
    id: 11,
    title: "LOAN REPORTS",
    description:
      "Missed loan deadlines and scattered records cost you. GR8Books tracks every loan from approval to collection — and every overdue account before it slips through.",
    image: "/images/productsModules/Loan Reports.png",
    tags: [
      "Demand Letter",
      "Loan Aging",
      "Loan Approval",
      "Loan Promissory Note",
      "Loan Release",
      "Loan Disclosure",
      "Loan Schedule",
    ],
  },
  {
    id: 12,
    title: "FINANCIAL REPORTS",
    description:
      "Unclear numbers lead to bad decisions. GR8Books tracks every transaction and turns it into clear, actionable financial reports — before it affects your bottom line.",
    image: "/images/productsModules/Financial Reports.png",
    tags: [
      "Aging of Accounts Payable",
      "Aging of Accounts Receivable",
      "Gross Profit Analysis",
      "Variance Analysis",
      "Journals",
      "Worksheet",
      "Balance Sheet",
      "Income Statements",
      "Statement of Changes in Equity",
      "Actual vs Budget",
      "Unserved Sales Order",
      "Unserved Purchase Order",
      "Statement of Cash Flows",
      "Cash Advance Report",
      "Transaction Reports",
      "Preliminary Trial Balance",
      "Priced-Out Inventory Stock List",
      "Post Closing Trial Balance",
    ],
  },
];

/* ─────────────────────────────────────────
   Individual hovercard
   Heights match original card proportions:
     image  → h-[220px] mobile / h-[240px] sm+
     body   → ~150px (py-6 + title + gap + ~3-line desc)
   ───────────────────────────────────────── */
// Cards with fewer tags than this threshold get extra spacing to avoid looking empty
const FEW_TAGS_THRESHOLD = 12;

function ModuleCard({ mod }: { mod: Module }) {
  const hasFewTags = mod.tags.length < FEW_TAGS_THRESHOLD;
  const tagGap = hasFewTags ? "gap-3" : "gap-2";
  const tagPadding = hasFewTags ? "px-4 py-2" : "px-3 py-[5px]";
  const tagText = hasFewTags ? "text-sm" : "text-xs";

  return (
    <div
      className="group relative h-[410px] sm:h-[430px] rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: "1.5px solid rgba(8, 24, 168, 0.4)" }}
    >
      {/* ── Full-card background image (always behind everything) ── */}
      <div className="absolute inset-0 bg-gray-100">
        <Image
          src={mod.image}
          alt={mod.title}
          fill
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
      </div>

      {/* ── White card body — slides DOWN on hover ── */}
      <div
        className="
          absolute left-0 right-0 bottom-0 bg-white
          flex flex-col gap-3 px-6 pt-6 pb-8 overflow-hidden
          top-[220px] sm:top-[240px]
          transition-transform duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          group-hover:translate-y-full
        "
      >
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

      {/* ── Gradient overlay — slides UP from bottom on hover ── */}
      <div
        className="
          absolute inset-0
          translate-y-full group-hover:translate-y-0
          transition-transform duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          flex flex-col p-6 pt-5
        "
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,55,242,0.8) 0%, rgba(0,0,0,0.8) 100%)",
        }}
      >
        {/* Title — fades in after overlay arrives */}
        <h3
          className="
            font-extrabold text-base tracking-wide uppercase leading-snug
            text-white mb-4 flex-shrink-0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300 delay-[200ms]
          "
        >
          {mod.title}
        </h3>

        {/* Feature tags — scrollable when overflowing, spacious when sparse */}
        <div
          className={`flex flex-wrap ${tagGap} content-start overflow-y-auto flex-1 pr-1`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255,255,255,0.25) transparent",
          }}
        >
          {mod.tags.map((tag: string, i: number) => (
            <span
              key={tag}
              className={`
                ${tagPadding} ${tagText} rounded-full font-medium text-white
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex-shrink-0
              `}
              style={{
                border: "1px solid rgba(255,255,255,0.4)",
                backgroundColor: "rgba(255,255,255,0.1)",
                transitionDelay: `${220 + i * 30}ms`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section wrapper — unchanged from original
   ───────────────────────────────────────── */
export default function ErpModules() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleModules: Module[] = showAll ? modules : modules.slice(0, 6);
  const gridRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    if (showAll) {
      // Scroll to grid top first, then collapse after scroll completes
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        setShowAll(false);
      }, 300);
    } else {
      setShowAll(true);
    }
  }

  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* ── MODULES eyebrow ── */}
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

        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-14 sm:mb-16">
          <h2
            className="font-bold leading-[1.1]"
            style={{ fontSize: "clamp(26px, 3vw, 46px)", color: "#0818A8" }}
          >
            A Fully Integrated ERP Solution that
            <br />
            Scales with You
          </h2>

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
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleModules.map((mod: Module) => (
            <ModuleCard key={mod.id} mod={mod} />
          ))}
        </div>

        {/* ── Show More / Show Less toggle ── */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleToggle}
            className="px-16 py-4 cursor-pointer rounded-lg text-sm font-medium border transition-colors duration-200"
            style={{
              color: "#0818A8",
              borderColor: "#0818A8",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.currentTarget.style.backgroundColor = "rgba(8,24,168,0.1)")
            }
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
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
