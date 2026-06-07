"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    role: "Chairman",
    quote:
      "We have created an environment ideal for building craft. Our goal is to be recognized as the best tennis performance centre in the world.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600",
  },
  {
    name: "Michael Smith",
    role: "Head Coach",
    quote:
      "Our academy focuses on developing world-class athletes through professional coaching, discipline, and innovation.",
    image:"https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=1600",
  },
  {
    name: "Sarah Johnson",
    role: "Director",
    quote:
      "We strive to create opportunities for every player to achieve excellence and compete at the highest level.",
    image:
      "https://images.unsplash.com/photo-1505666287802-931dc83a0fe4?w=1600",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative min-h-[450px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black/35" />

              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "repeating-radial-gradient(circle at left top, transparent 0px, transparent 18px, rgba(255,255,255,.4) 20px)",
                }}
              />
              <div className="relative z-10 container mx-auto px-6 lg:px-20 flex items-center min-h-[450px]">
                <div className="max-w-4xl text-white">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    “ {item.quote} ”
                  </h2>

                  <div className="w-full h-px bg-white/40 my-10"></div>

                  <h3 className="text-2xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-lg text-white/80 mt-2">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 40px !important;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}