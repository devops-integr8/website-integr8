"use client";

import { useEffect, useState, useRef } from "react";
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
      "Founded in 2015, Integr8 Software Solutions, Inc. began by delivering computerized solutions for cooperatives and has since evolved into a multi-industry ERP provider under the Gr8Books and Gr8 ERP platforms.",
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
    image: "/images/company-overview/CompanyOverviewC.png",
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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const preloadedRef = useRef<Set<number>>(new Set());

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

  // Preload current, next, and previous images
  useEffect(() => {
    const indicesToPreload = [
      current,
      (current + 1) % slides.length,
      (current - 1 + slides.length) % slides.length,
    ];

    indicesToPreload.forEach((index) => {
      if (!preloadedRef.current.has(index)) {
        const img = new window.Image();
        img.onload = () => {
          setLoadedImages((prev) => new Set([...prev, index]));
          preloadedRef.current.add(index);
        };
        img.src = slides[index].image;
      }
    });
  }, [current]);

  const containerVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
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
      className="relative w-full bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden preload container - keeps images in DOM for instant display */}
      <div
        className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden"
        aria-hidden="true"
      >
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt=""
            loading="eager"
            onLoad={() => {
              setLoadedImages((prev) => new Set([...prev, index]));
              preloadedRef.current.add(index);
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-0 group">
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
            className="relative w-full"
          >
            {/* MOBILE LAYOUT — stacked with drag hint */}
            <div className="flex flex-col md:hidden">
              <div className="relative w-full h-56 sm:h-72 overflow-hidden shadow-2xl bg-gray-200">
                <img
                  src={slides[current].image}
                  alt="slide"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    loadedImages.has(current) ? "opacity-100" : "opacity-0"
                  }`}
                  decoding="async"
                />
                {!loadedImages.has(current) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <h2 className="absolute left-6 top-1/2 -translate-y-1/2 text-white font-bold leading-tight tracking-tight text-3xl drop-shadow-lg">
                  {slides[current].title}
                </h2>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none">
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/70 text-xs">
                    <ChevronLeft className="w-4 h-4 animate-pulse" />
                    <span>Swipe to navigate</span>
                    <ChevronRight className="w-4 h-4 animate-pulse" />
                  </div>
                </div>
              </div>
              <div
                className="w-full px-6 py-8"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(4,55,242,1), rgba(0,0,0,0.85))",
                }}
              >
                <p className="text-white text-sm leading-relaxed">
                  {slides[current].description}
                </p>
              </div>
            </div>

            {/* DESKTOP LAYOUT — overlapping */}
            <div className="hidden md:block relative h-80 lg:h-96">
              {/* IMAGE */}
              <motion.div
                custom={direction}
                variants={imageVariants}
                transition={smoothTransition}
                className="absolute left-0 top-0 w-[55%] h-full shadow-2xl z-10 overflow-hidden will-change-transform bg-gray-200"
              >
                <img
                  src={slides[current].image}
                  alt="slide"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    loadedImages.has(current) ? "opacity-100" : "opacity-0"
                  }`}
                  decoding="async"
                />
                {!loadedImages.has(current) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <h2
                  className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 text-white font-bold leading-tight tracking-tight max-w-[55%] text-4xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
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
                className="absolute right-0 top-14 lg:top-20 w-[55%] h-[85%]
                backdrop-blur-[3px] border border-black
                shadow-[0_10px_20px_rgba(0,0,0,0.25)]
                z-20 flex items-center px-8 lg:px-14 will-change-transform"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(4,55,242,1), rgba(0,0,0,0.85))",
                }}
              >
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  {slides[current].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* MOBILE NAVIGATION BUTTONS — visible below content */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full hover:bg-blue-200 active:bg-gray-300 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-blue-700" />
          </button>
          <span className="text-sm text-blue-700 font-medium">
            {current + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full hover:bg-blue-200 active:bg-gray-300 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-blue-700" />
          </button>
        </div>

        {/* DESKTOP ARROWS — hover reveal */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute -left-14 lg:-left-20 top-1/2 -translate-y-1/2
          p-4 z-30 cursor-pointer
          opacity-0 group-hover:opacity-70 hover:opacity-100
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          hover:scale-105 hover:-translate-x-1 active:scale-95"
        >
          <ChevronLeft className="text-gray-600 w-10 h-10 lg:w-16 lg:h-16 stroke-[1.5]" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:block absolute -right-14 lg:-right-20 top-1/2 -translate-y-1/2
          p-4 z-30 cursor-pointer
          opacity-0 group-hover:opacity-70 hover:opacity-100
          transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          hover:scale-105 hover:translate-x-1 active:scale-95"
        >
          <ChevronRight className="text-gray-600 w-10 h-10 lg:w-16 lg:h-16 stroke-[1.5]" />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center mt-6 md:mt-12 gap-3 md:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent([index, index > current ? 1 : -1])}
            className={`h-1 transition-all duration-300 cursor-pointer ${
              current === index
                ? "bg-[#0437f2] w-8 md:w-20"
                : "bg-gray-300 w-6 md:w-12 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
