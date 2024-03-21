import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Nav from "./nav";

export default function NewCards({ projects, selected, setSelected }) {
    return (
        <div className="flex flex-col items-center justify-center h-[40em] relative ">
            {projects.map((project, i) => (
                <div key={i}>
                    <AnimatePresence exitBeforeEnter>
                        {selected == i && (
                            <div className="relative flex items-center 2xl:w-[85rem] w-[85rem]">
                                <div className="absolute flex flex-row items-center justify-center w-full 2xl:justify-end">
                                    <div className="relative w-1/2 2xl:pb-[50%] pb-[40%] items-center">
                                        <div className="absolute flex items-center justify-center w-full h-full">
                                            <motion.img
                                                src={project.source}
                                                alt={project.name}
                                                className="rounded-3xl drop-shadow-2xl "
                                                initial={{ opacity: 0, x: 100 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                    transition: { duration: 0.5, delay: 0.5 },
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    x: 100,
                                                    transition: { duration: 0.5 },
                                                }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: { duration: 0.5, delay: 0.5 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.5 },
                                        }}
                                        viewport={{ once: true }}
                                        className="flex justify-center w-2/3 h-full text-left 2xl:w-full 2xl:justify-start 2xl:absolute text-dark-primary dark:text-light-primary"
                                    >
                                        <div className="flex flex-col w-[55%] justify-center h-full">
                                            <div className="flex flex-row 2xl:flex-col gap-x-3 ">
                                                <div className="flex-col">
                                                    <h1 className="text-dark-secondary dark:text-light-secondary">Featured Projects</h1>
                                                    <h2 className="text-xl font-black 2xl:text-3xl">{project.name}</h2>
                                                </div>
                                            </div>
                                            <div className="p-8 my-4 2xl:text-lg text-md rounded-2xl opacity-80 bg-dark-secondary dark:bg-light-secondary text-dark-tertiary dark:text-light-tertiary">
                                                <div className="font-semibold opacity-100">
                                                    {project.description}
                                                    <div className="h-0.5 w-44 bg-dark-tertiary my-5" />
                                                    <div className="flex flex-col justify-start ">
                                                        {project.website !== null && (
                                                            <Link href={project.website} passHref>
                                                                <motion.a target="_blank" className="flex items-center justify-start w-full gap-4 font-bold 2xl:text-2xl " whileHover={{ scale: 1.02, x: 4 }}>
                                                                    <BsGlobe /> {"View Wesbite"}
                                                                </motion.a>
                                                            </Link>
                                                        )}

                                                        {project.link && (
                                                            <Link href={project.link} passHref>
                                                                <motion.a
                                                                    target="_blank"
                                                                    className="flex items-center justify-start w-full gap-4 mt-2 font-bold 2xl:text-2xl hover:text-dark-primary hover:dark:text-light-primary "
                                                                    whileHover={{ scale: 1.02, x: 4 }}
                                                                >
                                                                    <SiGithub />
                                                                    {"View GitHub"}
                                                                </motion.a>
                                                            </Link>
                                                        )}

                                                        {project.download && (
                                                            <Link href={project.download} passHref>
                                                                <motion.a target="_blank" className="flex items-center justify-start w-full gap-4 font-bold 2xl:text-2xl " whileHover={{ scale: 1.02, x: 4 }}>
                                                                    <FaAppStore /> {"Download App"}
                                                                </motion.a>
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-start my-4 text-3xl gap-7 text-dark-secondary dark:text-light-secondary">{project.icons}</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
            <Nav projects={projects} selected={selected} setSelected={setSelected} />
        </div>
    );
}
