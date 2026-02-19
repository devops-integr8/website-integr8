import Hero from "./Hero";
import About from "./About";
import Clients from "./Clients";
import CallToAction from "./CallToAction";
import TeamSection from "./Team";
import FAQs from "./FAQs";
import Goals from "./Goals";

const Home = () => {
  return (
    <>
      <div className="space-y-16">
        <Hero />
        <div id="about" className="scroll-mt-36" />
        <About />
        <Clients />
        <Goals />
        <TeamSection />
        <CallToAction />
        <FAQs />
      </div>
    </>
  );
};

export default Home;
