import Title from "./main-page/title";
import ImageLogo from "./main-page/image";

export default function MainPage() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center h-full lg:flex-row"
    >
      <ImageLogo />
      <Title />
    </div>
  );
}
