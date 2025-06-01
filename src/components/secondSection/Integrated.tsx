import Image from "next/image";
import React from "react";
import image5 from "../../../public/features/messaing.svg";
import Heading from "../layout/Heading";
import { motion } from "framer-motion";
const Integrated = () => {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 text-center md:text-left
         lg:grid-cols-2 items-center gap-3 lg:gap-16 my-12
          lg:my-28"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image src={image5} alt="bg" className="m-auto" />
        <div className="text-center lg:text-left">
          <Heading title={"Integrated Messaging System"} description={false} />
          <p className="para">
            The integrated messaging system within the CRM dashboard for
            engineering teams allows for instant and seamless communication
            among team members. It eliminates the need for external messaging
            platforms, keeping all project-related conversations organized and
            easily accessible within the dashboard's interface.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Integrated;
