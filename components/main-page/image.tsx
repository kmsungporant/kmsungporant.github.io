import { AnimatePresence, motion } from "framer-motion";

const animatedImage = {
  initial: {
    x: "-50%",
    y: "-50%",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
};

export default function ImageLogo() {
  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-col items-end w-1/2 mx-24"
        variants={animatedImage}
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
      >
        <div className="block dark:hidden">
          <img src="/logo.png" alt="logo" width={500} height={500} />
        </div>
        <div className="hidden dark:block">
          <img src="/logoLight.png" alt="logo" width={500} height={500} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
