// components/Hero.tsx
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.section
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b  from-gray-800 to-black"
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
    >
      <h2 className="text-5xl font-bold text-white">Welcome to GMUN</h2>
      <p className="mt-4 text-xl text-gray-300">
        Connecting youth to global diplomacy and debate
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:cursor-pointer">
        Join Now
      </button>
    </motion.section>
  );
}
