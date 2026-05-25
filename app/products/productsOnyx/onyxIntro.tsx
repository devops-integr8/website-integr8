import IntroCards from "./introCards";

const OnyxIntro = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10 pt-5">
          <h1 className="text-[32px] sm:text-[42px] font-bold text-[#0818a8]  mb-3">
            Why Choose ONYX Point-of-Sale System?
          </h1>
          <p className="text-black text-md leading-relaxed max-w-xl mx-auto">
       Run your business from a single platform. ONYX POS connects your purchasing, sales, inventory, and accounting so nothing falls through the cracks.
          </p>
        </div>

        <IntroCards />
      </div>
    </div>
  );
};

export default OnyxIntro;