import { ReactNode } from "react";
import { SiDart, SiExpo, SiFirebase, SiFlutter, SiFramer, SiGithubactions, SiGooglemaps, SiLinux, SiMicrosoftazure, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscRemoteExplorer } from "react-icons/vsc";

export const Projects: {
    name: string;
    description: string;
    link: string;
    website: string;
    source: string;
    icons: ReactNode[];
}[] = [
    {
        name: "SimpliSplit - Mobile Application",
        description:
            "A fully functional iOS application that allows users to simply scan their receipts and easily split the bill. The app utilizes Mindee OCR API to extract the data from the receipt and React Native with Expo to create and design the UI/UX. The app published and available on the App Store.",
        link: "https://github.com/kmsungporant/SimpliSplit/",
        source: "portfolio/simpliSplit.gif",
        website: "https://www.simplisplit.com/",
        icons: [<SiReact key="first" />, <SiTailwindcss key="second" />, <SiTypescript key="fifth" />, <SiExpo key="sixth" />],
    },
    {
        name: "Personal Portfolio - Web Application",
        description:
            "A personal portfolio website using Next.js, Tailwind CSS, Framer Motion, TypeScript, and more. I utilized GitHub Actions for automatic building and deployment (CI/CD) of the most up-to-date webpage. The website is hosted on GitHub Pages and managed through Google Domains.",
        link: "https://github.com/kmsungporant/kmsungporant.github.io/",
        source: "portfolio/websiteVid.gif",
        website: "https://MinsungK.com/",
        icons: [<SiNextdotjs key="first" />, <SiReact key="second" />, <SiNodedotjs key="third" />, <SiTailwindcss key="fourth" />, <SiGithubactions key="fifth" />, <SiFramer key="sixth" />, <SiTypescript key="seventh" />],
    },
    {
        name: "Moon Bot - Discord Bot",
        description:
            "A Discord bot developed using Python and the Discord API, which is hosted on Azure through a Virtual Machine to ensure it runs 24/7 for a Discord server. The bot boasts a variety of features, including a YouTube music player, mini-games, shortcut commands, and more.",
        link: "https://github.com/kmsungporant/Moon-Bot/",
        source: "portfolio/discord.gif",
        website: null,
        icons: [<SiPython key="first" />, <SiMicrosoftazure key="second" />, <SiLinux key="third" />, <VscRemoteExplorer key="fourth" />],
    },
    {
        name: "Food Swipe [VT hacks X] - Web Application",
        description:
            "A web application that functions as a restaurant discovery app, similar to Tinder. It allows users to browse through local restaurants. The app utilizes the Google Places API to search for restaurants based on the user's location. The user interface enables users to swipe right if they want more information about a particular restaurant.",
        link: "https://github.com/kmsungporant/food_swipe/",
        source: "portfolio/foodSwipe.gif",
        website: null,
        icons: [<SiDart key="first" />, <SiFlutter key="second" />, <SiGooglemaps key="third" />],
    },
];
