import Hero from "./Hero";
import PayrollIntro from "./payrollIntro";
import PayrollWindows from "./payrollWindows";
import PayrollCloud from "./payrollCloud";

import PayrollTestimonies from "./payrollTestimonies";
import RelatedProducts from "./RelatedProducts";
import PayrollModules from "./PayrollModules";


const productsPayroll = () => {
    return (
        <div>
         <Hero />
         <PayrollIntro />
         <PayrollWindows />
         <PayrollCloud />
         <PayrollModules />
     
         <PayrollTestimonies />
        <RelatedProducts currentProductId="payroll" />
        </div>
    )
}

export default productsPayroll;