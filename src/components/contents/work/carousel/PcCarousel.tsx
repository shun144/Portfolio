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

const PcCarousel = () => {
  const { page, direction, workIndex, paginate, workList } = useCarouselPage();

  return (
    <>
      <div className="2xl:w-11/12 h-full max-h-full flex justify-center items-start gap-6">
        {/* 製品紹介 */}
        <div className="2xl:w-1/3 w-3/12 flex flex-col  h-5/6 bg-slate-900 p-4 rounded-md border-2 border-white/30">
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
        <div className="2xl:w-1/4 w-9/12 h-full ">
          <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                className="absolute max-w-full"
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
    </>
  );
};

export default memo(PcCarousel);
