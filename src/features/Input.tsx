import { memo, forwardRef } from "react";

type Props = {
  id: string;
  label: string;
  className?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(({ id, label }, ref) => {
  return (
    <div className="w-full relative z-0">
      <input
        type="text"
        id={id}
        ref={ref}
        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer"
        placeholder=" "
      />

      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-emerald-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
});

export default memo(Input);
