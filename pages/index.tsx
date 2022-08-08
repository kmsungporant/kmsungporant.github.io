import SideInfo from "../components/sideInfo";
import Menu from "../components/menu";
import { useState } from "react";
import MainPage from "../components/mainPage";
import AboutPage from "../components/aboutPage";
import Header from "../components/menu/header";
import PorfolioPage from "../components/portfolioPage";
import Contacts from "../components/contactPage";
import Footer from "../components/footer";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="h-full bg-dark-background dark:bg-light-background font-Consolas ">
      <SideInfo />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MainPage />
      <AboutPage />
      <PorfolioPage />
      <Contacts />
      <Footer />
    </div>
  );
}
