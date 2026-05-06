import IntroCards from "./introCards";

const AccountingIntro = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10 pt-5">
          <h1 className="text-4xl font-bold text-[#02208C]  mb-3">
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