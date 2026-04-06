import Padding from "@/components/padding";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import CompanyCarousel from "./CompanyCarousel";
import Clients from "./Clients";
import CompanyEdge from "./CompanyEdge";
import ErpExperties from "./ErpExperties";
import OurStory from "./OurStory";
import ClientTrust from "./ClientTrust";
import CTA from "./CTA";
import OurTeam from "./OurTeam";

const About = () => {
  return (
    <>
      <Hero />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 lg:pb-26">
        <CompanyCarousel />
      </section>

      <section className="py-16 md:py-20 lg:py-26">
        <MissionVision />
      </section>

      <section className="py-16 md:py-20 lg:py-26">
        <Clients />
      </section>

      <section className="py-16 md:py-20 lg:py-26">
        <CompanyEdge />
      </section>

      <section className="py-16 md:py-20 lg:py-26">
        <ErpExperties />
      </section>

      <section className="py-16 md:py-20 lg:py-26">
        <OurStory />
      </section>

      <section className="py-16 md:py-20 lg:py-26">
        <OurTeam />
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-20 lg:py-26"
        style={{
          background:
            "radial-gradient(ellipse at center, #0437f2 0%, #000000 100%)",
        }}
      >
        {/* TOP CURVE */}
        <div className="absolute -top-[1px] left-0 w-full h-[150px] z-10 pointer-events-none text-white">
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path d="M0,0 Q720,150 1440,0 L1440,0 L0,0 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-0">
          <ClientTrust />
          <CTA />
        </div>

        {/* BOTTOM CURVE */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[100px] md:h-[150px] z-10 pointer-events-none text-white">
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,150 Q720,0 1440,150 L1440,150 L0,150 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default About;
