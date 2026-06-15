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
    title: "ORDER TO COLLECTION",
    description:
      "Manage quotations, sales orders, deliveries, and receipts from order to collection in one place.",
    image: "/images/productsModules/Collection.png",
    tags: [
      "Sales Quotation",
      "Sales Order",
      "Delivery Receipt",
      "Pick List",
      "Sales Invoice",
      "Official Receipt",
      "Collection Receipt",
      "Acknowledgement Receipt",
    ],
  },
  {
    id: 2,
    title: "P.O. TO PAYMENT",
    description:
      "Manage purchase requests, orders, and supplier payments from canvassing to cash disbursement.",
    image: "/images/productsModules/Purchase Order.png",
    tags: [
      "Purchase Request",
      "Supplier Canvassing Form",
      "Purchase Order",
      "Receiving Report",
      "Accounts Payable Voucher",
      "Cash Disbursement",
    ],
  },
  {
    id: 3,
    title: "ACCOUNTING MODULE",
    description:
      "Manage invoices, receipts, ledgers, and financial records from transactions to audit trail",
    image: "/images/productsModules/Accounting.png",
    tags: [
      "Purchase Request",
      "Purchase Order",
      "Advances to Supplier",
      "Accounts Payable Voucher",
      "Cash Disbursements",
      "Cash Advance",
      "Petty Cash Voucher",
      "Petty Cash Replenishment",
      "Official Receipt",
      "Collection Receipt",
      "Acknowledgement Receipt",
      "Bank Reconciliation",
      "Sales Quotation",
      "Sales Order",
      "Service Invoice",
      "Sales Invoice",
      "Billing Invoice",
      "Journal Voucher",
      "Query Generator",
      "Subsidiary Ledger/Verifier",
      "Period End Closing",
      "Posting of Beginning Balances",
      "Audit Trail",
      "Budget Uploader",
      "General Ledger",
      "Billing Statement",
    ],
  },
  {
    id: 4,
    title: "INVENTORY MODULE",
    description:
      "Track material requests, goods movement, and stock counts across multiple warehouses in one place.",
    image: "/images/productsModules/Inventory.png",
    tags: [
      "Material Request",
      "Goods Issue",
      "Goods Receipt",
      "Inventory Audit",
      "Inventory Count",
      "Item Query Generator",
      "Multiple Warehouse",
      "Standard Cost",
      "Average Cost",
      "Receiving Report",
    ],
  },
  {
    id: 5,
    title: "BOOK OF ACCOUNTS",
    description:
      "Manage disbursements, receipts, journals, and ledgers across all books without the chaos.",
    image: "/images/productsModules/Book of Accounts.png",
    tags: [
      "Cash Disbursements Book",
      "Cash Receipts Book",
      "Purchase Book",
      "Sales Book",
      "Accounts Payable Book",
      "General Journal",
      "General Ledger",
      "Inventory Book",
    ],
  },
  {
    id: 6,
    title: "FINANCIAL REPORTS",
    description:
      "Track journals, trial balances, and complete financial statements effortlessly.",
    image: "/images/productsModules/Financial Reports.png",
    tags: [
      "Unserved Purchase Order",
      "Unserved Sales Order",
      "Variance Analysis",
      "Actual vs Budget",
      "Transaction Reports",
      "Sales Journal",
      "Cash Receipts Journal",
      "Purchase Journal",
      "Accounts Payable Journal",
      "Cash Disbursements Journal",
      "General Journal",
      "Preliminary Trial Balance",
      "Post Closing Trial Balance",
      "Worksheet",
      "Balance Sheet",
      "Income Statements",
      "Statement of Changes in Equity",
      "Statement of Cash Flows",
      "Cash Advance Report",
      "Aging of Accounts Receivable",
      "Aging of Accounts Payable",
      "Statement of Account",
    ],
  },
  {
    id: 7,
    title: "BIR REPORTS",
    description:
      "Generate tax reports, alphalists, and BIR-compliant forms and submissions in one place.",
    image: "/images/productsModules/BIR Reports.png",
    tags: [
      "Summary List of Sales (SLS)",
      "Summary List of Purchases (SLP)",
      "Summary Alphalist of Withholding Tax (SAWT)",
      "Monthly Alphalist of Payees (MAP)",
      "Quarterly Alphalist of Payees (QAP)",
      "Annual Alphalist of Payees",
      "BIR CAS Registration",
      "DAT File Generation of Alphalist",
      "E-Invoicing",
      "E-Receipts",
      "Tax Computations",
      "2307 Form",
    ],
  },
  {
    id: 8,
    title: "INVENTORY REPORTS",
    description:
      "Analyze stock levels, profit, and unserved orders with detailed inventory reports in one place.",
    image: "/images/productsModules/Inventory.png",
    tags: [
      "Gross Profit Analysis",
      "Stock Analysis",
      "Unserved Sales Order",
      "Unserved Purchase Order",
      "Priced-Out Inventory List",
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
      tabIndex={0}
      className="group relative h-[410px] sm:h-[430px] rounded-2xl overflow-hidden cursor-pointer outline-none"
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
          group-focus-within:translate-y-full
        "
      >
        <h3
          className="font-extrabold text-base tracking-wide uppercase leading-snug"
          style={{ color: "#004A80" }}
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
          translate-y-full
          group-hover:translate-y-0
          group-focus-within:translate-y-0
          transition-transform duration-[520ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          flex flex-col p-6 pt-5
        "
        style={{
          background:
          "linear-gradient(to bottom, rgba(45, 125, 184, 0.8) 0%, rgba(0, 74, 128, 1) 100%)",  
        }}
      >
        {/* Title — fades in after overlay arrives */}
        <h3
          className="
            font-extrabold text-base tracking-wide uppercase leading-snug
            text-white mb-4 flex-shrink-0
            opacity-0 group-hover:opacity-100
            group-focus-within:opacity-100
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
                opacity-0 group-hover:opacity-100
                group-focus-within:opacity-100
                transition-opacity duration-300
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
            background: "linear-gradient(to right, #2D7DB8, #2D7DB8)",
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
            style={{ fontSize: "clamp(26px, 3vw, 46px)", color: "#0b1f5e" }}
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