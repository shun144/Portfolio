export const SectionMap = {
  home: "Home",
  aboutme: "About Me",
  skills: "My Skill",
  works: "Works",
  // contact: "Contact",
} as const;

// export const DefaultScrollVariants = {
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, y: 20 },
// };

export const DefaultScrollVariants = {
  show: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

export const DefaultHomeScrollVariants = {
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 50 },
};

// export const DefaultViewport = {
//   once: true,
//   /* 上 | 左右 | 下 */
//   margin: "0px 0px -120px",
// };
