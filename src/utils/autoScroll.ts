import { Section } from "@/type";

export const autoScroll = (id: Section) => {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: "smooth" });
};
