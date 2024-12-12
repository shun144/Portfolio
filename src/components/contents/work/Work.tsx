import { memo } from "react";
import { Section } from "@/type";
import PcCarousel from "./carousel/PcCarousel";
import MobileCarousel from "./carousel/MobileCarousel";
import { useMediaQuery, mediaQuery } from "@/hooks/useMediaQuery";

const Work = () => {
  const id: Section = "works";

  return (
    <div id={id} className="w-full pt-10 2xl:pb-20 pb-10 ">
      <div className="w-full select-none flex flex-col justify-center items-center pt-2 2xl:pb-16 lg:pb-10 pb-4">
        <div className="text-white md:text-8xl text-6xl">Works</div>
        <div className="text-slate-400 sm:text-xl text-lg text-center">
          過去に作成したサービス一覧
        </div>
      </div>

      <div className="w-full">
        {useMediaQuery(mediaQuery.lg) ? <PcCarousel /> : <MobileCarousel />}
      </div>
    </div>
  );
};
export default memo(Work);
