export default function Hero() {
  return (
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
  );
}
