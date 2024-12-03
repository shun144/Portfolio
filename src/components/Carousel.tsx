import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Card from './contents/about/Card';
import { iconList } from './contents/about/icons';
import { FaVolleyball } from "react-icons/fa6";



const Carousel = () => {
  const [pos, setPos] = useState(0);
  const [pos2, setPos2] = useState(1);
  const [pos3, setPos3] = useState(2);
  const [pos4, setPos4] = useState(3);
  const [pos5, setPos5] = useState(4);
  const [pos6, setPos6] = useState(5);
  const [pos7, setPos7] = useState(6);

  const posConfigs = [
    { x: "0%", duration: 0 },
    { x: "16.6%", duration: 1 },
    { x: "33.3%", duration: 1.3 },
    { x: "50%", duration: 1.6 },
    { x: "66.67%", duration: 2 },
    { x: "83.3%", duration: 2.1 },
    { x: "100%", duration: 2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPos(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
      setPos2(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
      setPos3(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
      setPos4(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
      setPos5(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
      setPos6(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
      setPos7(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
    }, 4000);

    return () => clearInterval(interval);
  }, [])

  const bubbles = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: 100 },
    { x: 0, y: -100 },
    { x: 80, y: 70 },
    { x: 80, y: -70 },
    { x: -80, y: -70 },
    { x: -80, y: 70 },
  ];

  return (
    <>
      <div className='slider bg-blue-300 relative overflow-hidden'>
        <div className='slider-wrapper h-44 relative overflow-hidden'>
          <div className='slider-inner absolute top-5 left-1/2'>
            <div className='slider-inner-cell absolute top-0 -left-[1100px] w-[2000px] h-20'>

              <motion.div
                className="slider-li relative top-0"
                initial={false}
                animate={{ x: posConfigs[pos].x }}
                transition={{ duration: 0 < pos && pos <= posConfigs.length ? posConfigs[pos].duration : 0, ease: "easeInOut" }}
              >
                <Card Icon={iconList[0]} />
              </motion.div>



              <motion.div
                className="slider-li relative top-0"
                initial={{ x: posConfigs[0].x }}
                animate={{ x: posConfigs[pos2].x }}
                transition={{ duration: 0 < pos2 && pos2 <= posConfigs.length ? posConfigs[pos2].duration : 0, ease: "easeInOut" }}
              >
                <motion.div
                  key={pos2}
                  className='h-40 w-40 absolute'
                  initial={false}
                  animate={{
                    opacity: [1, 0, 0, 1],
                    scale: [1.3, 1]
                  }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      times: [0, 0.01, 1, 1],
                    },
                    scale: {
                      delay: 0.5,
                      duration: 0.5,
                      times: [0, 1],
                      type: "spring",
                      stiffness: 250,
                      damping: 12,
                    }
                  }}
                >
                  <FaVolleyball className="text-9xl text-white absolute top-1 left-2" />
                </motion.div>

                <motion.div
                  key={`ripple-${pos2}`}
                  className="absolute rounded-full top-16 left-16 border-blue-200 w-4 h-4 "
                  initial={false}
                  animate={{ scale: [1, 5], opacity: [0, 1, 0], borderWidth: ["3px", "0px"] }}
                  transition={{
                    scale: {
                      delay: 0.1,
                      duration: 0.5,
                      times: [0, 1],
                    },
                    opacity: {
                      delay: 0,
                      duration: 0.5,
                      times: [0, 0.5, 1]
                    },
                    borderWidth: {
                      duration: 0.5,
                      times: [0, 1],
                    }
                  }}
                />


                {bubbles.map((bubble, index) => (
                  <motion.div
                    key={`bubble-${index}-${pos2}`}
                    className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
                    initial={false}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [1.5, 0.4],
                      x: [0, bubble.x],
                      y: [0, bubble.y],
                    }}
                    transition={{
                      default: {
                        delay: 0.1,
                        duration: 1,
                      },
                      opacity: {
                        delay: 0.1,
                        duration: 1,
                        times: [0, 0.5, 1],
                      },
                      scale: {
                        delay: 0.1,
                        duration: 0.5,
                        times: [0, 1],
                      },
                    }}
                  />
                ))}

              </motion.div>






              <motion.div
                className="slider-li relative top-0"
                initial={{ x: posConfigs[0].x }}
                animate={{ x: posConfigs[pos3].x }}
                transition={{ duration: 0 < pos3 && pos3 <= posConfigs.length ? posConfigs[pos3].duration : 0, ease: "easeInOut" }}
              >

                <Card Icon={iconList[2]} />

              </motion.div>

              <motion.div
                className="slider-li relative top-0"
                initial={{ x: posConfigs[0].x }}
                animate={{ x: posConfigs[pos4].x }}
                transition={{ duration: 0 < pos4 && pos4 <= posConfigs.length ? posConfigs[pos4].duration : 0, ease: "easeInOut" }}
              >
                <Card Icon={iconList[3]} />
              </motion.div>

              <motion.div
                className="slider-li relative top-0"
                initial={{ x: posConfigs[0].x }}
                animate={{ x: posConfigs[pos5].x }}
                transition={{ duration: 0 < pos5 && pos5 <= posConfigs.length ? posConfigs[pos5].duration : 0, ease: "easeInOut" }}
              >
                <Card Icon={iconList[4]} />
              </motion.div>

              <motion.div
                className="slider-li relative top-0"
                initial={{ x: posConfigs[0].x }}
                animate={{ x: posConfigs[pos6].x }}
                transition={{ duration: 0 < pos6 && pos6 <= posConfigs.length ? posConfigs[pos6].duration : 0, ease: "easeInOut" }}
              >
                <Card Icon={iconList[5]} />
              </motion.div>

              <motion.div
                className="slider-li relative top-0"
                initial={false}
                animate={{ x: posConfigs[pos7].x }}
                transition={{ duration: 0 < pos7 && pos7 <= posConfigs.length ? posConfigs[pos7].duration : 0, ease: "easeInOut" }}
              >
                <Card Icon={iconList[6]} />
              </motion.div>

            </div>

          </div>



        </div>

      </div>

    </>
  )
}

