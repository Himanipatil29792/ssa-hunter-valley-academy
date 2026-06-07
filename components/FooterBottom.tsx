export default function FooterBottom() {
  return (
    <footer
      className="w-full py-3 px-6 md:px-10"
      style={{
        background: "linear-gradient(100deg, #012D4A 0%, #0E4D42 35%, #2E6B28 65%, #6B9B20 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto flex !items-center justify-between gap-4 flex-wrap">
        <a
          href="#"
          className="!no-underline !text-white/80 text-sm hover:text-white transition-colors duration-200 whitespace-nowrap"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Terms And Condition
        </a>
        <div
          className="!text-white/80 text-sm"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          © 2023 All Rights Reserved <a href="www.signatureslamacademy.com" className="!text-white !no-underline"> www.signatureslamacademy.com</a>
        </div>
        <a
          href="#"
          className="!no-underline !text-white/80 text-sm hover:text-white transition-colors duration-200 whitespace-nowrap"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
