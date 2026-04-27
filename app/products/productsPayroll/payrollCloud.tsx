"use client";

const steps = [
  { number: "01", title: "Access", desc: "Browser-based" },
  { number: "02", title: "Connectivity", desc: "Remote access" },
  { number: "03", title: "Update", desc: "Centralized management" },
  { number: "04", title: "Best for", desc: "Flexible organizations" },
];

function CloudIcon() {
  return (
    <img src="/products/cloudIcon.png" alt="Cloud Icon" />
  );
}

function AccessibiltyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 80 80">
      <path d="M52 30c0-5.5-4.5-10-10-10a10 10 0 0 0-9.8 8A7 7 0 0 0 26 35c0 3.9 3.1 7 7 7h18a6 6 0 0 0 1-11.9z" fill="none" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="34" cy="54" r="5" fill="none" stroke="#02208C" strokeWidth="2.5"/>
      <line x1="39" y1="53" x2="56" y2="53" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="51" y1="53" x2="51" y2="57" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="56" y1="53" x2="56" y2="57" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function SystemManagementIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 80 80">
      <rect x="22" y="24" width="36" height="11" rx="2.5" fill="none" stroke="#02208C" strokeWidth="2.5"/>
      <circle cx="29" cy="29.5" r="2.5" fill="#02208C"/>
      <line x1="35" y1="29.5" x2="48" y2="29.5" stroke="#02208C" strokeWidth="2" strokeLinecap="round"/>
      <rect x="22" y="38" width="36" height="11" rx="2.5" fill="none" stroke="#02208C" strokeWidth="2.5"/>
      <circle cx="29" cy="43.5" r="2.5" fill="#02208C"/>
      <line x1="35" y1="43.5" x2="48" y2="43.5" stroke="#02208C" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="52" cy="60" r="7" fill="none" stroke="#02208C" strokeWidth="2.5"/>
      <circle cx="52" cy="60" r="2.5" fill="#02208C"/>
      <line x1="52" y1="50" x2="52" y2="53" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="52" y1="67" x2="52" y2="70" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="42" y1="60" x2="45" y2="60" stroke="#02208C"strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="59" y1="60" x2="62" y2="60" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="45" y1="53" x2="47" y2="55" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="57" y1="65" x2="59" y2="67" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="59" y1="53" x2="57" y2="55" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="45" y1="67" x2="47" y2="65" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

function ScalabilityIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 80 80">
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="#02208C"/>
        </marker>
      </defs>
      <rect x="14" y="52" width="10" height="14" rx="2" fill="#02208C"/>
      <rect x="28" y="42" width="10" height="24" rx="2" fill="#02208C"/>
      <rect x="42" y="30" width="10" height="36" rx="2" fill="#02208C"/>
      <line x1="10" y1="66" x2="58" y2="66" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="18" y1="58" x2="64" y2="16" stroke="#02208C" strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#arr)"/>
    </svg>
  );
}

const features = [
  {
    icon: <AccessibiltyIcon />,
    title: "ACCESSIBILITY",
    desc: "Designed for access through internet-enabled devices, allowing use across different locations.",
  },
  {
    icon: <SystemManagementIcon />,
    title: "SYSTEM MANAGEMENT",
    desc: "Maintenance, updates, and system availability may be handled centrally.",
  },
  {
    icon: <ScalabilityIcon />,
    title: "SYSTEM MAINTENANCE",
    desc: "Can support growing operations depending on system configuration and subscription setup.",
  },
];

export default function payrollCloud() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0437F2] to-[#02208C] px-6 py-16">

      {/* HEADER + DIVIDER WRAPPED */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-left gap-2.5 mb-1.5">
          <CloudIcon />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            HRIS (Cloud)
          </h2>
        </div>

        <p className="text-sm text-gray-300 mt-1">
          Designed for accessibility and flexibility through an internet-based platform
        </p>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white mt-5 mb-10" />
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white text-[#02208C] flex items-center justify-center font-bold text-xl">
              {step.number}
            </div>
            <h3 className="font-semibold text-lg text-white">{step.title}</h3>
            <p className="text-md text-gray-300 text-center">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-white border-4 border-[#02208C] outline outline-2 outline-[#02208C] flex items-center justify-center z-10 -mb-10">
              {f.icon}
            </div>

            <div className="w-full bg-white border border-[#0437F2] rounded-xl pt-14 pb-6 px-6 text-center flex flex-col items-center flex-1">
              <h4 className="text-xs font-bold tracking-widest text-[#02208C] mb-2">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}