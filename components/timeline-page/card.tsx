import { motion } from "framer-motion";
import { BsFillCalendarDateFill, BsPersonFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

export default function Card({ project, i }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    delay: i * 0.2,
                },
            }}
            className="lg:w-[50rem] mx-auto lg:mx-0 w-[min(50rem,80%)] rounded-3xl bg-dark-secondary dark:bg-light-secondary drop-shadow-2xl p-4"
            viewport={{ once: true }}
        >
            <div className="flex flex-col items-center p-2 sm:flex-row">
                <div className="flex items-center justify-center w-full ">
                    <img src={project.logo} alt={project.company} className="w-64 rounded-3xl" />
                </div>

                <div className="text-lg text-dark-tertiary dark:text-light-tertiary">
                    <h3 className="w-3/4 text-3xl font-black underline text-dark-primary dark:text-light-primary">{project.company}</h3>
                    <h4 className="flex items-center gap-1 font-semibold">
                        <BsPersonFill />
                        {project.title}
                    </h4>
                    <h5 className="flex items-center gap-1">
                        <MdLocationPin />
                        {project.location}
                    </h5>
                    <h6 className="flex items-center gap-1">
                        <BsFillCalendarDateFill />
                        {project.startDate} - {project.endDate}
                    </h6>
                    <ul className="text-sm w-[95%] list-disc my-3 pl-4 ">
                        {project.description.map((description, i) => (
                            <li key={i}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
