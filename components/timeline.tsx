import { motion } from "framer-motion";
import { Experience } from "./data/Timeline";
import Cards from "./timeline-page/cards";

export default function Timeline() {
    return (
        <div id="timeline" className="flex flex-col items-center justify-center transition-colors bg-gray-900 dark:bg-light-background font-Consolas">
            <motion.h1
                className="mt-20 text-4xl font-black text-dark-tertiary dark:text-light-tertiary"
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
                {"<Timeline />"}
            </motion.h1>
            <Cards Experience={Experience} />
        </div>
    );
}
