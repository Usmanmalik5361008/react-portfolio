import React from "react";
import ReactDOM from "react-dom";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const modalContent = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed  inset-0 bg-black transition-opacity duration-300 z-50 ${
          isOpen ? "opacity-70" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-6xl mx-4 transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#1A1A1A] rounded-lg overflow-hidden shadow-2xl h-[90vh] flex flex-col md:flex-row">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left side - Image */}
          <div className="w-full md:w-1/2  md:h-auto">
            {project.image && (
              <img
                src={`/images/projects/${project.image}`}
                alt={project.title}
                className="w-full h-full"
              />
            )}
          </div>

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-sans">
              {project.title}
            </h2>

            <p className="text-light mb-8 font-opensans text-base md:text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Details Grid */}
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-sm text-secondaryText uppercase tracking-wider mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#2A2A2A] text-light rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* View project button */}
            {project.href && (
              <div className="mt-auto">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-black rounded hover:bg-light transition-colors font-medium"
                >
                  View Project
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  // Use portal to render the modal in the body
  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
