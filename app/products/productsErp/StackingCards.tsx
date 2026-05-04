"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const cardPairs = [
  {
    left: {
      id: 1,
      category: "ORDER & COLLECTION",
      description:
        "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
      tags: [
        "Sales Quotation",
        "Sales Orders",
        "Delivery Receipts",
        "Price List",
        "Sales Invoice",
        "Official Receipts",
        "Collection Receipt",
        "Acknowledgement Receipt",
      ],
    },
    right: {
      id: 2,
      category: "P.O. TO PAYMENT",
      description:
        "Take control of every purchase — from request to disbursement. GR8Books ensures your procurement process is transparent, traceable, and always audit-ready.",
      tags: [
        "Billing Statement",
        "Billing Invoice",
        "Service Invoice",
        "Official Receipt",
        "Collection Receipt",
        "Acknowledgement Receipt",
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
        "Demand Forecasting",
        "Materials Planning",
        "BOM Finished Goods Transfer",
        "JOB Order",
        "BOM Explosion",
        "Work in Progress",
        "BOM Conversion",
        "Finished Goods Transfer",
        "Standard Cost",
        "Average Cost",
      ],
    },
    right: {
      id: 4,
      category: "BILLING TO COLLECTION",
      description:
        "Stop chasing paperwork. GR8Books handles every step of your sales cycle — from the first quotation to the final collection receipt — in one seamless flow.",
      tags: [
        "Billing Statement",
        "Billing Invoice",
        "Service Invoice",
        "Official Receipt",
        "Collection Receipt",
        "Acknowledgment Receipt",
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
        "Deposit Module",
        "General Interest",
        "Savings Verifier",
        "Withdrawals Module",
        "Annual Interest Percentage Rate",
        "Deposit Slip Validation",
        "Passbook Printing",
        "Joint Account",
        "Minimum Account to Generate Interest",
        "Savings Interest Based on ADB",
        "Withdrawal Slip Validation",
      ],
    },
    right: {
      id: 6,
      category: "ACCOUNTING MODULE",
      description:
        "Every transaction automatically lands in the right book. GR8Books maintains your complete set of accounting books — accurately, in real time.",
      tags: [
        "Advances to Supplier",
        "Cash Advance",
        "Petty Cash Disbursement",
        "Petty Cash Replenishment",
        "Purchase Journal",
        "Sales Journal",
        "Journal Voucher",
        "Bank Reconciliation",
        "Query Generator",
        "Subsidiary Leger",
        "Period End Closing",
        "Audit Trail",
        "Budget Uploader",
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
        "Loan Application",
        "Loan Verifier",
        "Auto Deduct if with Payroll System",
        "Collateral Limit",
        "Co-Maker Limit",
        "Diminishing Balance Computation",
        "Loan Approval Limit",
        "Maximum and Minimum Loanable Amount",
        "Past Due Penalty Computation",
        "Salary Deduction Billing and Collection",
        "Restructuring of Loans",
      ],
    },
    right: {
      id: 8,
      category: "LOAN REPORTS",
      description:
        "Real-time visibility means no more surprises. GR8Books tracks every loan from application to settlement — and every discrepancy before it costs you.",
      tags: [
        "Demand Letter",
        "Loan Aging",
        "Loan Approval",
        "Loan Disclosure",
        "Loan Promissory Note",
        "Loan Release",
        "Loan Schedule",
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
        "Cash Disbursement Book",
        "Cash Receipt Book",
        "Purchase Book",
        "Sales Book",
        "Accounts Payable Book",
        "Inventory Book",
        "General Ledger",
        "General Journal",
      ],
    },
    right: {
      id: 10,
      category: "REPORTS",
      description:
        "GR8Books is built specifically for Philippine businesses. BIR CAS certification, EDI/COR/SRP readiness, and CDA reporting are built in — not bolted on.",
      tags: [
        "Actual VS Budget",
        "Preliminary Trial Balance",
        "Post Closing Trial Balance",
        "Balance Sheet",
        "Statement of Cashflow",
        "Statement of Changes in Equity",
        "Cash Advance Reports",
        "Transaction Registers",
        "Sales Report",
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
        "Summary List of Sales (SLS)",
        "Summary List of Purchases (SLP)",
        "Quarterly Alphalist of Payees (QAP)",
        "Annual Alphalist of Payees",
        "BIR CAS Registration",
        "DAT File Generation of Alphalist",
        "E-Invoicing",
        "E-Receipt",
        "Tax Computation",
        "2307 Form",
      ],
    },
    right: null,
  },
];

