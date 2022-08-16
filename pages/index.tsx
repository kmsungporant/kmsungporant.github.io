import Head from "next/head";
import { useState } from "react";
import AboutPage from "../components/aboutPage";
import Contacts from "../components/contactPage";
import Footer from "../components/footer";
import MainPage from "../components/mainPage";
import Menu from "../components/menu";
import Header from "../components/menu/header";
import PorfolioPage from "../components/portfolioPage";
import SideInfo from "../components/sideInfo";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="h-full bg-dark-background dark:bg-light-background font-Consolas">
      <Head>
        <title>MinsungK</title>
        <meta
          name="MinsungK"
          content="</> by Minsung using Next.JS and TailwindCSS"
        />
        <link rel="icon" href="/logo" />
      </Head>
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
