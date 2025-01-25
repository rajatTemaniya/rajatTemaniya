import ServiceNowSVG from "../assets/service-now.png";
import NodeSVG from "../assets/nodejs-svg.svg";
import AzureSVG from "../assets/azure.svg";
import AndroidSVG from "../assets/android.svg";
import ReactSVG from "../assets/react.svg";
import { motion } from "framer-motion";


const HeroIntro = () => {
  const skillSet = [
    {
      id: 1,
      skillName: "React",
      icon: ReactSVG,
    },
    {
      id: 2,
      skillName: "Android",
      icon: AndroidSVG,
    },
    {
      id: 3,
      skillName: "MERN Stack",
      icon: NodeSVG,
    },
    {
      id: 4,
      skillName: "Azure",
      icon: AzureSVG,
    },
    {
      id: 5,
      skillName: "ServiceNow",
      icon: ServiceNowSVG,
    },
  ];
// sm:mt-0
  return (
    <>
      <motion.div
        className="p-4 flex justify-center items-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
        {/* Name Section */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 animate-glow">
          Hi, I'm
        </h1>
        <h2 className="mt-2 text-5xl sm:text-7xl font-extrabold text-white glow">
          Rajat Temaniya
        </h2>

        {/* Role Description */}
        <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed">
        With 7+ years of experience in IT, I specialize in leveraging cutting-edge technologies, including AI and emerging frameworks, to create innovative solutions. Passionate about building impactful projects, I’m always excited to connect and collaborate.
        </p>

        {/* Framework Icons */}
        <div className="mt-4 flex  items-center justify-start space-x-6 sm:space-x-8">
          {skillSet.map((skill) => {
            return (
              <img
                key={skill.id}
                src={skill.icon}
                alt="React"
                className="w-12 h-12 hover:scale-110 transition-transform"
              />
            );
          })}
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroIntro;
