import React from "react";
import Logo from "../layout/Logo";
import Link from "next/link";
import { links } from "@/components/types/links";
import MobileVav from "./MobileVav";

const Navbar = () => {
  return (
    <header className="bg-slate-900/50 z-[999] py-4 fixed top-0 w-full backdrop-blur-md">
      <div className="">
        <nav className="w-5/6 mx-auto  flex justify-between">
          <Logo />
          <div className="md:flex gap-4 hidden">
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  className="text-white font-bold  hover:text-sky-400  transition-all transition-discrete hover:duration-150 ease-in cursor-pointer"
                  href={`#${link.href}`}
                >
                  {link.name}
                </a>
              );
            })}
            <Link href={"/contact"}></Link>
          </div>
          <MobileVav />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
