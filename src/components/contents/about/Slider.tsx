import { memo, MouseEvent } from "react";
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { iconList, IconType } from './icons';
import Particle from './Particle';
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
];



const Slider = () => {

  const [centerIconIndex, setCenterIconIndex] = useState(3);

  const [pos1, setPos1] = useState(0);
  const [pos2, setPos2] = useState(1);
  const [pos3, setPos3] = useState(2);
  const [pos4, setPos4] = useState(3);
  const [pos5, setPos5] = useState(4);
  const [pos6, setPos6] = useState(5);
  const [pos7, setPos7] = useState(6);

  useEffect(() => {

    const updatePos = (prev: number) => (prev + 1) % posConfigs.length;
    const updateCenterIconIndex = (prev: number) => (prev - 1 + posConfigs.length) % posConfigs.length;

    const interval = setInterval(() => {
      setPos1(updatePos);
      setPos2(updatePos);
      setPos3(updatePos);
      setPos4(updatePos);
      setPos5(updatePos);
      setPos6(updatePos);
      setPos7(updatePos);
      setCenterIconIndex(updateCenterIconIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const backStep = (e: MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();
    const updatePos = (prev: number) => (prev - 1 + posConfigs.length) % posConfigs.length;
    const updateCenterIconIndex = (prev: number) => (prev + 1) % posConfigs.length;
    setPos1(updatePos);
    setPos2(updatePos);
    setPos3(updatePos);
    setPos4(updatePos);
    setPos5(updatePos);
    setPos6(updatePos);
    setPos7(updatePos);
    setCenterIconIndex(updateCenterIconIndex);
  }

  const nextStep = (e: MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();
    const updatePos = (prev: number) => (prev + 1) % posConfigs.length;
    const updateCenterIconIndex = (prev: number) => (prev - 1 + posConfigs.length) % posConfigs.length;
    setPos1(updatePos);
    setPos2(updatePos);
    setPos3(updatePos);
    setPos4(updatePos);
    setPos5(updatePos);
    setPos6(updatePos);
    setPos7(updatePos);
    setCenterIconIndex(updateCenterIconIndex);
  }

  const postList = [pos1, pos2, pos3, pos4, pos5, pos6, pos7];

  return (
    <>
      <div className='slider relative overflow-hidden'>
        <div className='slider-wrapper h-52 relative overflow-hidden'>
          <div className='slider-inner absolute top-5 left-1/2'>
            <div className='slider-inner-cell absolute top-0 -left-[1100px] w-[2000px] h-20'>

              {postList.map((pos, index) => (
                <motion.div
                  className="slider-li relative top-0"
                  initial={index === 0 || index === (postList.length - 1) ? false : { x: posConfigs[0].x }}
                  animate={{ x: posConfigs[pos].x }}
                  transition={{ duration: 0 < pos && pos <= posConfigs.length ? posConfigs[pos].duration : 0, ease: "easeInOut" }}
                >
                  <Particle pos={pos} Icon={iconList[index].icon} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center pt-10 pb-6'>
        <div className="text-5xl text-white">
          I LOVE {iconList[centerIconIndex].name}
        </div>
      </div>

      <div className='w-full flex justify-center items-center'>
        <div className="w-1/4 flex justify-center items-center gap-x-6">
          <button className="text-5xl text-blue-100 hover:text-blue-400 transition-all duration-200"
            onClick={backStep}>
            <FaArrowLeft />
          </button>
          <button className="text-5xl text-blue-100 hover:text-blue-400 transition-all duration-200"
            onClick={nextStep}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className='w-full flex justify-center items-center pt-10 pb-6'>
        <div className="w-1/2">
          <p className="text-3xl text-white leading-10">
            Hi I am a web developer & designer based in Vancouver in Canada. I believe working in a multi-disciplined approach brings creative inspiration to my work. I am passionate about creating websites and web apps that incorporate interactive design and modern technologies. I specialize in front-end development but also love experimenting with new backend technologies, with the aim to improve productivity, quality, performance and speed.
          </p>
        </div>
      </div>

    </>
  )
}

export default memo(Slider);

