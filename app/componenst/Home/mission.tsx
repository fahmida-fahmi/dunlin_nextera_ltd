'use client';
import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import missionAnimation from "@/public/animation/mission.json"; // Your Lottie animation

export default function MissionSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-6/7 mx-auto  sm:px-8 md:px-12 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Mission Text Block */}
        <div className="border border-white/20 p-6 sm:p-20 md:p-16 rounded-[30px] md:rounded-[50px] shadow-lg bg-white/70 backdrop-blur-md">
          <Typography variant="h4" fontWeight="bold" mb={2} color="success.main">
            Our Mission
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            At Dunlin Ltd., our mission is to empower individuals and transform communities by fostering innovation, integrity, and sustainable practices across diverse industries. We are dedicated to creating a better world through socially responsible business endeavors.
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            We aim to drive positive change by aligning our goals with societal values — creating impact that extends far beyond profit margins.
          </Typography>
        </div>

        {/* Lottie Animation */}
        <div className="flex items-center justify-center">
          <Lottie animationData={missionAnimation} loop autoPlay className="" />
        </div>
      </div>
    </motion.div>
  );
}
