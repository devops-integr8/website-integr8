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
    title: "PAYROLL MODULE",
    description:
      "Process payroll through a structured system — ensuring accurate computations, organized records, and timely payroll execution.",
    image: "/images/productsModules/payrollModule.png",
    tags: [
      "User Management",
      "Timekeeping Logs Uploader",
      "Creating of Group Codes",
      "13th Month Generator",
      "Payroll and TK Settings",
      "Employee Ledger",
      "Creating of Shift Codes",
      "Payroll Generator",
      "Organization Maintenance",
      "ATM Uploader",
      "Adding of Leave Type",
      "Query Generator",
      "Creating of Weekly Schedule",
      "Bankfile",
      "Timekeeping Ledger",
      "Alphalist Report",
      "Adding of Holiday",
       "Report Generator",
    ],
  },
  {
    id: 2,
    title: "HRIS MODULE",
    description:
      "Manage employee information, attendance, and HR records in one platform — keeping workforce data organized and accessible.",
    image: "/images/productsModules/HRISModule.png",
    tags: [
      "Employee Profile",
      "Employee Daily Time Record",
      "Certificate of SSS Contributions",
      "Leave Approval",
      "2316 Viewing",
      "Record of Training",
      "Notice to Explain",
      "Request Certificate of Employment and Compensation",
      "Certificate of Philhealth",
      "Performance Appraisal",
      "Certificate of Employment",
      "Disciplinary Action",
      "Certificate of HDMF Contributions",
      "Viewing of Payslip with History",
    ],
  },
  {
    id: 3,
    title: "REPORTS",
    description:
      "Generate payroll and HR reports in real time — providing clear insights for monitoring. compliance, and decision-making.",
    image: "/images/productsModules/reportsModule.png",
    tags: [
      "Timekeeping Reports",
      "TK Cutoff Summary",
      "DTR",
      "PhilHealth",
      "HDMF",
      "Withholding Tax",
      "BIR 2316",
      "Holiday",
      "Leave",
      "Perfect Attendance",
      "Payslip",
      "Payroll ATM Report",
      "Payroll Summary",
      "SSS",
      "Undertime",
      "Night Differential",
      "Overtime",
      "Payroll Ledger Report",
      "Payroll Registry",
      "Denomination",
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
export default function PayrollModules() {
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
          Your People, Perfectly
            <br />
          Managed
          </h2>

          <p
            className="text-base sm:text-xl font-medium sm:text-right flex-shrink-0 sm:pt-2"
            style={{ color: "rgba(0,0,0,0.6)" }}
          >
        Give your team the tools to work smarter, 
            <br />
           stay compliant, and never miss a beat.
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

      
      </div>
    </section>
  );
}
