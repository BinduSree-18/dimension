import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#0b0b22] text-white overflow-hidden flex flex-col items-center justify-center px-4 text-center">
      
      {/* Animated Background Lights */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 opacity-20 blur-3xl rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 0.25 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        style={{ top: "-30%", left: "-20%" }}
      />

      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-purple-400 to-pink-500 opacity-30 blur-2xl rounded-full"
        initial={{ y: 50 }}
        animate={{ y: -30 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        style={{ bottom: "-20%", right: "-10%" }}
      />

      {/* Fundraise Tag */}
      <motion.div
        className="bg-white/10 px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-md border border-white/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Announcing our <span className="text-pink-400 font-semibold">$1.4M Fundraise</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Dimension is the new <br />
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
          standard for collaboration
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Chat, code, cloud, deployments, and more.
      </motion.p>

      {/* Email Input + Animated Button */}
      <motion.div
        className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <input
          type="email"
          placeholder="Email address..."
          className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none w-72"
        />

        {/* Button with Animated Border */}
        <motion.div className="relative flex items-center justify-center">
          {/* Animated border layers */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-xl border border-pink-400"
              style={{
                width: "180px",
                height: "60px",
              }}
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: 0, scale: 1.8 }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Actual button */}
          <button
            className="relative z-10 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-medium rounded-xl shadow-xl hover:opacity-90 transition"
            onClick={() => console.log("Join waitlist clicked")}
          >
            Join Waitlist
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
