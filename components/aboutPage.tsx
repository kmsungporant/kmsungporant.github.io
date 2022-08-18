import ImageLogo from "./about-page/image";
import SmallTitle from "./about-page/smallTitle";
import Title from "./about-page/title";

export default function AboutPage() {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-full bg-gray-800 dark:bg-light-background md:flex-row font-Consolas"
    >
      <ImageLogo />
      <Title />
      <SmallTitle />
    </div>
  );
}
