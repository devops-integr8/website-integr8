"use client";

import Image from "next/image";

const contacts = [
  {
    icon: "/images/contact-us/Email.png",
    label: "Email",
    detail: "gr8softwaresolutions\n@integr8.com.ph",
  },
  {
    icon: "/images/contact-us/Phone.png",
    label: "Phone",
    detail: "+639171205043",
  },
  {
    icon: "/images/contact-us/Office.png",
    label: "Office",
    detail:
      "Unit 2A9-2A11 The M Hub, Governor's Drive, General Trias, Cavite, Philippines",
  },
];

export default function Contacts() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ color: "#0818a8" }}
        >
          Contact Us
        </h2>
        <p
          className="text-base md:text-lg font-normal"
          style={{ color: "rgba(0,0,0,0.6)" }}
        >
          Drop us an email, give us a call, or visit us at our office in General
          Trias.
        </p>
      </div>

      {/* Cards — items-stretch ensures equal height across all columns */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
        {contacts.map(({ icon, label, detail }) => (
          <div
            key={label}
            className="relative flex flex-col items-center flex-1"
          >
            {/* Floating icon ring */}
            <div
              className="relative z-10 flex items-center justify-center rounded-full w-24 h-24 mb-[-3rem] shadow-lg flex-shrink-0"
              style={{
                background: "linear-gradient(to bottom, #0437f2, #02208c)",
              }}
            >
              {/* White inner circle */}
              <div className="flex items-center justify-center rounded-full bg-white w-[4.5rem] h-[4.5rem]">
                <Image
                  src={icon}
                  alt={label}
                  width={36}
                  height={36}
                  className="object-contain"
                  style={{
                    filter:
                      "invert(17%) sepia(92%) saturate(4000%) hue-rotate(220deg) brightness(85%) contrast(110%)",
                  }}
                />
              </div>
            </div>

            {/* Card body — top-aligned so titles always sit at the same position */}
            <div
              className="w-full h-full rounded-lg pt-16 pb-14 px-6 text-center flex flex-col items-center justify-start"
              style={{
                background: "linear-gradient(to bottom, #1a50f5, #0a2eaa)",
              }}
            >
              {/* Card title — fixed top margin so all three align */}
              <h3 className="text-white font-extrabold text-2xl mt-4 mb-4">
                {label}
              </h3>

              {/* Divider line */}
              <div className="w-full h-px bg-white/20 mb-5" />

              {/* Detail text — bumped to text-base + font-semibold for uniformity */}
              <p className="text-white/90 font-semibold text-base leading-relaxed whitespace-pre-line">
                {detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
