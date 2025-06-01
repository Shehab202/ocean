import React from "react";
import Heading from "../layout/Heading";
import Buttons from "../layout/Buttons";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
const Service = () => {
  return (
    <>
      <motion.div
       className="w-5/6 mx-auto lg:mt-36 md:mt-32 mt-20 bg-slate-800/50 rounded-lg md:py-8 md:px-15 py-3 px-5 "
       initial={{ y: 100, opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.9, ease: "easeOut" }}
       viewport={{ once: true }}
       >
        <div
          className="grid grid-cols-1 md:grid-cols-3 items-center justify-center
        
        "
        >
          <div className="col-span-2 z-20 text-center md:text-left">
            <Heading title="Let’s try our service now!" description={false} />
            <p className="para">
              Experience the power of Ocean CRM dashboard for engineering teams.
              Boost productivity and streamline collaboration. Get started
              today!
            </p>
          </div>
          <div className="flex justify-center md-justify-center">
            <Buttons buttonStyle={"btn-primary"} title="get started">
              <MoveRight className="w-4" />
            </Buttons>{" "}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Service;
