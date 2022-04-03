import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-DarkGray h-[10%] dark:bg-white font-yellowTail text-WitchingHourLight dark:text-NavyBlueLight">
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-xs text-center">
          Copyright © 2022 Minsung Kim. All rights reserved.
        </span>
        <span className="flex flex-row items-center mt-3 space-x-2">
          <span className="">Powered by</span>
          <SiNextdotjs />, <SiReact />,<span className="mr-2"> and</span>{" "}
          <SiTailwindcss />
        </span>
      </div>
    </div>
  );
};

export default Footer;
