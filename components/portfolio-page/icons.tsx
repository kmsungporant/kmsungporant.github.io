import { motion } from "framer-motion";
import Link from "next/link";
import { createContext, ReactNode, useContext, useState } from "react";
import { FaNode } from "react-icons/fa";
import {
  SiCplusplus,
  SiCss3,
  SiDocker,
  SiFramer,
  SiGithubactions,
  SiGooglecloud,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiLinux,
  SiMaterialui,
  SiMicrosoftazure,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const icons: { name: string; icon: ReactNode; link: string }[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    link: "https://www.javascript.com/",
  },
  { name: "ReactJS", icon: <SiReact />, link: "https://reactjs.org/" },
  { name: "NextJs", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
  {
    name: "Framer-Motion",
    icon: <SiFramer />,
    link: "https://www.framer.com/motion/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
    link: "https://tailwindcss.com/",
  },
  { name: "Node", icon: <FaNode />, link: "https://nodejs.org/en/" },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    link: "https://github.com/features/actions",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    link: "https://www.typescriptlang.org/",
  },
  { name: "C++", icon: <SiCplusplus />, link: "https://cplusplus.com/" },
  { name: "Python", icon: <SiPython />, link: "https://www.python.org/" },
  {
    name: "Microsoft Azure",
    icon: <SiMicrosoftazure />,
    link: "https://azure.microsoft.com/en-us/",
  },
  { name: "Java", icon: <SiJava />, link: "https://www.java.com/en/" },
  { name: "Linux", icon: <SiLinux />, link: "https://www.linux.org/" },
  { name: "HTML", icon: <SiHtml5 />, link: "https://html.com/" },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud />,
    link: "https://cloud.google.com/",
  },
  { name: "CSS", icon: <SiCss3 />, link: "https://web.dev/learn/css/" },
  { name: "SASS", icon: <SiSass />, link: "https://sass-lang.com/" },
  { name: "MaterialUI", icon: <SiMaterialui />, link: "https://mui.com/" },
  { name: "Docker", icon: <SiDocker />, link: "https://www.docker.com/" },
];

export default function Icons() {
  return (
    <div className="flex flex-col items-center mt-16">
      <motion.h1
        className="p-5 text-4xl font-black underline text-dark-secondary dark:text-light-secondary"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeIn",
          },
        }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h1>
      <div className="grid grid-cols-5 lg:grid-cols-6 place-self-center xl:flex">
        {icons.map((icon, i) => (
          <Link key={i} passHref href={icon.link}>
            <motion.a
              target="_blank"
              className="m-2 text-5xl transition-colors duration-300 text-dark-secondary hover:text-dark-primary dark:text-light-secondary hover:dark:text-light-primary"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                  delay: i * 0.1,
                },
              }}
              whileHover={{ scale: 1.2 }}
              viewport={{ once: true }}
            >
              {icon.icon}
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
}
