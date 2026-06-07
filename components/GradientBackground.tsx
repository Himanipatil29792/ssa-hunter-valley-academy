
export default function GradientBackground() {
  return (
    <div
      className="absolute left-0 right-0 top-[280px] bottom-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(100deg, #012D4A 0%, #0E4D42 35%, #2E6B28 65%, #6B9B20 100%)",
      }}
    >
      <div
        className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none"
        style={{ width: "320px", opacity: 0.13 }}
      >
        <svg
          viewBox="0 0 300 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M60 20 Q62 180 150 230 Q238 180 240 20 Z"
            fill="white"
          />

          <path
            d="M62 50 Q10 75 8 135 Q8 190 62 200"
            stroke="white"
            strokeWidth="24"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M238 50 Q290 75 292 135 Q292 190 238 200"
            stroke="white"
            strokeWidth="24"
            fill="none"
            strokeLinecap="round"
          />

          <rect
            x="126"
            y="230"
            width="48"
            height="85"
            rx="4"
            fill="white"
          />

          <rect
            x="94"
            y="312"
            width="112"
            height="24"
            rx="6"
            fill="white"
          />

          <rect
            x="66"
            y="334"
            width="168"
            height="26"
            rx="7"
            fill="white"
          />

          <rect
            x="46"
            y="358"
            width="208"
            height="26"
            rx="7"
            fill="white"
          />

          <rect
            x="36"
            y="382"
            width="228"
            height="16"
            rx="5"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}