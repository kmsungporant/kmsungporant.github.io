import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiCplusplus,
  SiGithubactions,
  SiSass,
  SiMicrosoftazure,
  SiGooglecloud,
  SiMaterialui,
  SiTailwindcss,
  SiJava,
  SiCss3,
  SiLinux,
  SiJavascript,
  SiReact,
  SiPython,
  SiDocker,
  SiHtml5,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { ReactNode, useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const icons: { name: string; icon: ReactNode }[] = [
    { name: "NextJs", icon: <SiNextdotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "ReactJS", icon: <SiReact /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
    { name: "Java", icon: <SiJava /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "Google Cloud", icon: <SiGooglecloud /> },
    { name: "Node", icon: <FaNode /> },
    { name: "GitHub Actions", icon: <SiGithubactions /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "SASS", icon: <SiSass /> },
    { name: "MaterialUI", icon: <SiMaterialui /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Framer-Motion", icon: <MdAnimation /> },
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
              className="grid grid-cols-6 gap-2 text-4xl mt-7 auto-cols-max"
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
            <Link href="/about">
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
            </Link>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
