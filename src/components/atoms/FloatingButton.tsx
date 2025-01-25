import React from "react";
import Draggable from "react-draggable";

const FloatingButton: React.FC = () => {
  return (
    <Draggable>
      <div className="fixed bottom-8 right-8 z-50">
        <button className="rounded-full px-6 py-3 text-lg font-semibold bg-white text-gray-800 border-2 border-white shadow-lg drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:shadow-xl hover:scale-105 transition-transform">
         {/* Make the button redirect to LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rajat-temaniya-3b9524112/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
        </button>
      </div>
    </Draggable>
  );
};

export default FloatingButton;
