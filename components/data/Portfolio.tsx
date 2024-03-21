import { ReactNode } from "react";
import { SiDart, SiExpo, SiFirebase, SiFlutter, SiFramer, SiGithubactions, SiGooglemaps, SiLinux, SiMicrosoftazure, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscRemoteExplorer } from "react-icons/vsc";

export const Projects: {
    id: number;
    name: string;
    description: string;
    link: string;
    website: string;
    source: string;
    download: string;
    icons: ReactNode[];
}[] = [
    {
        id: 0,
        name: "SimpliSplit - Mobile Application",
        description:
            "A fully functional mobile application that allows user to scan their bills and split the cost with their friends seamlessly. The app is built with React Native, Native Wind, TypeScript, and Expo. The OCR of the app is connected to a custom API built with Python using Microsoft Azure. The app is available on the App Store and has over 1500 impressions to date.",
        link: null,
        source: "portfolio/simpliSplit.gif",
        website: "https://www.simplisplit.com/",
        download: "https://apps.apple.com/us/app/simplisplit/id6470001695",
        icons: [<SiReact key="first" />, <SiTailwindcss key="second" />, <SiTypescript key="fifth" />, <SiExpo key="sixth" />, <SiMicrosoftazure key="seventh" />, <SiPython key="eighth" />],
    },
    {
        id: 1,
        name: "Personal Portfolio - Web Application",
        description:
            "A personal portfolio website using Next.js, Tailwind CSS, Framer Motion, TypeScript, and more. I utilized GitHub Actions for automatic building and deployment (CI/CD) of the most up-to-date webpage. The website is hosted on GitHub Pages and managed through Google Domains.",
        link: "https://github.com/kmsungporant/kmsungporant.github.io/",
        source: "portfolio/websiteVid.gif",
        website: "https://MinsungK.com/",
        download: null,
        icons: [<SiNextdotjs key="first" />, <SiReact key="second" />, <SiNodedotjs key="third" />, <SiTailwindcss key="fourth" />, <SiGithubactions key="fifth" />, <SiFramer key="sixth" />, <SiTypescript key="seventh" />],
    },
];
