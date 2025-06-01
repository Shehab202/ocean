import React from "react";
import Heading from "../layout/Heading";
import Image from "next/image";
import image1 from "../../../public/features/task-management.svg";
import { motion } from "framer-motion";
const Resource = () => {
  return (
    <>
        <motion.div className="grid text-center lg:text-left lg:grid-cols-2 pt-20 items-center lg:gap-20 gap-10 "
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }} 
        >
          <div>
            <Heading
              title="Resource Allocation and Task Management"
              description={false}
            />
            <p className="para">
              The task management system within the CRM dashboard for
              engineering teams enables efficient tracking and assignment of
              tasks. It provides a centralized platform to create, prioritize,
              and monitor tasks, ensuring streamlined project execution and
              improved collaboration among team members.
            </p>
          </div>
          <Image src={image1} alt="bg" className="text-center"/>
        </motion.div>
    </>
  );
};

export default Resource;
