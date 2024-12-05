import { memo } from "react"
import Home from "./Home";
import About from "./about/About";
import Skill from "./skill/Skill";
import Work from "./work/Work";

const Index = () => {
  return (
    <div className="w-full">
      <Home />
      <About />
      <Skill />
      <Work />
    </div>

  )
}

export default memo(Index);