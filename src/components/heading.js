import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const Heading = ({ text = "", invert = false }) => {
  // Animation variants for the border
  const borderVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Animation variants for the text
  const textVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="relative mx-auto max-w-fit text-center py-6 overflow-hidden">
      {/* Top border */}
      <motion.div
        className={classNames(
          "absolute top-0 left-0 h-[1px]",
          invert ? "bg-white" : "bg-[#E6C9A8]"
        )}
        variants={borderVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
      />

      {/* Heading text */}
      <motion.h2
        className={classNames(
          "text-2xl md:text-3xl tracking-[8px] uppercase font-light px-8",
          invert ? "text-white" : "text-[#E6C9A8]"
        )}
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
      >
        {text}
      </motion.h2>

      {/* Bottom border */}
      <motion.div
        className={classNames(
          "absolute bottom-0 left-0 h-[1px]",
          invert ? "bg-white" : "bg-[#E6C9A8]"
        )}
        variants={borderVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
      />
    </div>
  );
};

export default Heading;
