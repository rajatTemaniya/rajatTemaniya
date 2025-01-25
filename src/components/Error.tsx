import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
  const err = useRouteError();

  // Safely infer the error type
  const errorMessage = isRouteErrorResponse(err)
    ? err.data || "Something went wrong"
    : "Unknown error";

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen text-white"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="text-center p-6 rounded-lg shadow-lg bg-white/10 backdrop-blur-sm">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Oops!
        </motion.h1>
        <motion.h2
          className="text-lg text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {errorMessage}
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Error;
