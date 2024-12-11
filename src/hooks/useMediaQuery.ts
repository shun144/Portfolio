import { useEffect, useState } from "react";

export const mediaQuery = {
  /**width: 640px以下 */
  sm: "max-width: 640px",
  /**width: 768px以下 */
  md: "max-width: 768px",
  /**width: 1024px以下 */
  lg: "max-width: 1024px",
  /**width: 1280px以下 */
  xl: "max-width: 1280px",
  /**width: 1536px以下 */
  "2x": "max-width: 1536px",
} as const;

// export const mediaQuery = {
//   sm: "width > 640px",
//   md: "width > 768px",
//   lg: "width > 1024px",
//   xl: "width > 1280px",
//   "2x": "width > 1536px",
// } as const;

// export const mediaQuery = {
//   sp: "width < 640px",
//   sm: "640px <= width < 768px",
//   md: "768px <= width < 1024px",
//   lg: "1024px <= width < 1280px",
//   xl: "1280px <= width < 1536px",
//   "2x": "1536px <= width",
// } as const;

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
