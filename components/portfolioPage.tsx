import { motion } from "framer-motion";
import Icons from "./portfolio-page/icons";
import NewCards from "./portfolio-page/newCards";

export default function PorfolioPage() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center bg-gray-800 gap-y-16 dark:bg-light-background font-Consolas"
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
        {"<Portfolio>"}
      </motion.h1>
      <div className="flex flex-col items-center justify-center">
        <NewCards />
      </div>
      <Icons />
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
        {"</Portfolio>"}
      </motion.h1>
    </div>
  );
}
