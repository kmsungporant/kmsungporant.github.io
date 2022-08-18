import ImageLogo from "./main-page/image";
import Title from "./main-page/title";

export default function MainPage() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center h-full pt-32 md:pt-0 lg:flex-row"
    >
      <ImageLogo />
      <Title />
    </div>
  );
}
