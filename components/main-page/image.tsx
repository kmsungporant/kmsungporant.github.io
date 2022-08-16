import { motion } from "framer-motion";

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
    <motion.div
      className="flex flex-col items-end w-1/2 mx-24"
      variants={animatedImage}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div className="block dark:hidden" whileHover={{ scale: 1.1 }}>
        <img src="/logo.png" alt="logo" width={500} height={500} />
      </motion.div>
      <motion.div className="hidden dark:block" whileHover={{ scale: 1.1 }}>
        <img src="/logoLight.png" alt="logo" width={500} height={500} />
      </motion.div>
    </motion.div>
  );
}
