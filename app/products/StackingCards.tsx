"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

// Card data remains the same
const cardPairs = [
  {
    left: {
      id: 1,
      category: "ORDER & COLLECTION",
      description:
        "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
      tags: [
        "Sales Quotation", "Sales Orders", "Delivery Receipts", "Price List",
        "Sales Invoice", "Official Receipts", "Collection Receipt", "Acknowledgement Receipt",
      ],
    },
    right: {
      id: 2,
      category: "P.O. TO PAYMENT",
      description:
        "Take control of every purchase — from request to disbursement. GR8Books ensures your procurement process is transparent, traceable, and always audit-ready.",
      tags: [
        "Billing Statement", "Billing Invoice", "Service Invoice",
        "Official Receipt", "Collection Receipt", "Acknowledgement Receipt",
      ],
    },
  },
  {
    left: {
      id: 3,
      category: "INVENTORY MODULE",
      description:
        "Real-time inventory visibility means no more stockouts, no more overstocking. GR8Books tracks every item from request to issuance.",
      tags: [
        "Demand Forecasting", "Materials Planning", "BOM Finished Goods Transfer",
        "JOB Order", "BOM Explosion", "Work in Progress", "BOM Conversion",
        "Finished Goods Transfer", "Standard Cost", "Average Cost",
      ],
    },
    right: {
      id: 4,
      category: "BILLING TO COLLECTION",
      description:
        "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
      tags: [
        "Billing Statement", "Billing Invoice", "Service Invoice",
        "Official Receipt", "Collection Receipt", "Acknowledgment Receipt",
      ],
    },
  },
  {
    left: {
      id: 5,
      category: "SAVINGS",
      description:
        "Replace your fragmented spreadsheets with a complete accounting engine. From advances and vouchers to period-end closing and subsidiary ledgers.",
      tags: [
        "Deposit Module", "General Interest", "Savings Verifier", "Withdrawals Module",
        "Annual Interest Percentage Rate", "Deposit Slip Validation", "Passbook Printing",
        "Joint Account", "Minimum Account to Generate Interest",
        "Savings Interest Based on ADB", "Withdrawal Slip Validation",
      ],
    },
    right: {
      id: 6,
      category: "ACCOUNTING MODULE",
      description:
        "Every transaction automatically lands in the right book. GR8Books maintains your complete set of accounting books — accurately, in real time.",
      tags: [
        "Advances to Supplier", "Cash Advance", "Petty Cash Disbursement",
        "Petty Cash Replenishment", "Purchase Journal", "Sales Journal",
        "Journal Voucher", "Bank Reconciliation", "Query Generator",
        "Subsidiary Leger", "Period End Closing", "Audit Trail", "Budget Uploader",
      ],
    },
  },
  {
    left: {
      id: 7,
      category: "LOAN MODULE",
      description:
        "Take control of every loan — from request to disbursement. GR8Books ensures your lending process is transparent, traceable, and always audit-ready.",
      tags: [
        "Loan Application", "Loan Verifier", "Auto Deduct if with Payroll System",
        "Collateral Limit", "Co-Maker Limit", "Diminishing Balance Computation",
        "Loan Approval Limit", "Maximum and Minimum Loanable Amount",
        "Past Due Penalty Computation", "Salary Deduction Billing and Collection",
        "Restructuring of Loans",
      ],
    },
    right: {
      id: 8,
      category: "LOAN REPORTS",
      description:
        "Real-time visibility means no more surprises. GR8Books tracks every loan from application to settlement — and every discrepancy before it costs you.",
      tags: [
        "Demand Letter", "Loan Aging", "Loan Approval", "Loan Disclosure",
        "Loan Promissory Note", "Loan Release", "Loan Schedule",
      ],
    },
  },
  {
    left: {
      id: 9,
      category: "BOOKS OF ACCOUNTS",
      description:
        "Every transaction automatically lands in the right book. GR8Books maintains your complete set of accounting books — accurately, in real time.",
      tags: [
        "Cash Disbursement Book", "Cash Receipt Book", "Purchase Book", "Sales Book",
        "Accounts Payable Book", "Inventory Book", "General Ledger", "General Journal",
      ],
    },
    right: {
      id: 10,
      category: "REPORTS",
      description:
        "GR8Books is built specifically for Philippine businesses. BIR CAS certification, EDI/COR/SRP readiness, and CDA reporting are built in — not bolted on.",
      tags: [
        "Actual VS Budget", "Preliminary Trial Balance", "Post Closing Trial Balance",
        "Balance Sheet", "Statement of Cashflow", "Statement of Changes in Equity",
        "Cash Advance Reports", "Transaction Registers", "Sales Report",
      ],
    },
  },
  {
    left: {
      id: 11,
      category: "BIR REPORTS",
      description:
        "No more waiting for month-end reports. GR8Books generates financial, inventory, and compliance reports in real time — so leadership always has the full picture.",
      tags: [
        "Summary List of Sales (SLS)", "Summary List of Purchases (SLP)",
        "Quarterly Alphalist of Payees (QAP)", "Annual Alphalist of Payees",
        "BIR CAS Registration", "DAT File Generation of Alphalist",
        "E-Invoicing", "E-Receipt", "Tax Computation", "2307 Form",
      ],
    },
    right: null, // last pair → CTA on right
  },
];

