import { motion } from "framer-motion";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function Cards({ projects }) {
  return (
    <div className="grid grid-cols-1 mt-8 lg:grid-cols-3">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
              delay: i * 0.2,
            },
          }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center my-5 lg:m-5 text-dark-primary bg-dark-secondary dark:text-light-primary dark:bg-light-secondary w-80 rounded-3xl">
            <h1 className="mt-5 text-xl font-black text-dark-tertiary dark:text-light-tertiary">
              {project.name}
            </h1>
            <motion.div className="w-[90%] mt-5 " whileHover={{ scale: 1.3 }}>
              <img
                src={project.image}
                alt={project.name}
                className="border-2 rounded-2xl border-dark-tertiary dark:border-light-tertiary"
              />
            </motion.div>

            <h2 className="p-2 text-center text-dark-tertiary dark:text-light-tertiary">
              {project.description}
            </h2>
            <div className="grid grid-cols-3 ">
              {project.icons.map((icon, i) => (
                <motion.div
                  key={i}
                  className="m-1 text-3xl text-dark-tertiary hover:text-dark-primary dark:text-light-tertiary hover:dark:text-light-primary"
                  whileHover={{ scale: 1.2 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            {project.link ? (
              <Link passHref href={project.link}>
                <motion.a
                  target="_blank"
                  className="flex flex-row items-center m-5 text-lg font-black text-dark-tertiary hover:text-dark-primary dark:text-light-tertiary hover:dark:text-light-primary"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="mr-2">View on</span>
                  <span className="text-2xl">
                    <SiGithub />
                  </span>
                </motion.a>
              </Link>
            ) : (
              <div className="m-5" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
