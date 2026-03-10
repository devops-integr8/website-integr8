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
    <section className="py-5 mt-14">
      {/* HEADER */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-5xl font-bold mb-3">News & Articles</h1>
            <p className="text-lg max-w-[700px]">
              Milestones, success stories, and updates from our valued clients
              and partners, highlighting successful projects, meaningful
              collaborations, and business growth.
            </p>
          </div>

          <div className="flex gap-2">
            <p className="text-lg">See All Posts</p>
            <button className="cursor-pointer bg-[rgba(34,77,154,1)] text-white w-8 h-8">
              &#8250;
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px]">
          {/* LARGE CARD */}
          {large && (
            <a
              href={large.link}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-2 row-span-2 relative overflow-hidden group"
            >
              <img
                src={large.image}
                alt={large.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* TOP OVERLAY */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-2 p-3 bg-gradient-to-b from-black/70 to-transparent">
                <img
                  src="/images/news-articles/FbiconBlue.png"
                  className="w-6 h-6 rounded-full"
                />
                <span
                  className="text-white text-lg font-extrabold"
                  style={{
                    textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
                  }}
                >
                  Gr8 Software Solutions
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <p className="text-white text-sm mb-1">{large.date}</p>
                <h3 className="text-white text-2xl font-bold">{large.title}</h3>
              </div>
            </a>
          )}

          {/* MEDIUM CARD */}
          {medium && (
            <a
              href={medium.link}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 row-span-2 relative overflow-hidden group"
            >
              <img
                src={medium.image}
                alt={medium.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* TOP OVERLAY */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-2 p-3 bg-gradient-to-b from-black/70 to-transparent">
                <img
                  src="/images/news-articles/FbiconBlue.png"
                  className="w-6 h-6 rounded-full"
                />
                <span
                  className="text-white text-lg font-extrabold"
                  style={{
                    textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
                  }}
                >
                  Gr8 Software Solutions
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end">
                <p className="text-white text-sm">{medium.date}</p>
                <h3 className="text-white text-xl font-bold">{medium.title}</h3>
              </div>
            </a>
          )}

          {/* SMALL STACK */}
          {small.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 row-span-1 relative overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* TOP OVERLAY */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-2 p-3 bg-gradient-to-b from-black/70 to-transparent">
                <img
                  src="/images/news-articles/FbiconBlue.png"
                  className="w-6 h-6 rounded-full"
                />
                <span
                  className="text-white text-lg font-extrabold"
                  style={{
                    textShadow: "0px 2px 8px rgba(0,0,0,0.6)",
                  }}
                >
                  Gr8 Software Solutions
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 flex flex-col justify-end">
                <p className="text-white text-xs">{item.date}</p>
                <h3 className="text-white text-base font-bold">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* BUBBLE NEWS LIST */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bubbleNews.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              className="flex items-start gap-3 group"
            >
              {/* IMAGE */}
              <div className="w-14 h-14 min-w-[56px] rounded-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              {/* TEXT */}
              <div className="flex items-start gap-3 group">
                {/* TEXT AREA */}
                <div className="flex flex-col">
                  {/* PAGE HEADER */}
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/news-articles/FbiconBlue.png"
                      className="w-4 h-4"
                    />

                    <span className="text-xs font-semibold text-gray-800">
                      Gr8 Software Solutions
                    </span>
                  </div>

                  {/* TITLE */}
                  <h4 className="text-sm font-semibold leading-snug mt-1 group-hover:text-blue-600 transition">
                    {item.title}
                  </h4>

                  {/* DATE */}
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsArticle;
