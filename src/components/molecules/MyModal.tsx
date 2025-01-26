import React from "react";
import { motion } from "framer-motion";
import BackDropBG from "../atoms/BackDropBG";

interface propsType {
  children: React.ReactNode;
  handleClose: () => void;
}

const dropInAnimation = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const MyModal: React.FC<propsType> = ({ children, handleClose }) => {
  return (
    <BackDropBG onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropInAnimation}
        initial="hidden"
        animate="visible"
       
        exit="exit"
      >
        {children}

      </motion.div>
    </BackDropBG>
  );
};

export default MyModal;
