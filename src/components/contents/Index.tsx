import { memo } from "react"
import Home from "./Home";
import About from "./about/About";
import Skill from "./skill/Skill";

const Index = () => {
  return (
    <div className="w-full">
      <Home />
      <About />
      <Skill />
    </div>

  )
}

export default memo(Index);