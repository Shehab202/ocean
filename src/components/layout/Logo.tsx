import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/#home" className=" flex scroll-mt-24 gap-1">
      <Image className="" src="/logo.png" alt="logo" width={30} height={30} />
      <div className="relative flex align-center">
        <h1
          className="text-lg capitalize md:text-2xl text-white font-bold  hover:text-sky-200
        transition-all transition-discrete hover:duration-150 ease-in cursor-pointer"
        >
          ocean
        </h1>
        <div className="bg-sky-800 w-2 absolute -right-2.5 top-3.5  h-2 rounded-full"></div>
      </div>
    </Link>
  );
};

export default Logo;
