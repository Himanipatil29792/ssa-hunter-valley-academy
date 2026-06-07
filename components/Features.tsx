"use client";

import { useState } from "react";



const tabs = {
  "About Us": {
    title: "About Us",
    description:
      "To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.",
    stats: [
      { value: "20", label: "Courts" },
      { value: "12", label: "Coaches" },
      { value: "17", label: "Years" },
      { value: "10", label: "Clubs" },
    ],
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500",
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=600",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
    ],
  },

  Coaches: {
    title: "Our Coaches",
    description:
      "Our experienced and certified coaches help players improve their tennis skills through structured training programs and individual coaching sessions.",
    stats: [
      { value: "12", label: "Coaches" },
      { value: "8", label: "Certified" },
      { value: "15+", label: "Experience" },
      { value: "500+", label: "Students" },
    ],
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800",
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=500",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
    ],
  },

  Vision: {
    title: "Our Vision",
    description:
      "To become the leading tennis academy in the Asia Pacific region and produce future Grand Slam champions through world-class facilities and coaching.",
    stats: [
      { value: "60", label: "Courts" },
      { value: "25+", label: "Events" },
      { value: "1000+", label: "Players" },
      { value: "1", label: "Vision" },
    ],
    images: [
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=800",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
    ],
  },

  Mission: {
    title: "Our Mission",
    description:
      "Our mission is to provide world-class infrastructure and coaching opportunities to players of all ages and skill levels.",
    stats: [
      { value: "10", label: "Clubs" },
      { value: "20", label: "Courts" },
      { value: "12", label: "Coaches" },
      { value: "17", label: "Years" },
    ],
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600",
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800",
    ],
  },
};

export default function Features() {
  const [activeTab, setActiveTab] = useState("About Us");

  const current = tabs[activeTab];

  return (
    <section className="relative overflow-hidden py-15 bg-[#f8f8f8]">
        {/* Vertical Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full max-w-7xl mx-auto flex justify-between">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="w-px h-full bg-[#e8e8e878]" />
          ))}
        </div>
      </div>

      {/* Decorative Left Shape */}
      <div className="absolute hidden lg:block">
        <div
          className="w-[280px] h-[340px] bg-[#DDE7B6]"
          style={{
            clipPath:
              "polygon(20% 0%, 45% 0%, 100% 100%, 75% 100%, 35% 30%, 0% 100%, 0% 40%)",
          }}
        />
      </div>

      <div className="container mx-auto px-5">
        {/* Heading */}
        <div className="w-1/2 mx-auto text-center">
          <p className="text-base md:text-xl leading-relaxed">
            To be the first venue in the world to have{" "}
            <span className="text-[#9BB80D] font-bold">
              60 multi surface courts
            </span>{" "}
            at one location and establish first one stop tennis academy
            in the Asia Pacific producing grand slam champions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mt-10">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)} style={{fontSize: "1.25rem" }}
              className={`pb-2 text-2xl md:text-2xl font-semibold border-b-3 transition-all  ${
                activeTab === tab
                  ? "border-[#9BB80D] text-black"
                  : "border-transparent text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          key={activeTab}
          className="grid lg:grid-cols-2 gap-12 mt-10 items-center"
        >
          {/* Left */}
          <div>
            <div className="flex items-start gap-2 mt-15">
              <h2 className="text-4xl md:text-5xl font-bold">
                {current.title}
              </h2>

              <span className="w-3 h-3 rounded-full bg-[#9BB80D] mt-2"></span>
            </div>

            <p className="mt-6 text-gray-600 leading-8 text-base md:text-lg">
              {current.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {current.stats.map((item) => (
                <div key={item.label}>
                  <h3 className="text-4xl md:text-4xl font-bold" style={{ color: "#9BB80D", fontSize: "2.25rem" }}>
                    {item.value}
                  </h3>
                  <p className="text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>

            <button className="!mt-5 bg-[#9BB80D] text-white px-8 py-2 !rounded-full">
              Read More
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2">
              <img
                src={current.images[0]}
                alt=""
                className="w-full h-[220px] md:h-[260px] object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={current.images[1]}
                alt=""
                className="w-full h-[220px] md:h-[260px] object-cover rounded-lg"
              />
            </div>

            <div>
              <img
                src={current.images[2]}
                alt=""
                className="w-full h-[220px] md:h-[260px] object-cover rounded-lg"
              />
            </div>

            <div className="col-span-2">
              <img
                src={current.images[3]}
                alt=""
                className="w-full h-[220px] md:h-[260px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
     
       
    </section>
  );
}