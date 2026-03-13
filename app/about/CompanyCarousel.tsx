"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/company-overview/CompanyOverviewA.png",
    title: "The Beginning",
    description:
      "Founded in 2015, Integr8 Software Solutions, Inc. began by delivering computerized solutions for cooperatives and has since evolved into a multi-industry ERP provider under the GR8Books and GR8 ERP platforms.",
  },
  {
    id: 2,
    image: "/images/company-overview/CompanyOverviewB.jpg",
    title: "Across the Nation",
    description:
      "The company boasts a nationwide implementation footprint, serving clients across Quirino, Ifugao, NCR, South Luzon, Visayas, and Mindanao which demonstrates proven deployment and support capability across the Philippines.",
  },
  {
    id: 3,
    image: "/images/company-overview/CompanyOverviewC.jpg",
    title: "All-in-One ERP",
    description:
      "Integr8 delivers industry-focused ERP systems integrating accounting, inventory, payroll, HRIS, lending, and operational modules that are designed to improve workflow efficiency, data accuracy, and real-time visibility.",
  },
  {
    id: 4,
    image: "/images/company-overview/CompanyOverviewD.jpg",
    title: "Your Technology Partner",
    description:
      "Beyond software development, the company emphasizes structured system migration, user training, security controls, continuous R&D, and long-term client partnerships, reinforcing its commitment to sustainable digital transformation.",
  },
];

export default function CompanyCarousel() {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrent([(current + 1) % slides.length, 1]);
  };

  const prevSlide = () => {
    setCurrent([(current - 1 + slides.length) % slides.length, -1]);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timer);
  }, [current, isHovered]);

  const containerVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 110 : -110,
      opacity: 0.9,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -110 : 110,
      opacity: 0.9,
    }),
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0.95,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0.95,
    }),
  };

  const smoothTransition = {
    duration: 0.75,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  return (
    <div
      className="relative w-full py-24 bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative max-w-6xl mt-8 mx-auto h-100 group">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={slides[current].id}
            custom={direction}
            variants={containerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={smoothTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.08}
            dragMomentum={false}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.x > 120 || velocity.x > 500) prevSlide();
              else if (offset.x < -120 || velocity.x < -500) nextSlide();
            }}
            className="relative w-full h-full"
          >
            {/* IMAGE */}
            <motion.div
              custom={direction}
              variants={imageVariants}
              transition={smoothTransition}
              className="absolute left-0 top-0 w-[55%] h-full shadow-2xl z-10 overflow-hidden"
            >
              <Image
                src={slides[current].image}
                alt="slide"
                fill
                className="object-cover"
              />

              <h2
                className="
                absolute
                left-8 md:left-12
                top-1/2 -translate-y-1/2
                text-white
                font-bold
                leading-tight
                tracking-tight
                max-w-[55%]
                text-3xl
                md:text-5xl
                lg:text-6xl
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
                style={{
                  textShadow:
                    "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
                }}
              >
                {slides[current].title}
              </h2>
            </motion.div>

            {/* BLUE CARD */}
            <motion.div
              custom={direction}
              variants={cardVariants}
              transition={{ ...smoothTransition, delay: 0.05 }}
              className="absolute right-0 top-20 w-[55%] h-[85%]
              bg-linear-to-br 
              from-[rgba(34,77,154,0.90)] 
              to-[rgba(0,0,0,0.85)]
              backdrop-blur-[3px]
              border border-black
              shadow-[0_25px_60px_rgba(0,0,0,0.35)]
              z-20 flex items-center px-14"
            >
              <p className="text-white text-lg leading-relaxed">
                {slides[current].description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute -left-24 top-1/2 -translate-y-1/2
          p-4 z-30
          opacity-0 group-hover:opacity-70 hover:opacity-100
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          hover:scale-105 hover:-translate-x-1
          active:scale-95"
        >
          <ChevronLeft className="text-gray-600 w-16 h-16 stroke-[1.5]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-24 top-1/2 -translate-y-1/2
          p-4 z-30
          opacity-0 group-hover:opacity-70 hover:opacity-100
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          hover:scale-105 hover:translate-x-1
          active:scale-95"
        >
          <ChevronRight className="text-gray-600 w-16 h-16 stroke-[1.5]" />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center mt-16 gap-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent([index, index > current ? 1 : -1])}
            className={`h-1 w-20 cursor-pointer transition-all duration-300 ${
              current === index ? "bg-[#224d9a]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
