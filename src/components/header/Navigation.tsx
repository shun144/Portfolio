import { memo, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import MenuItem from "./Items";
import { SectionMap } from "@/constants";
import { Section } from "@/type";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface Props {
  toggle: Dispatch<SetStateAction<boolean>>;
}

const Navigation = ({ toggle }: Props) => (
  <motion.div
    variants={variants}
    className="absolute w-screen top-32 left-1/2 -translate-x-20"
  >
    <ul className="flex flex-col justify-start gap-y-6">
      {Object.entries(SectionMap).map(([key, value]) => (
        <MenuItem key={key} id={key as Section} text={value} toggle={toggle} />
      ))}
    </ul>
  </motion.div>
);

export default memo(Navigation);
