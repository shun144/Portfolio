import { memo } from "react";
import Graph from "./Graph";
import { FrontEndSkills, BackEndSkills } from "./skilList";
import { Section } from "@/type";

const Skill = () => {
  const id: Section = "skills";

  return (
    <div id={id} className="w-full min-h-section sm:pb-10 bg-slate-950">
      <div className="text-white md:text-8xl text-6xl select-none flex justify-center items-center pt-20 pb-10">
        My Skill
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-center items-center md:gap-x-10 md:gap-y-12 gap-y-10">
        <Graph title="frontend" skillMap={FrontEndSkills} />
        <Graph title="backend" skillMap={BackEndSkills} />
      </div>
    </div>
  );
};

export default memo(Skill);
