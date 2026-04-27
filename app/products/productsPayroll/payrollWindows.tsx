"use client";

const steps = [
  { number: "01", title: "Install", desc: "Local computers or servers" },
  { number: "02", title: "Access", desc: "Internal network only" },
  { number: "03", title: "Update", desc: "Manual installation" },
  { number: "04", title: "Best for", desc: "On-premise orgs" },
];

function WindowsIcon() {
  return (
    <img src="/products/Group.png" alt="Windows Icon" />
  );
}

function LocalDeploymentIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="gradLocal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#02208C" />
          <stop offset="100%" stopColor="#0437F2" />
        </linearGradient>
      </defs>

      <path
        d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6z"
        fill="url(#gradLocal)"
      />
      <circle cx="12" cy="8" r="2" fill="white" />
    </svg>
  );
}

function DataControlIcon() {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id="gradDoc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#02208C" />
          <stop offset="100%" stopColor="#0437F2" />
        </linearGradient>

        <linearGradient id="gradCircle" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0437F2" />
          <stop offset="100%" stopColor="#02208C" />
        </linearGradient>
      </defs>

      <rect x="4" y="2" width="12" height="16" rx="1.5" fill="url(#gradDoc)" />

      <line x1="7" y1="6" x2="13" y2="6" />
      <line x1="7" y1="9" x2="13" y2="9" />
      <line x1="7" y1="12" x2="10" y2="12" />

      <circle cx="16" cy="16" r="4" fill="url(#gradCircle)" />

      <line x1="14.5" y1="16" x2="17.5" y2="16" />
      <line x1="16" y1="14.5" x2="16" y2="17.5" />
    </svg>
  );
}

function SystemMaintenanceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      className="lucide lucide-wrench-icon lucide-wrench"
    >
      <defs>
        <linearGradient id="gradWrench" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#02208C" />
          <stop offset="100%" stopColor="#0437F2" />
        </linearGradient>
      </defs>

      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"
        fill="url(#gradWrench)"
      />
    </svg>
  );
}

const features = [
  {
    icon: <LocalDeploymentIcon />,
    title: "LOCAL DEPLOYMENT",
    desc: "Installed within company computers or servers, providing a more controlled environment.",
  },
  {
    icon: <DataControlIcon />,
    title: "DATA CONTROL",
    desc: "Data is maintained within internal systems based on company infrastructure.",
  },
  {
    icon: <SystemMaintenanceIcon />,
    title: "SYSTEM MAINTENANCE",
    desc: "Updates and maintenance may require manual handling or internal IT support.",
  },
];

export default function PayrollWindows() {
  return (
    <section className="w-full bg-white px-6 py-16">
      
      {/* HEADER + DIVIDER WRAPPED */}
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-left gap-2.5 mb-1.5">
          <WindowsIcon />
          <h2 className="text-2xl md:text-3xl font-bold text-[#02208C]">
            Gr8 Payroll (Windows)
          </h2>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          Designed for local deployment within a controlled system environment
        </p>

        {/* DIVIDER */}
        <div className="w-full h-px bg-[#02208C] mt-5 mb-10" />
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#02208C] to-[#0437F2] text-white flex items-center justify-center font-bold text-xl">
              {step.number}
            </div>
            <h3 className="font-semibold text-lg text-[#02208C]">{step.title}</h3>
            <p className="text-md text-gray-500">{step.desc}</p>
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

            <div className="w-full border border-[#0437F2] rounded-xl pt-14 pb-6 px-6 text-center flex flex-col items-center flex-1">
              <h4 className="text-xs font-bold tracking-widest text-[#02208C] mb-2">{f.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}