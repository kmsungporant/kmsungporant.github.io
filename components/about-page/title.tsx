import { motion } from "framer-motion";
import Link from "next/link";

const Bar = {
  initial: {
    width: "0%",
  },
  upper: {
    width: "100%",
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
  },
  lower: {
    width: "70%",
    transition: { duration: 2, ease: "easeInOut", delay: 0.8 },
  },
};

export default function Title() {
  return (
    <div className="hidden w-1/2 h-full lg:block">
      <div className="flex flex-col justify-center h-full">
        <div className="flex flex-col justify-center w-full h-40 ">
          <motion.h1
            className="text-2xl text-dark-tertiary dark:text-light-tertiary"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
            viewport={{ once: true }}
          >
            {"<AboutMe>"}
          </motion.h1>
          <div className="flex flex-col items-start font-black">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.6 },
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
                    className=" w-full h-[7%] bg-dark-secondary dark:bg-light-secondary"
                  />
                </div>
                <div className="flex justify-start w-full h-full ">
                  <motion.div
                    variants={Bar}
                    initial="initial"
                    whileInView="lower"
                    viewport={{ once: true }}
                    className=" w-0 h-[7%] bg-dark-secondary dark:bg-light-secondary"
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
            transition: { duration: 1, delay: 1 },
          }}
          viewport={{ once: true }}
        >
          <span className="text-lg">
            My name is{" "}
            <span className="underline text-dark-primary dark:text-light-primary ">
              Minsung Kim
            </span>
            , studying Computer Science at George Mason University. Most of the
            projects I&apos;ve worked on are self-taught and I&apos;m always
            persist for new challenges to learn.
          </span>
        </motion.div>
        <Link href="/resume.pdf" passHref>
          <a target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 1, delay: 0.75 },
              }}
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              className="px-4 py-2 mt-5 font-bold rounded-full text-dark-secondary bg-dark-primary dark:bg-light-primary dark:text-light-tertiary "
            >
              My Résumé
            </motion.button>
          </a>
        </Link>
        <motion.h1
          className="mt-5 text-2xl text-dark-tertiary dark:text-light-tertiary"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
        >
          {"</AboutMe>"}
        </motion.h1>
      </div>
    </div>
  );
}
