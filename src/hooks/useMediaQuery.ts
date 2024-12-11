import { useEffect, useState } from "react";

export const mediaQuery = {
  /**width: 639px以下 */
  sp: "max-width: 639px",
  /**width: 640px以上 */
  sm: "min-width: 640px",
  /**width: 768px以上 */
  md: "min-width: 768px",
  /**width: 1024px以上 */
  lg: "min-width: 1024px",
  /**width: 1280px以上 */
  xl: "min-width: 1280px",
  /**width: 1536px以上 */
  "2xl": "min-width: 1536px",
} as const;

type MediaType = keyof typeof mediaQuery;

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

export const useCurrentBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<MediaType>();

  useEffect(() => {
    const mediaQueries = Object.entries(mediaQuery).map(([key, value]) => ({
      key,
      mql: window.matchMedia(`(${value})`),
    }));

    const updateBreakpoint = () => {
      const matchedBreakpoint = mediaQueries
        .reverse() // 大きいブレークポイントから評価する
        .find(({ mql }) => mql.matches);

      setCurrentBreakpoint(
        matchedBreakpoint ? (matchedBreakpoint.key as MediaType) : "sp"
      );
    };

    // 初回の判定
    updateBreakpoint();

    // リスナーの登録
    mediaQueries.forEach(({ mql }) => {
      mql.addEventListener("change", updateBreakpoint);
    });

    return () => {
      // クリーンアップ
      mediaQueries.forEach(({ mql }) => {
        mql.removeEventListener("change", updateBreakpoint);
      });
    };
  }, []);

  return currentBreakpoint;
};