type CardData = { id: number; category: string; description: string; tags: string[] };

// ─── Blue Card ───────────────────────────────────────────────────────────────
function CardFace({ card }: { card: CardData }) {
  return (
    <div
      className="relative w-full p-8 sm:p-10 flex flex-col justify-between"
      style={{
        background: "linear-gradient(140deg, #1a35ff 0%, #0a20cc 55%, #0816a8 100%)",
        borderRadius: "18px",
        boxShadow: "0 24px 64px rgba(10, 32, 204, 0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
        height: "400px", // fixed height for smooth stacking
        minHeight: "400px",
      }}
    >
      <span
        className="absolute top-5 right-7 font-bold select-none pointer-events-none"
        style={{
          fontSize: "clamp(64px, 7vw, 96px)",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
          color: "rgba(255,255,255,0.05)",
        }}
      >
        {String(card.id).padStart(2, "0")}
      </span>

      <div>
        <p className="text-white font-bold mb-3" style={{ fontSize: "clamp(11px,1.1vw,13px)", letterSpacing: "0.2em" }}>
          {card.category}
        </p>
        <p className="text-white/70 mb-8 leading-relaxed" style={{ fontSize: "clamp(12px,1.05vw,14px)", maxWidth: "36ch" }}>
          {card.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full font-medium bg-white text-blue-900"
            style={{ fontSize: "clamp(10px,0.85vw,12px)", whiteSpace: "nowrap", boxShadow: "0 2px 8px rgba(0,0,0,0.18)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── CTA Card ───────────────────────────────────────────────────────────────
function CtaCard() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center text-center p-10"
      style={{
        background: "linear-gradient(140deg, #0a20cc 0%, #060f80 100%)",
        borderRadius: "18px",
        boxShadow: "0 24px 64px rgba(6, 15, 128, 0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        height: "400px",
        minHeight: "400px",
      }}
    >
      <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Ready to start?</p>
      <h3 className="text-white font-bold mb-4" style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}>
        All modules.<br />One platform.
      </h3>
      <p className="text-white/55 text-sm mb-8 max-w-[26ch] leading-relaxed">
        GR8Books is purpose-built for Philippine cooperatives and businesses.
      </p>
      <button
        className="flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
      >
        INQUIRE NOW
      </button>
    </div>
  );
}

// ─── Stacked Card with smooth parallax ──────────────────────────────────────
function StackedCard({ card, isCta = false, y }: { card: CardData | null; isCta?: boolean; y: any }) {
  // smooth spring for parallax motion
  const smoothY = useSpring(y, { damping: 20, stiffness: 120 });

  return (
    <motion.div className="relative flex-1 min-w-0" style={{ y: smoothY }}>
      {/* Layer 2 */}
      <div
        className="absolute"
        style={{
          inset: "0",
          bottom: "-12px",
          left: "12px",
          right: "12px",
          background: "rgba(10, 32, 204, 0.3)",
          borderRadius: "18px",
          zIndex: 1,
        }}
      />
      {/* Layer 1 */}
      <div className="relative" style={{ zIndex: 2 }}>
        {isCta || !card ? <CtaCard /> : <CardFace card={card} />}
      </div>
    </motion.div>
  );
}

// ─── Sticky row ─────────────────────────────────────────────────────────────
interface RowProps {
  pair: (typeof cardPairs)[0];
  index: number;
  scrollProgress: any;
  totalPairs: number;
}

const STICKY_TOP = 80;

function StickyRow({ pair, index, scrollProgress, totalPairs }: RowProps) {
  const remaining = totalPairs - index - 1;

  // Each row moves slightly based on scroll, creating parallax
  const y = useTransform(scrollProgress, [0, 1], [0, -remaining * 40]);

  return (
    <motion.div className="sticky w-full" style={{ top: `${STICKY_TOP}px` }}>
      <div className="flex gap-5 sm:gap-6 items-start">
        <StackedCard card={pair.left} y={y} />
        <StackedCard card={pair.right} isCta={pair.right === null} y={y} />
      </div>
    </motion.div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────
export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-slate-100 py-24 px-4 sm:px-10">
     <div className="flex justify-between items-end mb-20">
       <div>
        <p className="text-blue-600 text-xs font-bold tracking-widest uppercase">Features</p>
        <h2 className="w-xl font-bold text-black leading-tight" style={{ fontSize: "clamp(26px, 4vw, 50px)" }}>
          Everything your business needs
        </h2>
      </div>
      <div>
         <p className="text-gray-500 text-md sm:text-base max-w-md">
          A fully integrated ERP Solutions that scales with you
        </p>
      </div>
     </div>

      <div ref={containerRef} className="relative max-w-5xl mx-auto mb-20">
        <div className="flex flex-col">
          {cardPairs.map((pair, i) => (
            <StickyRow
              key={i}
              pair={pair}
              index={i}
              scrollProgress={scrollYProgress}
              totalPairs={cardPairs.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
