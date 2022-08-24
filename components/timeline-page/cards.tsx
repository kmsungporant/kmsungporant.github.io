import { motion } from "framer-motion";
import Card from "./card";

export default function Cards({ projects }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
              delay: i * 0.3,
            },
          }}
          viewport={{ once: true }}
          className="relative h-full py-5 "
        >
          <div className="absolute w-1 h-full bg-dark-secondary dark:bg-light-secondary -left-[5.1rem]" />
          <div className="absolute p-5 text-2xl rounded-full bg-dark-primary dark:bg-light-primary -left-28">
            <span className="dark:text-light-background text-dark-background ">
              {project.icon}
            </span>
          </div>
          <Card project={project} i={i} />
        </motion.div>
      ))}
    </div>
  );
}
