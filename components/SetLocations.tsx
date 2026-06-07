"use client";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import location1 from "../images/location1.jpg"
import location2 from "../images/location2.jpg"
import location3 from "../images/location3.jpg"
import location4 from "../images/location4.jpg"

const locations = [
  { name: "Hunter Valley Golf And Country Club", distance: "220m" },
  { name: "Rydges Resort Hunter Valley", distance: "550m" },
  { name: "Cressnock Airport", distance: "1.7km" },
  { name: "Cressnock CBD", distance: "7km" },
  { name: "Nulkaba Public School", distance: "4.8km" },
  { name: "Cressnock Hospital", distance: "7.3km" },
  { name: "Mcdonalds, KFC, Oporto", distance: "7km" },
];

const slides = [
   { src: location1, alt: "Hunter Valley aerial view" },
  { src: location2, alt: "Rydges Resort Hunter Valley" },
  { src: location3, alt: "Cressnock Airport" },
  { src: location4, alt: "Cressnock CBD" },
];

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="12" cy="9" r="2" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

const DashedLine = () => (
  <span className="flex-1 mx-3 border-b border-dashed border-white/40 mb-1" />
);

export default function SetLocations() {
  return (
    <>
      <style>{`
        .academy-swiper .swiper-pagination {
          bottom: 16px;
        }
        .academy-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.4;
        }
        .academy-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
        }
      `}</style>

      <section className="w-full flex flex-col md:flex-row min-h-[480px] py-10">
        {/* Left green panel */}
        <div
          className="w-full md:w-[40%] flex flex-col justify-center px-10 py-12 bg-gradient-to-br from-[#003366] via-[#2d6a3f] to-[#7ec832]"
        >
          <p className="text-white/80 text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Launching
          </p>

          <h2 className="text-white text-3xl font-bold leading-snug mb-3">
            Signature Slam Academy
            <br />
            Hunter Valley
          </h2>

          <p className="text-white/90 text-base font-normal mb-8">
            SSA Connectivity
          </p>

          <div className="space-y-4">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-center gap-3">
                <LocationIcon />
                <span className="text-white text-sm font-semibold whitespace-nowrap">
                  {loc.name}
                </span>
                <DashedLine />
                <span className="text-white text-sm font-medium whitespace-nowrap">
                  {loc.distance}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Swiper */}
       {/* Right Swiper */}
        <div className="w-full md:w-[60%] h-[550px]">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            className="academy-swiper w-full h-full"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i} className="relative w-full h-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
