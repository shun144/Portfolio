import { FaSnowboarding } from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import { FaDog } from "react-icons/fa6";
import { TbBrandDisney } from "react-icons/tb";
import { GiWhiteBook } from "react-icons/gi";
import { FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { type IconType } from "react-icons";

// const iconList = [FaSnowboarding, FaVolleyball, FaDog, TbBrandDisney, GiWhiteBook, FaReact, TbBrandTypescript];


const iconList = [
  {
    icon: FaSnowboarding,
    name: "Snow Board"
  },
  {
    icon: FaVolleyball,
    name: "Volley Ball"
  },
  {
    icon: FaDog,
    name: "Dog"
  },
  {
    icon: TbBrandDisney,
    name: "Disney"
  },
  {
    icon: GiWhiteBook,
    name: "Book"
  },
  {
    icon: FaReact,
    name: "React"
  },
  {
    icon: TbBrandTypescript,
    name: "TypeScript"
  }
];


export { IconType, iconList }