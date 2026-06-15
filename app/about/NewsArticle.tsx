"use client";
import React from "react";

const articles = [
  {
    id: 1,
    title: "Congratulations to Breighton Land Inc.! 🎉",
    date: "November 4, 2025",
    image: "/images/news-articles/BreightonLand.png",
    link: "https://www.facebook.com/100058913372436/posts/pfbid02b2AyXCiktWVdWMa41BrCLGH8kEwH522mynBQb46tGSgc7L8Ecd9MZPL7EaZcKg4ml/?",
    size: "large",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
  {
    id: 2,
    title: "Congratulations to Amariyah Corp.! 🎊",
    date: "November 4, 2025",
    image: "/images/news-articles/AmariyahCorp.png",
    link: "https://www.facebook.com/100058913372436/posts/pfbid02gXiocD5KJNiarnSVCWuKtmCTzZfqTCg9DRo9wdii8zt4WaE7MfPwnonR93B7FAqnl/?",
    size: "medium",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
  {
    id: 3,
    title: "✨ GO LIVE CEREMONY | December 13, 2025 ✨",
    date: "December 13, 2025",
    image: "/images/news-articles/GoLive.png",
    link: "https://facebook.com/story.php?story_fbid=pfbid02LRghQKmd6ezNiUzWV4Myd4ZArXQGdJrVJVoFJHN1q5MejV9wonBXyHrEFNZCZFSul&id=100058913372436",
    size: "small",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
  {
    id: 4,
    title: "✨ Serving with Purpose. Giving with Heart. ✨",
    date: "February 19, 2026",
    image: "/images/news-articles/ServewithPurpose.png",
    link: "https://facebook.com/story.php?story_fbid=pfbid0LrFySP8BFXmJYTmvjzjHWSmfLcNVioaMfNjE5RqSys6hBpkYKmugXG4jD1X6Fmppl&id=100058913372436",
    size: "small",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
];

const bubbleNews = [
  {
    id: 1,
    title:
      "🚀 Gr8 Training for Amariyah Corporation: Empowering Teams Through Innovation!",
    date: "November 19, 2025",
    image: "/images/news-articles/AmariyahCorp.png",
    link: "https://www.facebook.com/100058913372436/posts/pfbid02JKhSFBNTwyFjRPH6FcnQfg1Cw143MsEppssrAHrwyzHMjw4fnVXZzNLQXSEm29CMl/?",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
  {
    id: 2,
    title:
      "Congratulations to Caritas et Labor Human Resources Cooperative on the successful completion of User Acceptance Testing. 📄🎉",
    date: "November 18, 2025",
    image: "/images/news-articles/Caritas.png",
    link: "https://www.facebook.com/100058913372436/posts/pfbid028ij5waDsGEgzdrjnLcwaKvAj7JwFMbJnJBEvMGgphbWDTD6LQaioQ9wpFpwcXhW4l/?",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
  {
    id: 3,
    title:
      "🎉 Congratulations to PGH Bayanihan Multipurpose Cooperative on the successful completion of User Acceptance Testing! 📄✨",
    date: "November 26, 2025",
    image: "/images/news-articles/PGH.png",
    link: "https://facebook.com/story.php?story_fbid=pfbid02ZhBQ5ZGkEFRKZjFeschVcScUXhzww1NsP99uxX7Duhp1cGYRYVeFHR6qB8KhwCYql&id=100058913372436",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
  {
    id: 4,
    title:
      "Congratulations to Aguinaldo Vets and Associates Credit Cooperative on the successful completion of User Acceptance Testing for the Gr8 ERP for Cooperative! 📄🎉",
    date: "February 20, 2026",
    image: "/images/news-articles/VetsandAssociates.png",
    link: "https://facebook.com/story.php?story_fbid=pfbid0bq8m2oo7MqMEpHaVoXgXnNTjGnMksjQgHgx6v8jHouXAiEXr2eLCKCyqPQB3EbHMl&id=100058913372436",
    page: "Gr8 Software Solutions",
    logo: "/images/news-articles/FbiconBlue.png",
  },
];

const NewsArticle = () => {
  const large = articles.find((a) => a.size === "large");
  const medium = articles.find((a) => a.size === "medium");
  const small = articles.filter((a) => a.size === "small");

  return (
    <section className="h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-5">
        <div className="w-full md:max-w-[55%]">
          <div className="md:text-left text-center mx-auto md:mx-0 max-w-xl">

       
          <h1 className="text-4xl text-[#004A80] font-bold mb-2">
            News & Articles
          </h1>
          <p className="text-base text-black/60 leading-snug">
            Milestones, success stories, and updates from our valued clients and
            partners, highlighting successful projects, meaningful
            collaborations, and business growth.
          </p>
        </div>
   </div>
        
{/* SEE ALL POSTS BUTTON (commented out for now) */}

        {/* <div className="flex items-center gap-2 mt-4">
          <p className="text-base font-semibold text-[#0437F2]">
            See All Posts
          </p>
          <button className="cursor-pointer bg-[#0437F2] text-white w-7 h-7 flex items-center justify-center hover:brightness-125 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div> */}


      </div>

      {/* MAIN GRID — 3 columns: large | medium | 2 small stacked */}
      <div
  className="grid gap-3 w-full overflow-hidden
             grid-cols-2 md:grid-cols-[2fr_1.3fr_1.3fr]"
  style={{
    gridTemplateRows: "1fr 1fr",
    height: "370px",
  }}
>
        {/* LARGE CARD — spans 2 rows */}
        {large && (
          <a
            href={large.link}
            target="_blank"
            rel="noopener noreferrer"
            className="row-span-2 relative overflow-hidden group"
          >
            <img
              src={large.image}
              alt={large.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 p-3 bg-gradient-to-b from-black/70 to-transparent">
              <img
                src="/images/news-articles/FbiconBlue.png"
                className="w-5 h-5 rounded-full"
              />
              <span
                className="text-white text-sm font-extrabold"
                style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.6)" }}
              >
                Gr8 Software Solutions
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-5 flex flex-col justify-end">
              <p className="text-white text-xs mb-1">{large.date}</p>
              <h3 className="text-white text-xl font-bold leading-tight">
                {large.title}
              </h3>
            </div>
          </a>
        )}

        {/* MEDIUM CARD — spans 2 rows */}
        {medium && (
          <a
            href={medium.link}
            target="_blank"
            rel="noopener noreferrer"
            className="row-span-2 relative overflow-hidden group"
          >
            <img
              src={medium.image}
              alt={medium.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 p-3 bg-gradient-to-b from-black/70 to-transparent">
              <img
                src="/images/news-articles/FbiconBlue.png"
                className="w-5 h-5 rounded-full"
              />
              <span
                className="text-white text-sm font-extrabold"
                style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.6)" }}
              >
                Gr8 Software Solutions
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 flex flex-col justify-end">
              <p className="text-white text-xs mb-1">{medium.date}</p>
              <h3 className="text-white text-base font-bold leading-tight">
                {medium.title}
              </h3>
            </div>
          </a>
        )}

        {/* SMALL CARDS — stacked in col 3 */}
        {small.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute top-0 left-0 right-0 flex items-center gap-2 p-2 bg-gradient-to-b from-black/70 to-transparent">
              <img
                src="/images/news-articles/FbiconBlue.png"
                className="w-4 h-4 rounded-full"
              />
              <span
                className="text-white text-xs font-extrabold"
                style={{ textShadow: "0px 2px 8px rgba(0,0,0,0.6)" }}
              >
                Gr8 Software Solutions
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-3 flex flex-col justify-end">
              <p className="text-white text-xs mb-0.5">{item.date}</p>
              <h3 className="text-white text-sm font-bold leading-tight">
                {item.title}
              </h3>
            </div>
          </a>
        ))}
      </div>

      {/* BUBBLE NEWS LIST */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-5">
        {bubbleNews.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
            {/* CIRCLE IMAGE */}
            <div className="w-12 h-12 min-w-[48px] rounded-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition"
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 mb-0.5">
                <img
                  src="/images/news-articles/FbiconBlue.png"
                  className="w-3.5 h-3.5"
                />
                <span className="text-xs font-semibold text-gray-800">
                  Gr8 Software Solutions
                </span>
              </div>
              <h4 className="text-xs font-semibold text-[#0818a8] leading-snug group-hover:text-blue-500 transition line-clamp-3">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1">{item.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default NewsArticle;
