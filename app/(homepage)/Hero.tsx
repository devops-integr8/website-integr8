"use client";

import Link from "next/link";

const modules = [
  {
    label: "ACCOUNTING",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    style: "top-2 left-1/2 -translate-x-1/2",
  },
  {
    label: "HRIS & PAYROLL",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    style: "top-14 left-4",
  },
  {
    label: "PURCHASING",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    style: "top-1/2 -translate-y-1/2 left-0",
  },
  {
    label: "REPORTING & ANALYTICS",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    ),
    style: "bottom-14 left-4",
  },
  {
    label: "LENDING",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    style: "bottom-2 left-1/2 -translate-x-1/2",
  },
  {
    label: "INVENTORY",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    style: "top-14 right-4",
  },
  {
    label: "MANUFACTURING",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    style: "top-1/2 -translate-y-1/2 right-0",
  },
  {
    label: "POS",
    icon: (
      <svg width="28" height="28" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    style: "bottom-14 right-4",
  },
];

const features = [
  {
    title: "INTEGRATED SOLUTIONS",
    desc: "All your business needs in one unified platform.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    title: "AUTOMATE & OPTIMIZE",
    desc: "Save time, reduce errors, and improve efficiency.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41M12 2v2M12 20v2M2 12H4M20 12h2"/>
      </svg>
    ),
  },
  {
    title: "REAL-TIME INSIGHTS",
    desc: "Make smarter decisions with real-time data.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: "SECURE & RELIABLE",
    desc: "Enterprise-grade security you can trust.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="#1a3bcc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
];

// SVG connector points (center is 260,260 in a 520x520 grid)
const connectorLines = [
  { x2: 260, y2: 60 },   // top
  { x2: 85,  y2: 110 },  // top-left
  { x2: 55,  y2: 260 },  // left
  { x2: 95,  y2: 410 },  // bottom-left
  { x2: 260, y2: 460 },  // bottom
  { x2: 435, y2: 110 },  // top-right
  { x2: 465, y2: 260 },  // right
  { x2: 425, y2: 410 },  // bottom-right
];

export default function Hero() {
  return (    <section className="bg-gradient-to-br from-[#EEF4FF] via-[#F8FBFF] to-[#0F52BA] overflow-hidden">

      <div className="w-full pt-10 mx-auto px-10">
        {/* Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-4 items-center pt-12 pb-4">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 mb-5">
              <span className="text-blue-700 font-bold text-[11px] tracking-widest">SMART. SIMPLE. SCALABLE.</span>
            </div>

           <h1 className=" leading-[1.1] text-[#0b1f5e] mb-5">
  <span className="text-[40px] sm:text-[50px] lg:text-[65px] font-bold">
    Complete
  </span>
  <br />

  <span className="text-[40px] sm:text-[50px] lg:text-[65px] font-bold text-[#004A80]">
    ERP Software
  </span>
  <br />

  <span className="text-[40px] sm:text-[50px] lg:text-[65px] font-semibold">
    for Philippine Businesses
  </span>
</h1>

            <div className="w-14 h-1 bg-[#1a3bcc] rounded-full mb-5" />
            <p className="text-black text-[16px] leading-[1.7] max-w-[420px] mb-7">
              Automate Accounting, Inventory, Manufacturing, HRIS,
              Payroll, Lending, POS, and more — all in one integrated system.
            </p>
            <div className="flex flex-wrap gap-3">
         <Link
  href="/contactUs"
  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#004A80] text-white text-[13px] font-bold shadow hover:bg-blue-800 transition"
>
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="9 11 12 14 22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
  Request Demo
</Link>
         <Link
  href="/contactUs"
  className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#004A80] text-[#004A80] text-[13px] font-bold hover:bg-blue-50 transition"
>
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="9 11 12 14 22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
  Free Consultation
</Link>
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#004A80] text-[#004A80] text-[13px] font-bold hover:bg-blue-50 transition">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                Watch Video
              </button>
            </div>
          </div>

        {/* Right: Diagram */}
<div className="relative flex justify-center items-center overflow-hidden">
  <div className="relative scale-[0.65] sm:scale-[0.75] md:scale-[0.9] lg:scale-100 origin-center">
    <div className="relative w-[520px] h-[520px]">
              {/* Rings */}
              {[480, 380, 280].map((size) => (
                <div
                  key={size}
                  className="absolute rounded-full border border-blue-200"
                  style={{ width: size, height: size, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
                />
              ))}

              {/* SVG Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }} viewBox="0 0 520 520">
                {connectorLines.map((pt, i) => (
                  <g key={i}>
                    <line x1="260" y1="260" x2={pt.x2} y2={pt.y2} stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4,3" />
                    <circle cx={pt.x2} cy={pt.y2} r="5" fill="#1a3bcc" />
                  </g>
                ))}
              </svg>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-49 h-49 rounded-full bg-[#004A80] shadow-2xl flex flex-col items-center justify-center text-center text-white z-10 px-4 border-6 border-white">
                <p className="text-5xl font-bold leading-none">Gr8</p>
                <p className="text-[11px] font-bold tracking-wide mt-1">ERP SOFTWARE</p>
                <p className="text-[10px] mt-2 text-blue-200 leading-tight">ONE SYSTEM. ENDLESS <br /> POSSIBILITIES.</p>
              </div>

              {/* Module Cards */}
              {modules.map(({ label, icon, style }) => (
                <div
                  key={label}
                  className={`absolute bg-white hover:scale-[1.35] transition duration-500 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-1.5 z-10 ${style}`}
                  style={{ width: 110, height: 80 }}
                >
                  {icon}
                  <p className="text-[10px] font-bold text-[#1e3a8a] tracking-wide text-center leading-tight px-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Feature Strip */}
        <div className="bg-white rounded-3xl shadow-lg px-8 py-6 mb-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ title, desc, icon }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#0b1f5e] mb-1">{title}</p>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  
    </section>
  );
}