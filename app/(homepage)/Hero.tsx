import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 pt-26">
      <div className="lg:w-2/4 relative h-[50vh] lg:h-screen">
        <Image
          src={"https://placehold.co/1600?text=Image+here"}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="lg:w-2/4 flex flex-col gap-y-8 justify-center">
        <h1 className="mt-8 lg:mt-0 text-3xl text-center lg:text-start lg:text-6xl font-bold capitalize">
          Stay inspired, never stop creating.
        </h1>
        <div>
          <Button className="" size={"lg"}>
            Learn More About Us
          </Button>
          <Button size={"lg"} variant={"outline"}>
            Our Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
