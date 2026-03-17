import HoverCard from "@/components/HoverCard";

export default function MissionVision() {
  return (
    <section className="relative bg-white py-16 px-16">
      <div className="grid md:grid-cols-2 gap-12  max-h-3xl  mx-auto">
        <HoverCard
          title="MISSION"
          description="To empower businesses by delivering software solutions that enhance productivity, efficiency, resulting to success."
          background="missionIcon.png"
        />

        <HoverCard
          title="VISION"
          description="Optimizing businesses with one powerful software solution."
          background="visionIcon.png"
        />
      </div>
    </section>
  );
}