export default Carousel


// import { AnimatePresence, delay, motion } from 'framer-motion'
// import { ComponentProps, ComponentPropsWithoutRef, forwardRef, Ref, useEffect, useState } from 'react'
// import Card from './contents/about/Card';
// import { iconList } from './contents/about/icons';
// import { FaVolleyball } from "react-icons/fa6";
// // import { time } from 'motion/react-client';
// import './carousel.css';
// import { useAnimate } from 'motion/react-mini';


// const Carousel = () => {
//   const [pos, setPos] = useState(0);
//   const [pos2, setPos2] = useState(1);
//   const [pos3, setPos3] = useState(2);
//   const [pos4, setPos4] = useState(3);
//   const [pos5, setPos5] = useState(4);
//   const [pos6, setPos6] = useState(5);
//   const [pos7, setPos7] = useState(6);

//   const posConfigs = [
//     { x: "0%", duration: 0 },
//     { x: "16.6%", duration: 1 },
//     { x: "33.3%", duration: 1.3 },
//     { x: "50%", duration: 1.6 },
//     { x: "66.67%", duration: 2 },
//     { x: "83.3%", duration: 2.1 },
//     { x: "100%", duration: 2 },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPos(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
//       setPos2(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
//       setPos3(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
//       setPos4(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
//       setPos5(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
//       setPos6(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
//       setPos7(prev => (prev + 1) <= posConfigs.length - 1 ? prev + 1 : 0);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [])

//   return (
//     <>
//       <div className='slider bg-blue-300 relative overflow-hidden'>
//         <div className='slider-wrapper h-44 relative overflow-hidden'>
//           <div className='slider-inner absolute top-5 left-1/2'>
//             <div className='slider-inner-cell absolute top-0 -left-[1100px] w-[2000px] h-20'>

//               <motion.div
//                 className="slider-li relative top-0"
//                 initial={false}
//                 animate={{ x: posConfigs[pos].x }}
//                 transition={{ duration: 0 < pos && pos <= posConfigs.length ? posConfigs[pos].duration : 0, ease: "easeInOut" }}
//               >
//                 <Card Icon={iconList[0]} />
//               </motion.div>



//               <motion.div
//                 className="slider-li relative top-0"
//                 initial={{ x: posConfigs[0].x }}
//                 animate={{ x: posConfigs[pos2].x }}
//                 transition={{ duration: 0 < pos2 && pos2 <= posConfigs.length ? posConfigs[pos2].duration : 0, ease: "easeInOut" }}
//               >
//                 <motion.div
//                   key={pos2}
//                   className='h-40 w-40 absolute'
//                   initial={false}
//                   animate={{
//                     opacity: [1, 0, 0, 1],
//                     scale: [1.3, 1]
//                   }}
//                   transition={{
//                     opacity: {
//                       duration: 0.5,
//                       times: [0, 0.01, 1, 1],
//                     },
//                     scale: {
//                       delay: 0.5,
//                       duration: 0.5,
//                       times: [0, 1],
//                       type: "spring",
//                       stiffness: 250,
//                       damping: 12,
//                     }
//                   }}
//                 >
//                   <FaVolleyball className="text-9xl text-white absolute top-1 left-2" />
//                 </motion.div>

