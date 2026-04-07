import React from "react";
import Image from "next/image";
import PlaceHolder from "@/public/placeholder.webp";

type CardProps = {
  title: string;
  description: string;
};

type ColumnProps = {
  features: string[];
  cards: CardProps[];
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden group">
      <Image
        src={PlaceHolder}
        alt={title}
        className="w-full h-[200px] sm:h-[240px] lg:h-[260px] object-cover"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm opacity-90 max-w-[260px]">
          {description}
        </p>
      </div>
    </div>
  );
};
 

const Column = ({ features, cards }: ColumnProps) => {
  return (
    <div className="flex flex-col gap-6">
      
      {/* FEATURES */}
      <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm bg-white text-gray-700 shadow-sm">
        {features.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full border text-sm bg-white text-gray-700 shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {/* CARDS */}
      <div className="flex flex-col gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Column;