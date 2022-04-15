import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="h-full">
      <AnimatePresence>
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
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  viewport={{ once: false }}
                  className="bg-white dark:bg-black w-0 h-[7%] "
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
            className="w-3/5 mt-10 text-sm text-center text-white dark:text-black"
          >
            &nbsp; My name is{" "}
            <span className="underline text-WitchingHourLight dark:text-NavyBlueLight">
              Minsung Kim
            </span>
            , studying Computer Science at George Mason University. Always
            persisting in learning new things. Have a look at my work experience
            by clicking below!
          </motion.h1>
          <Link href="/aboutPage" passHref>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transform: "translateY(-10px)",
                transition: { duration: 1, delay: 0.75 },
              }}
              viewport={{ once: false }}
              className="px-4 py-2 m-4 mt-10 font-bold text-black bg-white rounded-full dark:text-white dark:bg-black hover:bg-WitchingHourLight hover:dark:hover:bg-NavyBlueLight"
            >
              Work Experience
            </motion.button>
          </Link>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default About;
