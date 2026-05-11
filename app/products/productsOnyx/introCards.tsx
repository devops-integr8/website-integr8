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
    title: "Integrated Business Processes",
    image: "/products/IntegratedBusinessProcesses.png",
    bullets: [
      "Manage sales transactions through an organized POS platform",
      "Connect purchasing and inventory processes with operational records",
      "Maintain centralized transaction data across business operations",
    ],
    defaultState: "full",
  },
  {
    id: 2,
    title: "Improved Operational Monitoring",
    image: "/products/ImprovedOperationalMonitoring.png",
    bullets: ["Monitor daily sales and product movement efficiently",
              "Track member total purchases and view previous transactions",
               "Manage user access controls and reprint receipts",
    ],
      defaultState: "half",
  },
  {
    id: 3,
    title: "Organized Business Records",
    image: "/products/OrganizedBusinessRecords.png",
    bullets: ["Maintain a centralized item master database",
              "Manage member tagging, VCE masterfile, and company information",
                "Generate audit trail reports, item master lists, and BIR sales reports",
    ],
    defaultState: "collapsed",
  },
  {
    id: 4,
    title: "Streamlined Sales Transactions",
    image: "/products/StreamlinedSalesTransactions.png",
    bullets: ["Processes quickly and efficiently through system",
    " Handle everything within a single POS interface",

"Seamlessly integrate POS transactions with Accounting and Inventory modules",
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
                 <li key={i} className="flex gap-2 items-start">
  <span className="w-1.5 h-1.5 bg-white rounded-full mt-[6px] flex-shrink-0" />
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