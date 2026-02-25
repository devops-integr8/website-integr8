type HoverCardProps = {
  title: string;
  description: string;
  background: string;
};

const HoverCard = ({ title, description, background }: HoverCardProps) => {
  return (
    <div className="group relative h-100 overflow-hidden cursor-pointer">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-10"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#224d9b] to-black/80 transition-all duration-500 group-hover:from-[#224d9b] group-hover:to-black/90" />

      <div className="absolute top-1/3 space-y-4">
        {/* Title */}
        <div className="flex items-center justify-center transition-all duration-500 group-hover:items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide transition-all duration-500">
            {title}
          </h2>
        </div>

        {/* Description */}
        <div className="flex items-start justify-center px-10 text-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-white/80 text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
