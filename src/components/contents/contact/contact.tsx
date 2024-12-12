import { memo, useRef } from "react";
import { Section } from "@/type";
import Input from "@/features/Input";

const Contact = () => {
  const refName = useRef<HTMLInputElement>(null);

  const id: Section = "contact";

  return (
    <div id={id} className="w-full min-h-section pt-10">
      <div className="w-full flex flex-col justify-center items-center pb-14">
        <div className="text-white text-6xl select-none pb-5">Contact</div>

        <div className="px-4">
          <p className="text-slate-400 text-base">
            ご覧いただきありがとうございました。
            <br />
            お仕事のご相談は下記フォームからお願いいたします。
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-11/12 h-[300px] bg-slate-900 rounded-xl">
          <div className="w-full h-full mx-4 pt-4">
            <Input id="name" label="name" ref={refName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
