import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ isOpen, onClose, project }) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save the current overflow value
      const originalOverflow = document.body.style.overflow;
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = "hidden";

      // Restore original overflow on cleanup
      return () => {
        document.body.style.overflow = originalOverflow || "";
      };
    }
  }, [isOpen]);

  if (!project) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with fade animation */}
          <motion.div
            className="fixed inset-0 bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={onClose}
          />

          {/* Fixed positioning for mobile responsiveness */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:p-0">
            {/* Modal with scale and fade animation */}
            <motion.div
              className="w-full max-w-3xl mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1], // Custom bezier curve for smooth animation
                opacity: { duration: 0.25 },
              }}
            >
              <div className="bg-[#121212] rounded-xl shadow-2xl flex flex-col max-h-[calc(100vh-2rem)] overflow-auto no-scrollbar">
                {/* Close button with hover animation */}
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-60 text-white"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
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
                </motion.button>

                {/* Content container */}
                <div className="flex flex-col w-full h-full">
                  {/* Top - Image with controlled dimensions */}
                  <div className="w-full bg-[#0A0A0A] flex items-center justify-center">
                    {project.thumbnail && (
                      <div className="w-full max-w-4xl mx-auto">
                        <div className="relative w-full h-0 pb-[56.25%]">
                          <img
                            src={`/images/colored-thumbnails/${project.thumbnail}`}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom - Content area */}
                  <div className="w-full mx-auto p-5 md:p-8">
                    <div className="space-y-6 md:space-y-8">
                      {/* Title with subtle animation */}
                      <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-sans"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h2>

                      {/* Description with subtle animation */}
                      <motion.p
                        className="text-gray-300 font-opensans text-base md:text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.map((tech, index) => (
                            <motion.span
                              key={index}
                              className="px-3 py-1.5 bg-[#1E1E1E] text-gray-200 rounded-lg text-sm"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + index * 0.05 }}
                              whileHover={{
                                backgroundColor: "#2A2A2A",
                                scale: 1.03,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* View project button with hover animation */}
                      {project.href && (
                        <motion.div
                          className="pt-4 md:pt-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <motion.a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-white text-sm text-black rounded-lg font-medium"
                            whileHover={{
                              scale: 1.03,
                              backgroundColor: "#f0f0f0",
                              boxShadow:
                                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                          >
                            View Project
                            <svg
                              className="w-4 h-4 ml-2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </motion.a>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  // Use portal to render the modal in the body
  return ReactDOM.createPortal(modalContent, document.body);
};

export default ProjectModal;
