import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <div className="absolute bottom-10 left-[45%] ">
      <div className="flex w-full bg-gray-900 font-yellowTail text-dark-primary dark:text-light-primary dark:bg-light-background">
        <div className="flex flex-col items-center justify-center h-full ">
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
    </div>
  );
}
