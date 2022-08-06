import { motion } from "framer-motion";
import Cards from "./portfolio-page/cards";
import Icons from "./portfolio-page/icons";
import Title from "./portfolio-page/title";

export default function PorfolioPage() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center bg-dark-background dark:bg-light-background font-Consolas"
    >
      <Title />
      <div className="flex items-center justify-center">
        <Cards />
      </div>
      <Icons />
    </div>
  );
}
