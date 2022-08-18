import { motion } from "framer-motion";
import { ReactNode } from "react";
import { GrUserManager } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import Card from "./card";

const projects: {
  company: string;
  title: string;
  description: string[];
  location: string;
  startDate: string;
  endDate: string;
  logo: string;
  icon: ReactNode;
}[] = [
  {
    company: "Blackhorse Solutions",
    title: "Software Engineer Intern",
    description: [
      "Created a web application that creates form elements to ease the process of creating workflow forms.",
      "Used a workflow engine, Flowable written in Java, for the back-end, creating JSON files with specific form requirements that would be sent to React.JS via hooks.",
      "Fetched JSON object from Flowable via React.JS to dynamically change the form elements on the web application.",
      "Worked in a team of 5 using Agile and Scrum",
    ],

    location: "Herndon, VA",
    startDate: "May 2022",
    endDate: "August 2022",
    logo: "BHLogo.png",
    icon: <RiComputerLine />,
  },
  {
    company: "Bonchon Chicken",
    title: "Shift Manager",
    description: [
      "Practicing various responsibilities such as creating a friendly environment for the employees and the customers",
      "Managing and precisely calculating the final revenue gained at the end of the day",
    ],
    location: "Centreville, VA",
    startDate: "Sept 2021",
    endDate: "May 2022",
    logo: "BonchonLogo.png",
    icon: <GrUserManager />,
  },
];

export default function Cards() {
  return (
    <div className="flex flex-col items-center justify-center ">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
              delay: i * 0.3,
            },
          }}
          viewport={{ once: true }}
          className="relative h-full py-5"
        >
          <div className="absolute w-1 h-full bg-dark-secondary dark:bg-light-secondary -left-[5.1rem]" />
          <div className="absolute p-5 text-2xl rounded-full bg-dark-primary dark:bg-light-primary -left-28">
            {project.icon}
          </div>

          <Card project={project} i={i} />
        </motion.div>
      ))}
    </div>
  );
}
