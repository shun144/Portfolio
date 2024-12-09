import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { workList } from "./workList";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Section } from "@/type";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Work = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const workIndex = wrap(0, workList.length, page);

  const paginate = (newDirection: number) => {
    setPage((prev) => {
      const prevPage = prev[0];
      return [prevPage + newDirection, newDirection];
    });
  };

  const id: Section = "works";

  return (
    <div id={id} className="w-full h-screen min-h-section bg-gray-200">
      <div className="w-full h-2/12 select-none flex justify-center items-center">
        <div className="text-white text-8xl">Works</div>
      </div>

      <div className="w-full h-1/12 select-none flex justify-center items-center">
        <div className="text-white text-2xl">
          過去の案件で作成したアプリです
        </div>
      </div>

      <div className="w-full  h-9/12 py-10">
        <div className="w-full h-full max-h-full flex justify-center items-start gap-6">
          {/* 製品紹介 */}
          <div className="2xl:w-1/3 xl:w-1/4 flex flex-col  h-5/6 bg-slate-900 p-4 rounded-md border-2 border-white/30">
            {/* ナンバリング */}
            <div className="min-h-20 max-h-20 flex justify-start items-center">
              <div className="text-7xl stroke-text">
                {String(workList[workIndex].id).padStart(2, "0")}
              </div>
            </div>

            {/* タイトル */}
            <div className="min-h-14 max-h-14 flex justify-start items-center">
              <div className="text-white text-3xl tracking-widest">
                {workList[workIndex].title}
              </div>
            </div>

            {/* 詳細 */}
            <div className=" bg-red-300 grow">
              <p className="text-slate-400 text-sm tracking-widest">
                {workList[workIndex].explanation}
              </p>
            </div>

            {/* 使用言語 */}
            <div className="min-h-10 max-h-10 flex justify-start items-center">
              <div className="flex justify-start gap-x-2">
                {workList[workIndex].techList.map((tech, i) => (
                  <div key={i} className="text-emerald-500/85">
                    {tech.tecName}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] w-full bg-slate-500" />

            {/* 外部リンク */}
            <div className="min-h-8 max-h-8 flex justify-start items-center">
              <FaExternalLinkAlt className="text-sm text-slate-300 cursor-pointer" />
            </div>
          </div>

          {/* 画像スライダー */}
          <div className="w-1/4 h-full ">
            <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={page}
                  className="absolute max-w-full"
                  src={workList[workIndex].capture}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                />
              </AnimatePresence>

              <div
                className="absolute top-1/2 left-5 z-30 text-4xl cursor-pointer text-white"
                onClick={() => paginate(-1)}
              >
                <MdOutlineArrowCircleLeft />
              </div>
              <div
                className="absolute top-1/2 right-5 z-30 text-4xl cursor-pointer text-white"
                onClick={() => paginate(1)}
              >
                <MdOutlineArrowCircleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Work);
