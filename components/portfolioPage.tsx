import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Projects } from "./data/Portfolio";
import Cards from "./portfolio-page/cards";
import NewCards from "./portfolio-page/newCards";

export default function PorfolioPage() {
    const [selected, setSelected] = useState(0);
    useEffect(() => {
        if (selected != Projects.length) {
            const timer = setInterval(() => {
                setSelected(selected + 1);
            }, 9000);
            return () => clearInterval(timer);
        } else {
            setSelected(0);
        }
    }, [selected]);

    return (
        <div id="portfolio" className="flex flex-col items-center justify-center h-full transition-colors bg-gray-900 dark:bg-light-background font-Consolas">
            <motion.h1
                className="mb-10 text-4xl font-black text-dark-tertiary dark:text-light-tertiary"
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
            <div>
                <div className="hidden lg:block">
                    <NewCards projects={Projects} selected={selected} setSelected={setSelected} />
                </div>
                <div className="block lg:hidden">
                    <Cards projects={Projects} />
                </div>
            </div>
        </div>
    );
}
