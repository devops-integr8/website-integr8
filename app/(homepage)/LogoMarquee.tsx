'use client'

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';
const LogoMarquee = () => (
  <div className="flex size-full items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {new Array(8).fill(null).map((_, index) => (
          <MarqueeItem className="h-16 w-16 lg:h-28 lg:w-28 mx-4 lg:mx-8" key={index}>
            <img
              alt={`logo ${index}`}
              className="w-full h-full object-cover rounded-full"
              // src={`/clients/logo-${index}.jpg`}
              src={`https://placehold.co/160${index}?text=Client+Logo`}
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
export default LogoMarquee;