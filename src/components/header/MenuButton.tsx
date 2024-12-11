import { memo, Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuButton = ({ setIsOpen }: Props) => {
  return (
    <div className="flex justify-end items-center">
      <div
        onClick={() => setIsOpen(true)}
        className="h-10 w-10 rounded-full bg-slate-700 flex flex-col justify-center items-center gap-1 m-2"
      >
        <span className="bg-white h-[2px] w-[16px] rounded-lg" />
        <span className="bg-white h-[2px] w-[16px] rounded-lg" />
        <span className="bg-white h-[2px] w-[16px] rounded-lg" />
      </div>
    </div>
  );
};

export default memo(MenuButton);
