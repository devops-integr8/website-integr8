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
          className="text-base font-extrabold tracking-[0.2em] uppercase mb-4"
          style={{
            background: "linear-gradient(to right, #0437f2, #02208C)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WHY INTEGR8
        </p>

      {/* Section heading — single line */}
      <h2
        className="mb-12 max-w-5xl text-[2.5rem] font-bold leading-[1.2] tracking-tight"
        style={{ color: "#0818a8" }}
      >
        Built To Streamline. Designed To Deliver.
      </h2>

      {/* 3-column card grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[22px] px-[34px] py-[38px]"
            style={{
              background:
                "linear-gradient(to bottom, #0437f2 0%, #02208c 100%)",
              minHeight: "380px",
              boxShadow:
                "0 12px 40px rgba(4, 55, 242, 0.38), 0 4px 16px rgba(2, 32, 140, 0.22)",
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

            {/* Card title */}
            <h3 className="mb-4 whitespace-pre-line text-[19px] font-bold leading-[1.4] text-white">
              {card.title}
            </h3>

            {/* Card description */}
            <p className="text-[15.5px] font-normal leading-[1.68] text-white/90">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
