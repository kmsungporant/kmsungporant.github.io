import { motion } from "framer-motion";
import Link from "next/link";
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
    image: "websiteVid.gif",
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
      "Developed a discord bot using python and Discord API and hosted via Azure using Virtual Machine to run 24/7 for a discord server. Integrated various features forthe server: music player for YouTube, mini games, shortcut commands and more!",
    link: "https://github.com/kmsungporant/Moon-Bot",
    image: "discord.gif",
    icons: [
      <SiPython key="first" />,
      <SiMicrosoftazure key="second" />,
      <SiLinux key="third" />,
      <VscRemoteExplorer key="fourth" />,
    ],
  },

  {
    name: "Private Minecraft Server",
    description:
      "Hosted and managed a Private Minecraft Server on Azure and Remote SSH Terminal.",
    link: "",
    image: "server.gif",
    icons: [
      <SiGooglecloud key="first" />,
      <SiLinux key="second" />,
      <SiJava key="third" />,
    ],
  },
];

export default function NewCards() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-16">
      {projects.map((project, i) => (
        <div key={i} className="flex w-[80rem] relative items-center ">
          <img
            src={project.image}
            alt={project.name}
            className="object-cover w-3/5 h-full rounded-3xl"
          />
          <div className="absolute w-2/5 h-full text-right right-16 text-dark-tertiary">
            <div className="flex flex-col justify-center h-full">
              <h1>Featured Projects</h1>
              <h2 className="mb-4 text-3xl font-black ">{project.name}</h2>
              <p className="p-3 my-4 text-lg rounded-2xl bg-dark-secondary">
                {project.description}
              </p>
              <div className="flex justify-end my-4 text-3xl gap-7">
                {project.icons}
              </div>
              <Link href={project.link}>
                <a
                  target="_blank"
                  className="flex items-center justify-end gap-2 font-black "
                >
                  {"View on"} <SiGithub />
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
