import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  "User-Friendly Interface",
  "BIR Compliant",
  "Fully Integrated And Seamless",
  "Real-Time Report Generation",
  "Tailored Per Business Type",
  "Workflow & Process Automation",
  "Scalable For Business Growth",
  "Data Management & Backup",
];

export default function ErpFeatures() {
  return (
    <section className="w-full bg-white py-14 sm:py-20 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Label */}
        <p
          className="text-base font-extrabold tracking-[0.2em] uppercase mb-4"
          style={{
            background: "linear-gradient(to right, #0437f2, #02208C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Features
        </p>

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-14">
          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(22px, 3vw, 46px)", color: "#0818A8" }}
          >
            Transform Your Business
            <br />
            Operations
          </h2>
          <p className="text-black/60 text-sm sm:text-base lg:text-xl font-medium sm:max-w-xs sm:text-right">
            Manage your entire organization
            <br className="hidden sm:block" /> in one powerful platform
          </p>
        </div>

        {/* Content: image + feature cards */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-stretch">
          {/* Image */}
          <div className="w-full lg:w-[50%] flex-shrink-0 min-h-[220px] sm:min-h-[300px] lg:min-h-[400px] relative rounded-xl overflow-hidden">
            <Image
              src="/images/productsErpHero/Gr8Features.png"
              alt="Gr8 ERP Software"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Feature cards — 1 col on mobile, 2 col on sm+ */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-row sm:flex-col justify-start sm:justify-center items-center sm:items-start gap-3 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 rounded-xl"
                style={{
                  background: "linear-gradient(to right, #0437f2, #02208C)",
                }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Check
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]"
                    style={{ color: "#02208C" }}
                  />
                </div>
                <span className="text-white text-sm sm:text-base font-semibold leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
