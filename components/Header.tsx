export default function Header() {
  return (
    <header className="container py-2">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="flex-shrink-0 w-48 pt-1">
            <div className="flex items-center gap-0 leading-none mb-1">
              <div className="relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "radial-gradient(circle at 38% 38%, #ccc 0%, #888 60%, #555 100%)",
                    position: "relative",
                  }}
                >
                  <svg
                    viewBox="0 0 48 48"
                    width="48"
                    height="48"
                    className="absolute inset-0"
                    fill="none"
                  >
                    <ellipse cx="24" cy="24" rx="22" ry="22" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <ellipse cx="24" cy="24" rx="22" ry="10" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                    <ellipse cx="24" cy="24" rx="22" ry="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <line x1="2" y1="24" x2="46" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <line x1="24" y1="2" x2="24" y2="46" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              <span
                className="text-[#1a1a1a] font-black leading-none -ml-2 z-10 relative"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "42px",
                  letterSpacing: "-0.02em",
                }}
              >
                SSA
              </span>
            </div>

            <div
              className="text-gray-600 uppercase tracking-[0.18em] mt-1"
              style={{ fontSize: "8.5px", fontWeight: 600 }}
            >
              ADOPT NURTURE DELIVER
            </div>
          </div>

        <div>
             <button className="border !border-[#93AD1E] !rounded-full px-9 !py-3 hover:bg-[#93AD1E] hover:text-black transition duration-300">
            Login Here
          </button>
        </div>
      </div>
    </header>
  );
}