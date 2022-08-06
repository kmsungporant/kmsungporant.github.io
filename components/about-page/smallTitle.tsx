import { motion } from "framer-motion";
import Link from "next/link";

export default function SmallTitle() {
  return (
    <div className="h-full">
      <div className="block h-full lg:hidden">
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
                  className="bg-dark-secondary dark:bg-light-secondary w-0 h-[7%]"
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
            viewport={{ once: true }}
            className="w-3/5 mt-10 text-center text-dark-secondary dark:text-light-secondary text-md"
          >
            &nbsp; My name is{" "}
            <span className="underline text-dark-primary dark:text-light-primary ">
              Minsung Kim
            </span>
            , studying Computer Science at George Mason University. Most of the
            projects I&apos;ve worked on are self-taught and I&apos;m always
            persist for new challenges to learn.
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
                viewport={{ once: true }}
                className="px-4 py-2 mt-5 font-bold text-black bg-white rounded-full dark:text-white dark:bg-black hover:bg-WitchingHourLight hover:dark:hover:bg-NavyBlueLight"
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
