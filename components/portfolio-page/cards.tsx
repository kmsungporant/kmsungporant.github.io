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

export default function Cards() {
  return (
    <div className="grid grid-cols-1 mt-8 lg:grid-cols-3">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: i * 0.2,
            },
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center my-5 lg:m-5 text-dark-primary bg-dark-secondary dark:text-light-primary dark:bg-light-secondary w-80 rounded-3xl">
            <h1 className="mt-5 text-xl font-black text-dark-tertiary dark:text-light-tertiary">
              {project.name}
            </h1>
            <motion.div className="w-[90%] mt-5 " whileHover={{ scale: 1.3 }}>
              <img
                src={project.image}
                alt={project.name}
                className="border-2 rounded-2xl border-dark-tertiary dark:border-light-tertiary"
              />
            </motion.div>

            <h2 className="p-2 text-center text-dark-tertiary dark:text-light-tertiary">
              {project.description}
            </h2>
            <div className="grid grid-cols-3 ">
              {project.icons.map((icon, i) => (
                <motion.div
                  key={i}
                  className="m-1 text-3xl text-dark-tertiary hover:text-dark-primary dark:text-light-tertiary hover:dark:text-light-primary"
                  whileHover={{ scale: 1.2 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            {project.link ? (
              <Link passHref href={project.link}>
                <motion.a
                  target="_blank"
                  className="flex flex-row items-center m-5 text-lg font-black text-dark-tertiary hover:text-dark-primary dark:text-light-tertiary hover:dark:text-light-primary"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="mr-2">View on</span>
                  <span className="text-2xl">
                    <SiGithub />
                  </span>
                </motion.a>
              </Link>
            ) : (
              <div className="m-5" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
