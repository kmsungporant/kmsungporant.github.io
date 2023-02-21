import { motion } from "framer-motion";
import Link from "next/link";

export default function SmallTitle() {
  return (
    <div className="h-full">
      <div className="block h-full xl:hidden">
        <div className="flex flex-col items-center justify-center h-full font-black ">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}
            className="z-20 justify-center text-5xl font-semibold text-dark-primary dark:text-light-primary lg:text-6xl "
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
                  viewport={{ once: true }}
                  className="bg-dark-secondary dark:bg-light-secondary w-full h-[7%] "
                ></motion.div>
              </div>
              <div className="flex justify-center w-full h-full">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{
                    width: "50%",
                    transition: { duration: 2, ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  className="bg-dark-secondary dark:bg-light-secondary h-[7%]"
                />
              </div>
            </div>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-3/5 mt-10 text-center text-dark-secondary dark:text-light-secondary text-md"
          >
            Hi, I&apos;m <span className="font-black underline text-dark-primary dark:text-light-primary ">Minsung Kim</span>, a computer science student at
            George Mason University. As a self-taught programmer, I&apos;m always up for a challenge and eager to explore new technologies. I&apos;m a
            collaborative team player and enjoy learning with peers. I&apos;m excited to see where my passion for computer science will take me!
          </motion.h1>
          <Link href="documentation/resume.pdf" passHref>
            <a target="_blank">
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.75 },
                }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 mt-5 font-bold rounded-full text-dark-secondary bg-dark-primary dark:bg-light-primary dark:text-light-tertiary"
              >
                My Résumé
              </motion.button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
