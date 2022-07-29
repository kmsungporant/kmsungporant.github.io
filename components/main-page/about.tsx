import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="h-full snap-start ">
      <AnimatePresence>
        <div className="flex justify-center items-center h-full">
          <div className=" h-4/5 w-4/5 flex items-center justify-end">
            <motion.div
              className="flex justify-center w-2/5"
              whileInView={{
                x: 75,
                transition: { duration: 1.5, ease: "easeInOut" },
              }}
              viewport={{ once: false }}
            >
              <div className="hover:scale-125 duration-500 transition-all -rotate-3 hover:rotate-0">
                <Image
                  alt="MinsungsFace"
                  src="/MinsungFace.jpg"
                  width={350}
                  height={350}
                  className="object-cover h-auto width-full rounded-tl-[30%] rounded-bl-[30%] rounded-tr-[45%] rounded-br-3xl"
                />
              </div>
            </motion.div>
            <div className="w-1/2 text-white h-full flex items-end justify-center flex-col">
              <div className="font-black text-5xl flex-col flex items-end">
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
                          transition: { duration: 1.5, ease: "easeInOut" },
                        }}
                        viewport={{ once: false }}
                        className="bg-white dark:bg-black w-0 h-[7%]"
                      ></motion.div>
                    </div>
                  </div>
                </motion.span>
              </div>
              <div className="text-right pl-64 py-10 font-black text-lg">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  viewport={{ once: false }}
                  className="w-3/5 text-center text-white text-md dark:text-black"
                >
                  &nbsp; My name is{" "}
                  <span className="underline text-WitchingHourLight dark:text-NavyBlueLight">
                    Minsung Kim
                  </span>
                  , studying Computer Science at George Mason University. <br />
                  Most of the projects I&apos;ve worked on are self-taught and
                  I&apos;m always persist for new challenges to learn.
                </motion.span>
              </div>
              <Link href="/resume.pdf" passHref>
                <a target="_blank">
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transform: "translateY(10px)",
                      transition: { duration: 1, delay: 0.75 },
                    }}
                    whileHover={{scale: 1.1}}
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
      </AnimatePresence>
    </div>
  );
}
