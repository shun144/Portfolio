// import { memo } from "react";
// import { motion } from "framer-motion";

// const data = [
//   {
//     id: 1,
//     background: `cadetblue`,
//   },
//   {
//     id: 2,
//     background: `rebeccapurple`,
//   },
//   {
//     id: 3,
//     background: `pink`,
//   },
// ];

// const mainVariants = {
//   open: {
//     // staggerChildren：子要素間のアニメーション開始の遅延時間
//     // delayChildren：親要素と子要素間のアニメーション開始の遅延時間
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };

// const itemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       y: { stiffness: 0, velocity: -100 },
//     },
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//     transition: {
//       y: { stiffness: 1000 },
//     },
//   },
// };

// const Stagger = () => {
//   return (
//     <div className="w-screen h-screen bg-slate-100">
//       <motion.div
//         variants={mainVariants}
//         initial="closed"
//         animate="open"
//         className="w-full h-full flex flex-col justify-center items-center gap-y-6"
//       >
//         {data.map((item) => (
//           <motion.div
//             variants={itemVariants}
//             key={`item-${item.id}`}
//             className="w-40 h-40 bg-red-200"
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default memo(Stagger);
