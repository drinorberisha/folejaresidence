import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
  display: "block",
  width: "2rem",
  height: "2rem",
  backgroundColor: "black",
  borderRadius: "50%",
};

const LoadingContainer = {
  width: "10rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: ["0%", "-100%", "0%"], // Bounce up then back to the original position
  },
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function ThreeDotsWave() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff", // White background to avoid black screen
        zIndex: 9999, // Ensure it's on top of other elements
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
