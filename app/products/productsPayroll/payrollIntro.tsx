import IntroCards from "./introCards";

const payrollIntro = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10 pt-5">
          <h1 className="text-3xl font-bold text-[#02208C]  mb-3">
            Why Choose Gr8 Payroll and HRIS?
          </h1>
          <p className="text-black text-sm leading-relaxed max-w-lg mx-auto">
       Automate payroll, track attendance, manage employee records, and stay compliant with Philippine government requirements — all from one platform.
          </p>
        </div>

        <IntroCards />
      </div>
    </div>
  );
};

export default payrollIntro;