import { motion } from "framer-motion";
import { BsFillCalendarDateFill, BsPersonFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

export default function Card({ project, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
          delay: i * 0.3,
        },
      }}
      className=" w-[50rem] rounded-3xl bg-dark-secondary"
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center p-3 sm:flex-row">
        <img
          src={project.logo}
          alt={project.company}
          className="w-4/5 mx-0 sm:w-1/3 sm:mx-7 h-1/3"
        />
        <div className="text-lg text-dark-tertiary">
          <h3 className="text-3xl font-black underline text-dark-primary">
            {project.company}
          </h3>
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
          <ul className="text-sm w-[95%] list-disc my-3 pl-4">
            {project.description.map((description, i) => (
              <li key={i}>{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
