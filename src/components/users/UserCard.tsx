import Image from "next/image";
import React from "react";
import { usersTypes } from "../types/usersTypes";
import { Quote } from "lucide-react";

const UserCard = ({ description, name, title, image }:usersTypes) => {
  return (
    <>
      <div className="flex flex-col items-center lg:items-start  hover:bg-slate-800  rounded-lg p-3 ">
       <Quote className=" text-sky-400 mb-3" size={40}/>
        <p className="para text-center lg:text-left transition-all ease-in duration-150">{description}</p>
        <div className="flex flex-row items-center gap-5 p-4">
          <Image
            src={image}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-extrabold md:text-lg text-white capitalize">{name}</p>
            <p className="text-sky-600 md:text-base text-sm capitalize md:font-medium">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
