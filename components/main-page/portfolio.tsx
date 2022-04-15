import { motion, AnimatePresence } from "framer-motion";

import {
  SiNextdotjs,
  SiCplusplus,
  SiGithubactions,
  SiSass,
  SiMicrosoftazure,
  SiGooglecloud,
} from "react-icons/si";
import { DiJavascript1, DiLinux, DiCss3, DiJava } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaNode, FaAws } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { ReactNode, useState } from "react";

const Portfolio = () => {
  const icons: { name: string; icon: ReactNode }[] = [
    { name: "NextJs", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "ReactJS", icon: <RiReactjsLine /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
    { name: "Java", icon: <DiJava /> },
    { name: "Linux", icon: <DiLinux /> },
    { name: "HTML", icon: <AiFillHtml5 /> },
    { name: "Amazon Web Services", icon: <FaAws /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Node", icon: <FaNode /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "CSS", icon: <DiCss3 /> },
    { name: "SASS", icon: <SiSass /> },
  ];

  const BASE_TITLE = "Skills & Experience";
  const [title, setTitle] = useState(BASE_TITLE);

  return (
    <div id="portfolio" className="h-full snap-start">
      <AnimatePresence>
        <div className="h-full text-white dark:bg-white dark:text-black">
          <div className="flex flex-col items-center justify-center h-full font-black">
            <div className="z-20 justify-center text-3xl font-semibold text-white lg:text-4xl dark:text-black">
              {title}
              <div className="flex flex-col justify-center h-full mt-2 ">
                <div className="flex justify-center w-full h-full -mb-5">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{
                      width: "90%",
                      transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    viewport={{ once: false }}
                    className="bg-white dark:bg-black w-full h-[10%]  "
                  ></motion.div>
                </div>
                <div className="flex justify-center w-full h-full ">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{
                      width: "50%",
                      transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    viewport={{ once: false }}
                    className="bg-white dark:bg-black w-0 h-[10%] "
                  ></motion.div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-6 gap-1 text-4xl mt-7 auto-cols-max"
              onPointerLeave={() => setTitle(BASE_TITLE)}
            >
              {icons.map((icon, i) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transform: "translateY(10px)",
                    transition: { duration: 1, delay: 0.75 },
                  }}
                  exit={{ opacity: 0 }}
                  className="hover:text-WitchingHourLight hover:dark:text-NavyBlueLight"
                  key={i}
                  onPointerEnter={() => setTitle(icon.name)}
                >
                  {icon.icon}
                </motion.div>
              ))}
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transform: "translateY(-10px)",
                transition: { duration: 1, delay: 1 },
              }}
              viewport={{ once: false }}
              className="px-4 py-2 m-4 mt-10 font-bold text-black bg-white rounded-full dark:text-white dark:bg-black hover:bg-WitchingHourLight hover:dark:bg-NavyBlueLight"
            >
              My Portfolio
            </motion.button>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
