"use client";
import React from "react";
import Navbar from "../FirstSection/Navbar";
import FirstSection from "../FirstSection/FirstSection";
import SecondSection from "../secondSection/SecondSection";
import Footer from "../footer/Footer";
import Customers from "../users/Customers";
import Service from "../services/Service";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen bg-slate-950 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <FirstSection />
        </motion.div>
        <SecondSection />
        <Customers />
        <Service />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
