import SpotlightCard from "@/components/SpotlightCard";

const MissionVision = () => {
  return (
    <div className="relative px-16 space-y-8">
      <div className=" flex flex-row items-center gap-x-8">
        <div className="w-1/2">
          <SpotlightCard>
            <div className="p-8 space-y-8 border">
              <h4 className="text-primary text-3xl font-semibold uppercase">
                Mission
              </h4>
              <p className="text-justify">
                To empower businesses by delivering software solutions that
                enhance productivity, efficiency resulting to success.
              </p>
            </div>
          </SpotlightCard>
        </div>
        <div className="w-1/2">
          <SpotlightCard>
            <div className="p-8 space-y-8 border">
              <h4 className="text-primary text-3xl font-semibold uppercase">
                Vision
              </h4>
              <p className="text-justify">
                Optimizing businesses with one powerful software solution.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
