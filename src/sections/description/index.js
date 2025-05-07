import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Description = () => {
  const { scroll } = useLocomotiveScroll();
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const headlineAnimationComplete = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    let observer;

    const createObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;

          if (entry.isIntersecting) {
            controls.start("visible");
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.15,
        }
      );

      observer.observe(sectionRef.current);
    };

    const timer = setTimeout(() => {
      createObserver();
    }, 300);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [controls]);

  // Individual line variants
  const lineVariants = {
    hidden: {
      y: 70,
      opacity: 0,
      skewY: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Last headline variant - with callback to trigger paragraphs
  const lastLineVariants = {
    hidden: {
      y: 70,
      opacity: 0,
      skewY: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
        onComplete: () => {
          // Mark headline animation as complete
          headlineAnimationComplete.current = true;
          // Trigger paragraph animations
          controls.start("paragraphsVisible");
        },
      },
    },
  };

  // Headline container variants
  const headlineContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  // Highlight words variants
  const highlightVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.1,
      },
    },
  };

  // Paragraph section variants
  const paragraphSectionVariants = {
    hidden: { opacity: 0 },
    paragraphsVisible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Paragraph text variants
  const paragraphVariants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    paragraphsVisible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="description-section"
      className="md:pt-40 flex items-center"
      data-scroll
    >
      <div className="container mx-auto px-8 md:px-16">
        <div className="mx-auto max-w-5xl" data-scroll data-scroll-speed="0.5">
          {/* Headline section */}
          <motion.div
            className="mb-16 md:mb-24"
            variants={headlineContainerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="overflow-hidden mb-4">
              <motion.p
                className="text-3xl md:text-5xl font-light text-gray-200"
                variants={lineVariants}
              >
                For me, code represents
              </motion.p>
            </div>

            <div className="overflow-hidden mb-4">
              <motion.p
                className="text-3xl md:text-5xl font-light text-gray-200"
                variants={lineVariants}
              >
                the art of transforming{" "}
                <motion.span
                  className="text-brand italic"
                  variants={highlightVariants}
                >
                  ideas
                </motion.span>
              </motion.p>
            </div>

            <div className="overflow-hidden mb-4">
              <motion.p
                className="text-3xl md:text-5xl font-light text-gray-200"
                variants={lastLineVariants}
              >
                into{" "}
                <motion.span
                  className="text-brand italic"
                  variants={highlightVariants}
                >
                  functional experiences
                </motion.span>
              </motion.p>
            </div>
          </motion.div>

          {/* Paragraph section - will animate after headlines complete */}
          <motion.div
            variants={paragraphSectionVariants}
            initial="hidden"
            animate={controls}
            className="paragraph-section"
          >
            <motion.div
              variants={paragraphVariants}
              className="overflow-hidden"
            >
              <div className="h-px w-16 bg-white opacity-50 mb-16 md:mb-24"></div>
            </motion.div>

            <div className="overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-6"
                variants={paragraphVariants}
              >
                With over 4 years of professional experience, I specialize in
                creating robust and elegant solutions for complex challenges.
              </motion.p>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                variants={paragraphVariants}
              >
                My work spans from pixel-perfect frontends to scalable backend
                architectures, always focused on delivering exceptional user
                experiences.
              </motion.p>
            </div>

            {/* <motion.div variants={paragraphVariants} className="mt-24">
              <a
                href="#work"
                className="text-brand uppercase tracking-widest text-sm flex items-center"
              >
                Explore my work
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Description;
