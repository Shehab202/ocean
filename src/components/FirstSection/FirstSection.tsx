import { CircleArrowRight, MoveRight, X } from "lucide-react";
import Heading from "../layout/Heading";
import Buttons from "../layout/Buttons";
import Image from "next/image";
import image1 from "../../../public/bg.png";
import { Company } from "./Company";
const FirstSection = () => {
  return (
    <>
      <div
      id="home"
      className="flex flex-col justify-center items-center w-5/6 mx-auto mt-32  relative z-40">
        <Image
          src={image1}
          alt="bg"
          className="absolute -top-36 left-0 opacity-5 -z-50 w-full h-full"
        />
        <figure
          className="absolute top-0 -left-10 w-2/12 h-32 bg-white rounded-full  
        shadow-xl  hover:shadow-cyan-500 hover:shadow-2xl shadow-cyan-500/50 blur-3xl opacity-35 "
        />
        <figure
          className="absolute top-52 -right-10 w-2/12 h-32 bg-white rounded-full 
        shadow-xl hover:shadow-cyan-500 hover:shadow-2xl shadow-cyan-500/50 blur-3xl opacity-30"
        />
        <div className="">
          <div
            className="flex w-fit mx-auto items-center text-center justify-center
            text-xs md:text-sm text-gray-400 px-2 border-amber-100 border rounded-full
            hover:text-sky-300 hover:border-sky-100 cursor-pointer
            "
          >
            <p className="capitalize">new features is now available.</p>
            <CircleArrowRight className="w-3 md:w-4 ml-1" />
          </div>
          <Heading
            title={"A CRM dashboard for engineering teams"}
            description={true}
          />
          <p className="text-center md:mb-3 md:text-lg text-sm md:w-4/6 mx-auto text-gray-400 leading-7">
            Boost engineering team’s productivity with Ocean CRM dashboard that
            streamlines project management, collaboration, and data-driven
            decision-making.
          </p>
          <div className="flex flex-row justify-center gap-3 my-4">
            <Buttons buttonStyle={"btn-primary"} title="get started">
              <MoveRight className="w-4" />
            </Buttons>
            <Buttons buttonStyle={"btn-outline"} title="get started" />
          </div>
          <Company />
        </div>
      </div>
    </>
  );
};

export default FirstSection;
