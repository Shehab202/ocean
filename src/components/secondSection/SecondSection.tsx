import image4 from "../../../public/bg2.png";
import Buttons from "../layout/Buttons";
import Image from "next/image";
import Powerful from "./Powerful";
import Integrated from "./Integrated";
import Resource from "./Resource ";
import Plans from "./Plans";
const SecondSection = () => {
  return (
    <>
      <div className="relative ">
        <Image
          src={image4}
          alt="bg"
          className="w-full opacity-10 absolute top-0 left-0 -z-10"
        />
        <div className="w-5/6 mx-auto md:py-5 ">
          <Powerful />
          <Integrated />
          <Plans/>
          <Resource />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
