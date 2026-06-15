"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  company: string;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Cavite Farmers Feedmilling and Marketing Cooperative",
    quote:
      "CAFFMACO is one of the largest and oldest Cooperatives in Cavite, we are already 44 years in operation. We are glad that there is a company that offers software for Cooperatives and can even customize to our policies and procedures - that is GR8 Systems.",
    name: "Ms. Lolita Calitis",
    role: "Manager",
    initials: "LC",
    avatar: "/images/erpTestimonies/Lolita.png",
  },
  {
    id: 2,
    company: "Sabang Ibaan Multipurpose Cooperative",
    quote:
      "We at Sabang Ibaan Multipurpose Cooperative (SIMPC) are grateful for our partnership with GR8 Systems. Their customized modules for Savings and Loan, Accounting, POS, and Inventory have improved our efficiency and productivity. With their continuous support, we can better meet our members' needs.",
    name: "Ms. Nelia Castillo",
    role: "Manager",
    initials: "NC",
    avatar: "/images/erpTestimonies/Nelia.png",
  },
  {
    id: 3,
    company:
      "Silang Municipal Employees' and Community Multi-Purpose Cooperative",
    quote:
      "Our Cooperative has adapted to a new technology and now runs through a more efficient set of systems. We are grateful for introducing software systems that fits our needs and helps our cooperative to have complete and accurate reports. The partnership resulted to faster and more efficient processing of transactions and report generation in SMEMPCO.",
    name: "Ms. Agnes P. Laureles",
    role: "General Manager",
    initials: "AL",
    avatar: "/images/erpTestimonies/Agnes.png",
  },
  {
    id: 4,
    company: "EEI - Employees' Development Cooperative",
    quote:
      "After 43 years of manual accounting, EEI–Employees' Development Cooperative (EDC) successfully transitioned to a computerized system with GR8 Systems. Despite challenges, teamwork made it possible. Now, with real-time processing, we serve over 2,000 members faster and more efficiently.",
    name: "EEI EDC Cooperative",
    role: "",
    initials: "EE",
    avatar: "/images/erpTestimonies/EEI EDC.png",
  },
  {
    id: 5,
    company: "DAKKI Classics Concepts, Inc.",
    quote:
      "Reliable, Accurate and User Friendly! Isang Karangalan ang magbigay pugay sa GR8 Systems Team, Thank you for the support!",
    name: "Ms. Revy Quizon",
    role: "Accounting Manager",
    initials: "RQ",
    avatar: "/images/erpTestimonies/Revy.png",
  },
  {
    id: 6,
    company: "De La Salle University Dasmariñas - Development Cooperative",
    quote:
      "Sa mga previous accounting system na nagamit ko, Yung company ang nag aadjust ng mga policies para sa Accounting System, Unlike sa GR8 System kaya nilang i-adjust ang System para ma meet mga policies ng isang Company Very reliable ang system nila, User friendly and very accommodating ang mga buong team ng GR8.",
    name: "Mr. Lester Manalo",
    role: "Accounting Officer",
    initials: "LM",
    avatar: "/images/erpTestimonies/Lester.png",
  },
  {
    id: 7,
    company: "Power Link Center for Advanced Technical Skills Development Inc.",
    quote:
      "Malaking tulong yung accounting system, nakakasunod na yung accounting team, may hinire aming management accounting graduate na nakakaintindi sa entries. Pag na perfect na namin to kuha din yung sister company namin, with the same needs in accounting system.",
    name: "Power Link Center for Advanced Technical Skills Development Inc.",
    role: "",
    initials: "PL",
    avatar: "/images/erpTestimonies/PowerLink.png",
  },
  {
    id: 8,
    company: "Silang Transport Service Development Cooperative",
    quote:
      "The services of GR8 is excellent and we now have clear and sound internal control we are able to comply to CDA requirements.",
    name: "Mr. Sulpicio Arellano",
    role: "Manager",
    initials: "SA",
    avatar: "/images/erpTestimonies/Sulpicio.png",
  },
];

const GAP = 20;
const TOTAL = testimonials.length;

// Clone N items at both ends for seamless infinite loop
const CLONES = 3;
const extendedList = [
  ...testimonials.slice(-CLONES),
  ...testimonials,
  ...testimonials.slice(0, CLONES),
];

