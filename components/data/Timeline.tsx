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
        company: "Systems Planning Analysis (Interim TS)",
        title: "Software Engineer Intern",
        description: [
            "Developed a Microsoft SharePoint website aimed at optimizing data analysis processes by effectively organizing classified data.",
            "Utilized libraries like ChartJS to create visualizations and implement data filtration functionalities using JSON data retrieved from the Microsoft SharePoint API.",
            "Contributed to research efforts alongside engineers to identify and integrate superior tools for enhanced project efficiency.",
            "Collaborated with senior engineers to design and implement an API library, subsequently adopted across all team websites for streamlined operations.",
        ],

        location: "Alexandria, VA",
        startDate: "Jan 2024",
        endDate: "May 2024",
        logo: "timeline/SPALogo.png",
        icon: <RiComputerLine />,
    },
    {
        company: "Blackhorse Solutions - A Parsons Company",
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
];
