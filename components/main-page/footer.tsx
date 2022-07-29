import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <div className=" h-[10%] dark:bg-white font-yellowTail text-WitchingHourLight dark:text-NavyBlueLight">
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-xs text-center">
          Copyright © 2022 Minsung Kim. All rights reserved.
        </span>
        <span className="flex flex-row items-center space-x-2">
          <span className="">Powered by</span>
          <SiNextdotjs />, <SiReact />,<span className="mr-2"> and</span>
          <SiTailwindcss />
        </span>
      </div>
    </div>
  );
}

