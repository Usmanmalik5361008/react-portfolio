import React, { useState } from "react";
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
    <section className="mt-28 bg-[#1A1A1A] py-20">
      <Heading text="Portfolio" invert />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 container mx-auto">
        {projects.map((project, index) => (
          <PortfolioCard
            {...project}
            key={index}
            onReadMore={() => handleReadMore(project)}
          />
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
