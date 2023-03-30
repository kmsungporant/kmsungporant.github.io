import { ReactNode } from "react";
import { GrUserManager } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";

export const Experience: {
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
