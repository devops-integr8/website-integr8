import ErpHero from "./ErpHero";
import ErpFeatures from "./ErpFeatures";
import ErpModules from "./ErpModules";
import ErpIndustries from "./ErpIndustries";
import ErpTestimonies from "./ErpTestimonies";
import RelatedProducts from "./RelatedProducts";

const page = () => {
  return (
    <div className="flex flex-col">
      <ErpHero />

      <section className="py-20">
        <ErpFeatures />
      </section>
      <section className="py-20">
        <ErpModules />
      </section>
      <section className="py-20">
        <ErpIndustries />
      </section>
      <section className="py-20">
        <ErpTestimonies />
      </section>
      <section className="py-20">
        <RelatedProducts currentProductId="erp" />
      </section>
    </div>
  );
};

export default page;
