/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function ImageLogo() {
    return (
        <div className="hidden xl:block">
            <div className="flex items-center mx-32 ">
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
                            rotate: 2,
                            transition: { type: "spring", stiffness: 125 },
                        }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="other/MinsungFace.jpg"
                            alt="logo"
                            width={500}
                            height={500}
                            className="object-cover h-auto border-4 drop-shadow-2xl width-full rounded-3xl border-dark-primary dark:border-light-primary "
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
