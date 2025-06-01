import React from "react";
import Card from "./Card";
import image1 from "../../../public/features/bar-chart.png";
import image2 from "../../../public/features/calendar.png";
import image3 from "../../../public/features/protect.png";
import Buttons from "../layout/Buttons";
import Heading from "../layout/Heading";
import { motion } from "framer-motion";

const Powerful = () => {
  return (
    <>
      <motion.div
         initial={{y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      id="features"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 scroll-mt-24">
        <div 
   
        className="text-center lg:text-left">
          <Heading
            title={"Powerful features to help you manage all your leads."}
            description={false}
          />
          <p className="text-gray-400 leading-7 text-lg">
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </p>
          <Buttons buttonStyle={"btn-primary"} title={"Get started"} />
        </div>

        <div
      
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 items-center">
          <Card
            title="Reporting dashboard"
            description="Generate insightful reports and analytics with our reporting dashboard feature, empowering data-driven decision-making for engineering teams."
            image={image1}
          />
          <Card
            title="Meeting scheduling"
            description="Effortlessly schedule meetings, coordinate availability, and send automated reminders with the meeting scheduling feature, ensuring seamless collaboration."
            image={image2}
          />
          <Card
            title="100% secured"
            description="Enhance data protection with robust security features, ensuring confidentiality, integrity, and compliance for your engineering team's CRM dashboard."
            image={image3}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Powerful;
