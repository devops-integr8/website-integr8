import Padding from "@/components/padding";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import CompanyCarousel from "./CompanyCarousel";
import Clients from "./Clients";
import CompanyEdge from "./CompanyEdge";
import ErpExperties from "./ErpExperties";
import OurStory from "./OurStory";
import NewsArticle from "./NewsArticle";
import ClientTrust from "./ClientTrust";
import CTA from "./CTA";
import OurTeam from "./OurTeam";
const About = () => {
  return (
    <>
      <Padding />

      <main>
        <Hero />
        <NewsArticle />
        <section className="pt-15">
          <CompanyCarousel />
        </section>
        <MissionVision />
        <Clients />
        <CompanyEdge />
        <ErpExperties />
        <OurStory />
        <OurTeam />

        <section>
          <div
            style={{
              background:
                "radial-gradient(ellipse at center, #224d9a 0%, #000000 100%)",
            }}
          >
            <ClientTrust />
            <CTA />
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
