type HoverCardProps = {
  title: string;
  description: string;
  background: string;
};

const HoverCard = ({ title, description, background }: HoverCardProps) => {
  return (
    <div className="group relative w-xl h-100 max-w-full overflow-hidden cursor-pointer">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17] via-[#1b3566] to-[#224d9a]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/30" />
      {/* Watermark Icon */}
      <div
        className="absolute w-[570px] h-[570px] bg-contain bg-no-repeat
    opacity-[0.50]
    transition-all duration-[1200ms] will-change-transform
    group-hover:scale-[1.6] group-hover:opacity-0
    -translate-x-20 -translate-y-16"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Content */}
      <div className="absolute top-1/3 space-y-4 px-16">
        {/* Title */}
        <div className="w-full flex justify-center transition-all duration-500 group-hover:items-start">
          <h2
            className="text-4xl md:text-5xl font-bold text-white tracking-wide transition-all duration-500"
            style={{
              textShadow:
                "0px 3px 6px rgba(0,0,0,0.25), 0px 8px 20px rgba(0,0,0,0.2)",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Description */}
        <div
          className="
          w-full font-normal px-10 
          opacity-0 translate-y-16
          transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:opacity-100 group-hover:translate-y-0"
        >
          <p className="text-center text-white/80 text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
