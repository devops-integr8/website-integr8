import Hero from "./Hero";
import OnyxIntro from "./onyxIntro";
import OnyxModules from "./onyxModules";
import OnyxPricing from "./onyxPricing";
import RelatedProducts from "./RelatedProducts";
import OnyxTestimonies from "./OnyxTestimonies";


const productsOnyx = () => {
    return ( 
<div>
    <Hero />
    <OnyxIntro />
    <OnyxModules />
    <OnyxPricing />
    <OnyxTestimonies />
    <RelatedProducts currentProductId="onyx" />
</div>
     
     )
}

export default productsOnyx;    