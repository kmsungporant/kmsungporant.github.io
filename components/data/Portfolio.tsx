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
    {
        id: 2,
        name: "Moon Bot - Discord Bot",
        description:
            "I used Python and the Discord API to develop a Discord bot that is hosted on Azure using a Virtual Machine to ensure it runs 24/7 for a Discord server. The bot includes a variety of features, such as a music player for YouTube, mini games, shortcut commands, and more.",
        link: "https://github.com/kmsungporant/Moon-Bot",
        source: "portfolio/discord.gif",
        website: null,
        download: null,
        icons: [<SiPython key="first" />, <SiMicrosoftazure key="second" />, <SiLinux key="third" />, <VscRemoteExplorer key="fourth" />],
    },
    {
        id: 3,
        name: "Video Uploader - Web Application",
        description:
            "I developed a private web application that allows only members of a Discord server to upload videos to an Azure database. A Discord bot then retrieves the videos weekly and uploads the top 5 rated videos from the database to a designated Discord channel.",
        link: "https://github.com/kmsungporant/video_upload_web",
        website: null,
        download: null,
        source: "portfolio/videoUploader.gif",
        icons: [
            <SiPython key="first" />,
            <SiMicrosoftazure key="second" />,
            <SiLinux key="third" />,
            <VscRemoteExplorer key="fourth" />,
            <SiNextdotjs key="first" />,
            <SiReact key="second" />,
            <SiNodedotjs key="third" />,
            <SiTailwindcss key="fourth" />,
            <SiFramer key="sixth" />,
            <SiMicrosoftazure key="seventh" />,
            <SiTypescript key="eighth" />,
        ],
    },
    {
        id: 4,
        name: "Food Swipe (VT Hacks X) - Web Application",
        description:
            "I created a restaurant discovery app similar to Tinder, which enables users to browse through local restaurants. The app utilizes the Google Places API to search for restaurants based on the user's location. Using Flutter, I developed a user interface that enables users to swipe right if they want more information about a particular restaurant.",
        link: "https://github.com/kmsungporant/food_swipe/",
        website: null,
        download: null,
        source: "portfolio/foodSwipe.png",
        icons: [<SiDart key="first" />, <SiFlutter key="second" />, <SiGooglemaps key="third" />],
    },
];
