import { memo } from "react"
import Slider from "./Slider";

const About = () => {

  return (

    <div className="w-full h-screen min-h-[960px] bg-blue-300 ">

      <div className="text-white text-8xl select-none flex justify-center items-center pt-20 pb-10">
        About Me
      </div>

      <div className="pb-10">
        <Slider />
      </div>

    </div>
  )
}

export default memo(About);