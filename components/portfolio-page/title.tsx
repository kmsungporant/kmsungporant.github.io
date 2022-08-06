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
    <div className="w-1/2 h-24">
      <div className="flex flex-col w-full h-[15%] justify-center ">
        <div className="flex flex-col items-center font-black">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 1, delay: 0.6 },
            }}
            className="z-20 justify-center font-semibold text-7xl text-dark-primary dark:text-light-primary"
          >
            Portfolio
            <div className="flex flex-col justify-center h-full mt-2 ">
              <div className="flex justify-center w-full h-full -mb-9">
                <motion.div
                  variants={Bar}
                  initial="initial"
                  whileInView="upper"
                  className=" w-full h-[7%] bg-dark-secondary dark:bg-light-secondary"
                />
              </div>
              <div className="flex justify-center w-full h-full ">
                <motion.div
                  variants={Bar}
                  initial="initial"
                  whileInView="lower"
                  className=" w-0 h-[7%] bg-dark-secondary dark:bg-light-secondary"
                />
              </div>
            </div>
          </motion.span>
        </div>
      </div>
    </div>
  );
}
