"use client";

import Link from "next/link";

export function CoachesEventsBanner() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[280px]">
      <div className="relative w-full md:w-1/2 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=900&q=80"
          alt="Our Coaches"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-10 flex flex-col justify-center h-full min-h-[280px]">
          <h2 className="text-white text-3xl font-bold flex items-center gap-2 mb-3">
            Our Coaches
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block mb-3" />
          </h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs mb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Link
            href="#"
            className="flex items-center gap-3 text-white text-sm font-medium group w-fit"
          >
            Read More
            <span className="flex items-center">
              {/* <span className="w-8 h-[1.5px] bg-white inline-block" /> */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="-ml-1">
                <polyline points="5 12 19 12" stroke="white" strokeWidth="1.5" />
                <polyline points="13 6 19 12 13 18" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div
        className="relative w-full md:w-1/2 overflow-hidden"
        style={{ background: "#8DC63F" }}
      >
        <img
          src="https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=700&q=60"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto object-cover opacity-20 mix-blend-multiply"
        />
        <div className="relative z-10 p-10 flex flex-col justify-center h-full min-h-[280px]">
          <h2 className="text-white text-3xl font-bold flex items-center gap-2 mb-3">
            Events
            <span className="w-2.5 h-2.5 rounded-full bg-white inline-block mb-3" />
          </h2>
          <p className="text-white/90 text-sm leading-relaxed max-w-xs mb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Link
            href="#"
            className="flex items-center gap-3 text-white text-sm font-medium group w-fit"
          >
            Read More
            <span className="flex items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="-ml-1">
                <polyline points="5 12 19 12" stroke="white" strokeWidth="1.5" />
                <polyline points="13 6 19 12 13 18" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}