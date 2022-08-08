import { motion } from "framer-motion";

const Bar = {
  initial: {
    width: "0%",
  },
  upper: {
    width: "100%",
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.8 },
  },
  lower: {
    width: "70%",
    transition: { duration: 2, ease: "easeInOut", delay: 0.8 },
  },
};

export default function Title() {
  return (
    <div className="w-1/2 ">
      <div className="flex flex-col items-center font-black">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 1, delay: 0.6 },
          }}
          viewport={{ once: true }}
          className="z-20 justify-center text-3xl font-semibold text-dark-primary dark:text-light-primary"
        >
          {"MyPortfolio"}
        </motion.span>
      </div>
    </div>
  );
}
