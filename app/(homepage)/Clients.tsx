const logos = [
  { id: 1, src: "/images/client-logos/Hr.png", alt: "HR Network Inc" },
  { id: 2, src: "/images/client-logos/Barrio.png", alt: "Barrio" },
  { id: 3, src: "/images/client-logos/Breighton.png", alt: "Breighton" },
  { id: 4, src: "/images/client-logos/Baliwag.png", alt: "Baliwag" },
  { id: 5, src: "/images/client-logos/Clean.png", alt: "Clean" },
  { id: 6, src: "/images/client-logos/CoopUB.png", alt: "CoopUB" },
  { id: 7, src: "/images/client-logos/Crimson.png", alt: "Crimson" },
  { id: 8, src: "/images/client-logos/Darbc.png", alt: "Darbc" },
  { id: 9, src: "/images/client-logos/Dlsud.png", alt: "Dlsud" },
  { id: 10, src: "/images/client-logos/Epeople.png", alt: "Epeople" },
  { id: 11, src: "/images/client-logos/Gu.png", alt: "Gu" },
  { id: 12, src: "/images/client-logos/Ishida.png", alt: "Ishida" },
  { id: 13, src: "/images/client-logos/KaiMall.png", alt: "KaiMall" },
  { id: 14, src: "/images/client-logos/Lobo.png", alt: "Lobo" },
  { id: 15, src: "/images/client-logos/Malalim.png", alt: "Malalim" },
  { id: 16, src: "/images/client-logos/MetroTurf.png", alt: "MetroTurf" },
  { id: 17, src: "/images/client-logos/Polaris.png", alt: "Polaris" },
  { id: 18, src: "/images/client-logos/Polyserve.png", alt: "Polyserve" },
  { id: 19, src: "/images/client-logos/Precast.png", alt: "Precast" },
  { id: 20, src: "/images/client-logos/Raquel.png", alt: "Raquel" },
  { id: 21, src: "/images/client-logos/Rldc.png", alt: "Rldc" },
  { id: 22, src: "/images/client-logos/Vegefoods.png", alt: "Vegefoods" },
  { id: 23, src: "/images/client-logos/VillaMedica.png", alt: "VillaMedica" },
  { id: 24, src: "/images/client-logos/Zamba.png", alt: "Zamba" },
];

const Clients = () => {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-y-5 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#0818a8]">
            Trusted By Companies Nationwide
          </h2>
          <div className="w-[45rem] h-[1px] bg-[#0818a8] rounded-full" />
        </div>

        {/* Logo Marquee */}
        <div className="w-full overflow-hidden">
          <style>{`
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 50s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            .logo-item img {
              transition: transform 0.3s ease;
            }
            .logo-item:hover img {
              transform: scale(1.15);
            }
          `}</style>

          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="logo-item flex items-center justify-center mx-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-30 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm lg:text-base text-gray-500 text-center max-w-2xl leading-relaxed">
          From cooperatives and development firms to retail chains and service
          providers — we&apos;re proud to partner with a diverse range of
          organizations across the Philippines.
        </p>
      </div>
    </section>
  );
};

export default Clients;
