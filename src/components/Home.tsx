import React from "react";
import DesignationCard from "./DesignationCard";
import HeroIntro from "./HeroIntro";

const Home: React.FC = () => {
 
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2    h-screen">
        {/* Left Content: Text */}
        <HeroIntro />
        {/* Right Content: Image with Designation */}
        <DesignationCard />
      </div>
    </div>
  );
};

export default Home;
