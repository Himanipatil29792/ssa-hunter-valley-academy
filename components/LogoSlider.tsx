"use client";

const items = ["ADOPT", "NURTURE", "DELIVER"];

const sequence = [...items, ...items, ...items, ...items];

export default function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden bg-white py-20 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...sequence, ...sequence].map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`text-4xl md:text-5xl font-extrabold tracking-widest uppercase mx-4 ${
                i % 2 === 0
                  ? "text-[#8DC63F]"                          // solid fill
                  : "text-transparent"                         // outline only
              }`}
              style={
                i % 2 !== 0
                  ? {
                      WebkitTextStroke: "1.5px #8DC63F",
                    }
                  : {}
              }
            >
              {word}
            </span>
            <span className="text-[#8DC63F] text-3xl font-bold mx-2">·</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
