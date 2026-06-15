import Hero from "./Hero";
import About from "./About";
import Clients from "./Clients";
import CallToAction from "./CallToAction";
import TeamSection from "./Team";
import FAQs from "./FAQs";
import Goals from "./Goals";
import Padding from "../../components/padding";

import ErpExperties from "./ErpExperties";
import ProblemSolution from "./ProblemSolution";
import Values from "./Values";
import CompanyEdge from "./CompanyEdge";
import ProductsLaptops from "./ProductsLaptops";

const Home = () => {
  return (
    <>
      <div>
        <div className="space-y-16">
          <Hero />

            {/* <ErpExperties /> */}

           
<div id="products">
  <ProductsLaptops />
</div>

          <Clients />
          <div id="about" className="scroll-mt-36" />
        
          {/* <ProblemSolution /> */}

          <Values />

          {/* <CompanyEdge /> */}

          {/* <FAQs /> */}

          <CallToAction />
        </div>
      </div>
    </>
  );
};

export default Home;
