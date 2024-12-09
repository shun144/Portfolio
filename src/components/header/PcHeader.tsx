import { memo } from "react";
import { SectionMap } from "@/constants";
import { Section } from "@/type";
import { autoScroll } from "@/utils/autoScroll";

const PcHeader = () => {
  const handleScroll = (id: Section) => {
    autoScroll(id);
  };

  return (
    <div className="w-full lg:h-24 h-12 flex justify-end items-center bg-slate-950 fixed z-50">
      <div className="flex justify-center items-center  sm:gap-x-6 sm:mr-10 lg:gap-x-10 lg:mr-20">
        {Object.entries(SectionMap).map(([key, value]) => (
          <div
            key={key}
            className="text-white lg:text-2xl text-lg select-none cursor-pointer group"
            onClick={() => handleScroll(key as Section)}
          >
            {value}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-emerald-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(PcHeader);
