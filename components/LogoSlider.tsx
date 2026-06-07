"use client";

const items = ["ADOPT", "NURTURE", "DELIVER"];

const sequence = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden bg-white py-20 select-none">
      <div className="marquee-track flex whitespace-nowrap">
        {[...sequence, ...sequence].map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest uppercase mx-4 ${
                i % 2 === 0
                  ? "text-[#8DC63F]"
                  : "text-transparent"
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

            <span className="text-[#8DC63F] text-2xl md:text-3xl font-bold mx-2">
              ·
            </span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 14s linear infinite;
          width: max-content;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        /* Tablet */
        @media (max-width: 768px) {
          .marquee-track {
            animation: marquee 8s linear infinite;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .marquee-track {
            animation: marquee 6s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}