// src/locomotive.js
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const initScroll = () => {
  // Delay initialization slightly to ensure DOM is ready
  return new Promise((resolve) => {
    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        try {
          const container = document.getElementById("data-scroll-container");

          if (!container) {
            console.warn("Scroll container not found");
            resolve(null);
            return;
          }

          // Make sure all data-scroll-section elements are fully rendered
          // before initializing Locomotive Scroll
          const scroll = new LocomotiveScroll({
            el: container,
            smooth: true,
          });

          // Add resize handler
          window.addEventListener("resize", () => {
            if (scroll) {
              scroll.update();
            }
          });

          resolve(scroll);
        } catch (error) {
          console.error("Error initializing Locomotive Scroll:", error);
          resolve(null);
        }
      }, 100); // Small delay to ensure DOM is fully processed
    });

    // If DOMContentLoaded already fired, initialize immediately with delay
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setTimeout(() => {
        try {
          const container = document.getElementById("data-scroll-container");

          if (!container) {
            console.warn("Scroll container not found");
            resolve(null);
            return;
          }

          const scroll = new LocomotiveScroll({
            el: container,
            smooth: true,
          });

          window.addEventListener("resize", () => {
            if (scroll) {
              scroll.update();
            }
          });

          resolve(scroll);
        } catch (error) {
          console.error("Error initializing Locomotive Scroll:", error);
          resolve(null);
        }
      }, 100);
    }
  });
};
