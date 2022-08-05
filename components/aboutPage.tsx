import ImageLogo from "./about-page/image";
import SmallTitle from "./about-page/smallTitle";
import Title from "./about-page/title";

export default function AboutPage() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center h-3/5 bg-dark-background dark:bg-light-background md:flex-row font-Consolas"
    >
      <ImageLogo />
      <Title />
      <SmallTitle />
    </div>
  );
}
