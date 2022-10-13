import { motion } from "framer-motion";

export default function Nav({ projects, selected, setSelected }) {
  return (
    <motion.div
      className="hidden lg:block "
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeIn",
        },
      }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center ">
        {projects.map((projects, i) => (
          <button
            onClick={() => setSelected(i)}
            key={i}
            className={
              selected == i
                ? " p-2 mx-1 rounded-full bg-dark-primary  dark:bg-light-primary"
                : "p-2 mx-1 rounded-full bg-dark-secondary hover:bg-dark-secondary/70 dark:bg-light-secondary hover:dark:bg-light-secondary/70 "
            }
          />
        ))}
      </div>
    </motion.div>
  );
}
