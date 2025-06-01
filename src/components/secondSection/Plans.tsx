"use client";

import React, { useState } from "react";
import CartOfPrice from "./CartOfPrice";
import Heading from "../layout/Heading";
import { motion } from "framer-motion";
const Plans = () => {
  const [activeTab, setActiveTab] = useState<string>("monthly");

  const items = [
    "5 products",
    "Up to 1,000 subscribers",
    "Basic analytics",
    "48-hour support response time",
  ];
  const items2 = [
    "25 products",
    "Up to 10,000 subscribers",
    "Advanced analytics",
    "Marketing automations",
    "Basic analytics",
    "48-hour support response time",
  ];
  const items3 = [
    "Unlimited products",
    "Unlimited subscribers",
    "Advanced analytics",
    "1-hour, dedicated support response time",
    "Marketing automations",
    "Custom reporting tools",
  ];
  const price = [
    {
      monthly: "$15/month",
      annually: "$199/year",
    },
    {
      monthly: "$28/month",
      annually: "$268/year",
    },
    {
      monthly: "$42/month",
      annually: "$459/year",
    },
  ];
  return (
    <>
      <motion.div className="w-5/6 mx-auto scroll-mt-24 md:py-5 relative 
      capitalize"
      initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        id="plans"
      >
        <Heading
          title="Find a plan to power your projects"
          description={true}
        />
        <div
          className="flex  items-center mb-8 justify-around text-lg font-bold
       p-2 mx-auto md:w-2/6 w-4/6
      text-white rounded-2xl bg-slate-900 shadow-2xl h-10"
        >
          {" "}
          <p
            onClick={() => setActiveTab("monthly")}
            className={`${
              activeTab === "monthly" ? "bg-sky-300" : ""
            } rounded-xl w-1/2 text-center cursor-pointer xl:text-xl text-base`}
          >
            monthly
          </p>
          <p
            className={`${
              activeTab === "annually" ? "bg-sky-300" : ""
            } rounded-xl w-1/2  text-center   cursor-pointer xl:text-xl text-base`}
            onClick={() => setActiveTab("annually")}
          >
            annually
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          <CartOfPrice
            price={price[0]}
            title="freelancer"
            items={items}
            activeTab={activeTab}
            description="A plan that scales with your rapidly growing business."
          />
          <CartOfPrice
            price={price[1]}
            title="Startup"
            items={items2}
            activeTab={activeTab}
            description="The essentials to provide your best work for your clients."
          />
          <CartOfPrice
            price={price[2]}
            title="enterprise"
            items={items3}
            activeTab={activeTab}
            description="Dedicated support and infrastructure for your company."
          />
        </div>
      </motion.div>
    </>
  );
};

export default Plans;
