import Sideheader from "./Sideheader";
import Card from "./Card";
import Hero from "./Hero";
import img1 from "@/public/products/construcmdl.png";
import img2 from "@/public/products/lendingmdl.png";
import img3 from "@/public/products/construcmdl2.png";
import img4 from "@/public/products/payrollmdl.png";
import img5 from "@/public/products/hrismdl.png";
import img6 from "@/public/products/hoamdl.png";
import img7 from "@/public/products/lmmdl.png";
import img8 from "@/public/products/coopmdl.png";
import StackingCards from "./StackingCards";
import CardsParallax from "./CardsParallax";
import Transform from "./Transform";



const productionFeatures = [
  "BOM Semi-finished Goods",
  "Demand Forecasting",
  "BOM Finished Goods Transfer",
  "Materials Planning",
  "Job Order",
  "Work in Progress",
  "BOM Conversion",
  "BOM Explosion",
  "Finished Goods Transfer",
  "Standard Cost",
  "Average Cost",
];

const lendingFeatures = [
  "Loan Verifier",
  "Auto Deduct if with Payroll System",
  "Co-Maker Limit",
  "Maximum and Minimum Loanable Amount",
  "Loan Approval Limit",
  "Salary Deduction Billing and Collection",
  "Past Due Penalty computation",
  "Straight Line Diminishing After a Year",
  "Diminishing Balance but with Even Principal",
];

const constructionFeatures = [
  "Project Management",
  "Contract Management",
  "Project Scope of Work Management",
  "Progress Billing",
  "Relation Payable",
  "Billing for Downpayment",
  "Project Budget Uploader",
  "Recoupment of Downpayment",
];

const payrollFeatures = [
  "User Management",
  "Organization Management",
  "Creating of Shift Codes",
  "Creating of Group Codes",
  "Payroll and TK Settings",
  "Creating of Weekly Schedule",
  "Adding of Leave Type",
];

const hrisFeatures = [
  "Employee Profile",
  "Employee Daily Time Record",
  "Certificate of SSS Contributions",
  "Certificate of Philhealth",
  "2316 Viewing",
  "Record of Training",
  "Performance Appraisal",
  "Certificate of HDMF Contributions",
  "Viewing of Payslip with History",
  "Certificate of Employment",
  "Notice to Explain",
  "Leave Approval",
  "Request Certificate of Employment and Compensation",
  "Disciplinary Action",
];

const hoaFeatures = [
  "Monthly Dues Billing",
  "Water Billing",
  "Statement of Account",
  "Notice of Disconnection",
  "Interest and Penalties",
  "Uploader of Water Meter Reading",
];

const lmmFeatures = [
  "Tenant Charges Maintenance",
  "Contract Management",
  "Rental, Electricity, Water, and Monthly Dues Billing",
  "Electricity and Water Reading",
  "Tenant Management",
  "Consistency in your Property Rental",
  "PDC Monitoring",
  "Improved Control in Property Rental",
];

const cooperativesFeatures = [
  "Saving Account Maintenance",
  "Loan Co-Maker Setup",
  "Member Maintenance",
  "Loan Collateral Set Up",
  "Savings Maintenance",
  "Time Deposit Maintenance",
  "Allocation of Net Surplus",
  "Loan Maintenance",
  "Collectors Maintenance",
];

const page = () => {
  return (
    <>
      <Hero />

      <Transform />
      {/* MODULES SECTION */}
      <StackingCards/>
      {/* <CardsParallax/> */}
      <div className="flex flex-col gap-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 pt-10 pb-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT - sticky sidebar */}
          <div className="lg:w-[320px] w-full shrink-0 lg:sticky lg:top-24 lg:self-start">
            <Sideheader />
          </div>

          {/* RIGHT - cards */}
          <div className="flex-1 flex flex-col gap-8 w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              <Card image={img1} title="MANUFACTURING/PRODUCTION MODULE" description="From raw materials to finished goods — plan, track, and cost every step." features={productionFeatures} />
              <Card image={img2} title="LENDING MODULE" description="Verify, approve, and collect employee loans automatically." features={lendingFeatures} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              <Card image={img3} title="CONSTRUCTION MODULE" description="Manage projects, materials, and costs on-site or in office." features={constructionFeatures} />
              <Card image={img4} title="PAYROLL MODULE" description="Automate salary computations, deductions, and payslips." features={payrollFeatures} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              <Card image={img5} title="HRIS MODULE" description="Manage every employee record, leave, and performance metric in one system." features={hrisFeatures} />
              <Card image={img6} title="HOA MODULE" description="Collect dues, manage residents, and handle association finances effortlessly." features={hoaFeatures} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
              <Card image={img7} title="LEASE MANAGEMENT MODULE" description="Track contracts, renewals, and payments across all your properties." features={lmmFeatures} />
              <Card image={img8} title="COOPERATIVES MODULE" description="Manage memberships, shares, loans, and dividends in one place." features={cooperativesFeatures} />
            </div>

          </div>
        </div>
      </div>

   
    </>
  );
};

export default page;


