import { ReactNode } from "react";
import {
  SiDart,
  SiFlutter,
  SiFramer,
  SiGithubactions,
  SiGooglemaps,
  SiLinux,
  SiMicrosoftazure,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscRemoteExplorer } from "react-icons/vsc";

export const Projects: {
  name: string;
  description: string;
  link: string;
  image: string;
  icons: ReactNode[];
}[] = [
  {
    name: "Personal Portfolio Website",
    description:
      "I created a personal portfolio website using Next.js, React.js, and TailwindCSS. The website is fully functional and hosted on GitHub Pages with a custom domain managed through Google Domains.",
    link: "https://github.com/kmsungporant/kmsungporant.github.io",
    image: "portfolio/websiteVid.gif",
    icons: [
      <SiNextdotjs key="first" />,
      <SiReact key="second" />,
      <SiNodedotjs key="third" />,
      <SiTailwindcss key="fourth" />,
      <SiGithubactions key="fifth" />,
      <SiFramer key="sixth" />,
      <SiTypescript key="seventh" />,
    ],
  },
  {
    name: "Discord [Moon] Bot",
    description:
      "I used Python and the Discord API to develop a Discord bot that is hosted on Azure using a Virtual Machine to ensure it runs 24/7 for a Discord server. The bot includes a variety of features, such as a music player for YouTube, mini games, shortcut commands, and more.",
    link: "https://github.com/kmsungporant/Moon-Bot",
    image: "portfolio/discord.gif",
    icons: [<SiPython key="first" />, <SiMicrosoftazure key="second" />, <SiLinux key="third" />, <VscRemoteExplorer key="fourth" />],
  },
  {
    name: "Video Uploader [In Progress]",
    description:
      "I developed a private web application that allows only members of a Discord server to upload videos to an Azure database. A Discord bot then retrieves the videos weekly and uploads the top 5 rated videos from the database to a designated Discord channel.",
    link: "https://github.com/kmsungporant/video_upload_web",
    image: "portfolio/videoUploader.gif",
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
    name: "Food Swipe (VT Hacks X)",
    description:
      "I created a restaurant discovery app similar to Tinder, which enables users to browse through local restaurants. The app utilizes the Google Places API to search for restaurants based on the user's location. Using Flutter, I developed a user interface that enables users to swipe right if they want more information about a particular restaurant.",
    link: "https://github.com/kmsungporant/food_swipe/",
    image: "portfolio/foodSwipe.png",
    icons: [<SiDart key="first" />, <SiFlutter key="second" />, <SiGooglemaps key="third" />],
  },
];
