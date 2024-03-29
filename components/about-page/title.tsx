import { motion } from "framer-motion";
import Link from "next/link";

const Bar = {
  initial: {
    width: "0%",
  },
  upper: {
    width: "100%",
    transition: { duration: 0.75, ease: "easeInOut", delay: 0.4 },
  },
  lower: {
    width: "70%",
    transition: { duration: 1, ease: "easeInOut", delay: 0.4 },
  },
};

export default function Title() {
  return (
    <div className="hidden w-1/2 h-full xl:block">
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col justify-center w-full h-40 ">
          <div className="flex flex-col items-start font-black">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              viewport={{ once: true }}
              className="z-20 justify-center text-5xl font-semibold text-dark-primary dark:text-light-primary"
            >
              About Me
              <div className="flex flex-col justify-center h-full mt-2 ">
                <div className="flex justify-start w-full h-full -mb-9">
                  <motion.div
                    variants={Bar}
                    initial="initial"
                    whileInView="upper"
                    viewport={{ once: true }}
                    className=" w-full h-[7%] bg-dark-primary dark:bg-light-secondary"
                  />
                </div>
                <div className="flex justify-start w-full h-full ">
                  <motion.div
                    variants={Bar}
                    initial="initial"
                    whileInView="lower"
                    viewport={{ once: true }}
                    className=" w-0 h-[7%] bg-dark-primary dark:bg-light-secondary"
                  />
                </div>
              </div>
            </motion.span>
          </div>
        </div>
        <motion.div
          className="text-lg font-black text-left pr-72 text-dark-secondary dark:text-light-secondary"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <span className="text-2xl font-medium">
            Hi, I&apos;m <span className="font-black underline text-dark-primary dark:text-light-primary ">Minsung Kim</span>, a computer science student at
            George Mason University. As a self-taught programmer, I&apos;m always up for a challenge and eager to explore new technologies. I&apos;m a
            collaborative team player and enjoy learning with peers. I&apos;m excited to see where my passion for computer science will take me!
          </span>
        </motion.div>
        <Link href="documentation/resume.pdf" passHref>
          <a target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.35 },
              }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className="w-32 px-4 py-2 mt-5 font-bold rounded-full text-dark-secondary bg-dark-primary dark:bg-light-primary dark:text-light-tertiary "
            >
              My Resume
            </motion.button>
          </a>
        </Link>
      </div>
    </div>
  );
}
