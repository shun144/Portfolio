import { memo } from "react";
import { mediaQuery, useMediaQuery } from "@/hooks/useMediaQuery";
import MobileHeader from "./MobileHeader";
import PcHeader from "./PcHeader";

const Header = () => {
  if (useMediaQuery(mediaQuery.sm)) {
    // PC用ヘッダー
    return <PcHeader />;
  } else {
    // スマホ用ヘッダー
    return <MobileHeader />;
  }
};

export default memo(Header);
