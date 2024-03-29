import { motion } from "framer-motion";
import Link from "next/link";
import { Icons } from "./data/Contacts";

export default function Contacts() {
  return (
    <div id="contacts" className="h-full transition-colors bg-gray-900 dark:bg-light-background">
      <div className="flex items-center justify-center h-full space-x-5 ">
        <div className="flex justify-center w-[3%]">
          <div className="flex justify-end w-[20%] space-x-5">
            <div className="flex flex-row items-center justify-center w-[15%] text-4xl lg:text-5xl font-black -rotate-90 ">
              <motion.div
                initial={{ opacity: 0, transform: "translateY(-10px)" }}
                whileInView={{
                  opacity: 1,
                  transform: "translateY(0px)",
                  transition: { duration: 1, delay: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-dark-primary dark:text-light-primary"
              >
                {"Contacts"}
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, transform: "translateX(-10px)" }}
          whileInView={{
            opacity: 1,
            transform: "translateX(0px)",
            transition: { duration: 1 },
          }}
          viewport={{ once: true }}
          className="flex w-2 h-60 lg:h-60 bg-dark-secondary dark:bg-light-secondary"
        />
        <div>
          <motion.div
            initial={{ opacity: 0, transform: "translateX(10px)" }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0px)",
              transition: { duration: 1, delay: 0.75 },
            }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {Icons.map((icon, i) => (
              <motion.div key={i} className="text-5xl" whileHover={{ scale: 1.1, x: 30 }}>
                <Link href={icon.link} passHref>
                  <a target="_blank" className="flex flex-row items-center space-x-2 transition-colors duration-300 cursor-pointer text-dark-secondary dark:text-light-secondary hover:text-dark-primary hover:dark:text-light-primary">
                    {icon.icon}
                    <a className="flex flex-col text-xl font-black lg:text-3xl">{icon.linkName}</a>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