//                 <motion.div
//                   key={`ripple-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 border-blue-200 w-4 h-4 "
//                   initial={false}
//                   animate={{ scale: [1, 5], opacity: [0, 1, 0], borderWidth: ["3px", "0px"] }}
//                   transition={{
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1],
//                     },
//                     opacity: {
//                       delay: 0,
//                       duration: 0.5,
//                       times: [0, 0.5, 1]
//                     },
//                     borderWidth: {
//                       duration: 0.5,
//                       times: [0, 1],
//                     }
//                   }}
//                 />

//                 <motion.div
//                   key={`bubble-1-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, -100], y: [0, 0] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />

//                 <motion.div
//                   key={`bubble-2-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, 100], y: [0, 0] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />

//                 <motion.div
//                   key={`bubble-3-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, 0], y: [0, 100] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />

//                 <motion.div
//                   key={`bubble-4-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, 0], y: [0, -100] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />

//                 <motion.div
//                   key={`bubble-5-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, 80], y: [0, 70] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />

//                 <motion.div
//                   key={`bubble-6-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, 80], y: [0, -70] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />


//                 <motion.div
//                   key={`bubble-7-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, -80], y: [0, -70] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />

//                 <motion.div
//                   key={`bubble-8-${pos2}`}
//                   className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
//                   initial={false}
//                   animate={{ opacity: [0, 1, 0], scale: [1.5, 0.4], x: [0, -80], y: [0, 70] }}
//                   transition={{
//                     default: {
//                       delay: 0.1,
//                       duration: 1,
//                     },
//                     opacity: {
//                       delay: 0.1,
//                       duration: 1,
//                       times: [0, 0.5, 1]
//                     },
//                     scale: {
//                       delay: 0.1,
//                       duration: 0.5,
//                       times: [0, 1]
//                     }
//                   }}
//                 />

//               </motion.div>






//               <motion.div
//                 className="slider-li relative top-0"
//                 // initial={false}
//                 initial={{ x: posConfigs[0].x }}
//                 animate={{ x: posConfigs[pos3].x }}
//                 transition={{ duration: 0 < pos3 && pos3 <= posConfigs.length ? posConfigs[pos3].duration : 0, ease: "easeInOut" }}
//               >

//                 <Card Icon={iconList[2]} />

//               </motion.div>

//               <motion.div
//                 className="slider-li relative top-0"
//                 initial={{ x: posConfigs[0].x }}
//                 animate={{ x: posConfigs[pos4].x }}
//                 transition={{ duration: 0 < pos4 && pos4 <= posConfigs.length ? posConfigs[pos4].duration : 0, ease: "easeInOut" }}
//               >
//                 <Card Icon={iconList[3]} />
//               </motion.div>

//               <motion.div
//                 className="slider-li relative top-0"
//                 initial={{ x: posConfigs[0].x }}
//                 animate={{ x: posConfigs[pos5].x }}
//                 transition={{ duration: 0 < pos5 && pos5 <= posConfigs.length ? posConfigs[pos5].duration : 0, ease: "easeInOut" }}
//               >
//                 <Card Icon={iconList[4]} />
//               </motion.div>

//               <motion.div
//                 className="slider-li relative top-0"
//                 initial={{ x: posConfigs[0].x }}
//                 animate={{ x: posConfigs[pos6].x }}
//                 transition={{ duration: 0 < pos6 && pos6 <= posConfigs.length ? posConfigs[pos6].duration : 0, ease: "easeInOut" }}
//               >
//                 <Card Icon={iconList[5]} />
//               </motion.div>

//               <motion.div
//                 className="slider-li relative top-0"
//                 initial={false}
//                 animate={{ x: posConfigs[pos7].x }}
//                 transition={{ duration: 0 < pos7 && pos7 <= posConfigs.length ? posConfigs[pos7].duration : 0, ease: "easeInOut" }}
//               >
//                 <Card Icon={iconList[6]} />
//               </motion.div>

//             </div>

//           </div>



//         </div>

//       </div>

//     </>
//   )
// }

// export default Carousel