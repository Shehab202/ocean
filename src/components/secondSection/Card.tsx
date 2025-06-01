import React from "react";
import { CardType } from "../types/cardType";
import Image from "next/image";

const Card = ({ image, title, description }: CardType) => {
  return (
    <>
   
      <div className="flex flex-col md:flex-row gap-5 items-center text-center md:text-left hover:bg-slate-900 hover:border-b-1 hover:border-sky-200 rounded-lg p-4">
        <Image src={image} alt="title" width={35} height={35} />
        <div>
          <p className="text-white text-lg font-bold capitalize py-1.5 ">
            {title}
          </p>
          <p className="text-gray-400 leading-6 text-sm">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
