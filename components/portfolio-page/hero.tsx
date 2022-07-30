import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          viewport={{ once: false }}
          className="z-20 justify-center text-6xl font-semibold text-white dark:text-black"
        >
          My Portfolio
          <div className="flex flex-col justify-center h-full mt-2 ">
            <div className="flex justify-center w-full h-full -mb-9">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{
                  width: "100%",
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                viewport={{ once: false }}
                className="bg-white dark:bg-black w-full h-[7%] "
              ></motion.div>
            </div>
            <div className="flex justify-center w-full h-full">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{
                  width: "70%",
                  transition: { duration: 2, ease: "easeInOut" },
                }}
                viewport={{ once: false }}
                className="bg-white dark:bg-black w-0 h-[7%]"
              ></motion.div>
            </div>
          </div>
        </motion.span>
        <span className="mt-12 text-lg font-semibold dark:text-NavyBlueLight text-WitchingHourLight">
          Scroll Down to learn more!
        </span>
      </div>
    </div>
  );
}
