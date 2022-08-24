import { motion } from "framer-motion";
import Link from "next/link";

const fromLeft = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.3,
    },
  },
};
export default function SideInfo() {
  return (
    <motion.div
      className="fixed z-50 hidden -right-10 bottom-20 md:block"
      variants={fromLeft}
      initial="initial"
      animate="animate"
      viewport={{ once: true }}
    >
      <Link
        href="https://github.com/kmsungporant/kmsungporant.github.io"
        passHref
      >
        <a target="_blank">
          <h1 className="-rotate-90 text-dark-secondary dark:text-light-secondary hover:text-dark-secondary/75 hover:dark:text-light-secondary/75">
            {"</> by Minsung Kim"}
          </h1>
        </a>
      </Link>
    </motion.div>
  );
}
