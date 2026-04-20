import { Check } from "lucide-react";
import Image from "next/image";
import ERPSoftware from '@/public/products/transimg.png'

export default function FeatureTimeline() {
  const features = [
    "User-Friendly Interface",
    "Fully Integrated And Seamless",
    "Tailored Per Business Type",
    "Scalable For Business Growth",
    "BIR Compliant",
    "Real-Time Report Generation",
    "Workflow & Process Automation",
    "Data Management & Backup",
  ];

  return (
    <div className="max-w-[1440px] mx-auto py-10 sm:py-16 px-4 sm:px-8">

      {/* TOP HEADER */}
      <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
        Features
      </p>

      {/* ✅ On mobile: stack title and subtitle. On desktop: side by side */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-10 sm:mb-12">
        <h2
          className="font-bold text-black leading-tight"
          style={{ fontSize: "clamp(26px, 3vw, 46px)" }}
        >
          Transform Your Business<br />Operations
        </h2>
        <p className="text-gray-500 text-sm sm:text-base sm:max-w-xs sm:text-right">
          Manage your entire organization in one powerful platform
        </p>
      </div>

      {/* BOTTOM — timeline + image */}
      {/* ✅ On mobile: stack vertically. On desktop: side by side */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Timeline */}
        <div className="relative pl-10 flex-1 w-full">
          {/* Dotted Vertical Line */}
          <div
            className="absolute left-[11px] top-3 bottom-3 w-[2px]"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #93c5fd 0px, #93c5fd 6px, transparent 6px, transparent 12px)",
            }}
          />

          {features.map((feature, index) => (
            <div key={index} className="flex items-center mb-7 sm:mb-9 relative">
              <div className="absolute -left-10 z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full shadow-md">
                <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
              </div>
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        {/* ✅ On mobile: full width. On desktop: fixed width */}
        <div className="w-full lg:flex-shrink-0 flex justify-center">
          <Image
            src={ERPSoftware}
            alt="GR8 ERP Software"
            className="w-full max-w-sm sm:max-w-md lg:w-[600px] h-auto"
          />
        </div>

      </div>
    </div>
  );
}