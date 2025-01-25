import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Collapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the animation variants
  const variants = {
    open: { height: 'auto', opacity: 1 },
    closed: { height: 0, opacity: 0 },
  };

  return (
    <div className="max-w-md mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </button>

      <motion.div
        className="overflow-hidden bg-gray-200 mt-4 rounded"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="p-4">
          <p>
            This is the content that can be collapsed. The Framer Motion library
            is used to animate the transition between the open and closed states.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Collapsible;
