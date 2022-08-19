import { motion } from "framer-motion";
import Cards from "./portfolio-page/cards";
import Icons from "./portfolio-page/icons";
import NewCards from "./portfolio-page/newCards";

export default function PorfolioPage() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center bg-gray-900 gap-y-5 dark:bg-light-background font-Consolas"
    >
      <motion.h1
        className="text-4xl font-black text-dark-tertiary dark:text-light-tertiary"
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
        {"<Portfolio />"}
      </motion.h1>
      <div className="hidden 2xl:block">
        <NewCards />
      </div>
      <div className="block 2xl:hidden">
        <Cards />
      </div>
      <Icons />
    </div>
  );
}
