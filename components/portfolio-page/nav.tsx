import { motion } from "framer-motion";

export default function Nav({ projects, selected, setSelected }) {
    return (
        <motion.div
            className="absolute hidden 2xl:bottom-0 lg:block right-32 2xl:right-auto"
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
            <div className="flex flex-col justify-center 2xl:flex-row">
                {projects.map((projects, i) => (
                    <button
                        onClick={() => setSelected(i)}
                        key={i}
                        className={
                            selected == i
                                ? " p-2 m-1 rounded-full bg-dark-primary  dark:bg-light-tertiary cursor-pointer"
                                : "p-2 m-1 rounded-full bg-dark-secondary hover:bg-dark-secondary/70 dark:bg-light-secondary hover:dark:bg-light-secondary/70 "
                        }
                    />
                ))}
            </div>
        </motion.div>
    );
}
