"use client";

const Ourstory = () => {
  return (
    <section>
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
        <div className="py-8 lg:pt-24 lg:mb-33 relative z-20 bg-white">
          <p className="text-base sm:text-lg font-semibold leading-relaxed lg:max-w-2xl lg:pl-6">
            Founded in 2015, Integr8 Software Solutions, Inc. began with a
            vision to empower cooperatives and businesses through innovative and
            reliable technology solutions. From the start, the company focused
            on creating systems that simplify business processes, boost
            efficiency, and streamline financial and administrative operations.
          </p>
        </div>

        {/* COLLAGE - Desktop: Original overlapping masonry design */}
        <div className="hidden lg:block relative z-10">
          <div
            className="mx-9 px-6"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gridTemplateRows: "200px 200px",
              gap: "8px",
            }}
          >
            {/* A — tall, col 1, rows 1–2 */}
            <div style={{ gridColumn: "1", gridRow: "1 / 3" }}>
              <img
                src="/images/our-story/A.jpg"
                alt=""
                className="w-90 h-90 object-cover hover:scale-103 transition duration-500 shadow-md shadow-2xl shadow-black/50 cursor-pointer"
              />
            </div>

            {/* B — col 2, row 1 */}
            <div style={{ gridColumn: "2", gridRow: "1" }}>
              <img
                src="/images/our-story/B.jpg"
                alt=""
                className="w-full h-full object-cover -translate-y-10 hover:scale-103 transition duration-500 shadow-md shadow-2xl shadow-black/50 cursor-pointer"
              />
            </div>

            {/* C — col 3, row 1 */}
            <div style={{ gridColumn: "3", gridRow: "1" }}>
              <img
                src="/images/our-story/C.jpg"
                alt=""
                className="w-full h-70 object-cover -translate-y-30 hover:scale-103 transition duration-500 shadow-md shadow-2xl shadow-black/50"
              />
            </div>

            {/* D — col 4, row 1 */}
            <div style={{ gridColumn: "4", gridRow: "1" }}>
              <img
                src="/images/our-story/D.jpg"
                alt=""
                className="w-full h-full object-cover -translate-y-10 hover:scale-103 transition duration-500 shadow-md shadow-2xl shadow-black/50 cursor-pointer"
              />
            </div>

          {/* E — wide, cols 2–3, row 2 */}
          <div style={{ gridColumn: "2 / 4", gridRow: "2" }}>
            <img
              src="/images/our-story/E.jpg"
              alt=""
              className="w-108 h-60 object-cover -translate-y-10 hover:scale-103 transition duration-500 shadow-md shadow-2xl shadow-black/50 cursor-pointer"
            />
          </div>

            {/* F — col 4, row 2 */}
            <div style={{ gridColumn: "4", gridRow: "2" }}>
              <img
                src="/images/our-story/F.jpg"
                alt=""
                className="w-full h-full object-cover -translate-x-26 -translate-y-10 hover:scale-103 transition duration-500 shadow-md shadow-2xl shadow-black/50 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* MOBILE/TABLET COLLAGE - Clean masonry layout */}
        <div className="grid lg:hidden grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 pb-8">
          <div className="col-span-1 row-span-2">
            <img
              src="/images/our-story/A.jpg"
              alt=""
              className="w-full h-full min-h-[280px] object-cover hover:scale-103 transition duration-500 shadow-lg shadow-black/50 cursor-pointer rounded-sm"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/images/our-story/B.jpg"
              alt=""
              className="w-full h-full min-h-[136px] object-cover hover:scale-103 transition duration-500 shadow-lg shadow-black/50 cursor-pointer rounded-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <img
              src="/images/our-story/C.jpg"
              alt=""
              className="w-full h-full min-h-[136px] object-cover hover:scale-103 transition duration-500 shadow-lg shadow-black/50 cursor-pointer rounded-sm"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/images/our-story/D.jpg"
              alt=""
              className="w-full h-full min-h-[136px] object-cover hover:scale-103 transition duration-500 shadow-lg shadow-black/50 cursor-pointer rounded-sm"
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <img
              src="/images/our-story/E.jpg"
              alt=""
              className="w-full h-full min-h-[136px] object-cover hover:scale-103 transition duration-500 shadow-lg shadow-black/50 cursor-pointer rounded-sm"
            />
          </div>
          <div className="col-span-2 md:col-span-3">
            <img
              src="/images/our-story/F.jpg"
              alt=""
              className="w-full h-48 sm:h-56 object-cover hover:scale-103 transition duration-500 shadow-lg shadow-black/50 cursor-pointer rounded-sm"
            />
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="py-8 lg:mt-13 lg:pr-6 text-left lg:text-right relative z-20 bg-white">
          <p className="text-base sm:text-lg font-semibold leading-relaxed lg:max-w-2xl lg:ml-auto">
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
