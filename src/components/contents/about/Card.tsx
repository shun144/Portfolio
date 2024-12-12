import { memo } from "react";
import { IconType } from "./icons";
import { useCurrentBreakpoint } from "@/hooks/useMediaQuery";
import { tv } from "tailwind-variants";
import { ExhaustiveError } from "@/error/ExhaustiveError";

type Props = {
  icon: IconType;
  colorType?: "STANDARD" | "EMPHASIS";
};

const Card = ({ icon: Icon, colorType = "STANDARD" }: Props) => {
  const breakpoint = useCurrentBreakpoint();

  let iconSize = "130px";
  switch (breakpoint) {
    case "sp":
    case undefined:
      break;
    case "sm":
    case "md":
      iconSize = "140px";
      break;
    case "lg":
    case "xl":
      iconSize = "150px";
      break;
    case "2xl":
      iconSize = "165px";
      break;
    default:
      throw new ExhaustiveError(breakpoint);
  }

  const IconCls = tv({
    variants: {
      color: {
        STANDARD: "text-slate-200",
        EMPHASIS: "text-emerald-400",
      },
    },
  });

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Icon
        className={IconCls({ color: colorType })}
        size={iconSize}
        style={{
          filter: `${
            colorType === "EMPHASIS" ? "drop-shadow(0px 0px 5px #34d399)" : ""
          }`,
        }}
      />
    </div>
  );
};

export default memo(Card);

// import { memo } from "react";
// import { IconType } from "./icons";

// type Props = {
//   Icon: IconType;
//   className?: string;
// };

// const Card = ({ Icon, className }: Props) => {
//   return (
//     <div className={`text-[150px] text-white absolute ${className}`}>
//       <Icon />
//     </div>
//   );
// };

// export default memo(Card);