export default function ErpTestimonies() {
  // Start at first real item in the extended list
  const [index, setIndex] = useState(CLONES);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animate, setAnimate] = useState(true);
  const [cardWidth, setCardWidth] = useState(720);
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Real 0-based index for the page indicator
  const realIndex = (((index - CLONES) % TOTAL) + TOTAL) % TOTAL;

  // Update card width on resize
  useEffect(() => {
    const update = () => {
      setCardWidth(window.innerWidth < 768 ? window.innerWidth - 32 : 720);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getOffset = useCallback(() => {
    if (!outerRef.current) return 0;
    const outerW = outerRef.current.offsetWidth;
    const centerTarget = outerW / 2 - cardWidth / 2;
    return index * (cardWidth + GAP) - centerTarget;
  }, [index, cardWidth]);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setAnimate(true);
      setIndex(nextIndex);
    },
    [isAnimating],
  );

  const nextSlide = useCallback(() => goTo(index + 1), [index, goTo]);
  const prevSlide = useCallback(() => goTo(index - 1), [index, goTo]);

  // After each transition, silently teleport if we landed in the clone zone
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    let jumpIndex = index;
    let jumped = false;

    if (index >= CLONES + TOTAL) {
      jumpIndex = index - TOTAL;
      jumped = true;
    } else if (index < CLONES) {
      jumpIndex = index + TOTAL;
      jumped = true;
    }

    if (jumped) {
      setAnimate(false);
      setIndex(jumpIndex);
    }
  }, [index]);

  // Re-enable animation after a silent jump (two rAF frames to let the DOM settle)
  useEffect(() => {
    if (!animate) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [animate]);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [index, isHovered, nextSlide]);

  return (
    <section className="w-full bg-white py-16 px-0 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl md:text-[46px] font-bold text-[#0b1f5e] mb-3">
          What Our Clients Say
        </h2>
        <p className="text-black/60 text-base font-medium max-w-xl mx-auto leading-relaxed">
          Discover how businesses are improving their operations, finances, and
          workforce management with our integrated solutions.
        </p>
      </div>

      {/* Track outer */}
      <div
        ref={outerRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left fade */}
        <div
          className="hidden md:block absolute left-0 top-0 h-full w-48 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0))",
          }}
        />
        {/* Right fade */}
        <div
          className="hidden md:block absolute right-0 top-0 h-full w-48 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, rgba(255,255,255,1) 30%, rgba(255,255,255,0))",
          }}
        />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex py-8"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${-getOffset()}px)`,
            transition: animate
              ? "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
            willChange: "transform",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedList.map((t, i) => {
            const isActive = i === index;
            return (
              <div
                key={`${t.id}-${i}`}
                onClick={() => goTo(i)}
                className="cursor-pointer flex-shrink-0"
                style={{
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                }}
              >
                <div
                  className="bg-white rounded-2xl border p-9 h-full"
                  style={{
                    borderColor: isActive ? "#c7cbf5" : "#e8ebf8",
                    borderWidth: "1.5px",
                    opacity: isActive ? 1 : 0.45,
                    transform: isActive ? "scale(1)" : "scale(0.94)",
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: isActive
                      ? "0 4px 32px rgba(26,26,219,0.12), 0 1px 8px rgba(26,26,219,0.06)"
                      : "none",
                    transition:
                      "opacity 0.45s ease, transform 0.45s ease, box-shadow 0.45s ease",
                  }}
                >
                  <div>
                    {/* Company name */}
                    <p className="text-[#004A80] font-bold text-base mb-6">
                      {t.company}
                    </p>

                    {/* Quote icon — sits directly above the quote text */}
                    <span
                      className="text-[#0818a8] text-5xl leading-none block mb-2"
                      aria-hidden="true"
                    >
                      &#8221;
                    </span>

                    {/* Quote text */}
                    <p className="text-black/60 text-sm font-medium leading-relaxed">
                      {t.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-11 h-11 rounded-full bg-[#dde0f8] flex items-center justify-center overflow-hidden flex-shrink-0">
                      {t.avatar ? (
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[#0818a8] font-semibold text-sm">
                          {t.initials}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-[#004A80] font-bold text-sm">
                        {t.name}
                      </p>
                      <p className="text-black/60 text-xs font-medium mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="text-black/60 hover:text-[#0818a8] transition-colors p-1 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm text-black/60 min-w-[48px] text-center">
          {realIndex + 1} / {TOTAL}
        </span>
        <button
          onClick={nextSlide}
          className="text-black/60 hover:text-[#0818a8] transition-colors p-1 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}