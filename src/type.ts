// import { RefObject } from "react";
import { IconType } from "react-icons";
import { SectionMap } from "@/constants";

type TechName = "HTML" | "CSS";

type tech = {
  tecName: TechName;
  techIcon: IconType;
};

export type WorkInfo = {
  id: number;
  title: string;
  explanation: string;
  techList: tech[];
  url: string;
  capture: string;
};

export type Section = keyof typeof SectionMap;

// export type Section = keyof typeof SectionMap;

// export type Anchor = {
//   elem: RefObject<HTMLDivElement>;
// };
