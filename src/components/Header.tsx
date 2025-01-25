import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MyModal from "./molecules/MyModal";
import RectAngleCard from "./atoms/RectAngleCard";
const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About");

  const handleModalNow = () => {
    console.log("handleModalNow");
    setIsModalOpen(!isModalOpen);
  };

  const changeActiveTab = (label:string) => {
    console.log("ActiveTab:", label)
      setActiveTab(label)
  }

  return (
    <header className="w-full fixed bottom-0  bg-transparent shadow-md z-50">
      <nav className="px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex justify-center items-center h-16 bg-customBlue-light opacity-40 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tabs */}
          <ul className="flex space-x-2 divide-x divide-gray-200">
            <Tab label="About" activeTab={activeTab} onClick={ () => changeActiveTab("About")} path="/" />
            <Tab label="Experience" activeTab={activeTab} onClick={ () => changeActiveTab("Experience")} path="/experience" />
            <Tab
              label="Contact Me"
              externalLink="true"
              onClick={handleModalNow}
              path=""
            />
          </ul>
        </motion.div>
      </nav>
      {isModalOpen && (
        <MyModal handleClose={handleModalNow}>
          <div className="flex space-x-2 divide-x divide-gray-200">
            <RectAngleCard customeClass="rounded-lg items-center p-2 m-2  h-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/rajat-temaniya-3b9524112/"
                className="relative group text-white font-semibold text-lg hover:text-blue-500 transition-colors duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-blue-300 rounded-full blur-md opacity-0 group-hover:opacity-50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <span className="relative">LinkedIn</span>
              </a>
            </RectAngleCard>
            <RectAngleCard customeClass="rounded-lg items-center p-2 m-2  h-auto">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/918889338600?text=Hi%20there!"
                className="relative group text-white font-semibold text-lg hover:text-blue-500 transition-colors duration-300"
              >
                <motion.span
                  className="absolute inset-0 bg-blue-300 rounded-full blur-md opacity-0 group-hover:opacity-50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <span className="relative">WhatsApp</span>
              </a>
            </RectAngleCard>
          </div>
        </MyModal>
      )}
    </header>
  );
};

interface TabProps {
  label: string;
  path: string;
  externalLink?: string;
  activeTab?: string;
  onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ label, path, externalLink,activeTab, onClick }) => {
  return (
    <motion.li
      className="px-4"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {externalLink ? (
        <button
          onClick={onClick}
          className="relative group text-white font-semibold text-lg hover:text-blue-500 transition-colors duration-300"
        >
          <motion.span
            className="absolute inset-0 bg-blue-300 rounded-full blur-md opacity-0 group-hover:opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <span className="relative">{label}</span>
        </button>
      ) : (
        <Link
          to={path}
          onClick={onClick}
          className={`relative group text-white font-semibold text-lg hover:text-blue-500  transition-colors duration-300 ${activeTab == label? 'text-blue-500' : ''}`}
        >
          <motion.span
            className="absolute inset-0 bg-blue-300 rounded-full blur-md opacity-0 group-hover:opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
          <span className="relative">{label}</span>
        </Link>
      )}
    </motion.li>
  );
};

export default Header;
