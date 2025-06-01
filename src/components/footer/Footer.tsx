import React from "react";
import Logo from "../layout/Logo";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import { sections } from "../types/footer";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.div className="w-5/6 mx-auto scroll-mt-24 lg:mt-36 md:mt-32 mt-20 pb-8"
      initial={{ y: 100, opacity: 0 }}

      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      id="footer"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6  gap-8 text-amber-200 capitalize ">
       
          <div className="col-span-2 ">
            <Logo />
            <p className="para py-1.5">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex gap-5 py-3 text-gray-400">
              <Facebook className=" hover:text-sky-400 hover:pb-0.5 cursor-pointer transition-all transition-discrete hover:duration-150 ease-in" />
              <Twitter className=" hover:text-sky-400 hover:pb-0.5 cursor-pointer transition-all transition-discrete hover:duration-150 ease-in" />
              <Instagram className=" hover:text-sky-400 hover:pb-0.5 cursor-pointer transition-all transition-discrete hover:duration-150 ease-in" />
              <Youtube className=" hover:text-sky-400 hover:pb-0.5 cursor-pointer transition-all transition-discrete hover:duration-150 ease-in" />
              <Github className=" hover:text-sky-400 hover:pb-0.5 cursor-pointer transition-all transition-discrete hover:duration-150 ease-in" />
            </div>
          </div>
          <div className=" text-gray-400">
            <p className="font-bold text-xl">solutions</p>
            <ul className="py-4">
              {sections.solutions.map((item) => (
                <li
                  className="py-1 hover:text-sky-400 hover:ml-1 transition-all transition-discrete hover:duration-150 ease-in cursor-pointer"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className=" text-gray-400">
            <p className="font-bold text-xl">support</p>
            <ul className="py-4">
              {sections.support.map((item) => (
                <li
                  className="py-1  hover:text-sky-400 hover:ml-1 transition-all transition-discrete hover:duration-150 ease-in cursor-pointer"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className=" text-gray-400">
            <p className="font-bold text-xl">company</p>
            <ul className="py-4">
              {sections.company.map((item) => (
                <li
                  className="py-1  hover:text-sky-400 hover:ml-1 transition-all transition-discrete hover:duration-150 ease-in cursor-pointer"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className=" text-gray-400">
            <p className="font-bold text-xl">legal</p>
            <ul className="py-4">
              {sections.legal.map((item) => (
                <li
                  className="py-1  hover:text-sky-400 hover:ml-1 transition-all transition-discrete hover:duration-150 ease-in cursor-pointer"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      <div>
          <hr className="my-4 text-amber-50 w-full" />
        <p className="para">© 2023 ocean, inc. all rights reserved.</p>
      </div>
      </motion.div>
      
    </>
  );
};

export default Footer;
