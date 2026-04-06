import Hero from "./Hero";
import About from "./About";
import Clients from "./Clients";
import CallToAction from "./CallToAction";
import TeamSection from "./Team";
import FAQs from "./FAQs";
import Goals from "./Goals";
import Padding from "../../components/padding";
import NewsArticle from "./NewsArticle";

const Home = () => {
  return (
    <>
      <div>
        <div className="space-y-16">
          <Hero />
          <div id="about" className="scroll-mt-36" />
          <NewsArticle />
          <About />
          <Clients />
          <Goals />
          <TeamSection />
          <CallToAction />
          <FAQs />
        </div>
      </div>
    </>
  );
};

export default Home;
