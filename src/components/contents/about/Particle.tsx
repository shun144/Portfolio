import { memo } from 'react'
import { motion } from 'framer-motion'
import { IconType } from './icons';
import Card from './Card';

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

type Props = {
  pos: number;
  Icon: IconType;
}

const viewEffectPos = 3;

const Particle = ({ pos, Icon }: Props) => {

  // 指定した位置以外は通常通りに表示し、指定位置のみ特殊なエフェクトを適用
  if (pos !== viewEffectPos) {
    return <Card Icon={Icon} className='absolute top-1 left-2' />
  }

  return <>
    <motion.div
      key={pos}
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
          stiffness: 500,
          damping: 12,
        }
      }}
    >
      <Card Icon={Icon} className='absolute top-1 left-2' />
    </motion.div>

    {/* 波紋 */}
    <motion.div
      key={`ripple-${pos}`}
      className="absolute rounded-full top-16 left-16 border-blue-200 w-4 h-4 "
      initial={false}
      animate={{ scale: [1, 5], opacity: [0, 1, 0], borderWidth: ["8px", "0px"] }}
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

    {/* はじけるバブル */}
    {bubbles.map((bubble, index) => (
      <motion.div
        key={`bubble-${index}-${pos}`}
        className="absolute rounded-full top-16 left-16 w-3 h-3 bg-blue-200"
        initial={false}
        animate={{
          opacity: [0, 1, 0],
          scale: [2, 0.1],
          x: [0, bubble.x],
          y: [0, bubble.y],
        }}
        transition={{
          default: {
            delay: 0.1,
            duration: 1,
            ease: "easeOut"
          },
          opacity: {
            delay: 0.1,
            duration: 2,
            times: [0, 0.5, 1],
          },
          scale: {
            delay: 0.1,
            duration: 0.5,
            times: [0, 1],
          },
        }}
      />
    ))}</>
}



export default memo(Particle);