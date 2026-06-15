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
      <img src="/products/cloudkeyIcon.png" alt="Cloud key Icon" className="w-[37px] h-[37px]" />
  );
}

function SystemManagementIcon() {
  return (
       <img src="/products/sysmanagementIcon.png" alt="System Management Icon" className="w-[37px] h-[37px]" />
  );
}

function ScalabilityIcon() {
  return (
<img src="/products/scalabilityIcon.png" alt="Scalability Icon" className="w-[37px] h-[37px]" />
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
    title: "SCALABILITY",
    desc: "Can support growing operations depending on system configuration and subscription setup.",
  },
];

export default function payrollCloud() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#2D7DB8] to-[#004A80] px-6 py-10">

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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
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

            <div className="w-full h-55 bg-white border border-[#0437F2] rounded-md pt-14 pb-6 px-6 text-center flex flex-col items-center">
              <h4 className="text-base font-bold text-[#02208C] mb-2">{f.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}