// ─── Animation constants ──────────────────────────────────────────────────────
// How many px each stacked card peeks above the active one
const STACK_Y_OFFSET = 12;
// Scale reduction per stack depth level (depth-1 = 0.975, depth-2 = 0.95, …)
const STACK_SCALE_STEP = 0.025;
// Off-screen Y for cards that haven't entered yet (larger than any viewport)
const BELOW_PX = 1500;

// ─── Types ────────────────────────────────────────────────────────────────────
type CardData = {
  id: number;
  category: string;
  description: string;
  tags: string[];
};

// ─── Blue feature card ────────────────────────────────────────────────────────
function CardFace({ card }: { card: CardData }) {
  return (
    <div
      className="relative w-full p-8 sm:p-10 flex flex-col"
      style={{
        background:
          "linear-gradient(140deg, #1a35ff 0%, #0a20cc 55%, #0816a8 100%)",
        borderRadius: "18px",
        boxShadow:
          "0 24px 64px rgba(10,32,204,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
        height: "calc(100vh - 160px)",
        minHeight: "480px",
        maxHeight: "820px",
      }}
    >
      <span
        className="absolute top-5 right-7 font-bold select-none pointer-events-none"
        style={{
          fontSize: "clamp(64px,7vw,96px)",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
          color: "rgba(255,255,255,0.05)",
        }}
      >
        {String(card.id).padStart(2, "0")}
      </span>

      <div className="mb-6">
        <p
          className="text-white font-bold mb-3"
          style={{ fontSize: "clamp(18px,1.5vw,22px)", letterSpacing: "0.2em" }}
        >
          {card.category}
        </p>
        <p
          className="text-white/70 leading-relaxed"
          style={{ fontSize: "clamp(16px,2vw,22px)", maxWidth: "36ch" }}
        >
          {card.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-full font-medium bg-white text-blue-900"
            style={{
              fontSize: "clamp(10px,0.85vw,12px)",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── CTA card ─────────────────────────────────────────────────────────────────
function CtaCard() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center text-center p-10"
      style={{
        background: "linear-gradient(140deg, #0a20cc 0%, #060f80 100%)",
        borderRadius: "18px",
        boxShadow:
          "0 24px 64px rgba(6,15,128,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        height: "calc(100vh - 160px)",
        minHeight: "480px",
        maxHeight: "820px",
      }}
    >
      <p className="text-white/40 text-xs tracking-widest uppercase mb-3">
        Ready to start?
      </p>
      <h3
        className="text-white font-bold mb-4"
        style={{ fontSize: "clamp(20px,2.5vw,28px)" }}
      >
        All modules.
        <br />
        One platform.
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

// ─── Card column with depth shadow layers ─────────────────────────────────────
function CardSlot({
  card,
  isCta = false,
}: {
  card: CardData | null;
  isCta?: boolean;
}) {
  return (
    <div className="relative flex-1 min-w-0">
      <div
        className="absolute"
        style={{
          inset: 0,
          bottom: "-16px",
          left: "16px",
          right: "16px",
          background: "rgba(10,32,204,0.18)",
          borderRadius: "18px",
          zIndex: 1,
        }}
      />
      <div
        className="absolute"
        style={{
          inset: 0,
          bottom: "-8px",
          left: "8px",
          right: "8px",
          background: "rgba(10,32,204,0.28)",
          borderRadius: "18px",
          zIndex: 2,
        }}
      />
      <div className="relative" style={{ zIndex: 3 }}>
        {isCta || !card ? <CtaCard /> : <CardFace card={card} />}
      </div>
    </div>
  );
}

// ─── Animated pair ────────────────────────────────────────────────────────────
/**
 * KEY DESIGN — no springs anywhere in this component.
 *
 * Springs were causing two problems:
 *   1. "Zoom-in" artifact on load — the spring overshoots its initial value
 *      before settling, making the card appear to scale up then back down.
 *   2. Stutter — two nested springs (one on scrollYProgress, one on the
 *      transformed value) interfere with each other and produce jitter.
 *
 * The fix: use raw `scrollYProgress` directly piped into `useTransform`.
 * The animation is 1-to-1 with actual scroll position — instantaneous and
 * stutter-free. Smoothness comes from `will-change: transform` promoting
 * each card to its own GPU compositor layer, which is exactly what
 * poly.app-style components rely on.
 *
 * Keyframe logic (N+1 evenly-spaced progress points):
 *   key[j] = j/N
 *   card i y-value at key j:
 *     j < i  → BELOW_PX   (waiting off-screen below)
 *     j = i  → 0          (active, centered)
 *     j > i  → –n×offset  (stacked above, peeking behind active card)
 */
function AnimatedPair({
  pair,
  index,
  totalPairs,
  scrollYProgress,
}: {
  pair: (typeof cardPairs)[0];
  index: number;
  totalPairs: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const N = totalPairs;

  // Progress key points: [0, 1/N, 2/N, …, 1]
  const keys = Array.from({ length: N + 1 }, (_, j) => j / N);

  // Y keyframes
  const yValues = keys.map((_, j) => {
    if (j < index) return BELOW_PX;
    if (j === index) return 0;
    return -(j - index) * STACK_Y_OFFSET;
  });

  // Scale keyframes
  const scaleValues = keys.map((_, j) => {
    if (j <= index) return 1;
    return Math.max(0.88, 1 - (j - index) * STACK_SCALE_STEP);
  });

  // Direct useTransform — no spring, 1:1 with scroll
  const y = useTransform(scrollYProgress, keys, yValues);
  const scale = useTransform(scrollYProgress, keys, scaleValues);

  return (
    <motion.div
      className="absolute inset-0 flex gap-5 sm:gap-6"
      style={{
        y,
        scale,
        zIndex: index + 1,
        transformOrigin: "center center",
        // GPU layer promotion — eliminates stutter by keeping transforms
        // entirely on the compositor thread, off the main JS thread.
        willChange: "transform",
      }}
    >
      <CardSlot card={pair.left} />
      <CardSlot card={pair.right} isCta={pair.right === null} />
    </motion.div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Raw scroll progress — NO spring wrapping.
   *
   * Applying useSpring to scrollYProgress was the root cause of both issues:
   *   • The spring "ramps up" from 0, causing the initial zoom-in artifact.
   *   • The spring adds latency that makes the animation feel slow and mushy.
   *
   * Using the raw value means the cards respond the instant you scroll,
   * matching the feel of poly.app's snappy, immediate transitions.
   */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-slate-100">
      {/* ── Header ── */}
      <div className="py-24 px-4 sm:px-10">
        <div className="flex justify-between items-end max-w-[1440px] mx-auto">
          <div>
            <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2">
              Features
            </p>
            <h2
              className="font-bold text-black leading-tight"
              style={{ fontSize: "clamp(26px,4vw,50px)" }}
            >
              Everything your business needs
            </h2>
          </div>
          <p className="text-gray-500 text-md sm:text-base max-w-md text-right">
            A fully integrated ERP Solutions that scales with you
          </p>
        </div>
      </div>

      {/*
        ── Scroll container ──
        Total height = N × 100vh so each card pair gets exactly one full
        viewport-height of scroll distance before the next one takes over.
      */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${cardPairs.length * 100}vh` }}
      >
        {/*
          ── Sticky viewport ──
          Stays fixed for the entire scroll container.
          • h-screen + flex items-center → cards always vertically centered
          • overflow-hidden → clips cards sitting at BELOW_PX off the bottom
            and prevents stacked cards leaking outside the frame
        */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden px-4 sm:px-10">
          {/*
            ── Card stage ──
            All AnimatedPairs are `absolute inset-0`, layered in the DOM.
            This fixed-height box is what stays centered in the viewport.
          */}
          <div
            className="relative w-full max-w-[1440px] mx-auto"
            style={{
              height: "calc(100vh - 160px)",
              minHeight: "480px",
              maxHeight: "820px",
            }}
          >
            {cardPairs.map((pair, i) => (
              <AnimatedPair
                key={i}
                pair={pair}
                index={i}
                totalPairs={cardPairs.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-32" />
    </section>
  );
}
