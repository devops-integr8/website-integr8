"use client";

import React, { useState } from "react";

interface CardData {
  id: number;
  title: string;
  bullets: string[];
  image?: string;
  defaultState?: "full" | "half" | "collapsed";
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Centralized Employee Management",
    image: "/products/CentralizedEmployeeManagement.png",
    bullets: [
      "Store employee profiles and HR information in one centralized platform",
      "Maintain structured employee records for easy HR administration",
      "Securely manage employee data, documents, and information",
      
    ],
    defaultState: "full",
  },
  {
    id: 2,
    title: "Integrated HR and Payroll Operations",
    image: "/products/IntegratedHRandPayrollOperations.png",
    bullets: [ "Seamlessly connect HRIS and Payroll modules",
               "Sync employee data across payroll settings, shift codes, group codes, and organization maintenance",
              "Upload timekeeping logs and bankfiles while managing leave types and holiday configurations", 
],
    defaultState: "half",
  },
  {
    id: 3,
    title: "Improved Workforce Administration",
    image: "/products/ImprovedWorkforceAdministration.png",
    bullets: [ "Manage employee profiles, approvals, and schedules in one system",
               "Track performance records for complete HR oversight",
               "Generate certificates with ease",


    ],
    defaultState: "collapsed",
  },
  {
    id: 4,
    title: "Accurate Payroll Processing",
    image: "/products/AccuratePayrollProcessing.png",
    bullets: ["Automate payroll computations for consistent and reliable results",
              "Produce government-mandated reports",
              "Generate payslips, and payroll reports for full audit compliance",
    ],
    defaultState: "half",
  },
];

const HEIGHT = {
  collapsed: 90,
  half: 165,
  full: 240,
};

const CheckIcon = () => (
  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7L5.5 10L11.5 4" stroke="#02208C" strokeWidth="2" />
    </svg>
  </div>
);

export default function IntroCards() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto items-start">
      {[0, 1].map((col) => {
        const top = cards[col];
        const bottom = cards[col + 2];

        return (
          <div key={col} className="flex flex-col gap-4">
            <CardItem
              card={top}
              isActive={activeId === top.id}
              isSiblingActive={activeId === bottom.id}
              setActiveId={setActiveId}
            />
            <CardItem
              card={bottom}
              isActive={activeId === bottom.id}
              isSiblingActive={activeId === top.id}
              setActiveId={setActiveId}
            />
          </div>
        );
      })}
    </div>
  );
}

function CardItem({
  card,
  isActive,
  isSiblingActive,
  setActiveId,
}: {
  card: CardData;
  isActive: boolean;
  isSiblingActive: boolean;
  setActiveId: (id: number | null) => void;
}) {
  const state = card.defaultState || "half";

  const height =
    isActive
      ? HEIGHT.full
      : isSiblingActive
      ? HEIGHT.collapsed
      : HEIGHT[state];

  return (
    <div
      onMouseEnter={() => setActiveId(card.id)}
      onMouseLeave={() => setActiveId(null)}
      className="w-full transition-all duration-500 ease-in-out"
      style={{ height }}
    >
      <div className="relative h-full bg-gradient-to-br from-[#02208C] to-[#0437F2] border border-white/10 rounded-2xl shadow-md p-5 flex flex-col gap-3 overflow-hidden">

        {/* TITLE */}
        <div className="relative z-10 flex items-start gap-3">
          <CheckIcon />
          <h3 className="text-white font-semibold text-[15px]">
            {card.title}
          </h3>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar">
          <ul className="flex flex-col gap-2 pl-1 text-sm text-white">
            {card.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full mt-[6px]" />
                <span className={isActive ? "" : "line-clamp-2"}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
        {card.image && (
          <img
            src={card.image}
            alt=""
            className="absolute bottom-0 right-0 w-28 pointer-events-none z-0"
          />
        )}
      </div>
    </div>
  );
}