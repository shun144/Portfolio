import { memo } from "react";
import Home from "./Home";
import About from "./about/About";
import Skill from "./skill/Skill";
import Work from "./work/Work";

// import Stagger from "./Stagger";
// import Contact from "./contact/Contact";

const Contents = () => {
  return (
    <div className="w-full relative z-0">
      {/* <Stagger /> */}
      <Home />
      <About />
      <Skill />
      <Work />
      {/* <Contact /> */}
    </div>
  );
};

export default memo(Contents);
