import { MoonStar } from "lucide-react";
import Logo from "../atoms/Logo";

const Navbar = () => {
  return (
    <nav className="flex items-end justify-between p-5 xl:px-10 xl:pt-8">
      {/* logo */}
      <Logo />
      {/* contents */}
      <div className="font-serif hidden sm:flex sm:text-base sm:gap-15 lg:gap-25">
        <a href="#overview">Overview</a>
        <a href="#works">Works</a>
        <a href="#about">About</a>
      </div>
      {/* contacts */}
      <div className="font-serif hidden sm:flex gap-5">
        <a href="#contact">Contact</a>
        <button>
          <MoonStar fill="#689CF0" className="cursor-pointer" />
          {/* <SunMedium fill="#f0bc68" className="cursor-pointer" /> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
