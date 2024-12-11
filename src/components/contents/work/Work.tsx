import { memo } from "react";
import { Section } from "@/type";
import PcCarousel from "./carousel/PcCarousel";
import MobileCarousel from "./carousel/MobileCarousel";
import { useMediaQuery, mediaQuery } from "@/hooks/useMediaQuery";

const Work = () => {
  const id: Section = "works";

  return (
    <div id={id} className="w-full h-screen min-h-section">
      <div className="w-full h-2/12 select-none flex flex-col justify-center items-center">
        <div className="text-white md:text-8xl text-6xl">Works</div>
        <div className="text-slate-400 mt-2 sm:text-xl text-lg text-center">
          過去に作成したサービス一覧
        </div>
      </div>

      {/* <div className="select-none flex justify-center items-center">
        <div className="w-11/12 h-1/12 text-slate-400 sm:text-xl text-lg text-center">
          過去の案件で作成したアプリです
        </div>
      </div> */}

      <div className="h-9/12 py-5">
        {useMediaQuery(mediaQuery.md) ? <MobileCarousel /> : <PcCarousel />}
      </div>
    </div>
  );
};
export default memo(Work);

// import { memo } from "react";
// import { Section } from "@/type";
// import PcCarousel from "./carousel/PcCarousel";
// import MobileCarousel from "./carousel/MobileCarousel";
// import { useMediaQuery, mediaQuery } from "@/hooks/useMediaQuery";

// const Work = () => {
//   const id: Section = "works";

//   return (
//     <div id={id} className="w-full h-screen min-h-section">
//       <div className="w-full h-2/12 select-none flex justify-center items-center">
//         <div className="text-white md:text-8xl text-6xl">Works</div>
//       </div>

//       <div className="select-none flex justify-center items-center">
//         <div className="w-11/12 h-1/12 text-slate-400 sm:text-xl text-lg text-center">
//           過去の案件で作成したアプリです
//         </div>
//       </div>

//       <div className="h-9/12 py-5">
//         {useMediaQuery(mediaQuery.md) ? <MobileCarousel /> : <PcCarousel />}
//       </div>
//     </div>
//   );
// };
// export default memo(Work);
