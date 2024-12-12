// import { RefObject } from "react";
// import { IconType } from "react-icons";
import { SectionMap } from "@/constants";

type TechName = "HTML" | "CSS" | "React" | "TypeScript";

type tech = {
  tecName: TechName;
  // techIcon: IconType;
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
