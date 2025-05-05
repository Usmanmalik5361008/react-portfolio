import React from "react";

const PortfolioCard = ({
  title,
  technologies,
  description,
  href,
  thumbnail,
  onReadMore,
}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group relative">
      <div className="relative h-64 w-full">
        {/* Thumbnail Image */}
        <img
          src={`/images/colored-thumbnails/${thumbnail}`}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* 
          Different overlay behavior based on screen size:
          - On mobile (sm:hidden): Always visible, positioned at bottom
          - On desktop (hidden sm:block): Standard hover behavior
        */}

        {/* Mobile overlay - always visible */}
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 sm:hidden">
          <div className="w-full p-4 text-white">
            <h3 className="text-lg font-bold mb-2">{title}</h3>

            <div className="flex flex-wrap gap-1 mb-3">
              {technologies &&
                technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              {technologies && technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-white bg-opacity-20 rounded-full backdrop-blur-sm">
                  +{technologies.length - 3}
                </span>
              )}
            </div>

            <button
              onClick={onReadMore}
              className="px-3 py-1.5 bg-white text-gray-900 rounded-full text-xs font-medium hover:bg-opacity-90 inline-flex items-center"
            >
              <span>Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop overlay - hover triggered */}
        <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hidden sm:block">
          {/* Content Container */}
          <div className="bottom-0 w-full p-4 text-white">
            {/* Project Title */}
            <h3 className="text-xl font-bold mb-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {title}
            </h3>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
              {technologies &&
                technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-white bg-opacity-20 rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            {/* Read More Button */}
            <button
              onClick={onReadMore}
              className="px-4 py-2 bg-white text-gray-900 rounded-full text-xs font-medium hover:bg-opacity-90 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 inline-flex items-center"
            >
              <span>Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
