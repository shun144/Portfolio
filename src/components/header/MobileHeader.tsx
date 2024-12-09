import { memo, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";
import MenuToggle from "./Toggle";

const sidebar = {
  open: {
    clipPath: `circle(2000px at calc(100% - 43px) 43px)`,
    backgroundColor: "rgb(2 6 23)",
    opacity: 0.9,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 1,
    },
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 43px) 43px)",
    backgroundColor: "rgb(30 41 59)",
    opacity: 0.9,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileHeader = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isToggleOpen ? "open" : "closed"}
      variants={sidebar}
      className="fixed w-full h-full z-10"
    >
      <Navigation toggle={setIsToggleOpen} />
      <MenuToggle toggle={setIsToggleOpen} />
    </motion.nav>
  );
};

export default memo(MobileHeader);
