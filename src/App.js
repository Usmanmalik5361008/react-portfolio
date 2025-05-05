import "./App.css";
import { Footer, Header } from "./components";
import { HeroSection, DescriptionSection, Skills, Portfolio } from "./sections";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const containerRef = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider
      options={options}
      containerRef={containerRef}
      watch={
        [
          // Watch for any changes to these dependencies to update scroll
        ]
      }
    >
      <div
        className="bg-primaryDark"
        data-scroll-container
        ref={containerRef}
      >
        {/* <Header /> */}
        <HeroSection />
        <DescriptionSection />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
