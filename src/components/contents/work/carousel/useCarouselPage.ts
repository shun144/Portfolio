import { useState } from "react";
import { wrap } from "popmotion";
import { workList } from "@/components/contents/work/constants";

export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const useCarouselPage = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const workIndex = wrap(0, workList.length, page);

  const paginate = (newDirection: number) => {
    setPage((prev) => {
      const prevPage = prev[0];
      return [prevPage + newDirection, newDirection];
    });
  };

  return { page, direction, workIndex, paginate, workList };
};
