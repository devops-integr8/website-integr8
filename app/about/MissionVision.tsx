import HoverCard from "@/components/HoverCard";

export default function MissionVision() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
