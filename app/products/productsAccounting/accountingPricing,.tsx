"use client";

import { MapPin } from "lucide-react";
import React from "react";

export default function AccountingPricing() {
  return (
    <div className="w-full bg-white text-center relative overflow-hidden min-h-screen">
      {/* TOP CONTENT */}
      <div className="pt-16 pb-16 flex flex-col items-center px-4">
     

       {/* laptop */}
        <div>
          <img src="/products/laptop-onyx.png" alt="" className="w-22 h-22 object-contain" />
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold text-[#1E3A8A]">
          Lorem ipsum dolor
        </h2>

        <p className="text-sm text-gray-500 mt-2 max-w-md">
          Flexible pricing designed to fit your businesses needs whether you're
          starting or scaling
        </p>

        {/* PRICING CARD */}
        <div className="mt-6 bg-white rounded-sm shadow-md border border-blue-200 p-6 w-[340px] text-left ">
          {/* ROW 1 */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
              Outright Plan
              <span className="text-[10px] bg-green-100 text-green-600 px-2 py-[2px] rounded">
                Up to 30% Discount
              </span>
            </div>
            <div className="font-semibold text-blue-700 ml-2">₱ 00</div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-blue-100 mb-4" />

          {/* ROW 2 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-blue-700">
              <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
              Subscription Plan
            </div>
            <div className="font-semibold text-blue-700">₱ 00</div>
          </div>

      
        </div>

          {/* BUTTON inside card */}
          <button className="mt-4 w-[340px] bg-gradient-to-b from-[#0437F2] to-[#02208C] hover:to-[#011a6f] hover:from-[#0430d6] text-white text-sm py-2 rounded-sm tracking-widest font-medium transition-all duration-300">
            INQUIRE NOW
          </button>
      </div>

      {/* CURVED BLUE SECTION */}
      <div className=" w-full">
        {/* WAVE */}
        <div className="w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#0437F2"
              d="M0,90 C360,10 1080,10 1440,90 L1440,100 L0,100 Z"
            />
          </svg>
        </div>

        {/* FEATURES AREA */}
        <div className="bg-gradient-to-b from-[#0437F2] to-[#02208C] pb-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-sm text-white">
            <Feature
              icon={<SiteVisitIcon />}
              title="Free Site Visits"
              desc="Schedule on-site assessments with our team to identify opportunities for process improvement."
            />

            <Feature
              icon={<ConsultationIcon />}
              title="Free Consultation"
              desc="Connect with our specialists to discuss your team's needs."
            />

            <Feature
              icon={<TrainingIcon />}
              title="Free Online Training"
              desc="Access live and on-demand sessions led by our experts to help your team set up workflows quickly."
            />

            <Feature
              icon={<UserIcon />}
              title="Free Additional User"
              desc="Add one extra team member to your account at no cost and give them full access to collaborate on your forms and workspaces."
            />

            <Feature
              icon={<CalendarIcon />}
              title="Free 3-months Subscription"
              desc="Get three months of uninterrupted access to all features so your team can experience the whole system before subscribing."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 font-semibold text-white">
        {icon}
        {title}
      </div>
      <p className="text-xs text-white/75 text-left leading-relaxed">{desc}</p>
    </div>
  );
}

function SiteVisitIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-map-pin-icon lucide-map-pin"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ConsultationIcon() {
  return (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-message-square-more-icon lucide-message-square-more"
    >
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
    </svg>
  );
}

function TrainingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-folder-plus-icon lucide-folder-plus"
    >
      <path d="M12 10v6" />
      <path d="M9 13h6" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function UserIcon() {
  return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-users-icon lucide-users"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </svg>

  
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-calendar-days-icon lucide-calendar-days"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}