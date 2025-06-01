import React from "react";
import Heading from "../layout/Heading";
import UserCard from "./UserCard";
import user1 from "../../../public/users/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import user2 from "../../../public/users/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import user3 from "../../../public/users/user-3.webp";
import { motion } from "framer-motion";
const Users = () => {
  return (
    <>
      <motion.div className="w-5/6 mx-auto lg:mt-24  mt-20"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      >
        <Heading title="Meet our Customers" description={true} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
          <UserCard
            title=" team leader"
            description="CRM dashboard boosted our engineering team's productivity and efficiency. Highly recommended!"
            name="ahmed taha"
            image={user1}
          />
          <UserCard
            title="startup founder
"
            description="Simplified project management, improved communication, and empowered decision-making.



"
            name="omar fahed
"
            image={user2}
          />
          <UserCard
            title=" team member

"
            description="CRM dashboard boosted our engineering team's productivity and efficiency. Highly recommended!"
            name="Abdellah massoudi
"
            image={user3}
          />
        </div>
      </motion.div>
    </>
  );
};
/*******  eb9e93ee-3911-4398-9b62-e3198aff5f91  *******/

export default Users;
