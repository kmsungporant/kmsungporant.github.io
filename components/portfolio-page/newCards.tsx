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
  direction: string;
  icons: ReactNode[];
}[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "Developed a fully functional personal portfolio website using Next.js, React.js and TailwindCSS. Hosted on GitHub Pages with the domain provided and managed on Google Domains.",
    link: "https://github.com/kmsungporant/kmsungporant.github.io",
    image: "websiteVid.gif",
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
    image: "discord.gif",
    direction: "left",
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
    direction: "right",
    icons: [
      <SiGooglecloud key="first" />,
      <SiLinux key="second" />,
      <SiJava key="third" />,
    ],
  },
];

export default function NewCards() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-52">
      {projects.map((project, i) => (
        <div key={i}>
          {project.direction === "right" ? (
            <div className="relative flex items-center w-[100rem]  justify-start ">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5 },
                }}
                viewport={{ once: true }}
                className="absolute right-0 w-[55%] h-full text-right text-dark-primary dark:text-light-primary"
              >
                <div className="flex flex-col justify-center h-full">
                  <h1 className="text-dark-secondary dark:text-light-secondary">
                    Featured Projects
                  </h1>
                  <h2 className="mb-4 text-3xl font-black ">{project.name}</h2>
                  <p className="p-8 my-4 text-lg bg-dark-secondary dark:bg-light-secondary rounded-2xl text-dark-tertiary dark:text-light-tertiary">
                    {project.description}
                  </p>
                  <div className="flex justify-end my-4 text-3xl gap-7 text-dark-secondary dark:text-light-secondary">
                    {project.icons}
                  </div>
                  {project.link ? (
                    <div className="flex justify-end text-dark-secondary dark:text-light-secondary">
                      <Link href={project.link} passHref>
                        <motion.a
                          target="_blank"
                          className="text-2xl flex items-center justify-end w-[17%] gap-4 font-black hover:text-dark-primary hover:dark:text-light-primary "
                          whileHover={{ scale: 1.2 }}
                        >
                          {"View on"} <SiGithub />
                        </motion.a>
                      </Link>
                    </div>
                  ) : (
                    <div className="m-5" />
                  )}
                </div>
              </motion.div>
              <motion.img
                src={project.image}
                alt={project.name}
                className="object-cover w-[50%] h-full rounded-3xl"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              />
            </div>
          ) : (
            <div className="relative flex items-center w-[100rem] justify-end ">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, delay: 0.5 },
                }}
                viewport={{ once: true }}
                className="absolute left-0 h-full text-left text-dark-primary dark:text-light-primary"
              >
                <div className="flex flex-col w-[55%] justify-center h-full">
                  <h1 className="text-dark-secondary dark:text-light-secondary">
                    Featured Projects
                  </h1>
                  <h2 className="mb-4 text-3xl font-black ">{project.name}</h2>
                  <p className="p-8 my-4 text-lg rounded-2xl bg-dark-secondary dark:bg-light-secondary text-dark-tertiary dark:text-light-tertiary">
                    {project.description}
                  </p>
                  <div className="flex justify-start my-4 text-3xl gap-7 text-dark-secondary dark:text-light-secondary">
                    {project.icons}
                  </div>
                  {project.link ? (
                    <div className="flex justify-start text-dark-secondary dark:text-light-secondary">
                      <Link href={project.link} passHref>
                        <motion.a
                          target="_blank"
                          className="text-2xl flex items-center justify-start w-[17%] gap-4 font-black hover:text-dark-primary hover:dark:text-light-primary "
                          whileHover={{ scale: 1.2 }}
                        >
                          {"View on"} <SiGithub />
                        </motion.a>
                      </Link>
                    </div>
                  ) : (
                    <div className="m-5" />
                  )}
                </div>
              </motion.div>
              <motion.img
                src={project.image}
                alt={project.name}
                className="object-cover w-[50%] h-full rounded-3xl "
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5 },
                }}
                viewport={{ once: true }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
