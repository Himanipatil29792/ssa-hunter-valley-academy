"use client";

import Link from "next/link";

const topNavLinks = [
  { label: "About Us", href: "#" },
  { label: "Coaches", href: "#" },
  { label: "News", href: "#" },
  { label: "Matches", href: "#" },
  { label: "Events", href: "#" },
  { label: "FAQs", href: "#" },
];

const bottomNavLinks = [
  { label: "Programs", href: "#" },
  { label: "Amenities", href: "#" },
  { label: "Blogs", href: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="container w-full bg-white" style={{ fontFamily: "'Barlow', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;900&family=Barlow+Condensed:wght@700;900&display=swap');
      `}</style>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-14 pb-12">
        <div className="flex flex-col items-center justify-between md:flex-row gap-10 md:gap-16">

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

            <p
              className="text-gray-600 uppercase tracking-[0.18em] mt-1"
              style={{ fontSize: "8.5px", fontWeight: 600 }}
            >
              ADOPT NURTURE DELIVER
            </p>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-5 mb-2">
              {topNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="!no-underline text-sm !text-gray-700 !hover:text-[#8DC63F] transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-y-5 mb-8">
              {bottomNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="!no-underline text-sm !text-gray-700 !hover:text-[#8DC63F] transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <hr className="border-gray-200 mb-8" />
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
              <div className="flex-1">
                <h4
                  className="font-semibold mb-3"
                  style={{ color: "#8DC63F", fontSize: "18px" }}
                >
                  Signature Slam Academy
                </h4>

                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  30 Wills Hill Road, Lovedale, NSW
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2.5">
                  <svg
                    width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="#8DC63F" strokeWidth="2"
                    className="flex-shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                  + 91 5642589752
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg
                    width="15" height="15" viewBox="0 0 24 24"
                    fill="none" stroke="#8DC63F" strokeWidth="2"
                    className="flex-shrink-0"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <polyline points="2,4 12,13 22,4" />
                  </svg>
                  info@ssagroup.com
                </div>
              </div>

              <div className="flex-shrink-0">
                <h4
                  className="font-semibold mb-4"
                  style={{ color: "#8DC63F", fontSize: "18px" }}
                >
                  Connect with us
                </h4>
                <div className="flex items-center gap-4">
                  {socials.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="!text-gray-800 !hover:text-[#8DC63F] transition-colors duration-200"
                    >
                      {s.icon}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
