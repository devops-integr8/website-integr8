import Padding from "@/components/padding";
import HoverCard from "@/components/HoverCard";

const About = () => {
  return (
    <div>
      <Padding />
      <div className="relative min-h-screen px-16 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/techBG.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-[60%] -translate-y-1/2 left-24 max-w-xl space-y-6 text-white">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight -space-y-8">
            <span className="block text-white/40">One System.</span>
            <span className="block text-white/60">Total Control.</span>
            <span className="block text-white font-black">Gr8 Results.</span>
          </h1>

          <p className="mt-8 text-white/80 max-w-lg leading-relaxed">
            Explore Gr8Books — an integrated cloud and desktop ERP accounting
            system designed to combine financial operations, enhance reporting
            accuracy, and streamline business workflows, all in one platform.
          </p>
        </div>
      </div>

      <section className="relative bg-gray-100 py-16 px-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl max-h-3xl  mx-auto">
          <HoverCard
            title="MISSION"
            description="To empower businesses by delivering software solutions that enhance productivity, efficiency, resulting to success."
            background="/images/mission-bg.jpg"
          />

          <HoverCard
            title="VISION"
            description="Optimizing businesses with one powerful software solution."
            background="/images/vision-bg.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
