/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function ImageLogo() {
  return (
    <div className="hidden xl:block">
      <div className="flex flex-col items-end w-1/2 mx-24 ">
        <motion.div
          className=""
          whileInView={{
            x: 75,
            transition: { duration: 1.2, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 3,
              transition: { type: "spring", stiffness: 125 },
            }}
            viewport={{ once: true }}
          >
            <img
              src="other/MinsungFace.jpg"
              alt="logo"
              width={500}
              height={500}
              className="drop-shadow-2xl object-cover h-auto width-full rounded-tl-[30%] rounded-bl-[30%] rounded-tr-[45%] rounded-br-3xl border-4 border-dark-primary dark:border-light-primary"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
