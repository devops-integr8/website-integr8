import Padding from "@/components/padding";
import HoverCard from "@/components/HoverCard";
import Hero from "./Hero";
import MissionVision from "./MissionVision";
import Carousel from "./Carousel";
import CompanyOverviewCarousel from "./CompanyOverviewCarousel";
import CompanyCarousel from "./CompanyCarousel";
import Clients from "./Clients";
import CompanyEdge from "./CompanyEdge";
import ErpExperties from "./ErpExperties";
import OurStory from "./OurStory";
import NewsArticle from "./NewsArticle";

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
      </main>
    </>
  );
};

export default About;
