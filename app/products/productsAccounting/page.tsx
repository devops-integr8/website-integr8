import AccountingModules from "./AccountingModules";
import Hero from "./Hero";
import RelatedProducts from "./RelatedProducts";
import AccountingIntro from "./accountingIntro";

import AccountingTestimonies from "./accountingTestimonies";

const productsAccounting = () => {

    return(
  <div> 
  <Hero />
  <AccountingIntro />
  <AccountingModules />

<AccountingTestimonies />
<RelatedProducts currentProductId="books" />
  </div>

    );
};
export default productsAccounting;