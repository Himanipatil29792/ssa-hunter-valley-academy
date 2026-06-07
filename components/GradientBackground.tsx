// export default function GradientBackground({ children }: { children?: React.ReactNode }) {
//   return (
//     <div
//       className="relative min-h-[70vh] w-full overflow-hidden"
//       style={{
//         background: "linear-gradient(100deg, #012D4A 0%, #0E4D42 35%, #2E6B28 65%, #6B9B20 100%)",
//       }}
//     >
//       <div
//         className="absolute right-0 top-0 h-full flex items-center pointer-events-none select-none"
//         style={{ width: "320px", opacity: 0.13 }}
//         aria-hidden
//       >
//         <svg
//           viewBox="0 0 300 560"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full"
//         >
//           {/* ── Cup bowl ── */}
//           <path
//             d="M60 20 Q62 180 150 230 Q238 180 240 20 Z"
//             fill="white"
//           />

//           {/* ── Left handle (big C shape) ── */}
//           <path
//             d="M62 50 Q10 75 8 135 Q8 190 62 200"
//             stroke="white"
//             strokeWidth="24"
//             fill="none"
//             strokeLinecap="round"
//           />

//           {/* ── Right handle ── */}
//           <path
//             d="M238 50 Q290 75 292 135 Q292 190 238 200"
//             stroke="white"
//             strokeWidth="24"
//             fill="none"
//             strokeLinecap="round"
//           />

//           {/* ── Stem ── */}
//           <rect x="126" y="230" width="48" height="85" rx="4" fill="white" />

//           {/* ── Foot connector (wide disc) ── */}
//           <rect x="94" y="312" width="112" height="24" rx="6" fill="white" />

//           {/* ── Base tier 1 ── */}
//           <rect x="66" y="334" width="168" height="26" rx="7" fill="white" />

//           {/* ── Base tier 2 (widest) ── */}
//           <rect x="46" y="358" width="208" height="26" rx="7" fill="white" />

//           {/* ── Bottom strip ── */}
//           <rect x="36" y="382" width="228" height="16" rx="5" fill="white" />
//         </svg>
//       </div>

//       {/* Page content goes here */}
//       {children}
//     </div>
//   );
// }


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