import { motion } from "framer-motion";
import Cards from "./timeline-page/cards";

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="flex flex-col items-center justify-center h-full bg-dark-background dark:bg-light-background font-Consolas"
    >
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
        {"<Timeline>"}
      </motion.h1>

      <Cards />
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
        {"</Timeline>"}
      </motion.h1>
    </div>
  );
}
