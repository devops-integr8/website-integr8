"use client";

import { useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { src: "/images/our-story/A.jpg", alt: "" },
  { src: "/images/our-story/B.jpg", alt: "" },
  { src: "/images/our-story/C.jpg", alt: "" },
  { src: "/images/our-story/D.jpg", alt: "" },
  { src: "/images/our-story/E.jpg", alt: "" },
  { src: "/images/our-story/F.jpg", alt: "" },
  { src: "/images/our-story/G.png", alt: "" },
];

const Ourstory = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((prev) => {
      if (prev === null) return null;
      return (prev - 1 + images.length) % images.length;
    });
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((prev) => {
      if (prev === null) return null;
      return (prev + 1) % images.length;
    });
  };

  return (
    <section>
      {/* LIGHTBOX MODAL */}
      {lightbox !== null && (
        <>
          {/* MOBILE VIEW */}
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] bg-black/95 sm:hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-3 right-3 z-[10000] text-white text-3xl font-bold w-10 h-10 flex items-center justify-center bg-[#808080]/50 rounded-full"
            >
              &times;
            </button>
            <div
              className="flex items-center justify-center px-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="max-h-[60vh] max-w-[92vw] object-contain rounded-md shadow-2xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 pb-10 pt-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <div className="flex justify-center gap-6 mb-6">
                <button
                  onClick={showPrev}
                  aria-label="Previous"
                  className="text-white text-2xl font-bold bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 pb-3 flex items-center justify-center"
                >
                  &#8249;
                </button>
                <button
                  onClick={showNext}
                  aria-label="Next"
                  className="text-white text-2xl font-bold bg-white/20 hover:bg-white/30 rounded-full w-10 h-10 pb-3 flex items-center justify-center"
                >
                  &#8250;
                </button>
              </div>
              <div className="flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightbox(i);
                    }}
                    className={`w-1.5 h-1.5 rounded-full ${i === lightbox ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP VIEW */}
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-[9999] bg-black/85 hidden sm:flex items-center justify-center"
          >
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 z-[10000] text-white text-4xl font-bold bg-black/30 hover:bg-white/20 rounded-full w-12 h-12 pb-4 transition-colors cursor-pointer"
            >
              &times;
            </button>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="max-h-[80vh] max-w-[85vw] object-contain rounded-md shadow-2xl"
              />
            </div>
            <button
              onClick={showPrev}
              aria-label="Previous"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-[10000] text-white text-5xl font-bold bg-black/30 hover:bg-white/20 rounded-full w-12 h-12 pb-4 flex items-center justify-center transition-colors cursor-pointer"
            >
              &#8249;
            </button>
            <button
              onClick={showNext}
              aria-label="Next"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-[10000] text-white text-5xl font-bold bg-black/30 hover:bg-white/20 rounded-full w-12 h-12 pb-4 flex items-center justify-center transition-colors cursor-pointer"
            >
              &#8250;
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[10000] flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full ${i === lightbox ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* HEADER */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="/images/our-story/OSheader.png"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            OUR STORY
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP TEXT */}
        <div className="py-8 lg:pt-24 lg:mb-12 relative z-20 bg-white">
          <p className="text-base sm:text-lg font-semibold leading-relaxed text-justify">
            Founded in 2015, Integr8 Software Solutions, Inc. began with a
            vision to empower cooperatives and businesses through innovative and
            reliable technology solutions. From the start, the company focused
            on creating systems that simplify business processes, boost
            efficiency, and streamline financial and administrative operations.
          </p>
        </div>

        {/* ─── DESKTOP MASONRY COLLAGE ─── */}

        <div className="hidden lg:block relative z-10 mb-12">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "220px 210px 220px",
              gap: "10px",
            }}
          >
            {/* A — Col 1, rows 1–2 (tall) */}
            <div style={{ gridColumn: "1", gridRow: "1 / 3" }}>
              <img
                src={images[0].src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                onClick={() => openLightbox(0)}
              />
            </div>

            {/* B — Col 2, row 1 */}
            <div style={{ gridColumn: "2", gridRow: "1" }}>
              <img
                src={images[1].src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                onClick={() => openLightbox(1)}
              />
            </div>

            {/* C — Col 3, row 1 */}
            <div style={{ gridColumn: "3", gridRow: "1" }}>
              <img
                src={images[2].src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                onClick={() => openLightbox(2)}
              />
            </div>

            {/* G — Col 2, row 2 */}
            <div style={{ gridColumn: "2", gridRow: "2" }}>
              <img
                src={images[6].src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                onClick={() => openLightbox(6)}
              />
            </div>

            {/* D — Col 3, row 2 */}
            <div style={{ gridColumn: "3", gridRow: "2" }}>
              <img
                src={images[3].src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                onClick={() => openLightbox(3)}
              />
            </div>

            {/* F — Col 1, row 3 */}
            <div style={{ gridColumn: "1", gridRow: "3" }}>
              <img
                src={images[5].src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                onClick={() => openLightbox(5)}
              />
            </div>

            {/* E — Cols 2–3, row 3 */}
            <div style={{ gridColumn: "2 / 4", gridRow: "3" }}>
              <img
                src={images[4].src}
                alt=""
                className="w-full h-full object-cover hover:scale-[1.03] transition duration-500 shadow-2xl shadow-black/40 cursor-pointer"
                onClick={() => openLightbox(4)}
              />
            </div>
          </div>
        </div>

        {/* ─── MOBILE / TABLET MASONRY COLLAGE ─── */}
        <div
          className="grid lg:hidden gap-2 sm:gap-3 pb-8"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "auto",
          }}
        >
          {/* A — tall, spans 2 rows on col 1 */}
          <div className="row-span-2">
            <img
              src={images[0].src}
              alt=""
              className="w-full h-full min-h-[240px] object-cover hover:scale-[1.02] transition duration-500 shadow-lg cursor-pointer rounded-sm"
              style={{ maxHeight: "360px" }}
              onClick={() => openLightbox(0)}
            />
          </div>

          {/* B — col 2, row 1 */}
          <div>
            <img
              src={images[1].src}
              alt=""
              className="w-full object-cover hover:scale-[1.02] transition duration-500 shadow-lg cursor-pointer rounded-sm"
              style={{ height: "170px" }}
              onClick={() => openLightbox(1)}
            />
          </div>

          {/* C — col 2, row 2 */}
          <div>
            <img
              src={images[2].src}
              alt=""
              className="w-full object-cover hover:scale-[1.02] transition duration-500 shadow-lg cursor-pointer rounded-sm"
              style={{ height: "170px" }}
              onClick={() => openLightbox(2)}
            />
          </div>

          {/* D — col 1, single row */}
          <div>
            <img
              src={images[3].src}
              alt=""
              className="w-full object-cover hover:scale-[1.02] transition duration-500 shadow-lg cursor-pointer rounded-sm"
              style={{ height: "170px" }}
              onClick={() => openLightbox(3)}
            />
          </div>

          {/* G — col 2, single row */}
          <div>
            <img
              src={images[6].src}
              alt=""
              className="w-full object-cover hover:scale-[1.02] transition duration-500 shadow-lg cursor-pointer rounded-sm"
              style={{ height: "170px" }}
              onClick={() => openLightbox(6)}
            />
          </div>

          {/* F — full width */}
          <div className="col-span-2">
            <img
              src={images[5].src}
              alt=""
              className="w-full object-cover hover:scale-[1.02] transition duration-500 shadow-lg cursor-pointer rounded-sm"
              style={{ height: "180px" }}
              onClick={() => openLightbox(5)}
            />
          </div>

          {/* E — full width, wide celebration crowd */}
          <div className="col-span-2">
            <img
              src={images[4].src}
              alt=""
              className="w-full object-cover hover:scale-[1.02] transition duration-500 shadow-lg cursor-pointer rounded-sm"
              style={{ height: "180px" }}
              onClick={() => openLightbox(4)}
            />
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="py-8 lg:mt-8 relative z-20 bg-white">
          <p className="text-base sm:text-lg font-semibold leading-relaxed text-justify">
            Over time, the company expanded through GR8Books and GR8 ERP,
            delivering scalable business solutions to various industries
            nationwide, with a continued focus on innovation, reliable
            technology, and helping businesses streamline operations, improve
            decision-making, and achieve sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;