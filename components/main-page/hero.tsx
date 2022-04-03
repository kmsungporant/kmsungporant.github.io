import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center h-full font-semibold "
    >
      <div className="flex flex-col ">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: false }}
            className="text-lg text-white dark:text-black "
          >
            <span className="text-3xl">Hello</span>, my name is{" "}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: false }}
            className="mt-2 text-5xl text-WitchingHourLight dark:text-NavyBlueLight"
          >
            <Typewriter
              options={{
                strings: ["Minsung!"],
                autoStart: true,
                loop: true,
                delay: 250,
                cursor: "_",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
            viewport={{ once: false }}
          >
            <div className="mt-3 text-white text-md dark:text-black">
              An incoming Computer Scientist.
            </div>
            <div className="text-sm text-white dark:text-black">
              <span className="underline text-WitchingHourLight dark:text-NavyBlueLight">
                Scroll down
              </span>{" "}
              to learn more!
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
