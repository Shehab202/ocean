"use client";
import React from "react";
import image2 from "../../../public/Hero-image.svg";
import image3 from "../../../public/companies/company-1.svg";
import image4 from "../../../public/companies/company-2.svg";
import image5 from "../../../public/companies/company-3.svg";
import image7 from "../../../public/companies/company-4.svg";
import image6 from "../../../public/companies/company-5.svg";
import Image from "next/image";
import { motion } from "framer-motion";
export const Company = () => {
  return (
    <>
      <motion.div
        initial={{ y: 100,  }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className=""
      >
        <Image src={image2} alt="bg" className="w-4/6 mx-auto my-10" />
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mx-auto text-center my-8 md:my-20">
        <Image src={image3} alt="bg" className="w-4/6  mx-auto text-center" />
        <Image src={image4} alt="bg" className="w-4/6  mx-auto text-center" />
        <Image src={image5} alt="bg" className="w-4/6  mx-auto text-center" />
        <Image src={image6} alt="bg" className="w-4/6  mx-auto text-center" />
        <Image src={image7} alt="bg" className="w-4/6  mx-auto text-center" />
      </div>
    </>
  );
};
