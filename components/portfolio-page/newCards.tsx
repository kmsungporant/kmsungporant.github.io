import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BsGlobe } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import Nav from "./nav";

export default function NewCards({ projects, selected, setSelected }) {
    return (
        <div className="flex flex-col items-center justify-center h-[40em] relative ">
            {projects.map((project, i) => (
                <div key={i}>
                    <AnimatePresence exitBeforeEnter>
                        {selected == i && (
                            <div className="relative flex items-center 2xl:w-[85rem] w-[60rem]">
                                <div className="absolute flex flex-col items-center justify-center w-full 2xl:flex-row 2xl:justify-end">
                                    <div className="relative w-1/2 2xl:pb-[50%] pb-[40%]">
                                        <div className="absolute flex items-center w-full h-full">
                                            <motion.img
                                                src={project.source}
                                                alt={project.name}
                                                className="w-full rounded-3xl drop-shadow-2xl "
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
                                        className="flex justify-center h-full text-left 2xl:justify-start 2xl:absolute text-dark-primary dark:text-light-primary"
                                    >
                                        <div className="flex flex-col w-[55%] justify-center h-full">
                                            <div className="flex flex-row 2xl:flex-col gap-x-3 ">
                                                <span className="flex justify-start mb-4 text-3xl font-black 2xl:text-4xl ">
                                                    {i + 1}
                                                    {")"}
                                                </span>
                                                <div className="flex-col">
                                                    <h1 className="text-dark-secondary dark:text-light-secondary">Featured Projects</h1>
                                                    <h2 className="text-xl font-black 2xl:text-3xl">{project.name}</h2>
                                                </div>
                                            </div>
                                            <p className="p-8 my-4 2xl:text-lg text-md rounded-2xl opacity-80 bg-dark-secondary dark:bg-light-secondary text-dark-tertiary dark:text-light-tertiary">
                                                <span className="font-semibold opacity-100">{project.description}</span>
                                            </p>
                                            <div className="flex justify-start my-4 text-3xl gap-7 text-dark-secondary dark:text-light-secondary">
                                                {project.icons}
                                            </div>
                                            {project.link ? (
                                                <div className="flex flex-col justify-start text-dark-secondary dark:text-light-secondary">
                                                    {project.website !== null && (
                                                        <Link href={project.website} passHref>
                                                            <motion.a
                                                                target="_blank"
                                                                className="flex items-center justify-start w-full gap-4 font-bold 2xl:text-2xl hover:text-dark-primary hover:dark:text-light-primary "
                                                                whileHover={{ scale: 1.02, x: 4 }}
                                                            >
                                                                <BsGlobe /> {"View Wesbite"}
                                                            </motion.a>
                                                        </Link>
                                                    )}

                                                    <Link href={project.link} passHref>
                                                        <motion.a
                                                            target="_blank"
                                                            className="flex items-center justify-start w-full gap-4 font-bold 2xl:text-2xl hover:text-dark-primary hover:dark:text-light-primary "
                                                            whileHover={{ scale: 1.02, x: 4 }}
                                                        >
                                                            <SiGithub />
                                                            {"View GitHub"}
                                                        </motion.a>
                                                    </Link>
                                                </div>
                                            ) : (
                                                <div className="m-5" />
                                            )}
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
