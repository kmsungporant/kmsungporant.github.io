import SideInfo from "../components/sideInfo";
import Menu from "../components/menu";
import { useState } from "react";
import MenuIcon from "../components/menu/menuIcon";
import MainPage from "../components/mainPage";
import AboutPage from "../components/aboutPage";
import Header from "../components/menu/header";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="w-full h-full bg-dark-background dark:bg-light-background">
      <SideInfo />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MainPage />
      <AboutPage />
    </div>
  );
}
