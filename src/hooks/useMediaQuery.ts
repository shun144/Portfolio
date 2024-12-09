import { useEffect, useState } from "react";

export const mediaQuery = {
  sp: "width < 640px",
  sm: "640px <= width < 768px",
  md: "768px <= width < 1024px",
  lg: "1024px <= width < 1280px",
  xl: "1280px <= width < 1536px",
  "2x": "1536px <= width",
} as const;

export const useMediaQuery = (query: string) => {
  const formattedQuery = `(${query})`;
  const [match, setMatch] = useState(matchMedia(formattedQuery).matches);

  useEffect(() => {
    const mql = matchMedia(formattedQuery);

    if (mql.media === "not all" || mql.media === "invalid") {
      console.error(`useMediaQuery Error: Invalid media query`);
    }

    mql.onchange = (e) => {
      setMatch(e.matches);
    };

    return () => {
      mql.onchange = null;
    };
  }, [formattedQuery, setMatch]);

  return match;
};
