import React from "react";
import { motion } from "framer-motion";

interface PropsType {
  children: React.ReactNode;
  customeClass: string;
}

const RectAngleCard: React.FC<PropsType> = ({ children, customeClass }) => {
  return (
    <motion.div
      className={`drop-shadow-[1px_1px_4px_rgba(255,255,255,0.8)]  
                 ${customeClass} bg-customBlue-light opacity-80 overflow-hidden`}
    >
      {children}
    </motion.div>
  );
};

export default RectAngleCard;
