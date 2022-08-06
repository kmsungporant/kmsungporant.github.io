import { motion } from "framer-motion";

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
      >
        {"<AboutMe>"}
      </motion.h1>
      <div className="flex flex-col w-full h-[15%] justify-center ">
        <div className="flex flex-col items-start font-black">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.6 },
            }}
            className="z-20 justify-center text-5xl font-semibold text-dark-primary dark:text-light-primary"
          >
            Who am I?
            <div className="flex flex-col justify-center h-full mt-2 ">
              <div className="flex justify-start w-full h-full -mb-9">
                <motion.div
                  variants={Bar}
                  initial="initial"
                  whileInView="upper"
                  className=" w-full h-[7%] bg-dark-secondary dark:bg-light-secondary"
                ></motion.div>
              </div>
              <div className="flex justify-start w-full h-full ">
                <motion.div
                  variants={Bar}
                  initial="initial"
                  whileInView="lower"
                  className=" w-0 h-[7%] bg-dark-secondary dark:bg-light-secondary"
                ></motion.div>
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
      >
        <span className="text-lg">
          My name is{" "}
          <span className="underline text-dark-primary ">Minsung Kim</span>,
          studying Computer Science at George Mason University. Most of the
          projects I&apos;ve worked on are self-taught and I&apos;m always
          persist for new challenges to learn.
        </span>
      </motion.div>
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
      >
        {"</AboutMe>"}
      </motion.h1>
    </div>
  );
}
