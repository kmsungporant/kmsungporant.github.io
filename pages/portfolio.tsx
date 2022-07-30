import { useState } from "react";
import Hero from "../components/portfolio-page/hero";
import ProjectElements from "../components/portfolio-page/projectElements";

export default function PortfolioPage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="h-full overflow-scroll bg-DarkGray/95 dark:bg-white font-Consolas snap-mandatory scroll-smooth snap-y">
      <Hero />
      <ProjectElements />
    </div>
  );
}
