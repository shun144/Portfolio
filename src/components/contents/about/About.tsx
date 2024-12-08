import { memo } from "react";
import Slider from "./Slider";
import { Section } from "@/type";

const About = () => {
  const id: Section = "aboutme";

  return (
    <div id={id} className="w-full h-screen min-h-section bg-slate-950">
      <div className="text-white sm:text-8xl text-6xl select-none flex justify-center items-center pt-20 pb-10">
        About Me
      </div>

      <div className="pb-10">
        <Slider />
      </div>
    </div>
  );
};

export default memo(About);
