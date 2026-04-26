import Hero from "./Hero";
import PayrollIntro from "./payrollIntro";
import PayrollWindows from "./payrollWindows";
import PayrollCloud from "./payrollCloud";
import PayrollPricing from "./payrollPricing";
import PayrollTestimonies from "./payrollTestimonies";
import RelatedProducts from "./RelatedProducts";


const productsPayroll = () => {
    return (
        <div>
         <Hero />
         <PayrollIntro />
         <PayrollWindows />
         <PayrollCloud />
         <PayrollPricing />
         <PayrollTestimonies />
        <RelatedProducts currentProductId="payroll" />
        </div>
    )
}

export default productsPayroll;