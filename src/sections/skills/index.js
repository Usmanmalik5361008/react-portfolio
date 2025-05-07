import React from "react";
import { motion } from "framer-motion";
import { Heading } from "../../components";
import { skills } from "./data";
import "./skills.css";

const Skills = () => {
  // Split skills into two rows
  const firstHalf = skills.slice(0, Math.ceil(skills.length / 2));
  const secondHalf = skills.slice(Math.ceil(skills.length / 2));

  // Add extra items to ensure rows appear full-width
  const extendFirstRow = [...firstHalf, ...firstHalf, ...firstHalf];
  const extendSecondRow = [...secondHalf, ...secondHalf, ...secondHalf];

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 14,
      },
    },
  };

  return (
    <section className="relative mt-36 mb-28 overflow-hidden">
      <div className="container mx-auto px-4 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
        >
          <Heading text="Skills" />
        </motion.div>
      </div>

      {/* First row - tilted in same direction, moves left on scroll up */}
      <div
        className="relative w-full pb-16 mb-4  transform -rotate-6 overflow-hidden"
        style={{ transformOrigin: "center" }}
      >
        <div
          className="flex items-center space-x-20 w-max"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="2"
        >
          {extendFirstRow.map((skill, index) => (
            <motion.div
              className="flex flex-col items-center flex-shrink-0"
              key={`row1-${skill.label}-${index}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center h-[100px] w-[100px] mb-5">
                <img
                  src={`/images/skills/${skill.icon}`}
                  alt={skill.label}
                  className="w-auto h-[150px] object-contain"
                />
              </div>

              <span className="text-[15px] tracking-[3px] font-extralight uppercase text-white whitespace-nowrap">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Second row - tilted in same direction, moves right on scroll up */}
      <div
        className="relative w-full pb-16  transform -rotate-6 overflow-hidden"
        style={{ transformOrigin: "center" }}
      >
        <div
          className="flex items-center space-x-20 w-max ml-[-300px]"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-2"
        >
          {extendSecondRow.map((skill, index) => (
            <motion.div
              className="flex flex-col items-center flex-shrink-0"
              key={`row2-${skill.label}-${index}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center h-[100px] w-[100px] mb-5">
                <img
                  src={`/images/skills/${skill.icon}`}
                  alt={skill.label}
                  className="w-auto h-[150px] object-contain"
                />
              </div>

              <span className="text-[15px] tracking-[3px] font-extralight uppercase text-white whitespace-nowrap">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add this to skills.css */}
      <style jsx>{`
        /* Optional: Add these styles to your skills.css file for smoother animations */
        .locomotive-scroll [data-scroll-direction] {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Skills;
