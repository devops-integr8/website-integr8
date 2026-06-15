import IntroCards from "./introCards";

const payrollIntro = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10 pt-5">
          <h1 className="text-[32px] sm:text-[42px] font-bold text-[#0b1f5e]  mb-3">
            Why Choose Gr8 Payroll and HRIS?
          </h1>
          <p className="text-black text-md leading-relaxed max-w-xl mx-auto">
       Automate payroll, track attendance, manage employee records, and stay compliant with Philippine government requirements — all from one platform.
          </p>
        </div>

        <IntroCards />
      </div>
    </div>
  );
};

export default payrollIntro;