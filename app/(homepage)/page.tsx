import Hero from "./Hero";
import About from "./About";
import Clients from "./Clients";
import CallToAction from "./CallToAction";
import TeamSection from "./Team";
import FAQs from "./FAQs";
import Goals from "./Goals";
import Padding from "../../components/padding";
import NewsArticle from "./NewsArticle";
import Introduction from "./Introduction";
import ProblemSolution from "./ProblemSolution";
import Values from "./Values";
import CompanyEdge from "./CompanyEdge";

const Home = () => {
  return (
    <>
      <div>
        <div className="space-y-16">
          <Hero />
          <div id="about" className="scroll-mt-36" />
          <Introduction />
          <Clients />
          <ProblemSolution />
          <Values />
          <CompanyEdge />
          <FAQs />
          <NewsArticle />
          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default Home;
