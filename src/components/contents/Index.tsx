import { memo } from "react"
import Home from "./Home";
import About from "./about/About";
import Skill from "./skill/Skill";
import Work from "./work/Work";
import Contact from "./contact/contact";

const Index = () => {
  return (
    <div className="w-full">
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>

  )
}

export default memo(Index);