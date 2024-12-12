import { memo } from "react";

type Props = {
  title: string;
  skillMap: { [key: string]: number };
};

const Graph = ({ title, skillMap }: Props) => {
  return (
    <div className="2xl:w-4/12 xl:w-5/12 lg:w-7/12 md:w-9/12 w-11/12 rounded-xl xl:pt-8 md:pt-5 pt-2 bg-slate-900 overflow-auto">
      <div className="w-full flex justify-center items-center text-slate-300 uppercase md:text-4xl text-2xl">
        {title}
      </div>

      <div className="w-11/12 mx-auto xl:mt-6 md:mt-4 mt-2">
        {Object.keys(skillMap).map((key) => (
          <div
            key={key}
            className="flex justify-start items-center xl:pb-9 md:pb-4 sm:pb-6 pb-4 group"
          >
            <div className="md:w-4/12 w-5/12 flex justify-between items-center">
              <div className="text-slate-400 xl:text-3xl sm:text-2xl text-lg break-all  font-extrabold group-hover:text-emerald-300">
                {key}
              </div>
            </div>
            <div className="w-1/12 text-white md:text-3xl text-xl font-extrabold group-hover:text-emerald-300">
              {skillMap[key]}
            </div>
            <div className="md:w-7/12 w-6/12 flex md:gap-x-4 sm:gap-x-4 gap-x-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`xl:h-6 md:h-5 sm:h-6 h-3 w-1/6 md:rounded-md sm:rounded-lg rounded-sm shadow ${
                    i + 1 <= skillMap[key]
                      ? "bg-slate-200 group-hover:bg-emerald-300"
                      : "border-2 border-dashed border-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Graph);
