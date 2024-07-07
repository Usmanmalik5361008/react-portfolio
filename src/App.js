import "./App.css";
import { Header } from "./components";
import { HeroSection, DescriptionSection } from "./sections";
import { initScroll } from "./locomotive";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const scroll = initScroll();
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div className="bg-custom-radial" id="data-scroll-container">
      <Header />
      <HeroSection />
      <DescriptionSection />
    </div>
  );
}

export default App;
