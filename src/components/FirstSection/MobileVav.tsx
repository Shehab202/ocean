"use client";
import { links } from "@/components/types/links";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";

import React, { useState } from "react";

const MobileVav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <div className="md:hidden flex">
      <div className="relative " onClick={toggleOpen}>
        {open ? (
          <X className="cursor-pointer" />
        ) : (
          <AlignRight className="cursor-pointer" />
        )}

        <nav
          className={`absolute gap-2 origin-top transition-all right-0 top-7 ${
            open ? " opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }  rounded-2xl flex flex-col bg-slate-800 px-6 py-5`}
        >
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                className="text-white font-bold  text-center  hover:text-sky-400  transition-all transition-discrete hover:duration-150 ease-in cursor-pointer p-1 rounded-lg"
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileVav;
