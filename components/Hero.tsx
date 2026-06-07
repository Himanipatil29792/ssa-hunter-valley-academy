import Link from "next/link";

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
)

function HeroBanner() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source
          src="/videos/tennis-sunset.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="absolute inset-0 z-[2] hidden md:flex justify-between max-w-[1400px] mx-auto left-0 right-0">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="w-px h-full bg-white/10"
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6">
          <p className="uppercase tracking-[8px] md:tracking-[12px] text-xs md:text-lg font-semibold mb-4">
            SSA HUNTER VALLEY
          </p>

          <h1 className="uppercase font-light text-4xl md:text-6xl lg:text-7xl">
            Grow Your Game With The
          </h1>

          <h2 className="uppercase font-bold text-5xl md:text-7xl lg:text-8xl mt-2">
            Professionals
          </h2>

          <div className="w-48 md:w-80 lg:w-96 h-px bg-white/70 mx-auto my-6" />

          <p className="uppercase tracking-[2px] md:tracking-[10px] text-sm md:text-xl">
            Adopt • Nurture • Deliver
          </p>

         <Link href="/register">
          <button className="mt-4 border !border-[#93AD1E] !rounded-full px-9 !py-3 hover:bg-[#93AD1E] hover:text-black transition duration-300">
            Register Now
          </button>
        </Link>
        </div>
      </div>

      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#93AD1E]/90 backdrop-blur-md p-6 min-w-[280px] opacity-70">
          <h4 className="flex text-white font-semibold mb-6 gap-2 items-center">
          <LocationIcon /> Hunter Valley
          </h4>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-white text-6xl font-bold">
                19°
              </span>
              <span className="text-white text-2xl">
                C
              </span>
            </div>

            <div>
              <h5 className="text-white text-xl font-bold">
                Weather
              </h5>

              <p className="text-white/80 text-sm">
                Saturday, 8 pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex absolute right-8 bottom-28 flex-col gap-8 z-20">
        <div className="flex items-center gap-3 text-white uppercase text-sm">
          <span className="text-[#93AD1E]">
            ❮❮
          </span>

          <span>Weather</span>

          <div className="w-16 h-px bg-[#93AD1E]" />
        </div>

        <div className="flex items-center gap-3 text-white uppercase text-sm">
          <span className="text-[#93AD1E]">
            ❮❮
          </span>

          <span>Ongoing Matches</span>

          <div className="w-16 h-px bg-[#93AD1E]" />
        </div>

        <div className="flex items-center gap-3 text-white uppercase text-sm">
          <span className="text-[#93AD1E]">
            ❮❮
          </span>

          <span>Score</span>

          <div className="w-16 h-px bg-[#93AD1E]" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce text-[#93AD1E] text-4xl">
          ↓
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <main>
      <HeroBanner />
    </main>
  );
}