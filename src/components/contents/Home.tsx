import { memo, useCallback } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Section } from "@/type";
import { autoScroll } from "@/utils/autoScroll";

const Home = () => {
  const id: Section = "home";

  const handleScrollDown = useCallback(() => {
    const scrollToSection: Section = "aboutme";
    autoScroll(scrollToSection);
  }, []);

  return (
    <div
      id={id}
      className="w-full h-screen max-h-screen min-h-section bg-slate-950 relative"
    >
      <div className="w-full h-full flex flex-col sm:justify-center justify-start sm:pt-0 pt-32 items-center">
        <div className="text-white text-8xl select-none sm:mx-0 mx-4">
          <div>Shun Labo.</div>
        </div>
        <div className="text-white text-4xl select-none mt-6 sm:mx-0 mx-4">
          Shun Engineering Portfolio
        </div>

        <div className="sm:mt-12 mt-16 ">
          <IoIosArrowDown
            onClick={handleScrollDown}
            className="text-emerald-400 sm:text-8xl text-7xl border-4 border-emerald-400 rounded-full cursor-pointer animate-bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
