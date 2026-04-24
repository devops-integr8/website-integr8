import ErpHero from "./ErpHero";
import ErpFeatures from "./ErpFeatures";
import ErpModules from "./ErpModules";
import ErpIndustries from "./ErpIndustries";
import ErpTestimonies from "./ErpTestimonies";
import RelatedProducts from "./RelatedProducts";

const page = () => {
  return (
    <>
      <ErpHero />
      <ErpFeatures />
      <ErpModules />
      <ErpIndustries />
      <ErpTestimonies />
      <RelatedProducts currentProductId="erp" />
    </>
  );
};

export default page;
