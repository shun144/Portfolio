import { memo } from "react";
import Graph from "./Graph";
import { FrontEndSkills, BackEndSkills } from "./skilList";
import { Section } from "@/type";

const Skill = () => {
  const id: Section = "skills";

  return (
    <div id={id} className="w-full h-screen min-h-section">
      <div className="text-white md:text-8xl text-6xl select-none flex justify-center items-center pt-20 xl:pb-16 pb-10">
        My Skill
      </div>

      <div className="w-full flex xl:flex-row flex-col justify-center items-center 2xl:gap-x-14 md:gap-x-10 md:gap-y-12 gap-y-10">
        <Graph title="frontend" skillMap={FrontEndSkills} />
        <Graph title="backend" skillMap={BackEndSkills} />
      </div>
    </div>
  );
};

export default memo(Skill);
