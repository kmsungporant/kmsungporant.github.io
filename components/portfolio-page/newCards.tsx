import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function NewCards({ projects }) {
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
                  <span className="flex justify-end mb-5 text-2xl font-black ">
                    {i + 1}
                    {")"}
                  </span>
                  <h1 className="text-dark-secondary dark:text-light-secondary">
                    Featured Projects
                  </h1>
                  <h2 className="mb-4 text-3xl font-black ">{project.name}</h2>
                  <p className="p-8 my-4 text-lg opacity-80 bg-dark-secondary dark:bg-light-secondary rounded-2xl text-dark-tertiary dark:text-light-tertiary">
                    <span className="font-semibold opacity-100">
                      {project.description}
                    </span>
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
                  <span className="flex justify-start mb-5 text-2xl font-black ">
                    {i + 1}
                    {")"}
                  </span>
                  <h1 className="text-dark-secondary dark:text-light-secondary">
                    Featured Projects
                  </h1>
                  <h2 className="mb-4 text-3xl font-black ">{project.name}</h2>
                  <p className="p-8 my-4 text-lg rounded-2xl opacity-80 bg-dark-secondary dark:bg-light-secondary text-dark-tertiary dark:text-light-tertiary">
                    <span className="font-semibold opacity-100">
                      {project.description}
                    </span>
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
