"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import GradientBackground from "./GradientBackground";

const facilities = [
  {
    title: "Tennis",
    tags: ["9 Clay Courts", "4 Hard Courts"],
    video: "/videos/tennis.mp4",
  },
  {
    title: "Accommodation",
    tags: ["5 Star Hotel"],
    video: "/videos/hotel.mp4",
  },
  {
    title: "Fitness",
    tags: ["Modern Gym"],
    video: "/videos/gym.mp4",
  },
  {
    title: "Swimming",
    tags: ["Olympic Pool"],
    video: "/videos/pool.mp4",
  },
];

export default function Facilities() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section className="relative bg-[#f7f7f7] pb-10 px-8 overflow-hidden">
        <GradientBackground />

        <div className="relative max-w-[1200px] mx-auto mt-15">
          <h2 className="text-4xl font-bold text-[#1a1a1a] flex items-start gap-2 leading-tight">
              Facilities
              <span className="w-3 h-3 rounded-full bg-[#8DC63F] inline-block mt-2 flex-shrink-0" />
            </h2>
           <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy
              <br />
              text ever since the 1500s.
            </p>
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-x-10 gap-y-10">
            {facilities.map((item, index) => (
              <div
                key={index}
                className={index > 1 ? "lg:mt-2" : ""}
              >
                <div
                  className={`relative overflow-hidden rounded-[24px] group ${
                    index % 2 === 0
                      ? "lg:w-[85%]"
                      : "lg:w-[85%] lg:ml-auto"
                  }`}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[280px] md:h-[420px] object-cover"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedVideo(item.video)}
                      className="w-16 h-16 bg-white !rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition"
                    >
                      <Play
                        size={20}
                        fill="currentColor"
                        className="text-black ml-1"
                      />
                    </button>
                  </div>
                </div>

                <div
                  className={`mt-3 text-white ${
                    index % 2 === 0
                      ? "lg:w-[85%]"
                      : "lg:w-[85%] lg:ml-auto"
                  }`}
                >
                  <h3 className="text-3xl md:text-5xl font-semibold">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap gap-3 mt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 text-white/80 leading-8">
                    Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white"
            >
              <X size={32} />
            </button>

            <video
              controls
              autoPlay
              className="w-full rounded-2xl"
            >
              <source src={selectedVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}