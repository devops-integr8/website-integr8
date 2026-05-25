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
    title: "P.O. TO PAYMENT",
    description:
      "Manage purchase requests, orders, and supplier payments from canvassing to cash disbursement",
    image: "/images/productsModules/Purchase Order.png",
    tags: [
      "Purchase Order",
      "Supplier Canvassing Form",
      "Accounts Payable Voucher",
      "Cash Disbursement",
      "Purchase Request",
      "Receiving Report",
    ],
  },

  {
    id: 2,
    title: "ACCOUNTING MODULE",
    description:
      "Manage invoices, receipts, ledgers, and financial records from transactions to audit trail",
    image: "/images/productsModules/Accounting.png",
    tags: [
      "Purchase Request",
      "Purchase Order",
      "General Ledger",
      "Advances to Supplier",
      "Accounts Payable Voucher",
      "Cash Disbursements",
      "Cash Advance",
      "Audit Trail",
      "Petty Cash Replenishment",
      "Bank Reconciliation",
      "Query Generator",
      "Sales Quotation",
      "Sales Order",
      "Service Invoice",
      "Journal Voucher",
      "Budget Uploader",
      "Subsidiary Ledger",
      "Period End Closing",
      "Billing Invoice",
      "Posting of Beginning Balances",
      "Petty Cash Voucher",
      "Billing Statement",
      "Official Receipt",
      "Collection Receipt",
      "Provisional Receipt",
      "Acknowledgement Receipt",
    ],
  },

  {
    id: 3,
    title: "BOOK OF ACCOUNTS",
    description:
      "Manage disbursements, receipts, journals, and ledgers across all books without the chaos",
    image: "/images/productsModules/Book of Accounts.png",
    tags: [
      "General Journal",
      "General Ledger",
      "Inventory Book",
      "Purchase Book",
      "Sales Book",
      "Cash Receipts Book",
      "Cash Disbursements Book",
      "Accounts Payable Book",
    ],
  },

  {
    id: 4,
    title: "FINANCIAL REPORTS",
    description:
      "Track journals, trial balances, and complete financial statements effortlessly",
    image: "/images/productsModules/Financial Reports.png",
    tags: [
      "Transaction Reports",
      "Sales Journal",
      "Purchase Journal",
      "Cash Receipts Journal",
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
      "Statement of Account",
      "Aging of Accounts Payable",
      "Aging of Accounts Receivable",
    ],
  },

  {
    id: 5,
    title: "BIR REPORTS",
    description:
      "Generate tax reports, alphalists, and BIR-compliant forms and submissions in one place",
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
];

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

      {/* ── White card body — slides DOWN on hover/focus ── */}
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

      {/* ── Gradient overlay — slides UP from bottom on hover/focus ── */}
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
            "linear-gradient(to bottom, rgba(4,55,242,0.8) 0%, rgba(0,0,0,0.8) 100%)",
        }}
      >
        {/* Title */}
        <h3
          className="
            font-extrabold text-base tracking-wide uppercase leading-snug
            text-white mb-4 flex-shrink-0
            opacity-0
            group-hover:opacity-100
            group-focus-within:opacity-100
            transition-opacity duration-300 delay-[200ms]
          "
        >
          {mod.title}
        </h3>

        {/* Feature tags */}
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
                ${tagPadding} ${tagText}
                rounded-full font-medium text-white
                opacity-0
                group-hover:opacity-100
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

export default function AccountingModules() {
  const [showAll, setShowAll] = useState<boolean>(false);
  const visibleModules: Module[] = showAll ? modules : modules.slice(0, 6);
  const gridRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    if (showAll) {
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
            Take Full Control of Every Number
            <br />
            That Matters
          </h2>

          <p
            className="text-base sm:text-xl font-medium sm:text-right flex-shrink-0 sm:pt-2"
            style={{ color: "rgba(0,0,0,0.6)" }}
          >
            From daily transactions to
            <br />
            financial reports
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleModules.map((mod: Module) => (
            <ModuleCard key={mod.id} mod={mod} />
          ))}
        </div>
      </div>
    </section>
  );
}
