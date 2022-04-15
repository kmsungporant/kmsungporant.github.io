import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Menu from "../components/menu";
import Hero from "../components/main-page/hero";
import About from "../components/main-page/about";
import Portfolio from "../components/main-page/portfolio";
import Contacts from "../components/main-page/contacts";
import Sidebar from "../components/sidebar";
import MenuIcon from "../components/menuIcon";

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="h-full overflow-scroll bg-DarkGray/95 dark:bg-white font-Consolas snap-mandatory scroll-smooth snap-y">
      <Head>
        <title>MinsungK</title>
        <link rel="icon" href="/device.svg" />
      </Head>
      <Sidebar menuIsOpen={menuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <MenuIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <Hero />
      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}
