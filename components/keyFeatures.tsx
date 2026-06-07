"use client";
import { useState } from "react";

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="flex-shrink-0"
  >
    <line x1="5" y1="12" x2="19" y2="12" stroke="#8DC63F" strokeWidth="1.5" />
    <polyline points="13 6 19 12 13 18" stroke="#8DC63F" strokeWidth="1.5" fill="none" />
  </svg>
);

const WaveBg = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 1200 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(14)].map((_, i) => (
        <path
          key={i}
          d={`M-100,${80 + i * 55} C200,${60 + i * 55} 400,${110 + i * 55} 600,${80 + i * 55} S900,${50 + i * 55} 1300,${80 + i * 55}`}
          fill="none"
          stroke="#c8d8e8"
          strokeWidth="1"
        />
      ))}
    </svg>
  </div>
);

const RegisterButton = () => (
  <button className="bg-[#8DC63F] text-white font-semibold px-8 py-2 !rounded-full text-sm hover:bg-[#7ab535] transition-colors duration-200 whitespace-nowrap">
    Register Now
  </button>
);

const features = [
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy in Asia Pacific",
];

const programs = [
  { img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&q=80", label: "Junior Program" },
  { img: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=400&q=80", label: "Elite Training" },
  { img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&q=80", label: "Fitness & Conditioning" },
  { img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80", label: "Tournament Prep" },
];

export default function KeyFeatures() {
  const [galleryPage, setGalleryPage] = useState(1);
  const totalPages = 2;

  return (
    <div className="font-sans bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* ── Key Features ── */}
      <section className="relative py-10 bg-white">
        <WaveBg />
        <div className="relative max-w-[1200px] mx-auto px-8">
          {/* Top right Register */}
          

          {/* Heading */}
         <div className="flex justify-between flex-wrap">
           <div className="">
            <h2 className="text-4xl font-bold text-[#1a1a1a] flex items-center gap-2">
              key Features
              <span className="w-3 h-3 rounded-full bg-[#8DC63F] inline-block" />
            </h2>
           
          </div>
          <div className="flex justify-end align-items-center">
            <RegisterButton />
          </div>
         </div>
          <p className="text-sm text-gray-500 mt-2">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

          {/* Two-column features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mt-8">
            {/* Left column */}
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={`left-${i}`} className="flex items-start gap-3">
                  <ArrowRight />
                  <p className={`text-sm leading-relaxed ${i === 2 ? "font-semibold" : "text-gray-700"}`}>{f}</p>
                </div>
              ))}
            </div>
            {/* Right column */}
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={`right-${i}`} className="flex items-start gap-3">
                  <ArrowRight />
                  <p className="text-sm leading-relaxed text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── A Glimpse of Excellence ── */}
      <section className="relative py-10 bg-white border-t border-gray-100">
        <WaveBg />
        <div className="relative max-w-[1200px] mx-auto px-8">
          
          <div className="flex justify-between flex-wrap">
            <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] flex items-center gap-2">
              A Glimpse of Excellence
              <span className="w-3 h-3 rounded-full bg-[#8DC63F] inline-block" />
            </h2>
           
          </div>
          <div className="flex justify-end align-items-center">
            <RegisterButton />
          </div>
          </div>

           <p className="text-sm text-gray-500 mt-2">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

          {/* Gallery — page 1 */}
          {galleryPage === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800"
                alt="Tennis player"
                className="w-full h-[420px] object-cover grayscale rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800"
                alt="Tennis courts aerial"
                className="w-full h-[420px] object-cover rounded-lg"
              />
            </div>
          )}

          {/* Gallery — page 2 */}
          {galleryPage === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80"
                alt="Tennis match"
                className="w-full h-[420px] object-cover grayscale rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=800&q=80"
                alt="Tennis stadium"
                className="w-full h-[420px] object-cover rounded-lg"
              />
            </div>
          )}

          {/* Pagination bar */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setGalleryPage((p) => Math.max(1, p - 1))}
              disabled={galleryPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <polyline points="15 18 9 12 15 6" stroke="#333" strokeWidth="2" />
              </svg>
            </button>
            <span className="text-sm font-medium text-gray-600">
              {galleryPage} / {totalPages}
            </span>
            <button
              onClick={() => setGalleryPage((p) => Math.min(totalPages, p + 1))}
              disabled={galleryPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <polyline points="9 18 15 12 9 6" stroke="#333" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className="relative py-10 bg-white border-t border-gray-100">
        <WaveBg />
        <div className="relative max-w-[1200px] mx-auto px-8">
          
          <div className="flex justify-between flex-wrap">
            <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] flex items-center gap-2">
              Programs
              <span className="w-3 h-3 rounded-full bg-[#8DC63F] inline-block" />
            </h2>
           
          </div>
           <div className="flex justify-end align-items-center">
            <RegisterButton />
          </div>
          </div>

           <p className="text-sm text-gray-500 mt-2 max-w-md">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          

          {/* Program cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programs.map((p, i) => (
              <div key={i} className="relative overflow-hidden rounded-sm group cursor-pointer">
                <img
                  src={p.img}
                  alt={p.label}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-sm font-medium">{p.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
