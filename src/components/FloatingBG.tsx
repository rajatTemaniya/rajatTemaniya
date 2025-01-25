import React from "react";
import { motion } from "framer-motion";

interface FloatingBackgroundProps {
  children: React.ReactNode;
}

const FloatingBackground: React.FC<FloatingBackgroundProps> = ({
  children,
}) => {
  // overflow-hidden
  return (
    <div className=" overflow-hidden top-0 left-0 w-full h-full bg-gradient-to-r from-customBlue-light via-customBlue to-customBlue-dark animate-gradientBackground">
      {/* Floating Elements */}
      <motion.div
        className="absolute w-8 h-8 bg-blue-300 rounded-full opacity-50"
        animate={{
          x: ["0%", "-30%", "30%", "0%"],
          y: ["0%", "40%", "-40%", "0%"],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-12 h-12 bg-green-400 rounded-full opacity-30"
        animate={{
          x: ["0%", "70%", "-70%", "0%"],
          y: ["0%", "-60%", "60%", "0%"],
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
      />
      {/* Foreground Content Entire App*/}
      <div className="z-10">{children}</div>
    </div>
  );
};

export default FloatingBackground;
