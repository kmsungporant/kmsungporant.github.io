import { motion } from "framer-motion";
import Cards from "./portfolio-page/cards";
import Icons from "./portfolio-page/icons";

export default function PorfolioPage() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center bg-dark-background dark:bg-light-background font-Consolas"
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
      <div className="flex items-center justify-center">
        <Cards />
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
