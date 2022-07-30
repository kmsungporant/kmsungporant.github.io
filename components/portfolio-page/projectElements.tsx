const projects: { name: string; source: string; description: string }[] = [
  {
    name: "Discord Bot",
    source: "/discord.gif",
    description:
      "Developed a discord bot using python and Discord API and hosted via Azure using Virtual Machine to run 24/7 for a discord server Integrated various features forthe server: music playerfor YouTube, mini games, shortcut commands and more Moon Bot is still fully operational serving 40+ members in the discord server",
  },
  {
    name: "Personal Portfolio Website",
    source: "/portfolio.gif",
    description:
      "Developed a fully functional personal portfolio website for desktop using Next.js, React.js and TailwindCSS Hosted on GitHub Pages with the domain provided and managed on Google Domains Currently working on compatibility of different mobile devices",
  },
  {
    name: "Minecraft Server",
    source: "/server.gif",
    description:
      "Hosted and managed a Minecraft Server on Azure and Remote SSH Fully operational to this date with 10-16 player",
  },
];

export default function ProjectElements() {
  return (
    <div className="w-3/5 h-full">
      <div className="flex flex-col items-center justify-start h-full">
        {projects.map((project, i) => (
          <div key={i} className="h-full">
            <span className="text-white text-7xl">{project.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
