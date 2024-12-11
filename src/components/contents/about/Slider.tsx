import { memo, MouseEvent } from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { iconList } from "./icons";
import Particle from "./Particle";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const posConfigs = [
  { x: "0%", duration: 0 },
  { x: "16.6%", duration: 1.4 },
  { x: "33.3%", duration: 1.1 },
  { x: "50%", duration: 1.3 },
  { x: "66.67%", duration: 1.5 },
  { x: "83.3%", duration: 1.9 },
  { x: "100%", duration: 2.2 },
] as const;

const Slider = () => {
  const [centerIconIndex, setCenterIconIndex] = useState(3);

  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(1);
  const [pos3, setPos3] = useState(2);
  const [pos4, setPos4] = useState(3);
  const [pos5, setPos5] = useState(4);
  const [pos6, setPos6] = useState(5);
  const [pos7, setPos7] = useState(6);

  const postList = [pos1, pos2, pos3, pos4, pos5, pos6, pos7];
  const setPostList = [
    setPos1,
    setPos2,
    setPos3,
    setPos4,
    setPos5,
    setPos6,
    setPos7,
  ];

  const bulkSetPos = (
    newPos: (prev: number) => number,
    newCenterIconIndex: (prev: number) => number
  ) => {
    setPostList.forEach((setPos) => setPos(newPos));
    setCenterIconIndex(newCenterIconIndex);
  };

  const backStep = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    bulkSetPos(
      (prev: number) => (prev - 1 + posConfigs.length) % posConfigs.length,
      (prev: number) => (prev + 1) % posConfigs.length
    );
  };

  const nextStep = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    bulkSetPos(
      (prev: number) => (prev + 1) % posConfigs.length,
      (prev: number) => (prev - 1 + posConfigs.length) % posConfigs.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      bulkSetPos(
        (prev: number) => (prev + 1) % posConfigs.length,
        (prev: number) => (prev - 1 + posConfigs.length) % posConfigs.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="sm:h-52 h-40 relative overflow-hidden">
          <div className="absolute sm:top-5 top-0 left-1/2">
            {/* <div className="absolute top-0 -left-[1150px] w-[2100px] h-20"> */}
            <div className="absolute top-0 2xl:-left-[1330px] 2xl:w-[2500px] xl:-left-[990px] xl:w-[1800px] lg:-left-[1150px] lg:w-[2100px]  md:-left-[920px] md:w-[1700px]  sm:-left-[900px] sm:w-[1400px] -left-[430px] w-[700px] h-20">
              {postList.map((pos, index) => (
                <motion.div
                  key={index}
                  className="relative top-0"
                  initial={
                    0 < index && index < postList.length - 1
                      ? { x: posConfigs[0].x }
                      : false
                  }
                  animate={{ x: posConfigs[pos].x }}
                  transition={{
                    duration:
                      0 < pos && pos < posConfigs.length - 1
                        ? posConfigs[pos].duration
                        : 0,
                    ease: "easeInOut",
                  }}
                >
                  <Particle pos={pos} Icon={iconList[index].icon} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center lg:pt-20 pt-10 lg:pb-20 sm:pb-12 pb-14 max-h-6 overflow-hidden sm:whitespace-normal whitespace-nowrap">
        <div className="lg:text-7xl sm:text-5xl text-4xl text-white">
          I Love{" "}
          <span className="text-emerald-400">
            {iconList[centerIconIndex].name}
          </span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-1/4 flex justify-center items-center gap-x-6">
          <button
            className="lg:text-7xl sm:text-5xl text-4xl text-slate-200 hover:text-emerald-300 transition-all duration-200"
            onClick={backStep}
          >
            <FaArrowLeft />
          </button>
          <button
            className="lg:text-7xl sm:text-5xl text-4xl text-slate-200 hover:text-emerald-300 transition-all duration-200"
            onClick={nextStep}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center lg:pt-16 sm:pt-10 pt-14 pb-6">
        <div className="lg:w-2/3 md:w-4/5 w-5/6 max-h-96 overflow-auto">
          <p className="sm:text-2xl text-xl text-slate-400 md:leading-10 leading-7">
            Hi I am a web developer & designer based in Vancouver in Canada. I
            believe working in a multi-disciplined approach brings creative
            inspiration to my work. I am passionate about creating websites and
            web apps that incorporate interactive design and modern
            technologies.
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(Slider);

// import { memo, MouseEvent } from "react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { iconList } from "./icons";
// import Particle from "./Particle";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

// const posConfigs = [
//   { x: "0%", duration: 0 },
//   { x: "16.6%", duration: 1.4 },
//   { x: "33.3%", duration: 1.1 },
//   { x: "50%", duration: 1.3 },
//   { x: "66.67%", duration: 1.5 },
//   { x: "83.3%", duration: 1.9 },
//   { x: "100%", duration: 2.2 },
// ];

// const Slider = () => {
//   const [centerIconIndex, setCenterIconIndex] = useState(3);

//   const [pos1, setPos1] = useState(0);
//   const [pos2, setPos2] = useState(1);
//   const [pos3, setPos3] = useState(2);
//   const [pos4, setPos4] = useState(3);
//   const [pos5, setPos5] = useState(4);
//   const [pos6, setPos6] = useState(5);
//   const [pos7, setPos7] = useState(6);

//   useEffect(() => {
//     const updatePos = (prev: number) => (prev + 1) % posConfigs.length;
//     const updateCenterIconIndex = (prev: number) =>
//       (prev - 1 + posConfigs.length) % posConfigs.length;

//     const interval = setInterval(() => {
//       setPos1(updatePos);
//       setPos2(updatePos);
//       setPos3(updatePos);
//       setPos4(updatePos);
//       setPos5(updatePos);
//       setPos6(updatePos);
//       setPos7(updatePos);
//       setCenterIconIndex(updateCenterIconIndex);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const backStep = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const updatePos = (prev: number) =>
//       (prev - 1 + posConfigs.length) % posConfigs.length;
//     const updateCenterIconIndex = (prev: number) =>
//       (prev + 1) % posConfigs.length;
//     setPos1(updatePos);
//     setPos2(updatePos);
//     setPos3(updatePos);
//     setPos4(updatePos);
//     setPos5(updatePos);
//     setPos6(updatePos);
//     setPos7(updatePos);
//     setCenterIconIndex(updateCenterIconIndex);
//   };

//   const nextStep = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const updatePos = (prev: number) => (prev + 1) % posConfigs.length;
//     const updateCenterIconIndex = (prev: number) =>
//       (prev - 1 + posConfigs.length) % posConfigs.length;
//     setPos1(updatePos);
//     setPos2(updatePos);
//     setPos3(updatePos);
//     setPos4(updatePos);
//     setPos5(updatePos);
//     setPos6(updatePos);
//     setPos7(updatePos);
//     setCenterIconIndex(updateCenterIconIndex);
//   };

//   const postList = [pos1, pos2, pos3, pos4, pos5, pos6, pos7];

//   return (
//     <>
//       <div className="slider relative overflow-hidden">
//         <div className="slider-wrapper h-52 relative overflow-hidden">
//           <div className="slider-inner absolute top-5 left-1/2">
//             <div className="slider-inner-cell absolute top-0 -left-[1150px] w-[2100px] h-20">
//               {postList.map((pos, index) => (
//                 <motion.div
//                   key={index}
//                   className="slider-li relative top-0"
//                   initial={
//                     0 < index && index < postList.length - 1
//                       ? { x: posConfigs[0].x }
//                       : false
//                   }
//                   animate={{ x: posConfigs[pos].x }}
//                   transition={{
//                     duration:
//                       0 < pos && pos < posConfigs.length - 1
//                         ? posConfigs[pos].duration
//                         : 0,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <Particle pos={pos} Icon={iconList[index].icon} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full flex justify-center items-center pt-10 pb-6">
//         <div className="text-5xl text-white">
//           I Love{" "}
//           <span className="text-emerald-400">
//             {iconList[centerIconIndex].name}
//           </span>
//         </div>
//       </div>

//       <div className="w-full flex justify-center items-center">
//         <div className="w-1/4 flex justify-center items-center gap-x-6">
//           <button
//             className="text-5xl text-slate-200 hover:text-emerald-300 transition-all duration-200"
//             onClick={backStep}
//           >
//             <FaArrowLeft />
//           </button>
//           <button
//             className="text-5xl text-slate-200 hover:text-emerald-300 transition-all duration-200"
//             onClick={nextStep}
//           >
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       <div className="w-full flex justify-center items-center pt-10 pb-6">
//         <div className="w-1/2">
//           <p className="text-2xl text-slate-400 leading-10">
//             Hi I am a web developer & designer based in Vancouver in Canada. I
//             believe working in a multi-disciplined approach brings creative
//             inspiration to my work. I am passionate about creating websites and
//             web apps that incorporate interactive design and modern
//             technologies. I specialize in front-end development but also love
//             experimenting with new backend technologies, with the aim to improve
//             productivity, quality, performance and speed.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default memo(Slider);
