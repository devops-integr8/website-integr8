import IntroCards from "./introCards";

const AccountingIntro = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10 pt-5">
          <h1 className="text-[32px] sm:text-[42px] font-bold text-[#0b1f5e]  mb-3">
          Why Choose Gr8Books Accounting Software?
          </h1>
          <p className="text-black text-md leading-relaxed max-w-2xl mx-auto">
       Take control of your finances with Gr8Books. From daily transactions to full financial reports, our accounting software gives you the insights to run your business smarter.
          </p>
        </div>

        <IntroCards />
      </div>
    </div>
  );
};

export default AccountingIntro;