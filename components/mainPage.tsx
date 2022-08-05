import Title from "./main-page/title";
import ImageLogo from "./main-page/image";

export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full md:flex-row">
      <ImageLogo />
      <Title />
    </div>
  );
}
