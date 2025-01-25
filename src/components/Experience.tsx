import { useState } from "react";
import data from "../fuel/apiData.json";
import { motion } from "framer-motion";
import RectAngleCard from "./atoms/RectAngleCard";

const Experience = () => {

  const [apiData, setApiData] = useState(data)

  // Define the animation variants
  const variants = {
    open: { height: "auto", opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  const changeIsActive = (item: any) => {
    console.log("ITEM", item);
    let updateItem = apiData.map((obj) => {
      if (obj.id == item.id) {
        obj.isActive = !item.isActive;
      }
      return obj;
    })

    console.log("Updated:", updateItem)
    setApiData(updateItem)
  };

  return (
    <div className="overflow-y-auto h-screen">
      <motion.div
        className="grid grid-cols-1  gap-4 py-4 px-8 sm:mx-32  sm:px-32 overflow-y-auto pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        {apiData.map((item) => {
          return (
            <div className="h-auto w-auto">
            <RectAngleCard
              key={item.id}
              customeClass="rounded-lg items-center p-1"
            >
              {/* Title */}
              <div className="flex items-center justify-between w-full px-4 shadow-gray-50 shadow-sm">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-white font-bold"
                >
                  <h2>{item.companyName}</h2>
                </motion.div>
                <motion.button
                 whileHover={{scale: 1.1}}
                 whileTap={{scale: 0.9}}
                  onClick={() => changeIsActive(item)}
                  className="px-2 py-2 my-2 bg-blue-500 text-white rounded font-mono text-xs"
                >
                  {item.isActive ? "Hide" : "Show"}
                </motion.button>
              </div>
              {/* Body */}
              <motion.div
                className="overflow-hidden rounded flex justify-between"
                initial="closed"
                animate={item.isActive ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* Left Details */}
                <div className="px-4 p-2">
                  <h4 className="text-green-500 font-semibold">{item.designation}</h4>
                  <p className="text-white font-thin">{item.startDate} - {item.endDate}</p>
                  <p className="text-white font-thin"> <span className="text-green-500">Number of projects:</span> {item.projects.length}</p>
                </div>
                {/* Right Details Bullet points */}
                <ul className="list-disc list-inside px-4 p-2">
                  {item.bulletPoints.map((point, index) => {
                    return (
                      <motion.li
                        key={index}
                        className="font-thin text-teal-50  leading-relaxed"
                      >
                        {point}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </RectAngleCard>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experience;
