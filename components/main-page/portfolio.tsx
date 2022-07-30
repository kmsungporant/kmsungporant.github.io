import { motion, AnimatePresence, animate } from "framer-motion";
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

const notOnHoverAnimation = {
  hover: { scale: 0, x: 100, opacity: 0 },
};
const onHoverAnimation = {
  hover: {
    scale: 1.1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

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

  const BASE_TITLE = "Skills & Experiences";
  const BASE_ICON = <div />;
  const [title, setTitle] = useState(BASE_TITLE);
  const [icon, setIcon] = useState<ReactNode>(BASE_ICON);
  const [hoveringAnimation, setHoveringAnimation] =
    useState(notOnHoverAnimation);

  return (
    <div id="portfolio" className="h-full snap-start ">
      <AnimatePresence>
        <div className="flex items-start justify-center h-full">
          <div className="hidden w-4/5 h-full lg:block">
            <div className="flex items-start justify-start h-full">
              <div className="flex flex-col items-center justify-center w-[120%] h-full text-white">
                <div className="flex flex-col items-start text-5xl font-black">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1 } }}
                    viewport={{ once: false }}
                    className="z-20 text-6xl font-semibold text-white dark:text-black"
                  >
                    My Experience
                    <div className="flex flex-col h-full mt-2">
                      <div className="flex justify-start w-full h-full -mb-9">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{
                            width: "100%",
                            transition: { duration: 1.5, ease: "easeInOut" },
                          }}
                          viewport={{ once: false }}
                          className="bg-white dark:bg-black w-full h-[7%] "
                        ></motion.div>
                      </div>
                      <div className="w-full h-full ">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{
                            width: "70%",
                            transition: { duration: 2, ease: "easeInOut" },
                          }}
                          viewport={{ once: false }}
                          className="bg-white dark:bg-black h-[7%] mt-2"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.span>
                </div>
                <div className="py-10 text-lg font-black">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1, delay: 0.5 },
                    }}
                    viewport={{ once: false }}
                  >
                    <div className="grid grid-cols-6 gap-2 text-white auto-cols-max dark:text-black">
                      {icons.map((icon, i) => (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{
                            opacity: 1,
                            transform: "translateY(10px)",
                            transition: { duration: 1, delay: 0.75 },
                          }}
                          exit={{ opacity: 0 }}
                          className="text-6xl hover:text-WitchingHourLight hover:dark:text-NavyBlueLight"
                          key={i}
                          onPointerEnter={() => {
                            setIcon(icon.icon);
                            setHoveringAnimation(onHoverAnimation);
                            setTitle(icon.name);
                          }}
                          onPointerLeave={() => {
                            setTitle(BASE_TITLE);
                            setIcon(BASE_ICON);
                            setHoveringAnimation(notOnHoverAnimation);
                          }}
                        >
                          {icon.icon}
                        </motion.div>
                      ))}
                    </div>
                    <Link href="/about" passHref>
                      <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{
                          opacity: 1,
                          transition: { duration: 1, delay: 0.75 },
                        }}
                        whileHover={{ scale: 1.1 }}
                        viewport={{ once: false }}
                        className="px-4 py-2 mt-10 font-bold text-black bg-white rounded-full dark:text-white dark:bg-black hover:bg-WitchingHourLight hover:dark:hover:bg-NavyBlueLight"
                      >
                        My Portfolio
                      </motion.button>
                    </Link>
                  </motion.span>
                </div>
              </div>
              <div className="w-full h-full text-WitchingHourLight dark:text-NavyBlueLight">
                <div className="flex flex-col items-center justify-center h-full ">
                  <motion.div variants={hoveringAnimation} animate="hover">
                    <span className="text-9xl">{icon}</span>
                  </motion.div>
                  <motion.div
                    variants={hoveringAnimation}
                    animate="hover"
                    className="mt-10 text-3xl font-black underline "
                  >
                    {title}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          <div className="block h-full lg:hidden">
            <div className="flex flex-col items-center justify-center h-full font-black ">
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
                className="grid grid-cols-6 gap-2 text-4xl text-white mt-7 auto-cols-max dark:text-black"
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
              <Link href="/about" passHref>
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1, delay: 0.75 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: false }}
                  className="px-4 py-2 mt-10 font-bold text-black bg-white rounded-full dark:text-white dark:bg-black hover:bg-WitchingHourLight hover:dark:hover:bg-NavyBlueLight"
                >
                  My Portfolio
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
