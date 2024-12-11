import { memo } from "react";
import { motion } from "framer-motion";
import { IconType } from "./icons";
import Card from "./Card";

const bubbles = [
  { x: -150, y: 0 },
  { x: 150, y: 0 },
  { x: 0, y: 150 },
  { x: 0, y: -150 },
  { x: 120, y: 110 },
  { x: 120, y: -110 },
  { x: -120, y: -110 },
  { x: -120, y: 110 },
] as const;

type Props = {
  pos: number;
  Icon: IconType;
};

const viewEffectPos = 3;

const Particle = ({ pos, Icon }: Props) => {
  // 指定した位置以外は通常通りに表示し、指定位置のみ特殊なエフェクトを適用
  if (pos !== viewEffectPos) {
    return (
      <div className="h-40 w-40 absolute">
        <Card icon={Icon} />
      </div>
    );
  }

  return (
    <>
      <motion.div
        key={pos}
        className="h-40 w-40 absolute"
        initial={false}
        animate={{
          opacity: [1, 0, 0, 1],
          scale: [1.3, 1],
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
          },
        }}
      >
        <Card icon={Icon} colorType="EMPHASIS" />
      </motion.div>

      {/* 波紋 */}
      <motion.div
        key={`ripple-${pos}`}
        className="absolute rounded-full top-16 left-16 border-white w-4 h-4 "
        initial={false}
        animate={{
          scale: [1, 8],
          opacity: [0, 1, 0],
          borderWidth: ["6px", "0px"],
        }}
        transition={{
          scale: {
            delay: 0.1,
            duration: 0.5,
            times: [0, 1],
          },
          opacity: {
            delay: 0,
            duration: 0.5,
            times: [0, 0.5, 1],
          },
          borderWidth: {
            duration: 0.5,
            times: [0, 1],
          },
        }}
      />

      {/* はじけるバブル */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={`bubble-${index}-${pos}`}
          className="absolute rounded-full top-16 left-16 w-3 h-3 bg-white"
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
              ease: "easeOut",
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
      ))}
    </>
  );
};

export default memo(Particle);
