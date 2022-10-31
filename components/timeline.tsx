import { motion } from "framer-motion";
import { ReactNode } from "react";
import { GrUserManager } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import Cards from "./timeline-page/cards";

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
    logo: "timeline/BHLogo.png",
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
    logo: "timeline/BonchonLogo.png",
    icon: <GrUserManager />,
  },
];

export default function Timeline() {
  return (
    <div id="timeline" className="flex flex-col items-center justify-center h-full transition-colors bg-gray-900 dark:bg-light-background font-Consolas">
      <motion.h1
        className="text-4xl font-black text-dark-tertiary dark:text-light-tertiary"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
      >
        {"<Timeline />"}
      </motion.h1>
      <Cards projects={projects} />
    </div>
  );
}
