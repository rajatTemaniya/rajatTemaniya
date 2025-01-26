import { motion } from "framer-motion";
import RectAngleCard from "./atoms/RectAngleCard";
import MyImage2 from "../assets/rajatTemaniya.jpg";

const DesignationCard = () => {
  const skillDesignation = [
    "MERN stack developer",
    "Front-End developer",
    "Mobile App developer",
    "Web App developer",
  ];
  return (
    <>
      {/* Right Content: Image */}
      <motion.div
        className="flex justify-center items-start sm:items-center"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Aura Effect */}
        <RectAngleCard customeClass='rounded-full justify-center items-center flex '>
          {/* Profile Image */}
          <motion.img
            src={MyImage2}
            alt="Profile"
            className="size-32 sm:w-56 sm:h-56 rounded-full border-4 border-white shadow-x"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Some bullet points Keep this right side  */}
          <motion.div>
            <ul className="list-disc list-inside px-6 sm:px-8">
              {skillDesignation.map((designation, index) => {
                return (
                  <motion.li
                    key={index}
                    className="text-lg sm:text-lg text-teal-100 md:text-base leading-relaxed"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {designation}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </RectAngleCard>
      </motion.div>
    </>
  );
};

export default DesignationCard;
