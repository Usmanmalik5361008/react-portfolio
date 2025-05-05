import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import GitHubIcon from "../../svgs/github";

const lerp = (start, end, factor) => {
  return start * (1 - factor) + end * factor;
};

const HeroSection = () => {
  const { scroll } = useLocomotiveScroll();
  const targetScroll = React.useRef(0);
  const currentScroll = useMotionValue(0);
  const [showSocials, setShowSocials] = useState(false);

  // Create a spring-animated scale that starts at 0
  // This will handle both initial animation and scroll-based scaling
  // Lower stiffness and damping for a slower, smoother animation
  const springScale = useSpring(0, {
    stiffness: 45, // Reduced from 80 for slower animation
    damping: 20, // Increased from 15 for more stability
  });

  // Set up initial animation with proper delay
  useEffect(() => {
    // Wait for the same delay as the opacity animation (1.8s)
    const timer = setTimeout(() => {
      // Start the initial scale animation from 0 to 1
      springScale.set(1);

      // Show social icons after the initial animation plus a short delay
      setTimeout(() => {
        setShowSocials(true);
      }, 800); // Additional delay after initial animation
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // Set up scroll tracking
  useEffect(() => {
    if (!scroll) return;

    const onScroll = (args) => {
      targetScroll.current = args.scroll.y;
    };

    scroll.on("scroll", onScroll);

    return () => {
      scroll.off("scroll", onScroll);
    };
  }, [scroll]);

  // Create a transform that adds scroll-based scaling on top of the initial scale
  // Lowered from 800 to 1000 for slower scroll effect
  const scrollScale = useTransform(
    currentScroll,
    [0, 1000],
    [0, 0.3] // We add 0 to 0.3 to the base scale of 1
  );

  // Track whether initial animation has started
  const animationStarted = React.useRef(false);

  // Combine animations smoothly on each frame
  useAnimationFrame(() => {
    // Update current scroll with smooth lerping
    const latest = currentScroll.get();
    // Reduced lerp factor for smoother transition
    const next = lerp(latest, targetScroll.current, 0.05);
    currentScroll.set(next);

    // Get base scale - will animate from 0 to 1 initially
    const baseScale = springScale.get();

    // Track when animation starts (when scale is no longer 0)
    if (baseScale > 0) {
      animationStarted.current = true;
    }

    // Only apply scroll effects if the initial animation has started
    // AND is near completion (0.95 or higher) - increased threshold for smoother transition
    if (animationStarted.current && baseScale >= 0.95) {
      // Calculate how much of the scroll effect to apply based on base completion
      const scrollProgress = Math.min((baseScale - 0.95) * 20, 1); // 0 to 1
      const scrollEffect = scrollScale.get() * scrollProgress;

      // Set final scale with smooth transition between animations
      springScale.set(1 + scrollEffect);
    }
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: ({ stagger, delay }) => ({
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.2 + delay,
      },
    }),
  };

  const letterVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15, stiffness: 70 },
    },
  };

  const subtitleLetterVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2, // Increased from 0.8 for slower animation
        delay: 1.8,
      },
    },
  };

  // Social icon animations
  const socialsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
      },
    },
  };

  const nameText = "Usman Malik";
  const titleText = "Full Stack Developer";

  return (
    <section className="bg-primaryDark min-h-screen overflow-hidden relative">
      <motion.div
        className="flex justify-center w-full absolute top-[10rem] sm:top-[5rem]"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        style={{ scale: springScale }}
        id="top"
      >
        {/* Responsive sizing for the oval background */}
        <div className="w-[80%] max-w-[28rem] h-[55vh] sm:h-[38rem] rounded-t-[99999rem] rounded-b-[99999rem] bg-[#00000080] flex items-center justify-center overflow-hidden">
          <img
            src="/images/main-profile-img.png"
            alt="Usman Malik"
            className="w-full h-auto transform translate-y-[10vh] sm:translate-y-[15rem] translate-x-[5%] sm:translate-x-8"
          />
        </div>
      </motion.div>

      {/* Social icons positioned on the right */}
      <motion.div
        className="absolute right-4 sm:right-8 md:right-12 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block"
        variants={socialsContainerVariants}
        initial="hidden"
        animate={showSocials ? "visible" : "hidden"}
      >
        <div className="flex flex-col space-y-6">
          <motion.a
            href="https://www.linkedin.com/in/usmanindev"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
          </motion.a>

          <motion.a
            href="https://github.com/Usmanmalik5361008"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon size={18} />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=100042025066815"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={18} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/usmanmalik9456/#"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={18} />
          </motion.a>
        </div>
      </motion.div>

      {/* Mobile social icons - horizontal at the bottom */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 mx-auto flex justify-center sm:hidden"
        variants={socialsContainerVariants}
        initial="hidden"
        animate={showSocials ? "visible" : "hidden"}
      >
        <div className="flex space-x-6">
          <motion.a
            href="https://www.linkedin.com/in/usmanindev"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={18} />
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=100042025066815"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Facebook size={18} />
          </motion.a>

          <motion.a
            href="https://github.com/Usmanmalik5361008"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <GitHubIcon size={18} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/usmanmalik9456/#"
            className="text-white hover:text-brand transition-colors duration-300 flex items-center justify-center w-10 h-10 bg-black bg-opacity-30 backdrop-blur-sm rounded-full"
            variants={socialIconVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram size={18} />
          </motion.a>
        </div>
      </motion.div>

      <div
        data-scroll
        data-scroll-speed="5"
        data-scroll-direction="vertical"
        className="relative flex flex-col mt-[8rem] sm:mt-[12rem] items-center justify-center px-4 sm:px-0"
      >
        <motion.div
          className="overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={{ stagger: 0.08, delay: 0 }}
        >
          <div className="uppercase font-bold text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] leading-none flex flex-wrap justify-center text-brand">
            {nameText.split("").map((letter, index) => (
              <motion.span
                key={`name-${index}`}
                variants={letterVariants}
                className={letter === " " ? "mr-2 sm:mr-4" : ""}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden mt-2 sm:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom={{ stagger: 0.03, delay: 1 }}
        >
          <div className="uppercase text-[1.2rem] sm:text-[1.5rem] md:text-[2.3rem] font-extralight flex flex-wrap justify-center text-[#F0F0F0]">
            {titleText.split("").map((letter, index) => (
              <motion.span
                key={`title-${index}`}
                variants={subtitleLetterVariants}
                className={letter === " " ? "mr-1 sm:mr-2" : ""}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
