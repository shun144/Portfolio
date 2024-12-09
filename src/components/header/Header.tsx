import { memo } from "react";
import { mediaQuery, useMediaQuery } from "@/hooks/useMediaQuery";
import MobileHeader from "./MobileHeader";
import PcHeader from "./PcHeader";

const Header = () => {
  const isSp = useMediaQuery(mediaQuery.sp);

  if (isSp) {
    // スマホ用ヘッダー
    return <MobileHeader />;
  } else {
    // PC用ヘッダー
    return <PcHeader />;
  }
};

export default memo(Header);
