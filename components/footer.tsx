import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
let date = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="w-full bg-gray-900 h-[8%] font-yellowTail text-dark-primary dark:text-light-primary dark:bg-light-background transition-colors">
      <div className="flex flex-col items-center justify-center h-full ">
        <span className="text-xs text-center">Copyright © {date} Minsung Kim. All rights reserved.</span>
        <span className="flex flex-row items-center space-x-2">
          <span className="">Powered by</span>
          <SiNextdotjs />, <SiReact />, <SiTailwindcss /> <span className="mr-2"> and</span>
          <SiFramer />
        </span>
      </div>
    </div>
  );
}
