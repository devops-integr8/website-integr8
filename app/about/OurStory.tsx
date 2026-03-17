"use client";

const Ourstory = () => {
  return (
    <section className="mt-14">
      {/* HEADER */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="/images/our-story/OSheader.png"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            OUR STORY
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        {/* TOP TEXT */}
        <div className="flex justify-start pl-6 pt-24 mb-33">
          <p className="text-lg max-w-2xl font-semibold">
            Founded in 2015, Integr8 Software Solutions, Inc. began with a
            vision to <br /> empower cooperatives and businesses through
            innovative and reliable technology solutions. From the start, the
            company focused on creating systems that simplify business
            processes, boost efficiency, and streamline financial and
            administrative operations.
          </p>
        </div>

        <div
          className=" mx-9 px-6"
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
              className="w-90 h-90 object-cover hover:scale-103 transition duration-500 shadow-md shadow-2xl shadow-black/50 shadow-md shadow-2xl shadow-black/50 cursor-pointer"
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

        {/* BOTTOM TEXT */}
        <div className="flex justify-end text-right pr-6 pl-6 mt-13 ">
          <p className="text-lg max-w-2xl font-semibold">
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
