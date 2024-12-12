import { Section } from "@/type";

// export const autoScroll = (id: Section) => {
//   const target = document.getElementById(id);
//   target?.scrollIntoView({ behavior: "smooth", block: "start" });
// };

export const autoScroll = (id: Section, offset = 96) => {
  const target = document.getElementById(id);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const adjustedPosition = targetPosition - offset;
    console.log(targetPosition, offset, adjustedPosition);
    window.scrollTo({
      top: adjustedPosition,
      behavior: "smooth",
    });
  }
};
