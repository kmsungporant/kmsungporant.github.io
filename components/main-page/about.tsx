import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div id="about" className="h-full snap-start ">
      <AnimatePresence>
        <div className="hidden h-full 2xl:block">
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center justify-end w-3/5 h-full">
              <motion.div
                className="flex justify-center w-2/5"
                whileInView={{
                  x: 75,
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                viewport={{ once: false }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 3,
                    transition: { type: "spring", stiffness: 125 },
                  }}
                >
                  <img
                    alt="MinsungsFace"
                    src="/MinsungFace.jpg"
                    width={350}
                    height={350}
                    className="object-cover h-auto width-full rounded-tl-[30%] rounded-bl-[30%] rounded-tr-[45%] rounded-br-3xl border-4 border-white dark:border-black"
                  />
                </motion.div>
              </motion.div>
              <div className="flex flex-col items-end justify-center w-1/2 h-full text-white">
                <div className="flex flex-col items-end text-5xl font-black">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1 } }}
                    viewport={{ once: false }}
                    className="z-20 justify-center text-5xl font-semibold text-white lg:text-6xl dark:text-black"
                  >
                    Who am I?
                    <div className="flex flex-col justify-center h-full mt-2 ">
                      <div className="flex justify-end w-full h-full -mb-9">
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
                      <div className="flex justify-end w-full h-full">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{
                            width: "70%",
                            transition: { duration: 2, ease: "easeInOut" },
                          }}
                          viewport={{ once: false }}
                          className="bg-white dark:bg-black w-0 h-[7%]"
                        ></motion.div>
                      </div>
                    </div>
                  </motion.span>
                </div>
                <div className="py-10 pl-32 text-lg font-black text-right ">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: { duration: 1, delay: 0.5 },
                    }}
                    viewport={{ once: false }}
                    className="text-lg text-center text-white dark:text-black "
                  >
                    &nbsp; My name is{" "}
                    <span className="underline text-WitchingHourLight dark:text-NavyBlueLight">
                      Minsung Kim
                    </span>
                    , studying Computer Science at George Mason University. Most
                    of the projects I&apos;ve worked on are self-taught and
                    I&apos;m always persist for new challenges to learn.
                  </motion.span>
                </div>
                <Link href="/resume.pdf" passHref>
                  <a target="_blank">
                    <motion.button
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1,
                        transition: { duration: 1, delay: 0.75 },
                      }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: false }}
                      className="px-4 py-2 font-bold text-black bg-white rounded-full dark:text-white dark:bg-black hover:bg-WitchingHourLight hover:dark:hover:bg-NavyBlueLight"
                    >
                      My Résumé
                    </motion.button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="block h-full 2xl:hidden">
          <div className="flex flex-col items-center justify-center h-full font-black dark:bg-white ">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              viewport={{ once: false }}
              className="z-20 justify-center text-5xl font-semibold text-white lg:text-6xl dark:text-black"
            >
              Who am I?
              <div className="flex flex-col justify-center h-full mt-2 ">
                <div className="flex justify-center w-full h-full -mb-9">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{
                      width: "90%",
                      transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    viewport={{ once: false }}
                    className="bg-white dark:bg-black w-full h-[7%] "
                  ></motion.div>
                </div>
                <div className="flex justify-center w-full h-full">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{
                      width: "50%",
                      transition: { duration: 2, ease: "easeInOut" },
                    }}
                    viewport={{ once: false }}
                    className="bg-white dark:bg-black w-0 h-[7%]"
                  ></motion.div>
                </div>
              </div>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ once: false }}
              className="w-3/5 mt-10 text-center text-white text-md dark:text-black"
            >
              &nbsp; My name is{" "}
              <span className="underline text-WitchingHourLight dark:text-NavyBlueLight">
                Minsung Kim
              </span>
              , studying Computer Science at George Mason University. Most of
              the projects I&apos;ve worked on are self-taught and I&apos;m
              always persist for new challenges to learn.
            </motion.h1>
            <Link href="/resume.pdf" passHref>
              <a target="_blank">
                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1, delay: 0.75 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: false }}
                  className="px-4 py-2 mt-5 font-bold text-black bg-white rounded-full dark:text-white dark:bg-black hover:bg-WitchingHourLight hover:dark:hover:bg-NavyBlueLight"
                >
                  My Résumé
                </motion.button>
              </a>
            </Link>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}
