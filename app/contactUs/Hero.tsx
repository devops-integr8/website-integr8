"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#EEF4FF] via-[#F8FBFF] to-[#0F52BA] overflow-hidden pt-8">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#2D7DB8]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Content */}
            <div>

              <h1 className="text-[#004A80] font-bold leading-[1.05] tracking-tight text-[65px]  mb-6">
                Let's Find The
                <br />
                Right Fit For
                <br />
                Your Business
              </h1>

              <p className="text-[#4D647A] text-lg leading-relaxed max-w-xl mb-10">
                Tell us about your business and we'll show you
                how GR8 Software can be customized to fit your
                operations and support your growth.
              </p>

              {/* <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-2xl bg-[#0F52BA] text-white font-semibold shadow-lg hover:scale-105 transition">
                  Request Demo
                </button>

                <button className="px-8 py-4 rounded-2xl border border-[#0F52BA] text-[#0F52BA] font-semibold hover:bg-white transition">
                  Contact Us
                </button>
              </div> */}
            </div>

            {/* Right Illustration */}
            {/* <div className="relative flex justify-center">
              <div className="absolute w-[500px] h-[500px] bg-[#2D7DB8]/10 rounded-full blur-[100px]" />

              <Image
                src="/images/contact-us/contact-hero.png"
                alt="Business Consultation"
                width={700}
                height={700}
                className="relative z-10 w-full max-w-[650px]"
                priority
              />
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}