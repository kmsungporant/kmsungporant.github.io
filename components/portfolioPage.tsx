import { motion } from "framer-motion";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import { ReactNode, useEffect, useState } from "react";
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
  SiTailwindcss
} from "react-icons/si";
import { VscRemoteExplorer } from "react-icons/vsc";
import Cards from "./portfolio-page/cards";
import Icons from "./portfolio-page/icons";
import Nav from "./portfolio-page/nav";
import NewCards from "./portfolio-page/newCards";

const projects: {
  name: string;
  description: string;
  link: string;
  image: string;
  icons: ReactNode[];
}[] = [
    {
      name: "Personal Portfolio Website",
      description:
        "Developed a fully functional personal portfolio website using Next.js, React.js and TailwindCSS. Hosted on GitHub Pages with the domain provided and managed on Google Domains.",
      link: "https://github.com/kmsungporant/kmsungporant.github.io",
      image: "portfolio/websiteVid.gif",
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
      icons: [
        <SiPython key="first" />,
        <SiMicrosoftazure key="second" />,
        <SiLinux key="third" />,
        <VscRemoteExplorer key="fourth" />,
      ],
    },
    {
      name: "Video Uploader [In Progress]",
      description:
        "A private web application that lets only discord members to upload videos onto a database via Azure. A discord bot will then retrieve the videos weekly and upload the top 5 videos rated in the database and upload it to a discord channel.",
      link: "https://github.com/kmsungporant/video_upload_web",
      image: "portfolio/videoUploader.gif",
      icons: [
        <SiPython key="first" />,
        <SiMicrosoftazure key="second" />,
        <SiLinux key="third" />,
        <VscRemoteExplorer key="fourth" />,
        <SiNextdotjs key="first" />,
        <SiReact key="second" />,
        <SiNodedotjs key="third" />,
        <SiTailwindcss key="fourth" />,
        <SiGithubactions key="fifth" />,
        <MdAnimation key="sixth" />,
        <SiMicrosoftazure key="seventh" />,
      ],
    },
  ];

export default function PorfolioPage() {
  const [selected, setSelected] = useState(0);
  const [iValue, setIValue] = useState(0);

  useEffect(() => {
    if (selected != projects.length) {
      const timer = setInterval(() => {
        setSelected(selected + 1);
      }, 7500);
      return () => clearInterval(timer);
    } else {
      setSelected(0)
    }

  }, [selected])


  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center bg-gray-900 dark:bg-light-background font-Consolas "
    >
      <motion.h1
        className="pt-40 text-4xl font-black text-dark-tertiary dark:text-light-tertiary"
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
      <div >
        <div className="hidden lg:block">
          <NewCards projects={projects} selected={selected} />
        </div>
        <div className="block lg:hidden">
          <Cards projects={projects} />
        </div>
        <Nav projects={projects} selected={selected} setSelected={setSelected} />
        <Icons />
      </div>
    </div>
  );
}
