import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heading } from "../../components";
import { projects } from "./data";
import PortfolioCard from "./portfolioCard";
import ProjectModal from "./projectModal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation to complete
  };

  return (
    <section
      className="sm:mt-28  py-20"
      data-scroll
      id="work"
    >
      <div data-scroll data-scroll-speed="0.2">
        <Heading text="Portfolio" invert />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 container mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            data-scroll
            data-scroll-speed={0.05}
          >
            <PortfolioCard
              {...project}
              onReadMore={() => handleReadMore(project)}
            />
          </motion.div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Portfolio;
