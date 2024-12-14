import { memo } from "react";
import Slider from "./Slider";
import { Section } from "@/type";
import { motion } from "framer-motion";
import { DefaultScrollVariants } from "@/constants";

const About = () => {
  const id: Section = "aboutme";

  return (
    <div id={id} className="w-full h-screen min-h-section">
      <motion.div
        variants={DefaultScrollVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="text-white sm:text-8xl text-6xl select-none flex justify-center items-center pb-10">
          About Me
        </div>

        <div className="pb-10">
          <Slider />
        </div>
      </motion.div>
    </div>
  );
};

export default memo(About);
