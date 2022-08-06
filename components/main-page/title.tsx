import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const titleAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export default function Title() {
  return (
    <AnimatePresence>
      <motion.div
        className="w-1/2 mx-24 text-dark-secondary dark:text-light-secondary"
        variants={titleAnimation}
      >
        <h1 className="text-2xl font-bold">
          <motion.span
            className="text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            Hello
          </motion.span>
          <motion.span
            className="text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.4 },
            }}
          >
            , my name is
          </motion.span>
        </h1>
        <motion.h2
          className="font-black text-7xl text-dark-primary dark:text-light-primary"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          <Typewriter
            options={{
              strings: ["Minsung"],
              autoStart: true,
              loop: true,
              delay: 300,
              cursor: "_",
            }}
          />
        </motion.h2>
        <motion.h3
          className="text-lg font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.7 },
          }}
        >
          An Incoming Software Engineer
        </motion.h3>
      </motion.div>
    </AnimatePresence>
  );
}
