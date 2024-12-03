import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

const Carousel = () => {
  const [offset, setOffset] = useState(0); // オフセットを管理

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1); // オフセットを1進める
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleItems = 5; // 表示する要素数
  const itemWidth = 110; // 各要素の幅（固定）
  const containerWidth = visibleItems * itemWidth; // コンテナの幅を計算

  return (
    <div
      style={{
        display: "flex",
        overflow: "hidden",
        width: `${containerWidth}px`, // コンテナの幅を設定
        position: "relative",
      }}
    >
      <AnimatePresence initial={false}>
        {items.map((item, index) => {
          // 各要素の論理的な位置を計算
          const logicalIndex = (index - offset + items.length) % items.length;

          // 5つを超える要素は非表示
          if (logicalIndex >= visibleItems) return null;

          return (
            <motion.div
              key={item}
              initial={{
                x: logicalIndex * itemWidth, // 論理的な初期位置
                opacity: logicalIndex === 0 || logicalIndex === visibleItems - 1 ? 0 : 1,
              }}
              animate={{
                x: logicalIndex * itemWidth, // 論理的な現在位置
                opacity: 1,
              }}
              exit={{
                x: visibleItems * itemWidth, // 右にスライドして消える
                opacity: 0,
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1 },
              }}
              style={{
                minWidth: `${itemWidth}px`, // 要素の幅を固定
                margin: "0 5px", // 要素間の間隔を固定
                padding: "20px",
                backgroundColor: "#eee",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "5px",
                position: "relative",
              }}
            >
              {item}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
