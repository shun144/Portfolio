import { memo } from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { CarouselVariants } from "./constants";
import {
  useCarouselPage,
  swipeConfidenceThreshold,
  swipePower,
} from "./useCarouselPage";

const MobileCarousel = () => {
  const { page, direction, workIndex, paginate, workList } = useCarouselPage();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="sm:w-9/12 w-11/12">
        <div className="w-full sm:min-h-[600px] min-h-[485px] flex flex-col bg-slate-900 sm:px-8 px-3 sm:py-4 py-2 sm:mb-10 mb-6 rounded-md border-2 border-white/30">
          {/* ナンバリング */}
          <div className="flex justify-start items-center mb-2">
            <div className="md:text-6xl sm:text-5xl text-3xl stroke-text">
              {String(workList[workIndex].id).padStart(2, "0")}
            </div>
          </div>

          {/* タイトル */}
          <div className="flex justify-start items-center sm:mb-6 mb-4">
            <div className="text-white md:text-2xl sm:text-xl text-lg tracking-widest">
              {workList[workIndex].title}
            </div>
          </div>

          {/* 画像スライダー */}
          <div className="w-full md:h-60 sm:h-52 h-40 flex justify-center items-center relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                className="absolute md:w-8/12 sm:w-10/12 max-w-full rounded-md"
                src={workList[workIndex].capture}
                custom={direction}
                variants={CarouselVariants}
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
                onDragEnd={(_, { offset, velocity }) => {
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
              className="absolute top-15 left-0 z-30 sm:text-5xl text-4xl cursor-pointer text-white"
              onClick={() => paginate(-1)}
            >
              <MdOutlineArrowCircleLeft />
            </div>
            <div
              className="absolute top-15 right-0 z-30 sm:text-5xl text-4xl cursor-pointer text-white"
              onClick={() => paginate(1)}
            >
              <MdOutlineArrowCircleRight />
            </div>
          </div>

          {/* 詳細 */}
          <div className="py-4 grow max-h-40 overflow-y-auto">
            <p className="text-slate-400 md:text-base text-sm tracking-widest">
              {workList[workIndex].explanation}
            </p>
          </div>

          {/* 使用言語 */}
          <div className="flex justify-start items-center">
            <div className="flex justify-start gap-x-2">
              {workList[workIndex].techList.map((tech, i) => (
                <div key={i} className="text-emerald-500/85 md:text-xl">
                  {tech.tecName}
                </div>
              ))}
            </div>
          </div>

          <div className="h-[1px] w-full bg-slate-500" />

          {/* 外部リンク */}
          <div className="min-h-8 max-h-8 px-2 mt-2 flex justify-start items-center">
            <FaExternalLinkAlt className="md:text-xl text-lg text-slate-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MobileCarousel);
