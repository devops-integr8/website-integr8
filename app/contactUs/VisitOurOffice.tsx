"use client";

import Image from "next/image";

export default function VisitOurOffice() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h2
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: "#0818a8" }}
        >
          Visit Our Office
        </h2>
        <p
          className="text-base md:text-lg font-normal max-w-md mx-auto"
          style={{ color: "rgba(0,0,0,0.6)" }}
        >
          Our doors are open. Stop by and see how GR8 Software can work for your
          business in person.
        </p>
      </div>

      {/* Map Image */}
      <div className="w-full relative h-[400px] overflow-hidden">
        <Image
          src="/images/contact-us/Map.png"
          alt="Integr8 Software Solutions Office Location"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
