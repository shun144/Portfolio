import { memo, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { autoScroll } from "@/utils/autoScroll";
import { Section } from "@/type";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  id: Section;
  text: string;
  toggle: Dispatch<SetStateAction<boolean>>;
}

const MenuItem = ({ id, text, toggle }: Props) => {
  const handleClick = () => {
    toggle((prev) => !prev);
    autoScroll(id, 10);
  };

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-slate-100 text-4xl" onClick={handleClick}>
        {text}
      </span>
    </motion.li>
  );
};

export default memo(MenuItem);
