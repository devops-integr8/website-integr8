import Hero from "./Hero";
import OnyxIntro from "./onyxIntro";
import OnyxModules from "./onyxModules";

import RelatedProducts from "./RelatedProducts";
import OnyxTestimonies from "./OnyxTestimonies";


const productsOnyx = () => {
    return ( 
<div>
    <Hero />
    <OnyxIntro />
    <OnyxModules />

    <OnyxTestimonies />
    <RelatedProducts currentProductId="onyx" />
</div>
     
     )
}

export default productsOnyx;    