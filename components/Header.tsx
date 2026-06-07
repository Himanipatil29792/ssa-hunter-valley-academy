import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="container py-2">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Logo />

        <div>
           <Link href="/login">
            <button className="border !border-[#93AD1E] !rounded-full px-9 !py-3 hover:bg-[#93AD1E] hover:text-black transition duration-300">
              Login Here
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}