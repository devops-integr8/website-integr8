"use client";

import Image from "next/image";
import { useState } from "react";
import { StaticImageData } from "next/image";

type CardProps = {
  title: string;
  description: string;
  features?: string[];
  image: StaticImageData | string;
};

const Card = ({ title, description, features = [], image }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div style={{ perspective: "1000px" }}>

      {/* FLIP CARD */}
      <div
        className="relative w-full cursor-pointer h-[420px]"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => setFlipped(!flipped)}
      >

        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-white font-bold text-xl">{title}</h3>
            <p className="text-white/80 text-sm mt-1">{description}</p>
            <p className="text-white text-xs mt-4 italic">
              Click to see features →
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* BLURRED IMAGE BACKGROUND */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover scale-110"
            style={{ filter: "blur(12px)" }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-white/10" />xs

         {/* SCROLLABLE CONTENT */}
            <div className="absolute inset-0 overflow-y-auto px-6 pt-6 pb-10">
 
            {/* TITLE */}
            <h3 className="text-white font-bold text-xl drop-shadow mb-4">
              {title}
            </h3>

            {/* PILL BADGES */}
            <div className="flex flex-wrap gap-2">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white text-gray-800 text-xs font-medium shadow-md"
                >
                  {f}
                </span>
              ))}
            </div>

                  {/* CLICK TO FLIP — pinned to bottom */}
                  <p className="absolute bottom-4 right-6 text-white/100 text-xs italic"> 
                     Click to flip back
                  </p>
          </div>
        </div>

      </div>

      {/* DESCRIPTION BELOW CARD */}
      <p className="text-sm text-gray-600 mt-3 max-w-[280px]">
        {description}
      </p>

    </div>
  );
};

export default Card;