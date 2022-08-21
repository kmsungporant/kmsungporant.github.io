import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MdAnimation } from "react-icons/md";
import {
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiJava,
  SiLinux,
  SiMicrosoftazure,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { VscRemoteExplorer } from "react-icons/vsc";
import Cards from "./portfolio-page/cards";
import Icons from "./portfolio-page/icons";
import NewCards from "./portfolio-page/newCards";

const projects: {
  name: string;
  description: string;
  link: string;
  image: string;
  direction: string;
  icons: ReactNode[];
}[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "Developed a fully functional personal portfolio website using Next.js, React.js and TailwindCSS. Hosted on GitHub Pages with the domain provided and managed on Google Domains.",
    link: "https://github.com/kmsungporant/kmsungporant.github.io",
    image: "portfolio/websiteVid.gif",
    direction: "right",
    icons: [
      <SiNextdotjs key="first" />,
      <SiReact key="second" />,
      <SiNodedotjs key="third" />,
      <SiTailwindcss key="fourth" />,
      <SiGithubactions key="fifth" />,
      <MdAnimation key="sixth" />,
    ],
  },
  {
    name: "Discord [Moon] Bot",
    description:
      "Developed a discord bot using python and Discord API and hosted via Azure using Virtual Machine to run 24/7 for a discord server. Integrated various features for the server: music player for YouTube, mini games, shortcut commands and more!",
    link: "https://github.com/kmsungporant/Moon-Bot",
    image: "portfolio/discord.gif",
    direction: "left",
    icons: [
      <SiPython key="first" />,
      <SiMicrosoftazure key="second" />,
      <SiLinux key="third" />,
      <VscRemoteExplorer key="fourth" />,
    ],
  },
];

export default function PorfolioPage() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center bg-gray-900 gap-y-5 dark:bg-light-background font-Consolas"
    >
      <motion.h1
        className="text-4xl font-black text-dark-tertiary dark:text-light-tertiary"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
      >
        {"<Portfolio />"}
      </motion.h1>
      <div className="hidden 2xl:block">
        <NewCards projects={projects} />
      </div>
      <div className="block 2xl:hidden">
        <Cards projects={projects} />
      </div>
      <Icons />
    </div>
  );
}
