import { memo } from "react";
import { SectionMap } from "@/constants";
import { Section } from "@/type";
import { autoScroll } from "@/utils/autoScroll";
import { motion } from "framer-motion";
// import { DefaultScrollVariants } from "@/constants";

const mainVariant = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};

const itemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 0, velocity: -100 },
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

const PcHeader = () => {
  const handleScroll = (id: Section) => {
    autoScroll(id);
  };

  return (
    <div className="w-full lg:h-24 h-12 flex justify-end items-center bg-slate-950 fixed z-50">
      <motion.div
        variants={mainVariant}
        initial="closed"
        whileInView="open"
        viewport={{ once: true }}
        className="flex justify-center items-center  sm:gap-x-6 sm:mr-10 lg:gap-x-10 lg:mr-20"
      >
        {Object.entries(SectionMap).map(([key, value]) => (
          <motion.div
            variants={itemVariant}
            key={key}
            className="text-white lg:text-2xl text-lg select-none cursor-pointer group"
            onClick={() => handleScroll(key as Section)}
          >
            {value}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-emerald-400" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(PcHeader);

// import { memo } from "react";
// import { SectionMap } from "@/constants";
// import { Section } from "@/type";
// import { autoScroll } from "@/utils/autoScroll";
// import { motion } from "framer-motion";
// import { DefaultScrollVariants } from "@/constants";

// const PcHeader = () => {
//   const handleScroll = (id: Section) => {
//     autoScroll(id);
//   };

//   return (
//     <div className="w-full lg:h-24 h-12 flex justify-end items-center bg-slate-950 fixed z-50">
//       <div className="flex justify-center items-center  sm:gap-x-6 sm:mr-10 lg:gap-x-10 lg:mr-20">
//         {Object.entries(SectionMap).map(([key, value]) => (
//           <motion.div
//             variants={DefaultScrollVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             key={key}
//             className="text-white lg:text-2xl text-lg select-none cursor-pointer group"
//             onClick={() => handleScroll(key as Section)}
//           >
//             {value}
//             <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-emerald-400" />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default memo(PcHeader);
