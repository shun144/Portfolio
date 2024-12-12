import { memo } from "react";
import Graph from "./Graph";
import { FrontEndSkills, BackEndSkills } from "./skilList";
import { Section } from "@/type";

const Skill = () => {
  const id: Section = "skills";

  return (
    <div id={id} className="w-full 2xl:min-h-screen">
      <div className="w-full flex justify-center items-center md:pb-12 pb-6">
        <div className=" text-white md:text-8xl text-6xl select-none">
          My Skill
        </div>
      </div>

      <div
        className="w-full flex xl:flex-row flex-col xl:justify-center justify-start items-center md:pb-12 pb-6
        2xl:gap-x-14 md:gap-x-10 md:gap-y-10 sm:gap-y-5 gap-y-4"
      >
        <Graph title="frontend" skillMap={FrontEndSkills} />
        <Graph title="backend" skillMap={BackEndSkills} />
      </div>
    </div>
  );
};

export default memo(Skill);
