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
    title: "Centralized Financial Records",
    image: "/products/CentralizedFinancialRecords.png",
    bullets: [
      "Record financial transactions in a centralized platform",
      "Maintain structured accounting records across departments",
      "Securely store financial data for easy access and monitoring",
    ],
    defaultState: "full",
  },
  {
    id: 2,
    title: "Comprehensive Financial Reporting",
    image: "/products/ComprehensiveFinancialReporting.png",
    bullets: [
      "Generate Trial Balance, Income Statement, and Balance Sheet",
      "Produce BIR-compliant reports",
      "Perform gross profit analysis, variance analysis, and trial balance reporting",
    ],
    defaultState: "collapsed",
  },
  {
    id: 3,
    title: "Efficient Accounting Workflow",
    image: "/products/EfficientAccountingWorkflow.png",
    bullets: [
      "Manage end-to-end cycles from Order to Collection and P.O. to Payment",
      "Automate bank reconciliation, journal vouchers, and budget uploads",
      "Support period-end closing, subsidiary ledger management, and more",
    ],
    defaultState: "collapsed",
  },
  {
    id: 4,
    title: "Accurate Financial Management",
    image: "/products/AccurateFinancialManagement.png",
    bullets: [
      "Maintain a complete Book of Accounts",
      "Track inventory movements with goods receipts, inventory audits, and more",
      "Ensure BIR compliance with E-Invoicing, E-Receipts, and more",
    ],
    defaultState: "full",
  },
];

const HEIGHT = {
  collapsed: 90,
  half: 175,
  full: 260,
};

const CheckIcon = () => (
  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7L5.5 10L11.5 4" stroke="#02208C" strokeWidth="2" />
    </svg>
  </div>
);

export default function IntroCards() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <>
      {/* MOBILE */}
      <div className="flex flex-col gap-2 md:hidden px-4 pt-4 pb-10">
        {cards.map((card) => {
          const isActive = activeId === card.id;

          return (
            <div
              key={card.id}
              className="transition-all duration-500"
              style={{
                zIndex: isActive ? 20 : 1,
              }}
            >
              <CardItem
                card={card}
                isActive={isActive}
                isSiblingActive={false}
                setActiveId={setActiveId}
                mobile
              />
            </div>
          );
        })}
      </div>

      {/* DESKTOP */}
      <div className="hidden md:grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto items-start">
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
    </>
  );
}

function CardItem({
  card,
  isActive,
  isSiblingActive,
  setActiveId,
  mobile = false,
}: {
  card: CardData;
  isActive: boolean;
  isSiblingActive: boolean;
  setActiveId: (id: number | null) => void;
  mobile?: boolean;
}) {
  const state = card.defaultState || "half";

  const mobileHeight = isActive ? HEIGHT.full : 95;

  const height = mobile
    ? mobileHeight
    : isActive
    ? HEIGHT.full
    : isSiblingActive
    ? HEIGHT.collapsed
    : HEIGHT[state];

  return (
    <div
      onMouseEnter={() => !mobile && setActiveId(card.id)}
      onMouseLeave={() => !mobile && setActiveId(null)}
      onClick={() => mobile && setActiveId(isActive ? null : card.id)}
      className="w-full transition-all duration-500 ease-in-out cursor-pointer"
      style={{ height }}
    >
      <div className="relative h-full bg-gradient-to-br from-[#004A80] to-[#2D7DB8] border border-white/10 rounded-2xl shadow-md p-5 flex flex-col gap-3 overflow-hidden">
        {/* TITLE */}
        <div className="relative z-10 flex items-start gap-3">
          <CheckIcon />

          <h3 className="text-white font-semibold text-[16px] md:text-[18px]">
            {card.title}
          </h3>
        </div>

        {/* CONTENT */}
        {(!mobile || isActive) && (
          <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar">
            <ul className="flex flex-col gap-2 pl-1 text-base text-white">
              {card.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-[10px] flex-shrink-0" />

                  <span className={isActive ? "" : "line-clamp-2"}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

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