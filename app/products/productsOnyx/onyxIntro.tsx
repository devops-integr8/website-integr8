import IntroCards from "./introCards";

const OnyxIntro = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10 pt-5">
          <h1 className="text-4xl font-bold text-[#02208C]  mb-3">
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