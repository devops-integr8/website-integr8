import Image from "next/image";

const cards = [
  {
    icon: "/images/home/ProcessImprovement.png",
    title: "Process Improvement and\nCost Savings",
    description:
      "Streamline your workflows with smart digital solutions — cutting costs, reducing errors, and boosting productivity while keeping every process under control in real time.",
  },
  {
    icon: "/images/home/SmoothMigration.png",
    title: "Smooth Migration\nand Training",
    description:
      "Seamless system migration and automation, backed by hands-on training to get your team confident and up to speed fast.",
  },
  {
    icon: "/images/home/SafetySecurity.png",
    title: "Safety and Security",
    description:
      "Full visibility into your critical data — with built-in encryption, masking, and automated compliance reporting to keep you protected and audit-ready.",
  },
];

export default function Values() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-16 lg:px-24">
      {/* Label */}
      <p
        className="mb-4 text-base font-extrabold uppercase tracking-[0.2em]"
        style={{
          background: "linear-gradient(to right, #2D7DB8, #2D7DB8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        WHY GR8 SOFTWARE?
      </p>

      {/* Section heading */}
      <h2
        className="mb-12 max-w-5xl text-[2.5rem] font-bold leading-[1.2] tracking-tight"
        style={{ color: "#0b1f5e" }}
      >
        Built To Streamline. Designed To Deliver.
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex min-h-[380px] flex-col rounded-[22px] px-[34px] py-[38px]"
            style={{
              background: `
                linear-gradient(
                  135deg,
                  rgba(255,255,255,0.18) 0%,
                  rgba(255,255,255,0) 35%
                ),
                linear-gradient(
                  135deg,
                  #6BB8FF 0%,
                  #004A80 45%,
                  #002B5C 100%
                )
              `,
              boxShadow:
                "0 12px 40px rgba(0, 74, 128, 0.35), 0 4px 16px rgba(0, 31, 63, 0.25)",
            }}
          >
            {/* Icon */}
            <div className="mb-6">
              <Image
                src={card.icon}
                alt={card.title.replace("\n", " ")}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="mb-4 whitespace-pre-line text-[19px] font-bold leading-[1.4] text-white">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-[15.5px] leading-[1.68] text-white/90">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}